contacto = [
    {
        nombre: "Ronald",
        apellido: "Nav",
        numero: "313265498",
        gustos: ['pizza', 'programación', 'enseñar']

    },
    {
        nombre: 'Harry',
        apellido: 'Potter',
        numero: '0994372684',
        gustos: ['Hogwarts', 'magia']
    },

    {
        nombre: 'Sherlock',
        apellido: 'Holmes',
        numero: '0487345643',
        gustos: ['clases interesantes', 'violin']
    },
    {
        nombre: 'Goku',
        apellido: 'Son',
        numero: '123412523',
        gustos: ['Artes Marciales', 'Milk', 'Luchar']
    },
    {
        nombre: 'Barry',
        apellido: 'Allen',
        numero: '2356346346',
        gustos: ['Correr superrapido', 'Iris West', 'Misterios']
    },
    {
        nombre: 'Tony',
        apellido: 'Star',
        numero: '24634745',
        gustos: ['Mujeres', 'Tecnología', 'Dinero']
    },
    {
        nombre: 'Peter',
        apellido: 'Parker',
        numero: '24634745',
        gustos: ['Ayudar a tia May', 'Ser un buen vecino']
    },


]

const boton = document.getElementById('buscar')
const display = document.querySelector('.mostrar')
const nombre = document.getElementById('nombre')
let seleccionar = document.getElementById('propi')

boton.addEventListener('click',() => {

    if (nombre.value === '' || seleccionar.value === '') {
        alert('Debe de llenar todas las casillas para continuar')
    }else{

        for (let i in contacto) {

            if(contacto[i].nombre===nombre.value){
                if (seleccionar.value === 'todos') {
                    display.innerHTML = ('Apellido:' + contacto[i].apellido + '<br>')
                    display.innerHTML += ('Numero:' + contacto[i].numero + '<br>')
                    display.innerHTML += ('Gustos:' + contacto[i].gustos)
                }
                if(seleccionar.value === 'apellido'){
                    display.innerHTML = ('Apellido:' + contacto[i].apellido)
                }
                if(seleccionar.value === 'numero'){
                    display.innerHTML = ('Numero:' + contacto[i].numero)
                }
                if(seleccionar.value === 'gustos'){
                    display.innerHTML = ('Gustos:' + contacto[i].gustos)
                }
            }
        }
    }
})


nombre.addEventListener('focus',()=>{
    nombre.value=''
    seleccionar.value='1'
    display.innerHTML=''
})