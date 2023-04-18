import config from "./storage/config.js";
export default {
showSide(){
    config.dataMySide();
    let dataSide= JSON.parse(localStorage.getItem("mySide"));
    console.log(dataSide.nav);
   const ws= new Worker ("components/storage/wsMyside.js",{type:"module"});
    ws.postMessage({module:"showSidebar", data:dataSide.nav});
    ws.postMessage({module:"list", data:dataSide.nav});
    ws.addEventListener("message",(e)=>{
        let doc = new DOMParser().parseFromString(e.data,"text/html");
    document.querySelector("#sidebar").append(...doc.body.children);});}
}