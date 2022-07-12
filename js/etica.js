const Check = document.getElementById("enviarDenuncia");

Check.addEventListener("click", function(r){
    r.preventDefault();
    const checkDenuncia = document.getElementById("check").checked;
    if (checkDenuncia === true){
        const btnEnvio = document.getElementById("enviarDenuncia");

        btnEnvio.addEventListener("click", function(r){
            r.preventDefault();
            // const email = document.getElementById("email").value;
            // const nombre = document.getElementById("nombre").value;
            // const celular = document.getElementById("celular").value;
            // const interes = document.getElementById("interes").value;
            // window.location.href = `mailto:recursoshumanos@sanmiguelsas.com?subject=Postulaci%C3%B3n%20CV%20por%20medio%20de%20Pagina%20Web&body=Hola!%2C%20Mi%20nombre%20es%20${nombre}%2C%20revise%20su%20p%C3%A1gina%20web%20y%20estoy%20interesado%20en%20hacer%20parte%20de%20su%20%C3%A1rea%20de%20${interes}%2C%20dejo%20mi%20numero%20celular%20y%20correo%20electr%C3%B3nico%20para%20participar%20en%20sus%20procesos%20de%20selecci%C3%B3n.%0A%0AMuchas%20gracias%0A%0AN%C3%BAmero%20Celular%3A%20${celular}%0ACorreo%20Electr%C3%B3nico%3A%20${email}%0A`;
            swal("¡Listo!", "Denuncia enviada, Gracias", "success");
        });

    }else{
        swal("¡Error!", "Para enviar tu denuncia, debes aceptar el tratamiento de información de la línea ética", "error");
    }
        
});
