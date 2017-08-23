import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// import components for router
import Home from './components/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    base: '/',
    mode: 'hash',
    routes: [
        { path: '/', component: Home },
        { path: '*', redirect: '/' }
    ]
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})