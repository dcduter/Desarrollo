// metodos de propiedad

const reproductor = {
    reproducir : function (id) {
        console.log(`Reproduciendo Cancion con e ID: ${id}`)
    },
    pausar: function () {
        console.log('pausando...')
    },
    crearPlayList: function(nombre){
        console.log(`Creando la playList: ${nombre}`)
    }
    reproducirPlayList: function(nombre){
        console.log(`Reproduciendo la playList: ${nombre}`)
    },
    
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion: ${id}`)
}

reproductor.reproducir(3443);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlayList('Metal');
reproductor.reproducirPlayList('Metal');