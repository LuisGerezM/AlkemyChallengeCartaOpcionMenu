# Alkemy Challenge "Carta de pciones de Menús" 

APIS:
→ Autenticación:
http://challenge-react.alkemy.org/ 

→ API FOOD
https://spoonacular.com/food-api/docs#Search-Recipes-Complex


## Requerimientos Funcionales

En la pantalla de Home se deberá mostrar, además de los platos que conforman el menú:
    ● Acumulativo de precio del menú.
    ● Promedio de tiempo de preparación entre todos los platos.
    ● Promedio de Healt Score entre todos los platos.
    ● El menú debe tener 4 platos. Debe haber 2 veganos y 2 que no lo sean. Esto debe
    validarse al intentar agregar un nuevo plato.
    ● Se deberá poder eliminar un plato del menú, lo que generará nuevamente los promedios
    y acumulativos (los mismos deben estar almacenados en el estado del componente
    utilizando Hooks)

## Requerimientos técnicos

Aprovechando las características de React, deberán crearse las siguientes secciones, y modularizar las mismas en componentes reutilizables.

Además, para el manejo de peticiones HTTP deberá utilizarse la librería Axios. Y el sitio deberá ser responsive, y utilizar Bootstrap como punto de partida para aprovechar las características de la librería.

#### 1. Formulario de Login
El formulario se deberá renderizar al ingresar a cualquier ruta si el usuario no está autenticado, conteniendo los campos:

    ● Email.
    ● Password.
    ● Botón de “Enviar”.

Al hacer click en “Enviar”, se deberá validar que ambos campos no estén vacíos, y mostrar un mensaje al usuario si lo estuviesen. Caso contrario, se deberá realizar una petición POST a la siguiente url, con los campos email y password en el BODY.

Los datos válidos para obtener un token son:

    ● Email: challenge@alkemy.org
    ● Password: react

Se debe mostrar algún tipo de feedback al usuario mientras se está procesando la petición, no permitiendo que vuelva a accionar el botón de login hasta obtener una respuesta.

En el caso de obtener un error de la API, se deberá mostrar una alerta (utilizando sweet alert), mientras que si es satisfactorio deberá redirigir al Home y almacenar el token obtenido en localStorage. Para
realizar las validaciones no es necesario utilizar ninguna librería.