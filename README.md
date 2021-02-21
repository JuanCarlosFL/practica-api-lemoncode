1) Instalar cliente graphQL
  npm install graphql-request graphql --save

2) Creamos una carpeta api dentro de core

3) Creamos un fichero graphql.client.ts, importamos el cliente, añadimos la url a la que tenemos que
  acceder y exportamos ese objeto para poder usarlo en los pods

4) Creamos un barrel para exportarlo

5) En el fichero character-colleciton.api.ts
  - importamos el cliente graphql
  - Como el query devuelve un objeto results con un array de characters typescript se me quejaba al
  devolverlo así que he creado dos interfaces para tiparlo
  - quitamos la constate de la url y modificamos el método con el query de graphql

6) hacemos lo mismo para el fichero character.api.ts
