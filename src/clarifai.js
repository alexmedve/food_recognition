import Clarifai from 'clarifai'

const clarifaiApp = new Clarifai.App({
    apiKey: '3a7f9e4ec5474163bec285c80e4dc7ff'
});

clarifaiApp.models.predict("bd367be194cf45149e75f01d59f77ba7", "https://images-gmi-pmc.edge-generalmills.com/f4c0a86f-b080-45cd-a8a7-06b63cdb4671.jpg").then(
    function (response) {
        var ingredients = response.outputs[0].data.concepts;
        console.log(ingredients);
    },
    function (err) {
        console.log(err);
    }
);