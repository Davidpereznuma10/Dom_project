import config from  "./storage/config";
const loader = document.querySelector("#loader");
const video = document.querySelector("#video");

export default{
    video.src = 'style/img/logo_horizontal.mp4';
    video.play();
    video.addEventListener('ended',(e)=>{
    video.style.display ='none';
    loader.style.display='none';
    }) 
    window.addEventListener("DOMContentLoaded",(e)=>{
      localStorage.getItem('loader') ? loader.style.display='none' : localStorage.setItem('loader', loader) ;
    }) 
}