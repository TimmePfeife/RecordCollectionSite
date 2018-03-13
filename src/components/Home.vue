<template>
  <b-card-group v-if="records && records.length"
                deck>
      <b-card v-for="record of records" v-bind:key="record.record_id"
              :img-src="record.cover_src"
              img-alt="Image"
              img-top
              tag="record"
              class="mb-2"
              style="width: 250px; height: 250px;">
        <p class="card-text">
          <b-link :to="{name: 'Record', params: {id: record.record_id}}">
            <h1>{{record.title}}</h1>
          </b-link>
        <h2> {{record.artist}} </h2>
        </p>
      </b-card>
  </b-card-group>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    records() {
      return this.$store.getters.getRecordList;
    },
  },
  created() {
    this.$store.dispatch('LOAD_RECORDS');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
