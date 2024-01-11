<<<<<<< HEAD
## Ejercitación POO - ADA Backend 15va ##
### Consigna: ###
=======
##Ejercitación POO - ADA Backend 15va##

###Consigna:###

>>>>>>> 6af89b46366cf9ec625d9e4b8ff4fb8f0cf24c81
A continuación se detallarán los puntos de forma enumerada de como se deberá desarrollar
el trabajo.
1. Inicializar un proyecto en node.
2. Instalar las dependencias ts-node y typescript como dependencia de desarrollo.
3. Crear el script para ejecutar el archivo que contendrá la lógica.
4. Inicializa la configuración de typescript y descomenta las características necesarias que
vimos a lo largo de las clases.
5. Creación del fichero. Tené en cuenta que la raiz del proyecto es la carpeta src.
6. Crea las carpetas y archivos pertinentes al modelo MVC (controlador, modelo, base de
dato).
7. En la carpeta database, crear un archivo foods.json con la siguiente estructura. Copia y
pega el contenido que aparece debajo:
<<<<<<< HEAD

```

=======
´´´
>>>>>>> 6af89b46366cf9ec625d9e4b8ff4fb8f0cf24c81
[
{
"name": "Sushi",
"ingredients": ["rice", "fresh fish", "seaweed nori", "rice vinegar", "sugar"],
"culture": "Japanese"
},
{
"name": "Pizza",
"ingredients": ["pizza dough", "tomato sauce", "cheese", "pepperoni", "vegetables"],
"culture": "Italian"
},
{
"name": "Taco",
"ingredients": ["corn tortilla", "grilled beef", "onion", "cilantro", "salsa"],
"culture": "Mexican"
},
{
"name": "Chicken Curry",
"ingredients": ["chicken", "curry powder", "coconut milk", "onion", "ginger"],
"culture": "Indian"
},
{
"name": "Pasta Carbonara",
"ingredients": ["spaghetti", "bacon", "eggs", "parmesan cheese", "black pepper"],
"culture": "Italian"
}
]
<<<<<<< HEAD

```
8. En la carpeta Models desarrollarás la lógica. Por eso deberás aquí leer el archivo de
=======
´´´

:) 8. En la carpeta Models desarrollarás la lógica. Por eso deberás aquí leer el archivo de
>>>>>>> 6af89b46366cf9ec625d9e4b8ff4fb8f0cf24c81
foods.json. Con fs, o con alguna de las otras formas que ya vimos en clases.
9. Crear una clase Food que pida las propiedades correspondiente a cada comida de la
base de datos, es decir: name, ingredients, culture.
10. Crea dentro de esta clase un método que muestre en consola toda la data de cada
comida en formato string. Atención con esto último, en formato string, no se debe mostrar el
objeto con la data.
11. Crea un método estático que busque en la base de datos una Food mediante la cultura,
la búsqueda debe ser estricta.
12.  Crea otra clase a partir de Food, para ello tendrás que utilizar la Herencia. La clase
nueva se deberá llamar ItalianFood, que además de las propiedades heredadas de Food,
pedirá la city en donde se originó dicha comida.
<<<<<<< HEAD
13.  Instanciar un nuevo objeto a partir de Food e instanciar un objeto a partir de ItalianFood.
14.  Ejecutar el método estático de Food y mostrar en consola el objeto creado a partir de
ItalianFood.
=======
13. Instanciar un nuevo objeto a partir de Food e instanciar un objeto a partir de ItalianFood.
14. Ejecutar el método estático de Food y mostrar en consola el objeto creado a partir de
ItalianFood.
>>>>>>> 6af89b46366cf9ec625d9e4b8ff4fb8f0cf24c81
