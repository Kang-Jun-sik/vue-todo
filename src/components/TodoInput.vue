<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" @click="addTodo">
      <i class="fas fa-plus"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      newTodoItem: ""
    }
  },
  methods: {
    addTodo() {
      console.log(this.newTodoItem);
      if (this.newTodoItem !== '') {
        this.$emit('addTodoItem', this.newTodoItem); //하위에서 이벤트 발생됌
        this.clearInput();
        //저장 로직 수행
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  },
}
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
}
</style>