var myPix = new Array("rock.png","paper.png","scissors.png");
var win = 0;
var lose = 0;
var equal = 0;

function choosePicRock() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("randomImage").src = myPix[randomNum];

     var randomPic = myPix[randomNum];
     var selectPic = "rock.png";
     
    if(randomPic == selectPic)
    {
        document.getElementById("result").innerHTML = "Döntetlen!";
        equal++;
        document.getElementById("dontetlen").innerHTML="Döntetlen(" + equal + ")";
    }
    else if(randomPic == "scissors.png")
    {
        document.getElementById("result").innerHTML = "Nyertél!";
        win++;
        document.getElementById("nyert").innerHTML="Nyert(" + win + ")";
    }
    else
    {
        document.getElementById("result").innerHTML = "Vesztettél!";
        lose++;
        document.getElementById("vesztett").innerHTML="Vesztett(" + lose + ")";
    }
     
}

function choosePicPaper() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("randomImage").src = myPix[randomNum];

    var randomPic = myPix[randomNum];
    var selectPic = "paper.png";

    if(randomPic == selectPic)
    {
        document.getElementById("result").innerHTML = "Döntetlen!";
        equal++;
        document.getElementById("dontetlen").innerHTML="Döntetlen(" + equal + ")";
        
    }
    else if(randomPic == "rock.png")
    {
        document.getElementById("result").innerHTML = "Nyertél!";
        win++;
        document.getElementById("nyert").innerHTML="Nyert(" + win + ")";
    }
    else
    {
        document.getElementById("result").innerHTML = "Vesztettél!";
        lose++;
        document.getElementById("vesztett").innerHTML="Vesztett(" + lose + ")";
    }
    
    
}

function choosePicScissors() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("randomImage").src = myPix[randomNum];

    var randomPic = myPix[randomNum];
    var selectPic = "scissors.png";

    if(randomPic == selectPic)
    {
        document.getElementById("result").innerHTML = "Döntetlen!";
        equal++;
        document.getElementById("dontetlen").innerHTML="Döntetlen(" + equal + ")";
    }
    else if(randomPic == "paper.png")
    {
        document.getElementById("result").innerHTML = "Nyertél!";
        win++;
        document.getElementById("nyert").innerHTML="Nyert(" + win + ")";
    }
    else
    {
        document.getElementById("result").innerHTML = "Vesztettél!";
        lose++;
        document.getElementById("vesztett").innerHTML="Vesztett(" + lose + ")";
    }
    
    
}

function reload()
{
    document.getElementById("result").innerHTML = "";
    document.getElementById("randomImage").src = "transparent.png";
}