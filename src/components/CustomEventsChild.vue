<template>
<div>
    <button type="button" class="btn btn-success" @click="$emit('increase')">Increase</button>
    <button type="button" class="btn btn-warning" @click="$emit('decrease')">Decrease</button>
    <button type="button" class="btn btn-info" @click="$emit('reset')">Reset</button>
</div>
</template>

<script>
export default {
  name: 'custom-events-child'
}
</script>
