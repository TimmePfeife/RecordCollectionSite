<template>
  <div>
    <img v-bind:src="record.cover_src" style="width: 250px; height: 250px;">
    <h1>{{record.title}}</h1>
    <h2>{{record.artist}}</h2>
    <b-link :to="{name: 'Genre', params: { id: record.genre_id._id }}">
      <p>{{record.genre_id.name}}</p>
    </b-link>
    <p>{{record.type}}</p>
    <ul v-if="record.tracks && record.tracks.length">
      <b-table striped :items="record.tracks" :fields="fields"></b-table>
    </ul>
  </div>
</template>

<script>
import * as actionTypes from './../store/action-types';

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
      this.$store.dispatch(actionTypes.LOAD_RECORD, this.$route.params.id);
    },
  },
  created() {
    this.$store.dispatch(actionTypes.LOAD_RECORD, this.$route.params.id);
  },
};
</script>

<style scoped>
</style>
