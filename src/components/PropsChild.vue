<template>
<div>
    <p class="card-text"> {{ parentData }} </p>
</div>
</template>

<script>
export default {
  name: 'propschild',
  props: ['parentData']
}
</script>
