<template>
<div class="container">
    <h1 class="text-center">Sibling Components Communication With <strong>Event Bus</strong></h1>
    <div class="row" style="margin-top: 20px;">
        <div class="col-md-6">
            <div class="card">
                <h4 class="card-header">Example</h4>
                <div class="card-body">
                    <h4 class="card-title text-primary">Component - One</h4>
                    <sibling-one></sibling-one>
                    <hr>
                    <h4 class="card-title text-info">Component - Two</h4>
                    <sibling-two></sibling-two>
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
import SiblingOne from './SiblingOne.vue'
import SiblingTwo from './SiblingTwo.vue'

export default {
  name: 'event-bus',
  components: {
      'sibling-one': SiblingOne,
      'sibling-two': SiblingTwo
  }
}
</script>

<style scoped>
a:hover {
    text-decoration: underline;
}
</style>
