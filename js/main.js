/* Batalla Pokemon de 1 contra 1 */

/* Seleccionar equipos de pokemones */
const seleccionarEquipo= function(array){
        for (let index = 1; index <= 3; index++) {
                let numPokemon =validarPokemon();
                let pokemon =elegirPokemon(numPokemon);
                array.push(pokemon)
        }
}

/* Función para validar ataque */
const validarPokemon = function(){
        let numero;
        let numPokemon1;
        do {
                numPokemon1 =parseInt(prompt("1.Charmander 2.Bulbasaur 3.Squirtle 4.Pikachu"));
        } while (numPokemon1==undefined || numPokemon1<=0||numPokemon1>=5);
        numero = numPokemon1;
        return numero;
}
/* Función para elegir pokemon*/
const elegirPokemon = function (numero) {
        let pokemon ="";
        switch (numero) {
                case 1:
                        pokemon= new Charmander("charmander");
                        break;
                case 2:
                        pokemon=new Bulbasaur("bulbasaur");
                        break;
                case 3:
                        pokemon=new Squirtle("squirtle");
                        break;
                case 4:
                        pokemon=new Pikachu("pikachu");
                        break;
        }
        return pokemon;
}

const seleccionados = function(entrenador, array) {
        alert(`${entrenador} escogio los siguientes pokemones`);
        for ( const elemento in array){
               alert(`${array[elemento].nombre}`)
        }
}

/* Funcion para elegir ataque */
const elegirAtaque = function(numero,pokemon1,pokemon2){
        let vida;
        switch (numero) {
                case 1:
                        vida =pokemon1.araniazo(pokemon1,pokemon2);
                        break;
                case 2:
                        vida =pokemon1.placaje(pokemon1,pokemon2);
                        break;
                case 3:
                        vida =pokemon1.cabezazo(pokemon1,pokemon2);
                        break;
                case 4:
                        vida= pokemon1.ataqueEspecial(pokemon1,pokemon2);
                        break;
        }

        return vida;
}

/* Efectividad de ataque */
const ataqueEfectivo = function(){
        let valor = parseInt(10*Math.random());
        let efectividad;
        if (valor<=4) {
                efectividad = false;
        }else{
                efectividad=true;
        }
        return efectividad;
}


/*
const trueno = function(pokemon,vidaPokemon){
         if (ataqueEfectivo()===true) {
                alert(pokemon+" metió un trueno");
                vidaPokemon -=30;
        }else{
                alert(`${pokemon} no acerto el trueno`);
        }  
        return vidaPokemon;
}

const colaAcero = function(pokemon,vidaPokemon){
         if (ataqueEfectivo()===true) {
                alert(pokemon+" tiro su cola de acero");
                vidaPokemon -=25;
        }else{
                alert(`${pokemon} no acerto la cola de acero`);
        }  
        return vidaPokemon;
}

const impacTrueno = function(pokemon,vidaPokemon){
         if (ataqueEfectivo()===true) {
                alert(pokemon+" impactrueno exitoso");
                vidaPokemon -=25;
        }else{
                alert(`${pokemon} no acerto el impactrueno`);
        }  
        return vidaPokemon;
}


const ascuas = function(pokemon,vidaPokemon){
         if (ataqueEfectivo()===true) {
                alert(pokemon+" metio ascuas");
                vidaPokemon -=30;
        }else{
                alert(`${pokemon} no llegó a quemar`);
        }  
        return vidaPokemon;
}

const llamarada = function(pokemon,vidaPokemon){
         if (ataqueEfectivo()===true) {
                alert(pokemon+" te quemó");
                vidaPokemon -=30;
        }else{
                alert(`${pokemon} no acertó la llamarada`);
        }  
        return vidaPokemon;
}

const lanzallamas = function(pokemon,vidaPokemon){
         if (ataqueEfectivo()===true) {
                alert(pokemon+" lanzo un lanzallamas efectivo");
                vidaPokemon -=30;
        }else{
                alert(`${pokemon} no logró realizar la llamarada`);
        }  
        return vidaPokemon;
}


const latigoCepa = function(pokemon,vidaPokemon){
         if (ataqueEfectivo()===true) {
                alert(pokemon+" lanzó un latigazo");
                vidaPokemon -=30;
        }else{
                alert(`${pokemon} no llegó a acertar el latigo`);
         }  
        return vidaPokemon;
}

const hojaAfilada = function(pokemon,vidaPokemon){
         if (ataqueEfectivo()===true) {
                alert(pokemon+" te cortó con la hoja afilada");
                vidaPokemon -=30;
        }else{
                 alert(`${pokemon} no acertó la hoja afilada`);
        }  
        return vidaPokemon;
}

const energiBola = function(pokemon,vidaPokemon){
         if (ataqueEfectivo()===true) {
                alert(pokemon+" lanzo un bola de energía efectiva");
                vidaPokemon -=30;
        }else{
                alert(`${pokemon} no logró realizar la bola de energía`);
        }  
        return vidaPokemon;
}


const burbuja = function(pokemon,vidaPokemon){
         if (ataqueEfectivo()===true) {
                alert(pokemon+" lanzó una burbuja de agua");
                vidaPokemon -=30;
        }else{
                alert(`${pokemon} no acerto la burbuja de agua`);
                }  
        return vidaPokemon;
}

const pistolaAgua = function(pokemon,vidaPokemon){
         if (ataqueEfectivo()===true) {
                alert(pokemon+" lanzó un pistolazo de agua");
                vidaPokemon -=30;
                }else{
                        alert(`${pokemon} no tuvo buena puntería con la pistola de agua`);
                }  
         return vidaPokemon;
}

const hidroBomba = function(pokemon,vidaPokemon){
         if (ataqueEfectivo()===true) {
                alert(pokemon+" lanzo la hidrobomba potente");
                vidaPokemon -=30;
                }else{
                        alert(`${pokemon} no logró realizar la hidrobomba`);
                }  
                return vidaPokemon;
}
*/


