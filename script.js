console.log("welocme to spotify");
let songIndex = 0;
let audioElement=new Audio('7.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs= [
    {songName: "Dayre",filePath:"song/6.mp3",coverPath:"covers/1.jpg"},
    {songName: "Gerua",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Gerua",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Gerua",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Gerua",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
 ]
 //audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacit = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacit = 0;

    }

    })

//Listen to events
audioElement.addEventListener('timeupdate',()=>{
   
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;

})
     myProgressBar.addEventListener('change',()=>{
     audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})