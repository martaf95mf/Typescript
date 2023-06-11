import{persona} from "./persona";
import{direccion} from "./direccion";
import{telefono} from "./telefono";
import{mail} from "./mail";

const primeradirCarlos = new direccion (
    "Calle Covarrubias",
    16,
    6,
    "A",
    28035,
    "Madrid",
    "Madrid"
)

const segundadirCarlos = new direccion (
    "Calle Flor de la Mancha",
    27,
    false,
    false,
    16045,
    "Cuenca",
    "Cuenca"
)

const mailCarlos = new mail (
    "trabajo",
    "carlos.perez.lopez@ddp.es"
)

const telefono1Carlos = new telefono(
    "movil personal",
    669676855
)
const telefono2Carlos = new telefono(
    "movil trabajo",
    610667899
)

const infoCarlos = new persona(
    "Carlos",
    "Pérez López",
    37,
    "12345678Z",
    new Date(1986, 6, 12),
    "verde",
    "hombre",
    [primeradirCarlos, segundadirCarlos],
    [mailCarlos],
    [telefono1Carlos, telefono2Carlos],
    "La segunda residencia es solo para el verano"
)

const primeradirPetra = new direccion (
    "Calle Los Rubiales",
    16,
    5,
    "B",
    28016,
    "Madrid",
    "Madrid"
)

const segundadirPetra = new direccion (
    "Calle La Soledad",
    35,
    1,
    "bajo",
    46001,
    "Valencia",
    "Valencia"
)

const mailPetra = new mail (
    "personal",
    "riosfuentes.petra@gmail.com"
)

const telefono1Petra = new telefono(
    "movil personal",
    669676877
)
const telefono2Petra = new telefono(
    "movil trabajo",
    666667899
)

const infoPetra = new persona(
    "Petra",
    "Ríos Fuentes",
    42,
    "02765678N",
    new Date(1981, 4, 7),
    "azul",
    "mujer",
    [primeradirPetra, segundadirPetra],
    [mailPetra],
    [telefono1Petra, telefono2Petra],
    "La segunda dirección corresponde a la residencia de sus padres"
)

const primeradirLucia = new direccion (
    "Calle Casino",
    28,
    5,
    "B",
    32026,
    "Ourense",
    "Ourense"
)

const segundadirLucia = new direccion (
    "Calle Libertad",
    8,
    false,
    false,
    36201,
    "Vigo",
    "Pontevedra"
)

const mailLucia = new mail (
    "personal",
    "fernandezgarcia.lucia@gmail.com"
)

const telefono1Lucia = new telefono(
    "movil personal",
    669664877
)
const telefono2Lucia = new telefono(
    "movil madre",
    676667499
)

const infoLucia = new persona(
    "Lucia",
    "Fernández García",
    22,
    "34223365N",
    new Date(2001, 5, 2),
    "amarillo",
    "mujer",
    [primeradirLucia, segundadirLucia],
    [mailLucia],
    [telefono1Lucia, telefono2Lucia],
    "Vive en la primera dirección durante el curso escolar"
);

console.log("Contactos antes del cambio:");
console.log(infoCarlos);
console.log(infoPetra);
console.log(infoLucia);

const agenda: Array <persona> = new Array (infoCarlos, infoPetra, infoLucia);
const dnibuscar: string="34223365N";
const cambiodatos: persona = agenda.find(persona=> persona.dni == dnibuscar) as persona;
const nuevadireccion = new direccion(
    "Calle Allariz",
    35,
    3,
    "A",
    32015,
    "Ourense",
    "Ourense"
)
const nuevomail= new mail(
    "universidad",
    "lucia.fernandez@uvigo.gal"
)
const nuevotelefono= new telefono(
    "movil padre",
    655778855
)

cambiodatos.agregarNuevaDireccion(nuevadireccion);
cambiodatos.agregarNuevoMail(nuevomail);
cambiodatos.agregarNuevoTelefono(nuevotelefono);

console.log("Contactos después del cambio:");
console.log(infoCarlos);
console.log(infoPetra);
console.log(infoLucia);