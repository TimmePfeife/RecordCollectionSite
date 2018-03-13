<template>
  <div>
    <img v-bind:src="record.cover_src" style="width: 250px; height: 250px;">
    <h1>{{record.title}}</h1>
    <h2>{{record.artist}}</h2>
    <p>{{record.type}}</p>
    <ul v-if="record.tracks && record.tracks.length">
      <b-table striped :items="record.tracks" :fields="fields"></b-table>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Record',
  data() {
    return {
      fields: ['number', 'title'],
    };
  },
  computed: {
    record() {
      return this.$store.getters.getRecord;
    },
  },
  watch: {
    '$route.params.id': () => {
      this.$store.dispatch('LOAD_RECORD', this.$route.params.id);
    },
  },
  created() {
    return this.$store.dispatch('LOAD_RECORD', this.$route.params.id);
  },
};
</script>

<style scoped>
</style>
