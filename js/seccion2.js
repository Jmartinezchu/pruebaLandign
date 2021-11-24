let seccion2imgs =[1,2,3,4,5,6];
let seccion2 = document.getElementById('seccion2');
let modal__seccion = document.getElementById('list__modal-img');
// seccion número 2
for(img of seccion2imgs){
    seccion2.innerHTML +=`
<div >
    <div class="card__galeria"><img src="/img/galeria2/${img}.jpg" alt="nombre de la galeria"></div>
</div>`;

modal__seccion.innerHTML +=`
    <img src="/img/galeria2/${img}.jpg" alt="Nombre de la Galeria">
    `;
};

// variables de la galeria de imagenes
let modal = document.querySelector('.modal__galeria');
let images = document.querySelectorAll('.card__galeria img');
let modalImg = document.querySelector('#myImgModal');
let imgBox =document.querySelectorAll('.list__modal img');
let cerrar = document.querySelector('.btn-close');

images.forEach((images)=>{
    images.addEventListener('click',() => {
            modal.style.display = "block";
            modalImg.src = images.src;
        });
});

imgBox.forEach( img => img.addEventListener('click', imgLightbox));
function imgLightbox (event){
    modalImg.src = event.target.src;
}

cerrar.addEventListener("click",() => {
    modal.style.display= "none";
})

