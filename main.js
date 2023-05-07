import myHeader from "./components/myHeader.js";
import myBanner from "./components/myBanner.js";
import myCards from "./components/myCards.js";
import myArticle from "./components/myArticles.js";
import myside from "./components/mySide.js";


//headers
myHeader.showHeader();
//Banners
myBanner.ShowAllBanner();
//cards
myCards.showCards();
//Articles
myArticle.ShowArticles();
//Sidebar
myside.showSide();

// Video
const loader = document.querySelector("#loader");
const video = document.querySelector("#video");

// VIDEO FUNCTION
video.src = './style/img/logo_horizontal.mp4';
video.play();
video.addEventListener('ended',(e)=>{
 loader.style.display='none';
})