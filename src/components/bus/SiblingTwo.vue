<template>
<div>
    <button type="button" class="btn btn-success" @click="EventHub.$emit('increase')">Increase</button>
    <button type="button" class="btn btn-warning" @click="EventHub.$emit('decrease')">Decrease</button>
    <button type="button" class="btn btn-info" @click="EventHub.$emit('reset')">Reset</button>
</div>
</template>

<script>
import { EventHub } from '../../main.js'

export default {
  name: 'sibling-two'
}
</script>
