"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mail = void 0;
class mail {
    constructor(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    get tipo() {
        return this._tipo;
    }
    get direccion() {
        return this._direccion;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    set direccion(direccion) {
        this._direccion = direccion;
    }
}
exports.mail = mail;
//# sourceMappingURL=mail.js.map