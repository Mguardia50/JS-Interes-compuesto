let idinero = prompt("Ingrese dinero a depositar");
let dinero = parseInt(idinero);

while (isNaN(dinero)){
    alert("Por favor, ingrese un número, no un texto");

    idinero = prompt("Ingrese dinero a depositar");
    dinero = parseInt(idinero);
}

let consulta = prompt(" Ingrese 1 para calcular el interés por meses o 2 por años ");


while (consulta !=1 || consulta !=2 ){

    if (consulta == 1){
        let imeses = prompt ("¿Cúantos meses desea usted ingresar el dinero?");
        let meses = parseInt(imeses);
            while (isNaN(meses)){
                alert("Por favor, ingrese un número, no un texto");
                imeses = prompt("¿Cúantos meses desea usted ingresar el dinero?");
                meses = parseInt(imeses);
            }
            let potenciaMeses = Math.pow(1.41,meses/12);
            var interes = dinero * potenciaMeses;
            alert("Su dinero sería $" + interes)

        break
    }

    if (consulta == 2){
        let ianios = prompt ("¿Cúantos años desea usted ingresar el dinero?");
        let anios = parseInt(ianios);
            while (isNaN(anios)){
                alert("Por favor, ingrese un número, no un texto");
                ianios = prompt("¿Cúantos años desea usted ingresar el dinero?");
                anios = parseInt(ianios);
            }
            
                for(let i=0; i<=anios; i++){
                    switch(i){
                        case 0:
                        alert ("su dinero inicial es $" + dinero);
                    } 
                let potenciaAnios = Math.pow(1.41,i);
                var interes = dinero * potenciaAnios;
                    if (i != 0){
                    alert("Su dinero el año " + i + " sería $" + interes)
                    }
            }

        break
    }

    else {
        let iconsulta = prompt ("Por favor, ingrese el numero 1 para meses o 2 para años");
        consulta = parseInt (iconsulta);
        /* Si lo ponia de otra forma NO FUNCIONABA */
    }
}
