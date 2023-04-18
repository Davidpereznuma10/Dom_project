let wsMyArticles={
    showTittle(p1) {
        return `
              <h2 class="pb-4 mb-4 fst-italic border-bottom" strong>${p1.title}</h2>`
    },
    showParagraph(p2) {
        const pg = p2.map((val, id) => {
            return `<article class="blog-post">
            <h2 class="blog-post-title"><strong>${val.Album}</strong></h2>
            <p class="blog-post-meta">${val.year}</p>
                <p>${val.paragraph}</p>
                ${this.Table(val)}
            <hr></article>`;});
        return pg.join("");
    },    
    Table(data) {
        if (data.table) {
            return `
            <table class="table">
                <thead class="cabeza">
                    <tr class="text-black">
                    ${data.table[0].headtable.map(el => `<th>${el}</th>`).join("")}
                    </tr>
                </thead>
                <tbody class="cuerpo">    
                    ${data.table[1].bodytable.map(el =>
                        `<tr>
                            <td>${el.Position}</td>
                            <td>${el.Name}</td>
                            <td>${el.Time}</td>
                        </tr>`).join("")}     
                </tbody>
            </table>`;
        }
    },
    
    ShowTime(p3) {
        const time = p3.map((val, id) => {
            return `
                <ul>
                ${this.getList(val)}
                </ul>
                <img class="time" src="${val.image}">`;
        });
        return time.join("");
    },    
    getList(val) {
        let text = '';
        val.timeArt.forEach(el => text += `<li>${el.name}<br><sup>${el.time}</sup></li>`);
        return text;
    }
    
};
self.addEventListener("message",(e)=>{
    postMessage(wsMyArticles[`${e.data.module}`](e.data.data));
});