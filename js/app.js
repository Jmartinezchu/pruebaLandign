    // aqui se validan los contenedores de el formulario
    const enviar  =  document.querySelector('#btn-enviar');
    const formulario  = document.querySelector('#formulario');

    enviar.addEventListener('click',function(e){
        e.preventDefault();
        console.log('diste click');
        sendEmail();
    })

    function sendEmail(params) {
        let tempParams = {
            nombres: document.getElementById("nombres").value,
            celular: document.getElementById("celular").value,
            asunto: document.getElementById("asunto").value,
            mensaje: document.getElementById("mensaje").value,
        };

        if (tempParams.nombres == "" || tempParams.celular == "" || tempParams.asunto == "" || tempParams.mensaje == "") {
            // todos los campos completos
            swal("¡Alerta!", "Debes completar todos los campos", "warning");
        }else if (tempParams.nombres.length <10 || tempParams.nombres.length > 40 ) {
            // nombre valido
            swal("¡Alerta!", "Tu nombre no es valido", "warning");
        }else if (isNaN(tempParams.celular) || tempParams.celular.length !== 9 ) {
            // celular valido
            swal("¡Alerta!", "El número ingresado no es valido", "warning");
        }else if (tempParams.asunto.length <9 && tempParams.asunto.length > 30 ) {
            // validar asunto
            swal("¡Alerta!", "El asunto no es valido", "warning");
        }else if (tempParams.mensaje.length <10) {
            // validar mensaje
            swal("¡Alerta!", "El mensaje no es objetivo", "warning");
        }else{
            emailjs.send('service_azu4qyl','template_j11vfyo',tempParams)
            .then(function(res){
                swal(`¡${tempParams.nombres} sus Datos han sido Enviados!`, "Muy pronto nos contactaremos con usted", "success");
                formulario.reset();
            })  
        }
    }




