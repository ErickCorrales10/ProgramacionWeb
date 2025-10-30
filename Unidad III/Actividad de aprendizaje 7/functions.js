function obtenerDatos() {
    return {
        control: document.getElementById("txtcontrol").value,
        nombre: document.getElementById("txtnombre").value,
        carrera: document.getElementById("txtcarrera").value,
        telefono: document.getElementById("txttelefono").value,
        direccion: document.getElementById("txtdireccion").value,
        nss: document.getElementById("txtnss").value,
        fecha: (new Date()).toLocaleDateString()
    }
}

function convertirXML(cadena) {
    if (typeof cadena !== 'string')
        return ''

    cadena = cadena.replace('&', '&amp;')
        .replace('<', '&lt;')
        .replace('>', '&gt;')
        .replace('"', '&quot;')

    return cadena
}

// Generar un objeto con los datos de un archivo XML

function generarXML(datos) {
    var texto = []
    texto.push('<?xml version="1.0" encoding="UTF-8"?>\n')
    texto.push('<datos>\n')
    texto.push('\t<control>')
    texto.push(convertirXML(datos.control))
    texto.push('</control>\n')
    texto.push('\t<nombre>')
    texto.push(convertirXML(datos.nombre))
    texto.push('</nombre>\n')
    texto.push('\t<carrera>')
    texto.push(convertirXML(datos.carrera))
    texto.push('</carrera>\n')
    texto.push('\t<telefono>')
    texto.push(convertirXML(datos.telefono))
    texto.push('</telefono>\n')
    texto.push('\t<direccion>')
    texto.push(convertirXML(datos.direccion))
    texto.push('</direccion>\n')
    texto.push('\t<nss>')
    texto.push(convertirXML(datos.nss))
    texto.push('</nss>\n')
    texto.push('\t<fecha>')
    texto.push(convertirXML(datos.fecha))
    texto.push('</fecha>\n')
    texto.push('</datos>\n')

    // Especificar el tipo correcto XML en este caso
    return new Blob(texto, {
        type: 'application/xml'
    })
}

function descargarArchivo(contenidoEnBlob, nombreArchivo) 
{
    var reader = new FileReader();
    reader.onload = function (event) 
    {
        var save = document.createElement('a');
        save.href = event.target.result;
        save.target = '_blank';
        save.download = nombreArchivo || 'archivo.dat';
        var clicEvent = new MouseEvent('click', 
            {
            'view': window,
                'bubbles': true,
                'cancelable': true
            });
        save.dispatchEvent(clicEvent);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    };
    reader.readAsDataURL(contenidoEnBlob);
};


document.getElementById('boton-xml').addEventListener('click',
    function () {
        var datos = obtenerDatos()
        descargarArchivo(generarXML(datos), 'archivo.xml')
    }, false
)