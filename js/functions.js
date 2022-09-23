class Empeado{
    constructor(nom,ape,gen,fna,fin,sal){
        this.nom=nom;
        this.ape=ape;
        this.gen=gen;
        this.fna=fna;
        this.fin=fin;
        this.sal=sal;
    }
    darNom(){
        return this.nom;
    }
    darApe(){
        return this.ape;
    }
    darGen(){
        return this.gen;
    }
    darFna(){
        return this.fna;
    }
    darFin(){
        return this.fin;
    }
    darSal(){
        return this.sal;
    }
    actualizarSal(sal){
        this.sal=sal;
   }

}
let emp1= new Empeado("Pedro","Mantilla","M","16-6-1982","5-4-2000",1500000);
document.getElementById('nombre').innerHTML = emp1.darNom();
document.getElementById('ape').innerHTML = emp1.darApe();
document.getElementById('sex').innerHTML = emp1.darGen();
document.getElementById('fna').innerHTML = emp1.darFna();
document.getElementById('fing').innerHTML = emp1.darFin();
document.getElementById('salario').innerHTML = ""+emp1.darSal();

function calcularEdad() {

    document.getElementById('edad').innerHTML = ""+calcularYeards(emp1.fna);
}

function calcularAnt() {
    document.getElementById('ant').innerHTML = ""+calcularYeards(emp1.fin);
}

function calcularYeards( fecha ){
    // Si la fecha es correcta, calculamos la edad
   var values = fecha.split("-");

   var yeard = values[2];

   // cogemos los valores actuales
   var fecha_hoy = new Date();
   var ahora_yeard = fecha_hoy.getYear();
  
   // realizamos el calculo
   var edad = (ahora_yeard + 1900) - yeard;
   
   return edad;

}

function prestaciones(){
    let pres = (calcularYeards(emp1.fin)*emp1.sal)/12;
    document.getElementById('pres').innerHTML = ""+pres;
}

function nuevoSal(){
	let cant = prompt("Introduzca Nuevo Salario");
	//Convertir txt a entero
	let c = parseInt(cant);
	emp1.actualizarSal(c);
	document.getElementById('salario').innerHTML = ""+emp1.darSal();
}
function mostarAnt(){
    alert("El empleado "+emp1.darNom()+" lleva trabajando "+calcularYeards(emp1.fin)+" años");
}
function salir(){
    alert("Gracias por usar nuestra pagina web");
}