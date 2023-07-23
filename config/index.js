const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});
// Botão mobile
let btnMobile = document.querySelector("#btn-mobile");
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function toggleMenu(event) {

    if (event.type === 'touchstart') {
        event.preventDefault();
    }

    const nav = document.querySelector("#nav");   

    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);

    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');   
    }
}
// Botão mobile

// COPIAR TEXTO INICIO ------------------------------------------------------------------------------

function copiarTexto() {
  
  var elemento = document.getElementById("pix");
  
  var textoTemporario = document.createElement("textarea");
  
  textoTemporario.value = elemento.textContent;
  
  document.body.appendChild(textoTemporario);
  
  textoTemporario.select();
  
  document.execCommand("copy");
  
  document.body.removeChild(textoTemporario);
  
  var mensagemDiv = document.getElementById("mensagem");
  mensagemDiv.textContent = "PIX Copiado!";
  
  setTimeout(function() {
      mensagemDiv.textContent = "";
  }, 3000); 
}


// COPIAR TEXTO FINAL -*----------------------------------------------------------------------------------