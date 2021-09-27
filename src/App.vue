<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <!--<TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 명"></TodoInput>-->
    <TodoList v-bind:propsedata="todoItems"
              v-on:removeItem="removeOneItem"
              v-on:toggleItem="toggleOneItem">
    </TodoList>
    <!--<TodoList v-bind:내려보낼속성></TodoList>-->
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>

import TodoHeader from "@/components/TodoHeader";
import TodoList from "@/components/TodoList";
import TodoFooter from "@/components/TodoFooter";
import TodoInput from "@/components/TodoInput";

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
    TodoInput
  },
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem(todoItem) {
      const obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj)); //LocalStorage Store시 Stringfy로 처리
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem, index) {
      //todoItem.completed = !todoItem.completed;
      this.todoItems[index].completed = !this.todoItems[index].completed; //컴포넌트 간의 경계를 명확하게...
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
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
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}

</style>
