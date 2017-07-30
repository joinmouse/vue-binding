import Vue from 'vue'

var app = new Vue({
    el: '#app',
    data: {
        newTodo: '', 
        //todoList数组所有待办事项的容器
        todoList: []
    },
    created: function(){
        window.onbeforeunload = ()=>{
            let dataString = JSON.stringify(this.todoList)
            window.localStorage.setItem('myTodos',dataString)
        }

        let oldDataString = window.localStorage.getItem('myTodos')
        let oldData = JSON.parse(oldDataString)
        this.todoList = oldData || []
    },
    methods: {
        //添加待办
        addTodo: function(){
            this.todoList.push({
                title: this.newTodo,
                createdAt: new Date(),
                done: false   //添加一个done属性
            })
            this.newTodo=''  //将newTodo添加到todoList后清空
        },
        //删除待办
        removeTodo: function(todo){
            let index = this.todoList.indexOf(todo)
            this.todoList.splice(index,1)
        }
    }
})
