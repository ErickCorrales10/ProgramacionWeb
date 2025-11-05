function obtenerDatos() {
    return {
        rfcReceptor: document.getElementById("txt-rfc-receptor").value,
        razonSocial: document.getElementById("txt-razon-social").value,
        regimenFiscal: document.getElementById("txt-regimen-fiscal").value,
        codigoPostal: document.getElementById("txt-codigo-postal").value,
        calle: document.getElementById("txt-calle").value,
        numExterior: document.getElementById("txt-num-exterior").value,
        numInterior: document.getElementById("txt-num-interior").value,
        colonia: document.getElementById("txt-colonia").value,
        ciudad: document.getElementById("txt-ciudad").value,
        municipio: document.getElementById("txt-municipio").value,
        estado: document.getElementById("txt-estado").value,
        email: document.getElementById("txt-email").value,
        contacto: document.getElementById("txt-contacto").value

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
    texto.push('\t<datosFiscales>\n')
    texto.push('\t\t<rfcReceptor>')
    texto.push(convertirXML(datos.rfcReceptor))
    texto.push('</rfcReceptor>\n')
    texto.push('\t\t<razonSocial>')
    texto.push(convertirXML(datos.razonSocial))
    texto.push('</razonSocial>\n')
    texto.push('\t\t<regimenFiscal>')
    texto.push(convertirXML(datos.regimenFiscal))
    texto.push('</regimenFiscal>\n')
    texto.push('\t\t<codigoPostal>')
    texto.push(convertirXML(datos.codigoPostal))
    texto.push('</codigoPostal>\n')
    texto.push('\t</datosFiscales>\n')
    texto.push('\t<datosFacturacion>\n')
    texto.push('\t\t<calle>')
    texto.push(convertirXML(datos.calle))
    texto.push('</calle>\n')
    texto.push('\t\t<numExterior>')
    texto.push(convertirXML(datos.numExterior))
    texto.push('</numExterior>\n')
    texto.push('\t\t<numInterior>')
    texto.push(convertirXML(datos.numInterior))
    texto.push('</numInterior>\n')
    texto.push('\t\t<colonia>')
    texto.push(convertirXML(datos.colonia))
    texto.push('</colonia>\n')
    texto.push('\t\t<ciudad>')
    texto.push(convertirXML(datos.ciudad))
    texto.push('</ciudad>\n')
    texto.push('\t\t<municipio>')
    texto.push(convertirXML(datos.municipio))
    texto.push('</municipio>\n')
    texto.push('\t\t<estado>')
    texto.push(convertirXML(datos.estado))
    texto.push('</estado>\n')
    texto.push('\t\t<correoElectronico>')
    texto.push(convertirXML(datos.email))
    texto.push('</correoElectronico>\n')
    texto.push('\t\t<contacto>')
    texto.push(convertirXML(datos.contacto))
    texto.push('</contacto>\n')
    texto.push('\t</datosFacturacion>\n')
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
        descargarArchivo(generarXML(datos), 'datos.xml')
    }, false
)