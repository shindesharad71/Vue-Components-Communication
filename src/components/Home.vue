<template>
<div>
    <div class="text-center" style="margin-top: 40px;">
      <h1>Vue CC - Vue Components Communiation Methods</h1>
    </div>
    <div class="container" style="margin-top: 40px;">
        <div class="row">
            <div class="col-sm-3">
                <router-link to="/props" tag="a">
                    <div class="card border-info mb-3">
                        <div class="card-body">
                            <h4 class="card-title">Props</h4>
                            <h6 class="card-subtitle mb-2 text-muted">Parent => Child</h6>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-sm-3">
                <router-link to="/custom-events" tag="a">
                    <div class="card border-info mb-3">
                        <div class="card-body">
                            <h4 class="card-title">Custom Events</h4>
                            <h6 class="card-subtitle mb-2 text-muted">Child => Parent</h6>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-sm-3">
                <router-link to="/event-bus" tag="a">
                    <div class="card border-info mb-3">
                        <div class="card-body">
                            <h4 class="card-title">Event Bus</h4>
                            <h6 class="card-subtitle mb-2 text-muted">Sibling Components</h6>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'home'
}
</script>
