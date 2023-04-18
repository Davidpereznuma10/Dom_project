import config from "./storage/config.js";
export default{    
    showHeader(){
        config.dataMyHeader(); 
        let dataheader= JSON.parse(localStorage.getItem("myHeader"));
            const ws = new Worker("components/storage/wsMyHeader.js", {type:"module"});            
            let count = 0;
            ws.postMessage({module: "lisTitle", data:dataheader.title});
            ws.postMessage({module: "listAlbums", data:dataheader.Albums});
            let id = ["#Tittle","#Albums"];
            ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data,"text/html");
                document.querySelector(id[count]).append(...doc.body.children);
                (id.length-1==count) ? ws.terminate(): count++;
            })        
        }
    };