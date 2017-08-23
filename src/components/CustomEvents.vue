<template>
<div class="container">
    <h1 class="text-center">Child To Parent Using Custom Events <strong>$emit('event-name')</strong></h1>
    <div class="row" style="margin-top: 20px;">
        <div class="col-md-6">
            <div class="card">
                <h4 class="card-header">Example</h4>
                <div class="card-body">
                    <h4 class="card-title text-primary">Data Sent From Child</h4>
                    <custom-events-child @increase="increase" @decrease="decrease" @reset="reset"></custom-events-child>
                    <hr>
                    <h4 class="card-title text-info">To Parent</h4>
                    <p> <strong>{{ myData }}</strong> => (initial value is 10)</p>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
                <h4 class="card-header">Code</h4>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <a href="https://github.com/shindesharad71/Vue-Components-Communication/blob/master/src/components/CustomEvents.vue" target="_blank"><li class="list-group-item">Parent Custom Events Component</li></a>
                        <a href="https://github.com/shindesharad71/Vue-Components-Communication/blob/master/src/components/CustomEventsChild.vue" target="_blank"><li class="list-group-item">Child Custom Events Component</li></a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import CustomEventsChild from './CustomEventsChild.vue'

export default {
  name: 'custom-events',
  components: {
    'custom-events-child': CustomEventsChild
  },
  data () {
      return {
        myData: 10
    }
  },
  methods: {
    decrease() {
        this.myData -= 1;
    },
    increase() {
        this.myData += 1;
    },
    reset() {
        this.myData = 10;
    }
    }
}
</script>

<style scoped>
a:hover {
    text-decoration: underline;
}
</style>
