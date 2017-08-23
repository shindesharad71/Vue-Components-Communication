<template>
  <div>
    <app-nav></app-nav>
    <div class="text-center" style="margin-top: 40px;">
      <h1>Vue CC - Vue Components Communiation Methods</h1>
    </div>
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
