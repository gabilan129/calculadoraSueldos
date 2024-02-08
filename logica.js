const sueldo = document.querySelector("#sueldo")
const antiguedad = document.querySelector("#antiguedad")
const descuentos = document.querySelectorAll("#descuentos")
const descuentoExtra = document.querySelector("#descuentosExtra")
const btnSuma = document.querySelector("#btnSuma")
const cartel = document.querySelector(".textoCartel")
const feriado = document.querySelector("#feriado")
const calculadora = document.querySelector(".calculadora")
const btnAgregar = document.querySelector("#btnAgregar")


let descuentosTotal = 0

console.log(descuentosTotal)

function fundescuento() {

    descuentos.forEach((descuento) => {
        if (descuento.checked == true) {
            descuentosTotal += parseFloat(descuento.value)

        }
    })
}
function botonDeAgregar(){

    //? btnAgregar Descuento extra fin inicio crear un elemento nuevo para descuento
    let totalDescuentoExtra = 0
    function generarId() {
        return Math.floor(Math.random() * 1000000);
    }
    
    btnAgregar.addEventListener("click",(e) => {
        
        const descuentoNuevo = document.createElement("input")
        const descuentoNuevoLabel = document.createElement("label")
        const idDescuento = generarId();
        descuentoNuevo.id = `descuentoExtra${idDescuento}`
        
        descuentoNuevo.type="number"
        descuentoNuevoLabel.setAttribute("for",`descuentoExtra${idDescuento}`)
        descuentoNuevoLabel.textContent="Descuento Extra"
        calculadora.appendChild(descuentoNuevo)
        calculadora.appendChild(descuentoNuevoLabel)
        let valorDescuentoGlobal
        // Obtener el valor del input después de que haya sido añadido al DOM
        
        descuentoNuevo.addEventListener("change", e => {
            
            valorDescuentoGlobal = e.target.value;
            // ... hacer algo con el valor del descuento
            
            
            let valorGloblar = 0
            descuentoNuevo.forEach(vdg => {
                valorGloblar += parseFloat(vdg.value)
                
            });
            console.log(valorGloblar)
        });
    })
    
    
    //?btnAgregar Descuento extra fin : TODA VIA NO FUNCIONA
    
} // no funciona asi que no lo estoy llamando en ningun lado

    
let descuentosATotal = 0

btnSuma.addEventListener("click", () => {
    if (cartel.textContent == "" && feriado.value > 0) {

        fundescuento()
        let total = parseInt(sueldo.value) + (parseInt(antiguedad.value) * 8063)
        let horaSimple = (total / 192) * 2
        let diaFeriado = horaSimple * 8
        total = total + (diaFeriado * feriado.value)
        console.log(diaFeriado)
        let totalConDescuento = (total * descuentosTotal) / 100
        let totalGeneral = totalConDescuento - descuentoExtra.value
        console.log(totalGeneral)
        total = total - totalConDescuento
        total = total - descuentoExtra.value
        cartel.textContent = `Su total a cobrar es de $ ${parseFloat(total.toFixed())} y con viatico $ ${parseFloat(total.toFixed()) + 73800}`
        console.log(total)
    } else if (cartel.textContent == "") {
        fundescuento()

        let total = parseInt(sueldo.value) + (parseInt(antiguedad.value) * 8063)
        let totalConDescuento = (total * descuentosTotal) / 100
        let totalGeneral = totalConDescuento - descuentoExtra.value
        console.log(totalGeneral)
        total = total - totalConDescuento
        total = total - descuentoExtra.value
        cartel.textContent = `Su total a cobrar es de $ ${parseFloat(total.toFixed())} y con viatico $ ${parseFloat(total.toFixed()) + 73800}`
        console.log(total)
    } else {
        console.log("Actualmente ya hay un valor reinicie la calculadora")
        window.location.reload(); // funcion que reinicia el DOM

    }
})



