<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Food</span>
        <span class="font-weight-light">Recognition</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <v-container>
        <app-input @linkchanged="requestIngredients($event)"></app-input>
        <app-results :imageUrl="imageUrl"></app-results>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        imageUrl: ''
      }
    },
    methods: {
      requestIngredients(requestUrl) {
        this.imageUrl = requestUrl;
      }
    }
  }
</script>