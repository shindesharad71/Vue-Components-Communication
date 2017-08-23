<template>
<div>
    <div class="text-center" style="margin-top: 40px;">
      <h1>Vue CC - Vue Components Communiation Methods</h1>
    </div>
    <div class="container" style="margin-top: 40px;">
        <div class="row">
            <router-link to="/props" tag="a">
                <div class="card border-info mb-3" style="width: 15rem;">
                    <div class="card-body">
                        <h4 class="card-title">Props</h4>
                        <h6 class="card-subtitle mb-2 text-muted">Using Props</h6>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'home'
}
</script>
