<template>
  <div>
    <img v-bind:src="record.cover_src" style="width: 250px; height: 250px;">
    <h1>{{record.title}}</h1>
    <h2>{{record.artist}}</h2>
    <p>{{record.type}}</p>
    <ul v-if="record.tracks && record.tracks.length">
    <li v-for="track in record.tracks" v-bind:key="track._id">
      {{track.title}}
    </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Record',
  data() {
    return {
      record: {},
      errors: [],
    };
  },
  mounted() {
    console.log('created');
    this.fetchData();
  },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    fetchData() {
      const url = `http://localhost:8888/library/records/${this.$route.params.id}`;
      console.log(url);
      axios.get(url)
        .then((res) => {
          this.record = res.data;
        })
        .catch((err) => {
          this.errors.push(err);
        });
    },
  },
};
</script>

<style scoped>

</style>
