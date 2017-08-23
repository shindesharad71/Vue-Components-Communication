<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="height: 70px;">
    <router-link to="/" tag="a" class="navbar-brand">Vue CC</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link active-class="active" class="nav-link" tag="a" to="/props">Parent => Child</router-link>
            </li>
            <li class="nav-item">
                <router-link active-class="active" class="nav-link" tag="a" to="/custom-events">Child => Parent</router-link>
            </li>
            <li class="nav-item">
                <router-link active-class="active" class="nav-link" tag="a" to="/event-bus">Siblings <=> Siblings</router-link>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {
  name: 'nav'
}
</script>
