import { bazaDate2 } from "./bazaDate.js";

document.addEventListener("DOMContentLoaded", function () {
  console.log("incarcare");
  const main = document.body.querySelector("main");
  const mainSec = document.createElement("section");
  main.appendChild(mainSec);
  mainSec.setAttribute("class", "product-grid");

  for (let obiect of bazaDate2) {
    const div = document.createElement("div");
    mainSec.appendChild(div);
    div.setAttribute("class", "product-card");
    div.innerHTML = `
            <img src=${obiect.poze[0]} alt=${obiect.titlu}/>
            <h3>${obiect.titlu}</h3>
            <p>${obiect.descriere}</p>  
        `;

    div.addEventListener("click", function () {
      mainSec.setAttribute("class", "product");
      mainSec.innerHTML = "";
      const h1 = document.body.querySelector("#titlu");
      h1.innerHTML = obiect.titlu;

      //mainSec.style.background = `url(${obiect.poze[0]})`;
      mainSec.style.background = "white";
      mainSec.style.minHeight = "150vh";
      mainSec.style.backgroundPosition = "center center";
      mainSec.style.backgroundSize = "cover";
      mainSec.style.color = "black";

      // hero si products ascunse

      const hero = main.querySelector(".hero");
      const products = main.querySelector(".products");
      hero.style.display = "none";
      products.style.display = "none";

      const div = document.createElement("div");
      mainSec.appendChild(div);
      const divP = document.createElement("p");
      div.appendChild(divP);
      divP.innerText = obiect.seria;
      // divH1  - titlu
      const divH1 = document.createElement("h1");
      mainSec.appendChild(h1);
      // divP2  - descriere
      const divP2 = document.createElement("p");
      mainSec.appendChild(divP2);
      divP2.innerText = obiect.descriere2;
      // divH2 - pret
      const divH2 = document.createElement("h2");
      mainSec.append(divH2);
      divH2.innerText = obiect.pret;
      //pana aici facut totul ok

      // article -> ul !!!!
      const article = document.createElement("article");
      const divD = document.createElement("div");
      const ul = document.createElement("ul");

      const lista = ["Overview", "Features", "Specs", "Response", "Samples"];
      for (let i = 0; i < lista.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = lista[i];
        ul.appendChild(li);
      }
      mainSec.appendChild(article);
      article.appendChild(divD);
      divD.appendChild(ul);

      // div2 - pentru ce urmeaza

      // div2H2 - titlu
      // div2P  - descrierea mai lunga
      // div3 - parinte carusel

//carousel facut acasa de mine 
const carouselId = "carouselPoze";
const carousel = document.createElement("div");
carousel.id = carouselId;
carousel.className = "carousel slide";
carousel.setAttribute("data-bs-ride", "carousel");

// indicators
const indicators = document.createElement("div");
indicators.className = "carousel-indicators";

obiect.poze.forEach((_, i) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.setAttribute("data-bs-target", `#${carouselId}`);
  btn.setAttribute("data-bs-slide-to", i);
  btn.setAttribute("aria-label", `Slide ${i + 1}`);
  if (i === 0) {
    btn.className = "active";
    btn.setAttribute("aria-current", "true");
  }
  indicators.appendChild(btn);
});

// carousel-inner
const inner = document.createElement("div");
inner.className = "carousel-inner";

obiect.poze.forEach((src, i) => {
  const item = document.createElement("div");
  item.className = "carousel-item" + (i === 0 ? " active" : "");

  const img = document.createElement("img");
  //img.src = src;
  img.src = src;
  img.className = "d-block w-100";
  img.alt = obiect.titlu; 

  item.appendChild(img);
  inner.appendChild(item);
});

// prev button
const btnPrev = document.createElement("button");
btnPrev.className = "carousel-control-prev";
btnPrev.type = "button";
btnPrev.setAttribute("data-bs-target", `#${carouselId}`);
btnPrev.setAttribute("data-bs-slide", "prev");
btnPrev.innerHTML = `
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
`;

// next button
const btnNext = document.createElement("button");
btnNext.className = "carousel-control-next";
btnNext.type = "button";
btnNext.setAttribute("data-bs-target", `#${carouselId}`);
btnNext.setAttribute("data-bs-slide", "next");
btnNext.innerHTML = `
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
`;

// compun caruselul
carousel.appendChild(indicators);
carousel.appendChild(inner);
carousel.appendChild(btnPrev);
carousel.appendChild(btnNext);

// adaug carousel-ul in sectiunea principala
mainSec.appendChild(carousel);

//aici se termina carouselul
    });
  }
});
