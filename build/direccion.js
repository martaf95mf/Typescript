"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.direccion = void 0;
class direccion {
    constructor(calle, numero, piso, letra, cp, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._cp = cp;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    get calle() {
        return this._calle;
    }
    get numero() {
        return this._numero;
    }
    get piso() {
        return this._piso;
    }
    get letra() {
        return this._letra;
    }
    get cp() {
        return this._cp;
    }
    get poblacion() {
        return this._poblacion;
    }
    get provincia() {
        return this._provincia;
    }
    set calle(calle) {
        this._calle = calle;
    }
    set numero(numero) {
        this._numero = numero;
    }
    set piso(piso) {
        this._piso = piso;
    }
    set letra(letra) {
        this._letra = letra;
    }
    set cp(cp) {
        this._cp = cp;
    }
    set poblacion(poblacion) {
        this._poblacion = poblacion;
    }
    set provincia(provincia) {
        this._provincia = provincia;
    }
}
exports.direccion = direccion;
//# sourceMappingURL=direccion.js.map