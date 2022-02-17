const notas = [
    {
        "idEstudiante": "e1",
        "Estudiantes": "Carlos",
        "Deberes": "0",
        "Prueba 1": "7",
        "Prueba 2": "4",
        "Examen 1": "7",
        "Examen 2": "7"
    },
    {
        "idEstudiante": "e2",
        "Estudiantes": "Maria",
        "Deberes": "5",
        "Prueba 1": "6",
        "Prueba 2": "5",
        "Examen 1": "6",
        "Examen 2": "0"
    },
    {
        "idEstudiante": "e3",
        "Estudiantes": "Daniela",
        "Deberes": "1",
        "Prueba 1": "1",
        "Prueba 2": "9",
        "Examen 1": "4",
        "Examen 2": "5"
    },
    {
        "idEstudiante": "e4",
        "Estudiantes": "Jose",
        "Deberes": "5",
        "Prueba 1": "10",
        "Prueba 2": "8",
        "Examen 1": "0",
        "Examen 2": "5"
    },
    {
        "idEstudiante": "e5",
        "Estudiantes": "Arturo",
        "Deberes": "9",
        "Prueba 1": "1",
        "Prueba 2": "0",
        "Examen 1": "9",
        "Examen 2": "9"
    },
    {
        "idEstudiante": "e6",
        "Estudiantes": "Camila",
        "Deberes": "1",
        "Prueba 1": "9",
        "Prueba 2": "1",
        "Examen 1": "1",
        "Examen 2": "7"
    },
    {
        "idEstudiante": "e7",
        "Estudiantes": "Fernando",
        "Deberes": "5",
        "Prueba 1": "10",
        "Prueba 2": "10",
        "Examen 1": "10",
        "Examen 2": "10"
    },
    {
        "idEstudiante": "e8",
        "Estudiantes": "Ronald",
        "Deberes": "8",
        "Prueba 1": "8",
        "Prueba 2": "8",
        "Examen 1": "0",
        "Examen 2": "4"
    },
    {
        "idEstudiante": "e9",
        "Estudiantes": "Dayana",
        "Deberes": "5",
        "Prueba 1": "10",
        "Prueba 2": "0",
        "Examen 1": "4",
        "Examen 2": "3"
    },
    {
        "idEstudiante": "e10",
        "Estudiantes": "Andrea",
        "Deberes": "8",
        "Prueba 1": "8",
        "Prueba 2": "7",
        "Examen 1": "2",
        "Examen 2": "3"
    },
    {
        "idEstudiante": "e11",
        "Estudiantes": "Tatiana",
        "Deberes": "10",
        "Prueba 1": "7",
        "Prueba 2": "10",
        "Examen 1": "3",
        "Examen 2": "4"
    },
    {
        "idEstudiante": "e12",
        "Estudiantes": "Martin",
        "Deberes": "9",
        "Prueba 1": "7",
        "Prueba 2": "9",
        "Examen 1": "3",
        "Examen 2": "9"
    },
    {
        "idEstudiante": "e13",
        "Estudiantes": "Sebastian",
        "Deberes": "8",
        "Prueba 1": "1",
        "Prueba 2": "6",
        "Examen 1": "2",
        "Examen 2": "4"
    },
    {
        "idEstudiante": "e14",
        "Estudiantes": "Carolina",
        "Deberes": "10",
        "Prueba 1": "10",
        "Prueba 2": "10",
        "Examen 1": "9",
        "Examen 2": "10"
    },
    {
        "idEstudiante": "e15",
        "Estudiantes": "Julio",
        "Deberes": "2",
        "Prueba 1": "2",
        "Prueba 2": "8",
        "Examen 1": "6",
        "Examen 2": "9"
    }
]


const sumaDe = item => item.reduce((ac, el) => ac + el);
const deberes = notas.map(item => Number(item['Deberes']))

const p1 = notas.map(item => Number(item['Prueba 1']))
const p2 = notas.map(item => Number(item['Prueba 2']))
const e1 = notas.map(item => Number(item['Examen 1']))
const e2 = notas.map(item => Number(item['Examen 2']))



const promDeberes = sumaDe(deberes)/deberes.length
const promP1 = sumaDe(p1)/p1.length
const promP2 = sumaDe(p2)/p2.length
const promE1 = sumaDe(e1)/e1.length
const promE2 = sumaDe(e2)/e2.length





const totalesRow = {
  "idEstudiante": 'promedio',
  "Estudiantes": "Todos los estudiantes",
  "Deberes": promDeberes,
  "Prueba 1": promP1,
  "Prueba 2": promP2,
  "Examen 1": promE1,
  "Examen 2": promE2     
}

notas.push(totalesRow)


const NotaTotal = notas.map(item => Number(item['Deberes']) 
+ Number(item['Prueba 1']) 
+ Number(item['Prueba 2']) 
+ Number(item['Examen 1']) 
+ Number(item['Examen 2']))


const promedioNotaTotal = sumaDe(NotaTotal)/NotaTotal.length



const notasTotales = notas.map((obj, item) => ({...obj, "Nota Final": NotaTotal[item]}))

const promedioEst = notasTotales.map(item => Number(item['Nota Final'])/5)
const promedioEstCol = notasTotales.map((obj, item) => ({...obj, "Promedio": promedioEst[item]}))


//Aprueba 
const notasFinales = promedioEstCol.map((obj, item) => ({...obj, "Aprueba": promedioEst[item] >= 7 ? 'APROBADO' : 'REPROBADO'}))

 console.table(notasFinales)


 //Encontrar el estudiante con mayor promedio
 const bestEst = promedioEstCol.reduce((prev, current) => (prev.Promedio > current.Promedio) ? prev : current)

 console.log("El mejor estudiante es: ", bestEst)
 

 //Encontrar una lista de reprobados
const reprobados = notasFinales.filter(item => item.Promedio < 7)
reprobados.pop() // saco la row de los totales
console.table(reprobados)