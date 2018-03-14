<template>
  <div>
    <h1>{{genre.name}}</h1>
    <h2>{{genre.description}}</h2>

    <b-card-group v-if="genre.records && genre.records.length"
                  deck>
      <b-card v-for="record of genre.records" v-bind:key="record.record_id"
              :img-src="record.cover_src"
              img-alt="Image"
              img-top
              tag="record"
              class="mb-2"
              style="width: 250px; height: 250px;">
        <p class="card-text">
          <b-link :to="{ name: 'Record', params: { id: record._id }}">
            <h1>{{record.title}}</h1>
          </b-link>
        <h2> {{record.artist}} </h2>
        </p>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import * as actionTypes from './../store/action-types';

export default {
  name: 'Genre',
  computed: {
    genre() {
      return this.$store.getters.getGenre;
    },
  },
  watch: {
    '$route.params.id': () => {
      this.$store.dispatch(actionTypes.LOAD_GENRE, this.$route.params.id);
    },
  },
  created() {
    this.$store.dispatch(actionTypes.LOAD_GENRE, this.$route.params.id);
  },
};
</script>

<style scoped>

</style>
