/* Batalla Pokemon de 1 contra 1 */

/* Función para elegir pokemon*/
const elegirPokemon = function (numero) {
        let pokemon ="";
        switch (numero) {
                case 1:
                        pokemon="charmander";
                        break;
                case 2:
                        pokemon="bulbasaur";
                        break;
                case 3:
                        pokemon="squirtle";
                        break;
                case 4:
                        pokemon="pikachu";
                        break;
        }
        return pokemon;
}

/* Funcion para elegir ataque */
const elegirAtaque = function(numero,pokemon,vidaPokemon){
        let vida;
        switch (numero) {
                case 1:
                        vida =araniazo(pokemon,vidaPokemon);
                        break;
                case 2:
                        vida =placaje(pokemon,vidaPokemon);
                        break;
                case 3:
                        vida =cabezazo(pokemon,vidaPokemon);
                        break;
                case 4:
                        vida= ataqueEspecial(pokemon,vidaPokemon);
                        break;
        }

        return vida;
}

/* Ataques generales */
const araniazo = function (pokemon,vidaPokemon){
        if (ataqueEfectivo()===true) {
                alert(pokemon+" lanzó un arañazo");
                vidaPokemon -=5;
        }else{
                alert(`${pokemon} no acerto el arañazo`);

        }
        return vidaPokemon;
}


const placaje = function (pokemon,vidaPokemon){
        if (ataqueEfectivo()===true) {
                alert(pokemon+" atacó con placaje");
                vidaPokemon  -=10;
        }else{
                alert(`${pokemon} no acerto el placaje`)
        }
        return vidaPokemon;
}


const cabezazo = function (pokemon,vidaPokemon){
        if (ataqueEfectivo()===true) {
                alert(pokemon+" metió un cabezazo");
                vidaPokemon -=15;
        }else{
                 alert(`${pokemon} no acerto el cabezazo`);
        }  
        return vidaPokemon;
}


const ataqueEspecial = function (pokemon,vidaPokemon){
        if (ataqueEfectivo()===true) {
                alert(pokemon+" hizó el ataque especial");
                 vidaPokemon -=20;
        }else{
                alert(`${pokemon} no acerto el ataque especial`);
        }  
        return vidaPokemon;
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

//Elegir si se quiere hacer la pokebatalla
let opcion = parseInt(prompt("Quiere hacer la pokebatalla, escriba 1 para si y 2 para no"))
while (opcion===1) {
        alert("En esta batalla pokemon de 1 contra 1, puedes elegir 4 pokemones");
        let entrenador1 = prompt("Nombre del primer entrenador");
        alert(`${entrenador1} seleccione a su pokemon de batalla`);
        let numPokemon1 = validarPokemon();
        let pokemon1 =elegirPokemon(numPokemon1);
        alert(`${entrenador1} selecciono a ${pokemon1}`);

        let entrenador2 = prompt("Nombre del segundo entrenador");
        alert(`${entrenador2} seleccione a su pokemon de batalla`);
        let numPokemon2 =validarPokemon();
        let pokemon2 =elegirPokemon(numPokemon2);
        alert(`${entrenador2} selecciono a ${pokemon2}`);


        let vidaPoke1=100;
        let vidaPoke2= 100;

        alert("Se inicia la batalla");

        //La batalla inicia en 100, si uno de ellos llega a 0 o menos, la batalla finaliza
        while (vidaPoke1>0 && vidaPoke2>0) {  
                alert(`${entrenador1}, elija el ataque`);
                let ataque = parseInt(prompt("Ataques disponibles 1.Arañazo 2.Placaje 3.Cabezazo 4.Ataque especial"));
                vidaPoke2= elegirAtaque(ataque,pokemon1,vidaPoke2);
                alert(pokemon2+" tiene una vida de "+vidaPoke2);

                if (vidaPoke2<=0) {
                        break; // Aquí si el pokemon 1 llega a derrotat al pokemon 2 se rompe el ciclo
                }

                alert(`${entrenador2}, elija el ataque`);
                ataque = parseInt(prompt("Ataques disponibles 1.Arañazo 2.Placaje 3.Cabezazo 4.Ataque especial"));
                vidaPoke1 = elegirAtaque(ataque,pokemon2,vidaPoke1);
                alert(`${pokemon1} tiene una vida de ${vidaPoke1}`);
        }

        if (vidaPoke1>vidaPoke2) {
                alert(`El vencedor es ${entrenador1} con su pokemon ${pokemon1}`);
        }

        if (vidaPoke1<vidaPoke2) {
                alert(`El vencedor es ${entrenador2} con su pokemon ${pokemon2}`);
        }

        opcion = parseInt(prompt("Si quieres otra pokebatalla coloca 1, si deseas parar coloque 2"));
}









