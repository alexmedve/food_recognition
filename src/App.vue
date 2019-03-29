<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Food</span>
        <span class="font-weight-light">Recognition</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://clarifai.com/"
        target="_blank"
      >
        <span class="mr-2">Clarifai API</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container>
        <app-input ></app-input>
        <app-results></app-results>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      imageUrl: ''
    }
  }
}
</script>
