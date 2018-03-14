<template>
  <b-list-group v-if="genres && genres.length"
                deck>
    <b-list-group-item v-for="genre of genres" v-bind:key="genre.genre_id"
            tag="artist"
            class="mb-2">
      <p class="card-text">
        <b-link :to="{ name: 'Genre' , params: { id: genre.genre_id }}">
          <h1>{{genre.name}}</h1>
        </b-link>
      </p>
    </b-list-group-item>

  </b-list-group>
</template>

<script>
import * as actionTypes from './../store/action-types';

export default {
  name: 'Genres',
  computed: {
    genres() {
      return this.$store.getters.getGenreList;
    },
  },
  created() {
    this.$store.dispatch(actionTypes.LOAD_ALL_GENRES);
  },
};
</script>

<style scoped>

</style>
