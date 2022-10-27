function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0s2bE7v_D/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

var Syllable_a = 0;


function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Syllable a - '+Syllable a+ ' Syllable a - '+Syllable a;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('result_image');

    if (results[0].label == "Syllable_a") {
      img.src = 'A.png';
      Syllable_a = Syllable_a+1;
    } 
    else{
      img.src = 'listen.gif';
    }
  }
}






//next part





      

camera = document.getElementById("camera");
      
Webcam.set({
  width:350,
  height:300,
  image_format : 'png',
  png_quality:90
});
Webcam.attach( '#camera' );
function take_snapshot()
{
  Webcam.snap(function(data_uri) {
      document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
  });
}

console.log('ml5 version:', ml5.version);

// Initialize the Image Classifier method with MobileNet
//classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JACkTMciY/model.json',modelLoaded);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gAFE2b2NL/model.json',modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}
    
function check()
{
  img = document.getElementById('selfie_image');
  classifier.classify(img, gotResult);
}


// A function to run when we get any errors and the results
function gotResult(error, result) {
// Display error in the console
if (error) {
  console.error(error);
} else {
  // The results are in an array ordered by confidence.
  console.log(result);
  document.getElementById("result_object_name").innerHTML = result[0].label;
  document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);
}
}

function back()
{
    window.location="index.html";
}

    

