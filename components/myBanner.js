import config from "./storage/config.js";
export default {
    ShowAllBanner(){     
        config.dataMyBanner();
        let dataBanner= JSON.parse(localStorage.getItem("myBanner"));  
        const ws = new Worker("components/storage/wsMyBanner.js", {type:"module"});
        let count=0;
        ws.postMessage({module:"showImg", data:dataBanner.Image});
        ws.postMessage({module:"showContenido", data:dataBanner.info});
        let id= ["#showImg","#Banner"]
        ws.addEventListener("message",(e)=>{
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==count) ? ws.terminate(): undefined;
        count++;});
    }
}
