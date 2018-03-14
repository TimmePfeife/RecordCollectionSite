<template>
  <div id="app">
    <!-- Navigationsbar -->
    <b-nav tabs fill>
      <b-nav-item :to="{ name: 'Artists' }">Artists</b-nav-item>
      <b-nav-item :to="{ name: 'Genres' }">Genres</b-nav-item>
      <b-nav-item :to="{ name: 'Records' }">Records</b-nav-item>
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
