let wsMyHeader = {
    lisTitle(p1){
        return (`
            <img id="icono-left" src="../style/img/icon.png"/>
            <a class="blog-header-logo text-black" href="${p1.href}">${p1.name}</a>
            <img id="icono-rigth" src="../style/img/icon.png"/>`)
    },
    listAlbums(p1){
        let plantilla = "";
        p1.forEach((val,id) =>{
            plantilla += `<a class="p-2 link-secondary" href="${val.href}">${val.name}</a>`
        });
        return plantilla;
    }
}
self.addEventListener("message", (e)=>{
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data));
});