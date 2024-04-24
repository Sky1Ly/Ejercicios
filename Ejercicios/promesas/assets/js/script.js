let header = document.getElementById("header")


async function consultaData() {
    let url = "https://jsonplaceholder.typicode.com/photos"
    let options = { method: "GET" }

    try {
        const response = await fetch(url, options)
        const result = await response.json()
        return result

    } catch (error) {
        console.error(error)
    }
}

async function recorrerData() {
    let data = await consultaData()

    for (let i = 0; i < 20 && i < data.length; i++) {
        console.log(data[i])
    }
}

async function dataEnviada() {
    setTimeout(() => {
        muestraMensajeDataEnviada()
    }, 3000)
}

async function muestraMensajeDataEnviada(){
    console.log("Los datos han sido enviados")
}

dataEnviada()
recorrerData()
