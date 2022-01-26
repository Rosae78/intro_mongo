//PDF INTRODUCCION A LAS BASES DE DATOS NOSQUL USANDO MONGODB 
//ej 1

const doc1= { "tipo": "libro",
    "titulo": "Java para todos",
    "ISBN": "987-1-2344-5334-8",
    "editorial": "Anaya",
    "Autor": ["Pepe Caballero", "Isabel Sanz", "Timoteo Marino"],
    "capítulos": [
    {"capitulo":1,
    "titulo": "Primeros pasos en Java",
    "longitud": 20
    },
    {"capitulo":2,
    "titulo": "Primeros pasos en Java",
    "longitud": 25
    }
    ]
    }

const doc2= { "tipo": "CD",
    "Artista": "Los piratas",
    "Titulo": "Recuerdos",
    "canciones": [
    {"cancion":1,
    "titulo": "Adiós mi barco",
    "longitud": "3:20"
    },
    {"cancion":2,
    "titulo": "Pajaritos",
    "longitud": "4:15"
    }
    ]
    }

const doc3= { "tipo": "DVD",
    "Titulo": "Matrix",
    "estreno": 1999,
    "actores": [
    "Keanu Reeves",
    "Carry-Anne Moss",
    "Laurence Fishburne",
    "Hugo Weaving",
    "Gloria Foster",
    "Joe Pantoliano"
    ]
    }
//primero hay que copiar las variables en el terminal. Si quremos ver si
//esta bien insertado, solo tenemos que pedir doc1 para ver que hay en doc1

    db.media.insertMany([doc1, doc2, doc3])

//ej 2

{"tipo": "DVD",
    "Titulo": "Matrix",
    "estreno": 1999,
    "genero":"accion"
    }

    const doc3Mod= { "tipo": "DVD",
    "Titulo": "Matrix",
    "estreno": 1999,
    "genero": "accion"}

    db.media.updateOne({_id:ObjectId("61efe45dbc2631aaceaa3d39")},
    [{$set:{genero: "accion"}},
    {$unset:"actores"}])
    //db.media.findOneAndReplace()
    //db.media.findOneAndUpdate()

//ej 3

{"tipo": "Libro",
    "Titulo": "Constantinopla",
    "capitulos":12,
    "leidos":3
    }

const doc1Mod = {"tipo": "Libro",
"Titulo": "Constantinopla",
"capitulos":12,
"leidos":3
}

db.media.insertOne(doc1Mod)

//para incrementar

db.media.updateOne({Titulo: "Constantinopla"},{$inc:{leidos:5}})

//ej4
$set
//ej5
$unset

//ej  6) Actualizar el documento referido al libro «Java para todos»
//añadiendo el autor «María Sancho» al array de autores

//ej 7

//ej 8 estos 3 ejercicios con array
//hasta el 13 son arrays