class Pokemon{
        constructor(nombre){
                this.nombre=nombre;
                this.vida=100;
        }

        araniazo(pokemon1,pokemon2){
                if (ataqueEfectivo()===true) {
                        alert(pokemon1.nombre+" lanzó un arañazo");
                        pokemon2.vida -=5;
                }else{
                        alert(pokemon1.nombre+" no acerto el arañazo");

                }
                return pokemon2.vida;
        }

        placaje(pokemon1,pokemon2){
                if (ataqueEfectivo()===true) {
                alert(pokemon1.nombre+" metió un cabezazo");
                pokemon2.vida -=10;
                }else{
                        alert(`${pokemon1.nombre} no acerto el cabezazo`);
                }  
                return pokemon2.vida;
        }

        cabezazo(pokemon1,pokemon2){
                if (ataqueEfectivo()===true) {
                alert(pokemon1.nombre+" metió un cabezazo");
                pokemon2.vida -=20;
                }else{
                        alert(`${pokemon1.nombre} no acerto el cabezazo`);
                }  
                return pokemon2.vida;
        }

         ataqueEspecial(pokemon1,pokemon2){
                if (ataqueEfectivo()===true) {
                        alert(pokemon1.nombre+" realizo su ataque especial");
                        pokemon2.vida -=35;
                }else{
                        alert(`${pokemon1.nombre} no acerto el cabezazo`);
                }  
                return pokemon2.vida;
        }
}


class Squirtle extends Pokemon{
        constructor(nombre){
                super(nombre);
        }
        /* ataqueEspecial(opcion,pokemon,vidaPokemon){
                alert("Tienes entre 3 ataques para elegir: 1.Burbuja  2. Pistola de agua 3.Hidrobomba")
                switch (opcion) {
                        case 1:
                               burbuja(pokemon,vidaPokemon);
                                break;
                        case 2:
                               pistolaAgua(pokemon,vidaPokemon);
                                break;
                        case 3:
                               hidroBomba(pokemon,vidaPokemon);
                                break;
                }
        } */
        ataqueEspecial(pokemon1,pokemon2){
                if (ataqueEfectivo()===true) {
                        alert(pokemon1.nombre+" tiro una pistola de agua");
                        pokemon2.vida -=35;
                }else{
                        alert(`${pokemon1.nombre} no acerto el la pistola de agua`);
                }  
                return pokemon2.vida;
        }
}



class Charmander extends Pokemon{
        constructor(nombre){
                super(nombre);
        }

       /* ataqueEspecial(opcion,pokemon,vidaPokemon){
                alert("Tienes entre 3 ataques para elegir: 1.ascuas  2.llamarada 3.lanzallamas")
                switch (opcion) {
                        case 1:
                               ascuas(pokemon,vidaPokemon);
                                break;
                        case 2:
                               llamarada(pokemon,vidaPokemon);
                                break;
                        case 3:
                               lanzallamas(pokemon,vidaPokemon);
                                break;
                }
        }*/
        ataqueEspecial(pokemon1,pokemon2){
                if (ataqueEfectivo()===true) {
                        alert(pokemon1.nombre+" quemó al pokemon");
                        pokemon2.vida -=35;
                }else{
                        alert(`${pokemon1.nombre} no logrp quemar nada`);
                }  
                return pokemon2.vida;
        }
}

class Pikachu extends Pokemon{
        constructor(nombre){
                super(nombre);
        }

       /* ataqueEspecial(opcion,pokemon,vidaPokemon){
                alert("Tienes entre 3 ataques para elegir: 1.trueno 2.cola de acero 3.impactrueno")
                switch (opcion) {
                        case 1:
                               trueno(pokemon,vidaPokemon);
                                break;
                        case 2:
                               colaAcero(pokemon,vidaPokemon);
                                break;
                        case 3:
                               impacTrueno(pokemon,vidaPokemon);
                                break;
                }
        }*/
        ataqueEspecial(pokemon1,pokemon2){
                if (ataqueEfectivo()===true) {
                        alert(pokemon1.nombre+" lanzo un rayo y lo electrocuto ");
                        pokemon2.vida -=35;
                }else{
                        alert(`${pokemon1.nombre} no acerto el rayo`);
                }  
                return pokemon2.vida;
        }
}

