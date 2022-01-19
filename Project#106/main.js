function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sMZxMA9xK/model.json' , modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    console.log('got result');

    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);

        randomnumber_r = Math.floor(Math.random()*255)+ 1;
        randomnumber_g = Math.floor(Math.random()* 255) + 1;
        randomnumber_b = Math.floor(Math.random()* 255) + 1;

        document.getElementById("I_can_hear").innerHTML = 'I can hear- ' + results[0].label;
        document.getElementById("accuracy").innerHTML = 'Accuracy- ' + (results[0].confidence*100).toFixed(2) + "%"; 
        document.getElementById("I_can_hear").style.color = "rgb(" + randomnumber_r + "," + randomnumber_g + "," + randomnumber_b + ")";
        document.getElementById("accuracy").style.color = "rgb(" + randomnumber_r + "," + randomnumber_g + "," + randomnumber_b + ")";


        if( results[0].label == "Background Noise" )
        {
            image_gif1.src = 'bg_noise.png';

        }
        else if( results[0].label == "Cats" )
        {
            image_gif1.src = 'cat.png';
        }
        else if( results[0].label == "Dogs" )
        {
            image_gif1.src = 'dog.png';   
        }
        else if( results[0].label == "Dolphins")
        {
            image_gif1.src = 'dolphin.png';
        }
        else
        {
            image_gif1.src = 'tiger.png' ;  
        }
    }
}

}
