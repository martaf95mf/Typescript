"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;
class persona {
    constructor(nombre, apellidos, edad, dni, cumpleaños, colorfav, sexo, direcciones, mails, telefonos, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleaños = cumpleaños;
        this._colorfav = colorfav;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }
    get nombre() {
        return this._nombre;
    }
    get apellidos() {
        return this._apellidos;
    }
    get edad() {
        return this._edad;
    }
    get dni() {
        return this._dni;
    }
    get cumpleaños() {
        return this._cumpleaños;
    }
    get colorfav() {
        return this._colorfav;
    }
    get sexo() {
        return this._sexo;
    }
    get direcciones() {
        return this._direcciones;
    }
    get mails() {
        return this._mails;
    }
    get telefonos() {
        return this._telefonos;
    }
    get notas() {
        return this._notas;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }
    set edad(edad) {
        this._edad = edad;
    }
    set dni(dni) {
        this._dni = dni;
    }
    set cumpleaños(cumpleaños) {
        this._cumpleaños = cumpleaños;
    }
    set colorfav(colorfav) {
        this._colorfav = colorfav;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    set direcciones(direcciones) {
        this._direcciones = direcciones;
    }
    set mails(mails) {
        this._mails = mails;
    }
    set telefonos(telefonos) {
        this._telefonos = telefonos;
    }
    set notas(notas) {
        this._notas = notas;
    }
    agregarNuevaDireccion(direccion) {
        this._direcciones.push(direccion);
    }
    agregarNuevoMail(mail) {
        this._mails.push(mail);
    }
    agregarNuevoTelefono(telefono) {
        this._telefonos.push(telefono);
    }
}
exports.persona = persona;
//# sourceMappingURL=persona.js.map