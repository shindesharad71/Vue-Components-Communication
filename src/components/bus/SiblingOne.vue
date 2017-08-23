<template>                
    <p><strong>{{ myData }}</strong> => (initial value is 10)</p>
</template>

<script>
import { EventHub } from '../../main'

export default {
  name: 'sibling-one',
  data () {
      return {
        myData: 10
    }
  },
  created () {
    EventHub.$on('increaseVal', () => {
         this.myData += 1;
    });
    EventHub.$on('decreaseVal', () => {
         this.myData -= 1;
    });
    EventHub.$on('resetVal', () => {
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
