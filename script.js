document.addEventListener('DOMContentLoaded', () => {

    function enviarDatos() {
        let nom = document.getElementById('nombre').value;
        let ape = document.getElementById('apellido').value;
        let nac = document.getElementById('fechanac').value;

        fetch('https://jsonplaceholder.typicode.com/users', {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({
                nombre: nom,
                apellido: ape,
                fechanac: nac
            })

        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('nombre').value = "";
                document.getElementById('apellido').value = "";
                document.getElementById('fechanac').value = "";
                console.log(data);
            })
    }

    document.getElementById('boton').addEventListener('click', () => {
        enviarDatos();
    })
})