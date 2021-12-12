ValidarEmail();

function ValidarEmail() {

    let contactForm = document.getElementById('contactForm');
    let btnenviar = document.getElementById('btnenviar');

    contactForm.onsubmit = function (e) {
        e.preventDefault();
    }


    function Vcorreo() {
        let email = document.getElementById('email');
        return /^\w+([\. \+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/.test(email.value);
    }
    
    let VContraseña = function () {
        let pass = document.getElementById('pass');
        return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(pass.value);
    }

    btnenviar.addEventListener('click', function() {
    
        if(Vcorreo() && VContraseña()){
            window.location = "https://www.google.com/";
        }
    })



}


