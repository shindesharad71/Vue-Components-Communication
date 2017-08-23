<template>
  <div>
    <app-nav></app-nav>
    <div class="text-center" style="margin-top: 40px;">
      <h1>Vue CC - Vue Components Communiation Methods</h1>
    </div>
    <transition name="fade" mode="out-in">
      <router-view class="set-margin"></router-view>
    </transition>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'app',
  components: {
    'app-nav': Nav
  }
}
</script>

<style>
.set-margin {
  margin: 40px auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
