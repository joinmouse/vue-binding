## vue-demo

说明：有关vue核心双向绑定的demo和一些验证

- v-model.html: 双向绑定的demo
- v-bind.html: 用单向绑定+UI监听实现双向绑定

> test: 双向绑定的验证(data<===>view)
1、用户更改input.value时，data.message就会变成一样的值
2、只要data.message的值被JS改变，input.value就会变成一样的值

- test-input-change.html：改变input值，通过setInterval监听data变化
- test-data-change.html：改变data的值，观察view上input值变化

