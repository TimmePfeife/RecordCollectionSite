<template>
  <ul v-if="records && records.length">
    <li v-for="record of records" v-bind:key="record._id">
      <img v-bind:src="record.cover_src" style="width: 250px; height: 250px;">
      <router-link :to="{name: 'Record', params: {id: record.record_id}}">
        <h1>{{record.title}}</h1>
      </router-link>
      <h2> {{record.artist}} </h2>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      records: [],
      errors: [],
      msg: 'Welcome to Your Vue.js App',
    };
  },
  mounted() {
    console.log('INDEX');
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('http://localhost:8888/library/records')
        .then((res) => {
          this.records = res.data;
        })
        .catch((err) => {
          this.errors.push(err);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
