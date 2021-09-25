<template>
  <div>
    <ul>
      <li v-for="(todoItem,index) in todoItems" :key="todoItem.item" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}"
           v-on:click="toogleComplete(todoItem,index)"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" @click="removeTodo(todoItem,index)">
        <i class="fas fa-trash"></i>
      </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    removeTodo(todoItem, index) {
      console.log(todoItem, index);

      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toogleComplete(todoItem, index) {
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
      console.log(index);
    }
  },
  created() {
    //인스턴스가 생성되자 마자 호출
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server')
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        //this.todoItems.push(localStorage.key(i));
      }
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}

</style>