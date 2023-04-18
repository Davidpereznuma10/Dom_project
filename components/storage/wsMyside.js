    let wsMySide ={
        showSidebar(p1){
            const data = p1.map((val,id)=>{
                return((val.link)?this.list(val):this.cards(val));
            });
            return data
        },
        cards(val){
            return `
                <div class="p-4 mb-3 bg-black rounded">
                    <h4 class="fst-italic" strong>${val.title}</h4>
                    <p class="mb-0" em>${val.text}</p>
                </div>`;
            
          },   
        list(val){
            if (val.link) {
              return `
                <div class="p-4">
                  <h4 class="fst-italic">${val.title}</h4>
                  <ol class="list-unstyled">
                    ${val.link.map((val,id)=>`<li> <a id="links"  href="${val.href}">${val.name}</a></li>`).join("")}
                  </ol>
                </div>`;
            } else {
              return '';
            }
          }
                   
    };
    self.addEventListener("message", (e)=>{
        postMessage(wsMySide[`${e.data.module}`](e.data.data));
    })