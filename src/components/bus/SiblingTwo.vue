<template>
<div>
    <button type="button" class="btn btn-success" @click="increase">Increase</button>
    <button type="button" class="btn btn-warning" @click="decrease">Decrease</button>
    <button type="button" class="btn btn-info" @click="reset">Reset</button>
</div>
</template>

<script>
import { EventHub } from '../../main'

export default {
  name: 'sibling-two',
  methods: {
      increase() {
        EventHub.$emit('increaseVal');
      },
      decrease() {
        EventHub.$emit('decreaseVal');
      },
      reset() {
        EventHub.$emit('resetVal');
      }
  }
}
</script>
