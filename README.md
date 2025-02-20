<div align="center">

# ***_Whos That Pokemon_***

<img src="./img/portada.png" alt="portada.png"/>

</div>

<div align="justify">

## **Índice**
- [Preguntas](#preguntas)
  - [Pregunta 1](#p1)
  - [Pregunta 2](#p2)
  - [Pregunta 3](#p3)
  - [Pregunta 4](#p4)
  - [Pregunta 5](#p5)
  - [Pregunta 6](#p6)
  - [Pregunta 7](#p7)
  - [Pregunta 8](#p8)
  - [Pregunta 9](#p9)
- [Reto 1](#reto1)
  - [Paso 1](#1)
  - [Paso 2](#2)
  - [Paso 3](#3)
- [Reto 2](#reto2)
  - [Paso 1](#2.1)
  - [Paso 2](#2.2)
- [Reto 3](#reto3)
  - [Paso 1](#3.1)
  - [Paso 2](#3.2)
- [Reto 4](#reto4)
  - [Paso 1](4.1)
- [Reto 5](#reto5)
  - [Paso 1](5.1)
  - [Paso 2](5.2)
- [Reto 6](#reto6)
  - [Paso 1](6.1)
  - [Paso 2](6.2)
  - [Paso 3](6.3)

<div align="center">
<img src="./img/Shinx_sprite.gif" width="100" height="100" />   
<img src="./img/mew_sprite.gif" width="100" height="100" /> 
<img src="./img/giratina_sprite.gif" width="100" height="100" />     
</div>

___

## **Preguntas** <a name="preguntas"></a>
## **Reto 1**
- ### *¿Para qué sirve Vue Router, Pinia, Vitest, ESLint y Prettier?* <a name="p1"></a>
  Vue router nos permite navegar entre distintos componentes de Vue, Pinia es una herramiento para manejar la gestion, Vitest es para hacer tests, ESLint por su parte es para detectar mas facil errores en nuestro JavaScript y Prettier un formateador de codigo.

- ### *¿Qué es screaming architecture y qué ventajas tiene?* <a name="p3"></a>
  Screaming architecture es una arquitectura en la que no se depende tanto de un framework o libreria y asi mantener nuestro sistema de negocio mas libremente. 
- ### *¿Cómo le indicamos a Vue que usaremos TS en vez de JS?*<a name="p4"></a>
  Para indicar que usaremos ts en vez de js en la parte de script de cualquier componente vue añadimos la etiqueta `setup lang="ts"`

## **Reto 2**
- ### *¿Para qué sirven las [clases](#2.1) que hemos añadido?* <a name="p5"></a>

- ### *Saca una captura de como se ve actualmente nuestra aplicación. ¿No ves los cambios? Algo se te olvida... ¿qué es? Indica los archivos que has tenido que modificar.* <a name="p6"></a>
  Hay que modificar el archivo `App.vue` e indicar la pantalla que queremos que se vea, en este caso `PokemonGame.vue`

- ### *Utilizando una directiva de VueJS, ¿cómo ocultaríamos [esta](#2.1) sección por completo?* <a name="p7"></a>
  Las clases que hemos añadido indican que usaremos flex en direccion de columnas, que queremos que dicha seccion ocupe el ancho y largo de la pantalla y queremos que los elementos esten centrados 

- ### *¿Para qué crees que sirven? ¿Te aventuras a intentar averiguar cual será la lógica que implementemos en ellos?* <a name="p8"></a>
  PokemonPicture.vue será la imagen que nosotros mostremos al usuario del pokemon que debe adivinar y PokemonOptions.vue será la que tenga los botones para intentar adivinar dicho pokemon además de hacer visible si ha ganado o perdido. 

- ### *¿Qué es una propiedad computada?* <a name="p9"></a>
  Una propiedad computada es una variable asignada a otras variables y por ende se reevalua sola cuando una de sus variables asignadas cambia

## **Reto 1** <a name="reto1"></a>
  - ### *Paso 1: Crear el proyecto Vue* <a name="1"></a>
    Siguiendo el siguiente comando creamos el proyecto Vue:
    ```bash
    npm create vue@latest
    ```
    Y a continuacion seleccionamos las siguientes opciones:  
    <img src="./img/paso1.png" alt="Paso1.png"/>

    Nuestro Pokemon Game lo vamos a realizar siguiendo [Composition API](#p2) y además, nuestra estructura de archivos va a estar basada en [screaming architecture.](#p3)

 - ### *Paso 2: Modificar el proyecto base de Vue* <a name="2"></a>
    - Borrar el contenido de App.vue y deja la estructura básica de VueJS teniendo en cuenta que usaremos Composition API. Recuerda que vamos a utilizar TS en lugar de JS.

    - Añadir un mensaje "Hello World" a App.vue

    - En la carpeta de assets, borra los archivos base.css y logo.svg

    - Cambia el nombre de main.css de la carpeta assets a styles.css y modifica la ruta en el archivo main.ts para que funcione correctamente nuestra hoja de estilo.

    - Ejecuta el comando npm run dev y muestra el resultado.
    <img src="./img/paso2.png" alt="Paso2.png"/>
 
 - ### *Paso 3: Configurar Tailwind CSS* <a name="3"></a>
    - Configura el proyecto para hacer uso de Tailwind CSS. Consulta la documentación oficial y aplica los cambios donde sea necesario tal y como se indica. 

        - Instalar Tailwind via npm
        ```bash
        npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
        ```

        - Crear los ficheros de configuracion
        ```bash
        npx tailwindcss init -p
        ```

        - Incluir Tailwind al CSS (styles.css)
        ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```

</div>
<div align="center">
  <img src="./img/ready.png" alt="ready.png"/>
</div>

<div align="justify">

  ## **Reto 2** <a name="reto2"></a>
  - ### *Paso 1: Creando secciones en PokemonGame.vue* <a name="2.1"></a>
    Usando la etiqueta `<section>` de HTML, vamos a dividir nuestro template. Tendremos:
    Una sección que tenga un mensaje que indique al usuario que: Espere por favor y Cargando Pokémons. De tal manera que:
    ```html
    <section class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="text-3xl">Espere por favor</h1>
        <h3 class="animate-pulse">Cargando Pokémons</h3>
    </section>
    ```

    <img src="./img/reto2-1.png" alt="paso2.1"/>

  - ### *Paso 2: Añadir nueva seccion* <a name="2.2"></a>
   Ahora, vamos a crear otra nueva sección igual a la anterior pero que muestre al usuario el mensaje: ¿Cuál es este Pokémon?
   ```html
   <section class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="text-3xl">¿Cual es este Pokémon?</h1>
    </section>
   ```

## **Reto 3** <a name="reto3"></a>
- ### *Paso 1: Creando PokemonPicture.vue* <a name="3.1"></a>
  - Lo que vamos a hacer en este componente es importar directamente desde PokeApi una imagen de un pokemon (Ditto para ser más exactos).
  - Siguiendo la misma forma que en PokemonGame.vue de las secciones, en este componente nos crearemos una sección que contendrá una imagen del pokemon Ditto. (No es necesario realizar la conexión directamente a la API, copia y pega la url de la imagen y muéstrala).
  - El resultado de todos los pasos anteriores debe ser el siguiente:

  <img src="./img/reto3-1.png" alt="reto3-1.png"/>

  - Ahora bien, nosotros queremos que inicialmente la imagen de nuestro Pokémon esté completamente oculta como en la imagen del resultado final, ¿cómo hacemos esto? utilizando una clase de Tailwind CSS llamada brightness-0. Comprueba que la imagen de tu Pokémon ahora mismo esté completamente negra. Añade también la clase h-[200px] que nos sirve para poner a la imagen una altura de 200px

  <img src="./img/reto3-2.png" alt="reto3-2.png"/>

- ### *Paso 2: Creando PokemonOptions.vue* <a name="3.2"></a>
  - En una nueva sección vamos a "simular" lo que serían las opciones de los Pokémon. Esto lo vas a hacer creando una lista de HTML tal y como se muestra en la imagen final. 

    <img src="./img/reto3-resultado.png" alt="resultado.png"/>

  - Ahora, mediante clases css de tailwind, dale aspecto de botones a esa lista.

  - El color de fondo de nuestra aplicación es: #f1f1f1, para aplicarlo, ¿dónde debes colocar el código css correspondiente? aplícalo y muestra los cambios.   
  Colocamos el siguiente codigo en el `style` de `App.vue`
  ```css
  :global(body) {
  background-color: #f1f1f1;
  }
  ```

  <img src="./img/reto3-3.png" alt="resultado-custom.png"/>

## **Reto 4** <a name="reto4"></a>
- ### **Paso 1: Conectando a la pokeapi** <a name="4.1"></a>
  - En primer lugar vamos a crear un archivo que vamos a llamar usePokemonGame.ts dentro de la carpeta de composables.
  - Nuestro juego va a tener 3 estados: gana, pierde y jugando. Estos estados los vamos a almacenar en una propiedad reactiva. Como vamos a tener que usar estos estados, lo mejor va a ser que nos creemos una interfaz. Para ello, dentro de la carpeta pokemon vamos a crear una nueva llamada interfaces, y en él crearemos un archivo llamado game-status.enum.ts. Aunque técnicamente la enumeración no cuenta como una interfaz en sí, vamos a crearlo de esta manera. El contenido de este archivo es el siguiente:
  ```ts
  export enum GameStatus {
    Playing = 'playing',
    Won = 'won',
    Lost = 'lost'
  }
  ```
  - Ahora, crearemos un nuevo archivo llamado index.ts que será nuestro archivo de barril (archivo que exporta varios modulos desde una carpeta). 
  ```ts
  export * from './game-status.enum';
  ```
  - Volvemos a nuestro archivo usePokemonGame.ts:
  ```ts
  import { onMounted, ref } from 'vue';
  import { GameStatus } from '../interfaces';
  import axios from 'axios'

  export const usePokemonGame = () => {
    const gameStatus = ref<GameStatus>(GameStatus.Playing);
    const api = "https://pokeapi.co/api/v2/pokemon"

    const getPokemons = async () => {
      const response = await axios.get(api+"/?limit=151");
      
      console.log(response.data);
    }

    onMounted(() => {
      getPokemons();
    })

    return {
      gameStatus,
    };
  }
  ```

  - Comprueba que funciona  y muestra el resultado de la consola de la aplicación

  <img src="./img/reto4-1.png" alt="reto4-1.png"/> 
  - Los datos que hemos obtenido no son técnicamente los que nos interesan, ya que solo necesitamos el id y el nombre de los Pokemon. Por tanto, lo que vamos a hacer es crear un tipado estricto para que podamos tipar los resultados de las peticiones HTTP que hagamos a la API de Pokemon para ello creamos el fichero `pokemon-list-response.ts` con los tipos de las respuestas de la api y los exportamos en nuestro archivo de barril.   


  <img src="./img/reto4-2.png" alt="reto 4-2.png"/>

## **Reto 5** <a name="reto5"></a>
- ### **Paso 1: Creando nuestro propio tipo**<a name="5.1"></a>
    - Vamos a modificar el método getPokemons que hemos creado en el archivo usePokemonGame.ts para quedarnos solo con el nombre y el id de la respuesta
    - Exportálo de la misma forma que hemos hecho con los archivos hasta ahora. Volvamos a usePokemonGame.ts. Importamos la interfaz que acabamos de crear

    ```ts
    const pokemonsArray = response.data.results.map( pokemon => {
        const urlParts = pokemon.url.split("/");
        const id = urlParts[urlParts.length - 2] ?? 0;
        return {
            name : pokemon.name,
            id: +id
        }
      })

      return pokemonsArray;
    ```
    - ¿Qué es lo que estamos haciendo? ¿Para qué sirve la línea de código: const id = urlParts[urlParts.length - 2] ?? 0;?   

      Esta linea nos permite tomar la id desde la url del pokemon siendo que separamos el texto entre los `/` de la url y tomamos la posicion en la que esta su id, en caso de que esto falle decimos que tiene la id 0.
    
      <img src="./img/reto5-1.png" alt="reto5-1"/>

- ### **Paso 2: Randomizar la lista devuelta** <a name="5.2"></a>
  - El resultado ahora nos muestra una lista de los 151 pokemons ordenados según su id. Nosotros NO queremos que estén ordenados los pokemons, por tanto, vamos a hacer que nuestra lista nos la devuelva de forma aleatoria, ¿se te ocurre cómo?
  
  En vez de devolver la lista hacemos el siguiente return:
  ```ts
  return pokemonsArray.sort(() => {return 0.5 - Math.random();});
  ```

  <img src="./img/reto5-2.png" alt="reto5-2.png"/>

  ## **Reto 6**<a name="reto6"></a>
  - ### **Paso 1: Alternar secciones** <a name="6.1"></a>
  - Para continuar, lo que debemos hacer es poder determinar varias propiedades computadas que vamos a necesitas, por ejemplo: cuando nuestra página está cargando. Hay un momento en la petición HTTP está trayendo la información, por tanto, podemos crear una propiedad computada para que se cambie automáticamente. 
  - En usePokemonGame.ts crea una nueva propiedad computada llamada isLoading.
  - Mostrar en PokemonGame.vue el mensaje de "Espere por favor" y "Cargando Pokemons":
  
    <img src="./img/reto6-1.png" alt="reto6-1"/>
  
  - Ahora vamos a crear otra propiedad reactiva a la que vamos a llamar pokemonOptions:

  ```ts
  const pokemonOptions = ref<Pokemon[]>([]);
  ```

  - ### **Paso 2: Elegir Pokemon** <a name="6.2"></a> 
  - ¿Cómo determinamos cuál es el Pokemon correcto?    
    Tenemos que ser capaces de determinar cual es el Pokemon correcto. Vamos a hacerlo mediante una propiedad computada. Para ello vamos a crear:

    ```ts
    const randomPokemon = computed(() => {
        const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length);
        return pokemonOptions.value[randomIndex];
    })
    ```

    <img src="./img/reto6-2.png" alt="reto6-2.png"/>

   - Ahora lo que debemos hacer es saber cual es la imagen correspondiente con ese Pokémon, pasamos por props el id del pokemon a PokemonPicture y dentro creamos una variable computada.

    ```ts
    const pokemonImage = computed (() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonId}.png`)
    ```

   <img src="./img/reto6-3.png" alt="reto6-3"/>

   - Ahora tenemos que saber, cuando el usuario haga click sobre un botón, emitir cual es esa opción, para ello creamos defineEmits: 
    ```ts
    defineEmits<{
        selectedOption : [id:number]
    }>();
    ```
    
    <img src="./img/reto6-4.png" alt="reto6-4"/>

  - ### **Paso 3: Ganar el juego** <a name="6.3"></a>
    - Ahora vamos a centrarnos en saber cuando el jugador gana
    ```ts
    const checkAnswer = (id:number) => {
        const hasWon = randomPokemon.value.id === id;

        if (hasWon) {
            gameStatus.value = GameStatus.Won;
            confetti({
                particleCount: 300,
                spread: 150,
                origin: { y: 0.6 },
            });
            return;
        }

        gameStatus.value = GameStatus.Lost;
    }
    ```

## Resultado final

<img src="./img/reto6-5.png" alt="reto6-5"/>

</div>