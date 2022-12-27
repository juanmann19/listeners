//Arreglo con paises iniciales
const paises = [
    {
        nombre: "Guatemala",
        bandera: "https://bit.ly/3Bwr2rm",
        capital: "Ciudad de Guatemala",
        idioma_oficial: "Español",
        moneda: "Quetzal"
    },
    {
        nombre: "Argentina",
        bandera: "https://bit.ly/3BEJC0y",
        capital: "Buenos Aires",
        idioma_oficial: "Español",
        moneda: "Peso"
    },
    {
        nombre: "Francia",
        bandera: "https://bit.ly/3HFZ7t5",
        capital: "Paris",
        idioma_oficial: "Frances",
        moneda: "Euro"
    },
    {
        nombre: "El Salvador",
        bandera: "https://bit.ly/3uRN5F6",
        capital: "San Salvador",
        idioma_oficial: "Español",
        moneda: "Dolar"
    },
    {
        nombre: "Honduras",
        bandera: "https://bit.ly/3UWcrMM",
        capital: "Tegucigalpa",
        idioma_oficial: "Español",
        moneda: "Lempira"
    }
];

agregarMonitores();

//funcion para agregar listeners a los botones
function agregarMonitores() {
    document.getElementById('mostrarPaises').addEventListener("click",mostrarPaises);
    document.getElementById('agregarPais').addEventListener("click",agregarPais);
    //TODO
}


//funcion que mostrara las paises en la pagina
function mostrarPaises() {
  let tablebody = "";
  for(let pais of paises){
     tablebody+=
     `
     <table class="table table-sm table-success table-striped bg-gradient-warning">
                <tbody>
                    <th>
                        Nombre
                    </th>
                    <th>
                        Capital
                    </th>
                    <th>
                        Idioma
                    </th>
                    <th>
                        Moneda
                    </th>
                    <tr>
                        <td>${pais.nombre}</td>
                        <td>${pais.capital}</td>
                        <td>${pais.idioma_oficial}</td>
                        <td>${pais.moneda}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                    <td colspan="4" class="text-center">
                        <img src="${pais.bandera}" alt="" srcset="">
                    </td>

                    </tr>
                </tfoot>
                
            </table>
     
     `;
    }
    document.getElementById("paises").innerHTML = tablebody;
}

//funcion que permite agregar un pais al arreglo
function agregarPais() {
    let newpais = {
        nombre: prompt("Ingresa el nombre"),
        bandera: prompt("Ingresa la bandera"),
        capital: prompt("Ingresa la capital"),
        idioma_oficial: prompt("Ingresa el idioma"),
        moneda: prompt("Ingresa la moneda") 
    }
    if(cheq(newpais)){
        paises.unshift(newpais);
        mostrarPaises();
    }
    else{
        alert("Uno o mas campos estan vacios, pais no agregado")
    }

}

function cheq(obj) {
    for (var key in obj) {
        if (obj[key] === null || obj[key] == "")
            return false;
    }
    return true;
}


