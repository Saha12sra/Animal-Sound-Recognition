function startClassification() {

navigator.mediaDevices.getUserMedia({audio: true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0we8ibcCp/model.json', modelReady);

}
function modelReady(){

    classifier.classify(gotResults);
    
}


function gotResults(error, results) {

    if (error) {
        console.error(error);
    } 
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear- ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy- ' + (results[0].confidence * 100).toFixed(2) + ' %';
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        imgcat = document.getElementById("cat");
        imgduck = document.getElementById("duck");
        imgdog = document.getElementById("dog");
        imgcow = document.getElementById("cow");

        if (results[0].label == "meowing") {
            document.getElementById("cat").style.display="block";
            document.getElementById("duck").style.display="none";
            document.getElementById("dog").style.display="none";
            document.getElementById("cow").style.display="none";
            document.getElementById("fifth").style.display="none";

        } 
        else if (results[0].label == "quacking") {
            document.getElementById("cat").style.display="none";
            document.getElementById("duck").style.display="block";
            document.getElementById("dog").style.display="none";
            document.getElementById("cow").style.display="none";
            document.getElementById("fifth").style.display="none";

        } 
        else if (results[0].label == "barking") {
            document.getElementById("cat").style.display="none";
            document.getElementById("duck").style.display="none";
            document.getElementById("dog").style.display="block";
            document.getElementById("cow").style.display="none";
            document.getElementById("fifth").style.display="none";
        } 
        else if (results[0].label == "mooing") {
            document.getElementById("cat").style.display="none";
            document.getElementById("duck").style.display="none";
            document.getElementById("dog").style.display="none";
            document.getElementById("cow").style.display="block";
            document.getElementById("fifth").style.display="none";
        }
        else if (results[0].label == "Background Noise"){
        document.getElementById("fifth").style.display="block";
        document.getElementById("cat").style.display="none";
        document.getElementById("duck").style.display="none";
        document.getElementById("dog").style.display="none";
        document.getElementById("cow").style.display="none";
        }
    }

}