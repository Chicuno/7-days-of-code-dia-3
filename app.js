let carrera = 0;
let tecnologias = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function pregunta(el, te){
    asignarTextoElemento(el, te);
    return;
}

function pregunta2(el, te) {
    asignarTextoElemento(el, te);
    return;
}

function agregarInfo() {
    let info = document.getElementById('ent');
    let datos = info.value;
    
    if (datos == 1) {
        pregunta('h2', '¿Front-End? muy bien, ¿y qué prefieres 1: React o 2: Vue?');
        carrera = 'Front-End'
        console.log(carrera);
        document.querySelector('#resp').setAttribute('onclick', 'agregarInfo2()');
        document.querySelector('#ent').value = ""
        document.querySelector('#ent').focus();      
    } else if (datos == 2) {
        pregunta('h2', '¿Back-End? muy bien, ¿y qué prefieres 1: C# o 2: Java')
        carrera = 'Back-End'
        console.log(carrera);
        document.querySelector('#ent').value = ""
        document.querySelector('#ent').focus();
        document.querySelector('#resp').setAttribute('onclick', 'agregarInfo2()');
    } else{
        pregunta('h2', 'Por favor selecciona 1 o 2')
        document.querySelector('#ent').value = ""
        document.querySelector('#ent').focus();
    }
    
}

function agregarInfo2() {
    let info2 = document.getElementById('ent');
    let datos2 = info2.value

    if(datos2 == 1 || 2){
        pregunta('h2', `¡Buena decisión! ¿Y te piensas especializar en 1: ${carrera} o vas por 2: Full-Stack?`)
        document.querySelector('#resp').setAttribute('onclick', 'agregarInfo3()');
        document.querySelector('#ent').value = ""
        document.querySelector('#ent').focus();
    } else{
        pregunta('h2', 'Por favor selecciona 1 o 2')
        document.querySelector('#ent').value = ""
        document.querySelector('#ent').focus();
    }
}

function agregarInfo3() {
    let info3 = document.getElementById('ent');
    let datos3 = info3.value

    if (datos3 == 1) {
        pregunta('h2', '¡Te felicito!, es muy bueno especializarse. ¿Y hay alguna otra tecnología que te gustaría aprender? 1: Sí, 2: No')
        document.querySelector('#resp').setAttribute('onclick', 'agregarInfo4()');
        document.querySelector('#ent').value = ""
        document.querySelector('#ent').focus();
    } else if(datos3 == 2) {
        pregunta('h2', '¡Te felicito!, los programadores Full-Stack son muy solicitados.<br>¿Y hay alguna otra tecnología que te gustaría aprender? 1: Sí, 2: No')
        document.querySelector('#resp').setAttribute('onclick', 'agregarInfo4()');
        document.querySelector('#ent').value = ""
        document.querySelector('#ent').focus();
    }else{
        pregunta('h2', 'Por favor selecciona 1 o 2')
        document.querySelector('#ent').value = ""
        document.querySelector('#ent').focus();
    }
}

function agregarInfo4() {
    let info4 = document.getElementById('ent');
    let datos4 = info4.value

    if (datos4 == 1) {
        pregunta('h2', '¿Cuál?')
        document.querySelector('#resp').setAttribute('onclick', 'agregarInfo5()');
        document.querySelector('#ent').setAttribute('type', 'string');
        document.querySelector('#ent').value = ""
        document.querySelector('#ent').focus();
    } else if(datos4 == 2) {
        pregunta('h2', '¡Muy bien, te deseo que tengas mucho éxito en tus estudios!')
        document.querySelector('#ent').value = ""
        document.querySelector('#ent').focus();
    }else{
        pregunta('h2', 'Por favor selecciona 1 o 2')
        document.querySelector('#ent').value = ""
        document.querySelector('#ent').focus();
    }
}

function agregarInfo5() {
    let info5 = document.getElementById('ent');
    let datos5 = info5.value;

    if (datos5 == "no") {
        pregunta('h2', `¡Guau!: ${tecnologias}. Excelente que quieras aprender más tecnologías.<br>Que tengas mucho éxito en tus estudios y en tu carrera. 👩‍🎓👨‍🎓 `)
        document.querySelector('#ent').value = "";
        document.querySelector('#resp').setAttribute('disabled','true');
    } else if(datos5 !== Number){
        pregunta('h2', '¿Alguna otra? escribe "no" para terminar')
        tecnologias.push(info5.value)
        console.log(tecnologias);
        document.querySelector('#ent').value = ""
        document.querySelector('#ent').focus();        
    }
}

pregunta('h2', '¿Vas a estudiar 1: Fron-End o 2: Back-End?');