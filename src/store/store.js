import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); //use -> vue의 플러그인 기능임, vue의 Global 기능을 추가할 때 쓰는 방식 --> this.$store 이런식으로 접근이 가능하게 된다.

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server')
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
        return arr;
    }
}

export const store = new Vuex.Store({
    state: {
        headerText: 'TODO it',
        todoItems: storage.fetch()
    },
    //mutation에서 state를 접근하는 방법은 ==> parameter로 state로 받아서 추가합니다.
    mutations: {
        addOneItem(state, payload) {
            const obj = {completed: false, item: payload};
            localStorage.setItem(payload, JSON.stringify(obj)); //LocalStorage Store시 Stringfy로 처리
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggleOneItem(state, payload) {
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed; //컴포넌트 간의 경계를 명확하게...
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        }
    }

});

// removeOneItem(todoItem, index) {
//     localStorage.removeItem(todoItem.item);
//     this.todoItems.splice(index, 1);
// },


//Vuex 기술요소
/**
 * state : 여러 컴포넌트에 공유되는 데이터 data
 * getters : 연산된 state 값을 접근하는 속성 computed / state 값을 접근하는 속성이자 computed() 처럼 미리 연산된 값을 접근하는 속성
 * mutations : state 값을 변경하는 이벤트 로직 methods
 * actions : 비동기 처리 로직을 선언하는 메서드 async methods
 */