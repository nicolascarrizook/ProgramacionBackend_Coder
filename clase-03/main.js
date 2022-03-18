const fs = require('fs');

class Contenedor {
    nombreArchivo;
    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
    }

    save(data) {
        fs.writeFileSync(this.nombreArchivo, JSON.stringify(data));
        return data.id;
    }

    getAll() {
        let data = fs.readFileSync(this.nombreArchivo);
        return JSON.parse(data);
    }

    getById(id) {
        if(id) {
            const data = this.getAll();
            return data.find(item => item.id === id);
        }
    }

    deleteById(id) {
        if(id) {
            const data = this.getAll();
            const newData = data.filter(item => item.id !== id);
            fs.writeFileSync(this.nombreArchivo, JSON.stringify(newData));
            return true;
        }
    }

    deleteAll() {
        fs.writeFileSync(this.nombreArchivo, '[]');
    }

}

async function cargarArchivo () {
    const nombreArchivo = 'data.json';
    const contenedor = new Contenedor(nombreArchivo);

    const data = {
        id: 1,
        nombre: 'Contenedor 1',
        capacidad: '20',
        tipo: 'A',
        estado: 'Disponible'
    }   

    try {
        const id = await contenedor.save(data);
        console.log(id);
    }

    catch (error) {
        console.log(error);
    }

    const data2 = {
        id: 2,
        nombre: 'Contenedor 2',
        capacidad: '30',
        tipo: 'B',
        estado: 'Disponible'
    }

    try {
        const id = await contenedor.save(data2);
        console.log(id);
    }

    catch (error) {
        console.log(error);
    }
}

cargarArchivo();