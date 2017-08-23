import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// import components for router
import Home from './components/Home.vue'
import Props from './components/Props.vue'
import CustomEvents from './components/CustomEvents.vue'
import EventBus from './components/bus/EventBus.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    base: '/',
    mode: 'hash',
    routes: [
        { path: '/', component: Home },
        { path: '*', redirect: '/' },
        { path: '/props', component: Props },
        { path: '/custom-events', component: CustomEvents },
        { path: '/event-bus', component: EventBus }
    ]
})

export const EventHub = new Vue(); // For Event Bus Instance

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})