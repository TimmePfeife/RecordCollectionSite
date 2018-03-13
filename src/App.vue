<template>
  <div id="app">
    <!-- Navigationsbar -->
    <b-nav tabs fill>
      <b-nav-item :to="{ name: 'Home' }">Records</b-nav-item>
      <b-nav-item>Artists</b-nav-item>
      <b-nav-item>Genres</b-nav-item>
    </b-nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
</style>
