<template>
    <v-container>
        <v-layout row wrap>
            <h1 @click="getIngredients">Test</h1>
        </v-layout>
    </v-container>
</template>

<script>
    import Clarifai from 'clarifai';
    const clarifaiApp = new Clarifai.App({
        apiKey: '3a7f9e4ec5474163bec285c80e4dc7ff'
    });
    export default {
        data() {
            return {
                ingredients: [],
                errors: []
            }
        },
        computed: {
            ingredients: () => {
                clarifaiApp.models.predict("bd367be194cf45149e75f01d59f77ba7",
                    "https://www.blondelish.com/wp-content/uploads/2017/08/1-1.jpg").then(
                    function (response) {
                        this.ingredients = response.outputs[0].data.concepts;
                    },
                    function (err) {
                        this.errors.push(err);
                    }
                );
            }
        }
    }
</script>

<style scoped>

</style>