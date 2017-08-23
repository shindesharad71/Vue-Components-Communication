<template>                
    <p><strong>{{ myData }}</strong> => (initial value is 10)</p>
</template>

<script>
import { EventHub } from '../../main.js'

export default {
  name: 'sibling-one',
  data () {
      return {
        myData: 10
    }
  },
  created () {
    EventHub.$on('increase', () => {
         this.myData += 1;
    });
    EventHub.$on('decrease', () => {
         this.myData -= 1;
    });
    EventHub.$on('reset', () => {
         this.myData = 10;
    });
  }
}
</script>

<style scoped>
a:hover {
    text-decoration: underline;
}
</style>
