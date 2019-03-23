/*Funciones JavaScript
 document.getElementById("p2").style.color = red;
 document.getElementById("p2").style.fontSize = "larger";*/

/*Cuando el usuario hace click en el botón, alternar entre ocultar y mostrar
 * el contenido despegable*/
function desplegarfor() {
    document.getElementById("desplegarformulario").classList.toggle("mostrar");
}

/*Cerrar el menú despegable si el usuario hace click fuera de él*/
window.onclick = function (e) {
    if (!e.target.matches('.btndesp')) {
        var desplegarformu = document.getElementById("desplegarfor");
        if (desplegarformu.classList.contains('mostrar')) {
            desplegarformu.classList.remove('mostrar');
        }
    }
};

/*Desplegado del menú reportes*/
function desplegarreportes() {
    document.getElementById("desplegarReport").classList.toggle("mostrar");
}

window.onclick = function (e) {
    if (!e.target.matches('.btndesp')) {
        var desplegarreports = document.getElementById("desplegarReport");
        if (desplegarreports.classList.contains('mostrar')) {
            desplegarreports.classList.remove('mostrar');
        }
    }
};

/*Desplegado del menú Opciones*/
function desplegaropciones() {
    document.getElementById("desplegarOpt").classList.toggle("mostrar");
}

window.onclick = function (e) {
    if (!e.target.matches('.btndesp')) {
        var desplegaropcion = document.getElementById("desplegaropciones");
        if (desplegaropcion.classList.contains('mostrar')) {
            desplegaropcion.classList.remove("mostrar");
        }
    }
};

/*para la barra de menú pegajosa*/
window.onscroll = function () {
    mifuncion()
};

var barnav = document.getElementById("barnav");
var sticky = barnav.offsetTop;

function mifuncion() {
    if (window.pageYOffset >= sticky) {
        barnav.classList.add("sticky");
    } else {
        barnav.classList.remove("sticky");
    }
}

/*Animación*/
function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

/*Testear campo*/
function funcion() {
    var message, x;
    message = document.getElementById("p01");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try {
        if (x == "") throw "empty";
        if(isNaN(x)) throw "no es numérico";
        x = Number(x);
        if (x <= 8) throw "del campo es pequeño";
        if (x => 10) throw "del campo es grande";
    }
    catch (err) {
        message.innerHTML = "El valor " + err;
    }
}

/**/
