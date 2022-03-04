class Usuario {
    nombre   = '';
    apellido = '';
    libros   = [];
    mascotas = [];

    constructor(nombre, apellido, libros, mascotas){
        this.nombre   = nombre;
        this.apellido = apellido;
        this.libros   = [libros];
        this.mascotas = [mascotas];
    }

    getFullName(){
        return console.log(`Nombre: ${this.nombre}\nApellido: ${this.apellido}`);
    }

    addMascotas(mascota){   
        let mascotasArr = [];
        this.mascotas.forEach(item => {
            item !== undefined  && mascotasArr.push(item) 
        })
        mascotasArr.push(mascota);
        this.mascotas = mascotasArr;
    }

    countMascotas(){
        console.log(`${this.mascotas.length} mascotas`);
    }

    addBook(nombre, autor){  
        let librosArr = [];
        this.libros.forEach(item => {
            item !== undefined  && librosArr.push(item) 
        })
        librosArr.push({nombre, autor});
        this.libros = librosArr;
    }

    getBookNames(){
        let arrNombres = [];
        this.libros.forEach(item => {
            arrNombres.push(item.nombre) 
        })
        console.log(`Libros que posee: ${arrNombres} `);
        return arrNombres;
    }

}

const usuario = new Usuario('Juan', 'Perez');  

usuario.getFullName();
usuario.addMascotas('Perro');
usuario.addMascotas('Gato');
usuario.addMascotas('Conejo');
usuario.addBook('El señor de los anillos', 'J.R.R. Tolkien');
usuario.addBook('El señor de los anillos 2', 'J.R.R. Tolkien');
usuario.addBook('El señor de los anillos 3', 'J.R.R. Tolkien');
usuario.countMascotas();
usuario.getBookNames();
