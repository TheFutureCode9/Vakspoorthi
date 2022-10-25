function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0s2bE7v_D/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

var Syllable a = 0;
var Syllable b = 0;
var Syllable c = 0;
var Syllable d = 0;
var Syllable e = 0;
var Syllable f = 0;
var Syllable g = 0;
var Syllable h = 0;
var Syllable i = 0;
var Syllable j = 0;
var Syllable k = 0;
var Syllable l = 0;
var Syllable m = 0;
var Syllable n = 0;
var Syllable o = 0;
var Syllable p = 0;
var Syllable q = 0;
var Syllable r = 0;
var Syllable s = 0;
var Syllable t = 0;
var Syllable u = 0;
var Syllable v = 0;
var Syllable w = 0;
var Syllable x = 0;
var Syllable y = 0;
var Syllable z = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Syllable a") {
      img.src = 'A.png';
      Syllable a = Syllable a+1;
    } else if (results[0].label == "Syllable b") {
      img.src = 'B.png';
      Syllable b = Syllable b + 1;
    } 
    else if (results[0].label == "Syllable c") {
        img.src = 'C.png';
        Syllable c = Syllable c + 1;
      }
      else if (results[0].label == "Syllable d") {
        img.src = 'D.png';
        Syllable d = Syllable d + 1;
      }
      else if (results[0].label == "Syllable e") {
        img.src = 'E.png';
        Syllable e = Syllable e + 1;
      }
      else if (results[0].label == "Syllable e") {
        img.src = 'E.png';
        Syllable e = Syllable e + 1;
      }
      else if (results[0].label == "Syllable f") {
        img.src = 'F.png';
        Syllable f = Syllable f + 1;
      }
      else if (results[0].label == "Syllable g") {
        img.src = 'G.png';
        Syllable g = Syllable g + 1;
      }
      else if (results[0].label == "Syllable h") {
        img.src = 'H.png';
        Syllable h = Syllable h + 1;
      }
      else if (results[0].label == "Syllable i") {
        img.src = 'I.png';
        Syllable i = Syllable i + 1;
      }
      else if (results[0].label == "Syllable j") {
        img.src = 'J.png';
        Syllable j = Syllable j + 1;
      }
      else if (results[0].label == "Syllable k") {
        img.src = 'K.png';
        Syllable k = Syllable k + 1;
      }
      else if (results[0].label == "Syllable l") {
        img.src = 'L.png';
        Syllable l = Syllable l + 1;
      }
      else if (results[0].label == "Syllable m") {
        img.src = 'M.png';
        Syllable m = Syllable m + 1;
      }
      else if (results[0].label == "Syllable n") {
        img.src = 'N.png';
        Syllable n = Syllable n + 1;
      }
      else if (results[0].label == "Syllable o") {
        img.src = 'O.png';
        Syllable o = Syllable o + 1;
      }
      else if (results[0].label == "Syllable p") {
        img.src = 'P.png';
        Syllable p = Syllable p + 1;
      }
      else if (results[0].label == "Syllable q") {
        img.src = 'Q.png';
        Syllable q = Syllable q + 1;
      }
      else if (results[0].label == "Syllable r") {
        img.src = 'R.png';
        Syllable r = Syllable r + 1;
      }
      else if (results[0].label == "Syllable s") {
        img.src = 'S.png';
        Syllable s = Syllable s + 1;
      }
      else if (results[0].label == "Syllable t") {
        img.src = 'T.png';
        Syllable t = Syllable t + 1;
      }
      else if (results[0].label == "Syllable u") {
        img.src = 'U.png';
        Syllable u = Syllable u + 1;
      }
      else if (results[0].label == "Syllable v") {
        img.src = 'V.png';
        Syllable v = Syllable v + 1;
      }
      else if (results[0].label == "Syllable w") {
        img.src = 'W.png';
        Syllable w = Syllable w + 1;
      }
      else if (results[0].label == "Syllable x") {
        img.src = 'X.png';
        Syllable x = Syllable x + 1;
      }
      else if (results[0].label == "Syllable y") {
        img.src = 'Y.png';
        Syllable y = Syllable y + 1;
      }
      else if (results[0].label == "Syllable z") {
        img.src = 'Z.png';
        Syllable z = Syllable z + 1;
      }
    else{
      img.src = 'listen.gif';
    }
  }
}






//next part





      
Webcam.attach( '#camera' );

camera = document.getElementById("camera");
      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
  // Initialize the Image Classifier method with MobileNet
//classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JACkTMciY/model.json',modelLoaded);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3p1zcmVdQ/model.json',modelLoaded);

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
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}
