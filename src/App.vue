<template>
  <div>
    <app-nav></app-nav>
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
a, a:hover {
  text-decoration: none;
  color: #000;
}

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
