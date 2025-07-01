const modal = document.querySelector(".modal");
const mascara = document.querySelector(".mascara-modal");
const contatos = document.querySelector(".contatos")
const menuItem = document.querySelector(".item-menu")

function mostrarModal() {
  console.log("deu bom");
  modal.style.left = "50%";
  mascara.style.visibility = "visible";
}

function fecharModal() {
  modal.style.left = "-50%";
  mascara.style.visibility = "hidden";
  contatos.style.left  = "-50";
}

function mostrarContatos() {
 
  contatos.style.left = "50%";
  mascara.style.visibility = "visible";
}

// function fecharContatos() {
//   contatos.style.visibility = "hidden";
//   mascara.style.visibility = "hidden";
// }


function selectLink(){
console.log(menuItem)

  menuItem.forEach(item => 
    item.classList.remove("ativo")
  );
  this.classList.add("ativo")
}
menuItem.forEach((item) => 
  item.addEventListener('click' , selectLink )
)


