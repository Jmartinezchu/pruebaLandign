    let header = document.getElementById('header-menu');
    let footer = document.getElementById('footer');


    header.innerHTML +=`
        <div id="cabecera">
        <div class="cabecera__slogan">
            <h2><span class="iconify-inline" data-icon="bi:bookmark-check"></span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h2>
        </div>
        <nav class="cabecera__menu">
            <div>
                <a href="index.html"><img class="cabecera__menu-logo" src="/img/img/logop.png" alt="Logo de la empresa"></a>
            </div>
            <!-- boton -->
            <label for="menu-btn" class="cabecera__menu-btn">
                <img src="/img/svg/btn-menu.svg" alt="botón menu" class="menu-btn-img">
            </label>
            <input type="checkbox" id="menu-btn" class="menu-btn-input">
            <!-- enlaces de navegacion -->
            <div class="cabecera__menu-nav">
                <a class="cabecera__menu-nav-enlace" href="index.html">Inicio</a>
                <a class="cabecera__menu-nav-enlace" href="Productos.html">Productos</a>
                <a class="cabecera__menu-nav-enlace" href="Preguntas.html">Preguntas</a>
                <a class="cabecera__menu-nav-contacto" href="Contacto.html">Contáctenos</a>
            </div>
        </nav>
        <div>
            <a href="tel:970860246" class="cabecera__menu-telefono"><span class="iconify" data-icon="bx:bxs-phone-call"></span>Atención al Cliente</a>
        </div>
        </div>`

        footer.innerHTML += `
        <div class="footer__contenido">
        <div  class="footer__cont-items "style="border-bottom:2px solid #020202; width: 60%;">
            <div class="footer__cont-items-item">
                <img style="width: 14rem" src="/img/img/logop.png" alt="Nombre empresa">
            </div>
            <div class="footer__cont-items-item">
                <h2><b>@Email</b></h2>
                <p><br>example@example.com</p>
            </div>
            <div class="footer__cont-items-item">
                <h2><b>#Telefono</b></h2>
                <p><br>#&&&-&&&-&&&</p>
                <p><br>#&&&-&&&-&&&</p>
            </div>
        </div>
        <div class="footer__cont-items">
            <div class="footer__cont-items-item">
                <div>
                    <a href="Contacto.html" class="btn-footer"><b>Contactar</b></a>
                </div>
            </div>
            <div class="footer__cont-items-item" style="text-align:center">
                <img style="width: 15rem" src="/img/svg/contacto.svg" alt="Contacto empresa" >
                <p style="display: flex; justify-content:space-evenly;"><b>Siguenos: </b> 
                <a href="#"><span class="iconify-inline" data-icon="cib:facebook" data-width="25"></span></a>
                <a href="#"><span class="iconify-inline" data-icon="cib:instagram" data-width="25"></span></a>
                </p>
            </div>
        </div>
    </div>`