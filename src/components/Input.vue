<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 class="pa-2">
                <v-text-field v-model="imageUrlInput" label="Put your delicious food image link here"
                    hint="Supported image formats: JPG, PNG, TIFF, and BMP" required></v-text-field>
            </v-flex>
            <v-flex xs12 class="pa-2">
                <v-btn block @click="getImageUrl">
                    GO
                </v-btn>
            </v-flex>
            <v-flex xs12 class="pa-2">
                <v-btn block @click="deleteImageUrl">
                    CLEAR
                </v-btn>
            </v-flex>
            <v-flex xs12 class="pa-2" v-if="imageUrl">
                <v-img :src="imageUrl" contain style="height: 200px"></v-img>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                erros: [],
                imageUrlInput: '',
                imageUrl: ''
            }
        },
        methods: {
            getImageUrl() {
                this.imageUrl = this.imageUrlInput;
                var link = this.imageUrl;
                this.$emit('linkchanged', link);
            },
            deleteImageUrl() {
                this.imageUrlInput = '';
                this.imageUrl = '';
                var link = '';
                this.$emit('linkdeleted', link);
            }
        }
    }
</script>