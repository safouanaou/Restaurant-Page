(()=>{"use strict";function e(){const e=document.getElementById("content");e.replaceChildren();const t=document.createElement("h1");t.textContent="Fibonacci Restaurant",t.classList.add("title"),e.appendChild(t);const n=document.createElement("img");n.src="../src/assets/resto.jpg",n.classList.add("image"),e.appendChild(n);const c=document.createElement("p");c.textContent="mamamia",c.classList.add("parOne"),e.appendChild(c)}function t(){const e=document.getElementById("content");e.replaceChildren();const t=document.createElement("h1");t.textContent="couscous",t.classList.add("couscous");const n=document.createElement("img");n.src="../src/assets/couscous.webp",n.classList.add("couscousImg");const c=document.createElement("p");c.textContent="couscous is a traditional moroccan food made with grains of durum wheat semolina with along with other ingredients such as chicken and vegetables",c.classList.add("couscousDescription"),e.appendChild(t),e.appendChild(n),e.appendChild(c);const s=document.createElement("h1");s.textContent="tajine",s.classList.add("tajine");const a=document.createElement("img");a.src="../src/assets/tajine-au-poulet.jpeg",a.classList.add("tajineImg");const i=document.createElement("p");i.textContent="tajine is a traditional moroccan food made with grains of durum wheat semolina with along with other ingredients such as chicken and vegetables",i.classList.add("tajineDescription"),e.appendChild(s),e.appendChild(a),e.appendChild(i);const d=document.createElement("h1");d.textContent="chicken",d.classList.add("chicken");const o=document.createElement("img");o.src="../src/assets/moroccan-chicken.jpg",o.classList.add("chickenImg");const l=document.createElement("p");l.textContent="chicken is a traditional moroccan food made with grains of durum wheat semolina with along with other ingredients such as chicken and vegetables",l.classList.add("chickenDescription"),e.appendChild(d),e.appendChild(o),e.appendChild(l)}e(),document.getElementById("home").addEventListener("click",e),document.getElementById("menu").addEventListener("click",t)})();