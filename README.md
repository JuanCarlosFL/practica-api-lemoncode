En este ejercicio se usa el servidor local json-server

- Modificamos en el server del archivo de los datos mock y el package.json para que llame al nuevo archivo
- En el characters-data.json se añade una nueva propiedad 'bestSentences' y se hacen las modificaciones
en los archivos mappers y en los modelos
- Se modifica el CardComponent para que muestre la nueva propiedad
- Se modifica el character.component.tsx para incluir un formulario para poder modificar la nueva propiedad
- Se añade el método saveCharacter para realizar una petición PUT al server y guardar los cambios
