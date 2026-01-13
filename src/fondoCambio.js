 const mapa = new Map([
        [/snow/i, "src/VeletaNieve.png"],     
        [/storm/i, "src/veletaTormenta.png"],  
        [/clear/i, "src/veletaSol.png"],  
        [/rain/i, "src/veletaLluvia.png"],     
        [/fog|mist/i, "src/veletaNeblina"], 
        [/cloud/i, "src/veletaNublado.png"]  
          
    ]);

    let nuevoFondo = null;
export function cambioFondo(estado) {
    
    for (let [patron, imagen] of mapa) {
        if (patron.test(estado)) {
            nuevoFondo = imagen;
            break;
        }
    }

    
    if (!nuevoFondo) {
        nuevoFondo = "src/veleta.jpg";
    }

    
    const img = document.querySelector(".fondo");
    img.src = nuevoFondo;
}
