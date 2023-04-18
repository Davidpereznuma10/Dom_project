import config from "./storage/config.js";
export default {
    showCards(){
        config.dataMyCards();
        let dataCards = JSON.parse(localStorage.getItem("myCards"));
            const ws = new Worker ("components/storage/wsMyCards.js", {type:"module"});
            ws.postMessage({module:"showDes", data:dataCards.albums});
            ws.addEventListener("message", (e)=>{
                let doc = new DOMParser().parseFromString(e.data,"text/html");
                document.querySelector("#cards").append(...doc.body.children);
            })
    }
}