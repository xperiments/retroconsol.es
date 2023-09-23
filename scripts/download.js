const fs = require('fs');
const https = require('https');

// URL del archivo a descargar
const url = 'https://e.bambulab.com/query.php?lang=en';
const archivoDescargado = 'products/p1touch/resources/hms.json';

// Realizar la descarga del archivo
https.get(url, (response) => {
    if (response.statusCode === 200) {
        let datos = '';

        response.on('data', (chunk) => {
            datos += chunk;
        });

        response.on('end', () => {
            // Guardar los datos descargados en un archivo local
            fs.writeFile(archivoDescargado, datos, (error) => {
                if (error) {
                    console.error('Error al guardar el archivo descargado:', error);
                } else {
                    console.log('Archivo descargado y guardado con éxito.');

                    // Luego puedes procesar el archivo aquí
                    procesarArchivo(archivoDescargado);
                }
            });
        });
    } else {
        console.error('Error al descargar el archivo. Código de estado:', response.statusCode);
    }
}).on('error', (error) => {
    console.error('Error al realizar la solicitud:', error);
});

// Función para procesar el archivo
function procesarArchivo(archivo) {
    // Aquí puedes agregar tu lógica de procesamiento
    console.log('Procesando el archivo:', archivo);
}