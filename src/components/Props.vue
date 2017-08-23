<template>
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <h4 class="card-header">Example</h4>
                <div class="card-body">
                    <h4 class="card-title text-info">Data Sent From Parent</h4>
                    <input type="text" class="form-control" v-model="sentToChild" placeholder="enter text">
                    <hr>
                    <h4 class="card-title text-info">To Child</h4>
                    <props-child :parentData="sentToChild"></props-child>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
                <h4 class="card-header">Code</h4>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <a href="https://github.com/shindesharad71/Vue-Components-Communication/blob/master/src/components/Props.vue" target="_blank"><li class="list-group-item">Parent Component</li></a>
                        <li class="list-group-item">Child Component</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import PropsChild from './PropsChild.vue'

export default {
  name: 'props',
  components: {
    'props-child': PropsChild
  },
  data () {
      return {
          sentToChild: ''
      }
  }
}
</script>
