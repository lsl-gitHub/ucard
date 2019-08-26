import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/pages/User'
import admin from '@/pages/admin'
import Income from '@/pages/Income'
import Merchants from '@/pages/Merchants'
import Message from '@/pages/Message'
import Reward_query from '@/pages/Reward_query'
import Cartgrory from '../pages/cartgrory/Cartgrory'
import CartgroryOdd from '../pages/cartgrory/CartgroryOdd'
import CartgroryTools from '../pages/cartgrory/CartgroryTools'
import CartgroryWuliao from '../pages/cartgrory/CartgroryWuliao'
import CartgroryPirce from '../pages/cartgrory/CartgroryPirce'
import CartgroryList from '../pages/cartgrory/CartgroryList'
import Pay from '../pages/Pay'
import Mine from '../pages/Mine'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/user',
            name: 'User',
            component: User,
            meta: '登陆'
        },
        {
            path: '/admin',
            name: 'admin',
            component: admin,
            meta: '主页'
        },
        {
            path: '/income',
            name: 'Income',
            component: Income,
            meta: '收益'
        },
        {
            path: '/merchants',
            name: 'Merchants',
            component: Merchants,
            meta: '商户扩展'
        },

        {
            path: '/message',
            name: 'Message',
            component: Message,
            meta: '消息'
        },
        { path: "/mine", component: Mine, meta: "订单 ", name: 'Mine' },
        {
            path: '/reward_query',
            name: 'Reward_query',
            component: Reward_query,
            meta: '奖励查询'
        },

        { path: "/category-list", component: CartgroryList, meta: "商品详情 ", name: 'CartgroryList' },
        { path: "/pay", component: Pay, meta: "订单 ", name: 'Pay' },

        {
            path: '/cartgrory',
            name: 'Cartgrory',
            component: Cartgrory,
            redirect: "/cartgrory/cartgrory-odd",
            meta: '商品分类',
            children: [
                { path: "/cartgrory-odd", component: CartgroryOdd, meta: "全部", name: 'CartgroryOdd', },
                { path: "/cartgrory-tools", component: CartgroryTools, meta: "机具", name: 'CartgroryTools' },
                // { path: "/category_pirce", component: CartgroryPirce, meta: "价格 ", name: 'CartgroryPirce' },
                { path: "/cartgrory-wuliao", component: CartgroryWuliao, meta: "物料", name: 'CartgroryWuliao' },
                { path: "/category-pirce", component: CartgroryPirce, meta: "价格 ", name: 'CartgroryPirce' },
            ]
        },

    ]
})