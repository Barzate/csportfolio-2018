var songchanger = document.getElementById("songchanger");
var pausebutton = document.getElementById("pausebutton");
var playbutton = document.getElementById("playbutton");

var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");
var audio4 = document.getElementById("audio4");

pausebutton.addEventListener("click", pauseFunction);
playbutton.addEventListener("click",playFunction);

function pauseFunction() {
    var buff = songchanger.value;
    if(buff == ("Warren G-Regulate"))
    {
    audio1.pause();
    }
    if(buff == ("Too Short-Gettin it"))
    {
    audio3.pause();
    }
    if(buff == ("The Notorious Big-Big Poppa"))
    {
    audio2.pause();
    }
    if(buff == ("Lil Troy-Wanna be a baller"))
    {
    audio4.pause();
    }
}
function playFunction(){
    var buff = songchanger.value;
    if(buff == ("Warren G-Regulate"))
    {
    audio1.play();
    }

    if(buff == ("Warren G-Regulate"))
    {
    audio1.play();
    }
    if(buff == ("Too Short-Gettin it"))
    {
    audio3.play();
    }
    if(buff == ("The Notorious Big-Big Poppa"))
    {
    audio2.play();
    }
    if(buff == ("Lil Troy-Wanna be a baller"))
    {
    audio4.play();
    }
}