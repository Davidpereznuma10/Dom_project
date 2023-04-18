let wsMyCards= {
    showDes(p1){
        let plantila ="";
        p1.forEach((val,id)=>{
            plantila += `
            <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary ">${val.articles}</strong>
                <h3 class="mb-0">${val.name}</h3>
                <div class="mb-1 text-muted">${val.year}</div>
                <p class="card-text mb-auto" text->${val.paragraph} </p>
                <a id="links" href="${val.btn.href}" class="stretched-link">${val.btn.name}</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img class="responsiveimg" src="${val.covered}">
              </div>
            </div>
          </div>`
        });
        return plantila
        }};
      self.addEventListener("message", (e)=>{
        postMessage(wsMyCards[`${e.data.module}`](e.data.data));
    });