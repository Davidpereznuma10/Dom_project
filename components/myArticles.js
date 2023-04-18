import config from "./storage/config.js";
export default {
  ShowArticles(){
    config.dataMyArticles();
    let dataArticles= JSON.parse(localStorage.getItem("myArticles"));
      const ws = new Worker ("components/storage/wsMyArticles.js",{type:"module"});
      let count = 0;
      ws.postMessage({module:"showTittle", data:dataArticles.section});
      ws.postMessage({module:"showParagraph", data:dataArticles.section.articles});
      ws.postMessage({module:"ShowTime", data:dataArticles.section.Artistes});
      let id = ["#section","#Articles","#Artistes"];
      ws.addEventListener("message",(e)=>{
      let doc = new DOMParser().parseFromString(e.data,"text/html");
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==count) ? ws.terminate(): count++;
      })
    }
  };
