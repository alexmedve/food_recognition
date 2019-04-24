<template>
    <v-container>
        <v-layout row wrap>
            <h1>Ingredients</h1>
        </v-layout>
        <div v-if="ingredients.length > 0" >
            <ul collection>
                <li v-for="(ingredient, index) in ingredients" :key="index" collection-item>
                    {{ingredient.name}} | chance: {{ingredient.value}}
                </li>
            </ul>
        </div>
    </v-container>
</template>

<script>
    import Clarifai from 'clarifai';
    const clarifaiApp = new Clarifai.App({
        apiKey: '3a7f9e4ec5474163bec285c80e4dc7ff'
    });
    export default {
        props: ['imageUrl'],
        data() {
            return {
                ingredients: [],
                errors: [],
            }
        },
        watch: {
            imageUrl: function (newImageUrl) {
                clarifaiApp.models.predict("bd367be194cf45149e75f01d59f77ba7",
                    newImageUrl).then(
                    (response) => {
                        this.ingredients = response.outputs[0].data.concepts;
                    },
                    (err) => {
                        this.errors.push(err);
                    }
                );
            }
        }
    }
</script>

<style scoped>

</style>