class Bulbasaur extends Pokemon{
        constructor(nombre){
                super(nombre);
        }

        /*ataqueEspecial(opcion,pokemon,vidaPokemon){
                alert("Tienes entre 3 ataques para elegir: 1.Latigo Cepa 2.Hoja afilada 3.EnergiBola")
                switch (opcion) {
                        case 1:
                               latigoCepa(pokemon,vidaPokemon);
                                break;
                        case 2:
                               hojaAfilada(pokemon,vidaPokemon);
                                break;
                        case 3:
                               energiBola(pokemon,vidaPokemon);
                                break;
                }
        }*/
        ataqueEspecial(pokemon1,pokemon2){
                if (ataqueEfectivo()===true) {
                        alert(pokemon1.nombre+" tiro una latigo de cesped");
                        pokemon2.vida -=35;
                }else{
                        alert(`${pokemon1.nombre} no acerto el latigo`);
                }  
                return pokemon2.vida;
        }
}

//Elegir si se quiere hacer la pokebatalla
let opcion = parseInt(prompt("Quiere hacer la pokebatalla, escriba 1 para si y 2 para no"))
while (opcion===1) {
        alert("En esta batalla pokemon de 3 contra 3, puedes elegir entre 4 pokemones");
        const pokemones1=[];
        const pokemones2=[];
        let entrenador1 = prompt("Nombre del primer entrenador");
        alert(`${entrenador1} seleccione a sus 3 pokemones de batalla`);
        seleccionarEquipo(pokemones1);
        seleccionados(entrenador1,pokemones1)

        let entrenador2 = prompt("Nombre del segundo entrenador");
        alert(`${entrenador2} seleccione a sus 3 pokemones de batalla`);
        seleccionarEquipo(pokemones2);
        seleccionados(entrenador2,pokemones2)

        alert("Se inicia la batalla");

        //La batalla inicia en 100, si uno de ellos llega a 0 o menos, la batalla finaliza
        let winEntrenador1=0;
        let winEntrenador2=0;

        for (let index = 0; index < 3; index++) {
                bandera=true;
                while (pokemones1[index].vida>0 && pokemones2[index].vida>0) {
                        if (bandera) {
                               alert("peleará "+pokemones1[index].nombre+ " contra "+pokemones2[index].nombre);
                               bandera=false;  
                        }
                         
                        alert(`${entrenador1}, elija el ataque`);
                        let ataque = parseInt(prompt("Ataques disponibles 1.Arañazo 2.Placaje 3.Cabezazo 4.Ataque especial"));
                        pokemones2[index].vida= elegirAtaque(ataque,pokemones1[index],pokemones2[index]);

                        if (pokemones2[index].vida>0) {
                                 alert(pokemones2[index].nombre+" tiene una vida de "+pokemones2[index].vida);
                        }
                       

                        if (pokemones2[index].vida<=0) {
                                pokemones2[index].vida=0;
                                alert(pokemones1[index].nombre+" pokemon de"+entrenador1+" vencio a "+pokemones2[index].nombre+" pokemon de "+entrenador2);
                                winEntrenador1++;
                                break; // Aquí si el pokemon 1 llega a derrotar al pokemon 2 se rompe el ciclo
                        }
                        alert(`${entrenador2}, elija el ataque`);
                        ataque = parseInt(prompt("Ataques disponibles 1.Arañazo 2.Placaje 3.Cabezazo 4.Ataque especial"));
                         pokemones1[index].vida= elegirAtaque(ataque,pokemones2[index],pokemones1[index]);

                         if (pokemones1[index].vida>0) {
                                 alert(pokemones1[index].nombre+" tiene una vida de "+pokemones1[index].vida);
                         }

                         if (pokemones1[index].vida<=0) {
                                pokemones1[index].vida=0;
                                alert(pokemones2[index].nombre+" pokemon de "+entrenador2+" vencio a "+pokemones1[index].nombre+" pokemon de "+entrenador1);
                                winEntrenador2++;
                                break; // Aquí si el pokemon 1 llega a derrotar al pokemon 2 se rompe el ciclo
                        }
                }
                alert(entrenador1+" tiene "+winEntrenador1+" batallas ganadas y "+entrenador2 +"tiene "+winEntrenador2+" batallas ganadas")
        }
        

        if (winEntrenador1>winEntrenador2) {
                alert(`El vencedor es ${entrenador1}`);
        }

        if (winEntrenador2>winEntrenador1) {
                alert(`El vencedor es ${entrenador2}`);
        }

        opcion = parseInt(prompt("Si quieres otra pokebatalla coloca 1, si deseas parar coloque 2"));
}

alert("Salió del juego")









