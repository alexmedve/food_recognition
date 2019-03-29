<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 class="pa-2">
                <v-text-field v-model="imageUrl" label="Put your delicious food image link here" hint="Supported image formats: JPG, PNG, TIFF, and BMP" required></v-text-field>
            </v-flex>
            <v-flex xs12 class="pa-2" v-if="imageUrl">
                <v-img :src="imageUrl" contain></v-img>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                erros: [],
                imageUrl: ''
            }
        }
    }
</script>

<style scoped>
</style>