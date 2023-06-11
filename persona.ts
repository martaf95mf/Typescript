import{ direccion } from "./direccion";
import { mail } from "./mail";
import { telefono } from "./telefono";

export class persona{
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string;
    private _cumpleaños: Date;
    private _colorfav: string;
    private _sexo: string;
    private _direcciones: Array<direccion>
    private _mails: Array<mail>
    private _telefonos: Array<telefono>
    private _notas: string;
    
    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleaños: Date, colorfav: string, sexo: string, direcciones: Array<direccion>, mails: Array<mail>, telefonos: Array<telefono>, notas: string){
        this._nombre= nombre;
        this._apellidos=apellidos;
        this._edad=edad;
        this._dni=dni;
        this._cumpleaños=cumpleaños;
        this._colorfav=colorfav;
        this._sexo=sexo;
        this._direcciones=direcciones;
        this._mails=mails;
        this._telefonos=telefonos;
        this._notas=notas;
    }

    get nombre(){
        return this._nombre;
    }
    get apellidos(){
        return this._apellidos;
    }
    get edad(){
        return this._edad;
    }
    get dni(){
        return this._dni;
    }
    get cumpleaños(){
        return this._cumpleaños;
    }
    get colorfav(){
        return this._colorfav;
    }
    get sexo(){
        return this._sexo;
    }
    get direcciones(){
        return this._direcciones;
    }
    get mails(){
        return this._mails;
    }
    get telefonos(){
        return this._telefonos;
    }
    get notas(){
        return this._notas;
    }

    set nombre(nombre:string){
        this._nombre=nombre;
    }
    set apellidos(apellidos:string){
        this._apellidos=apellidos;
    }
    set edad(edad:number){
        this._edad=edad;
    }
    set dni(dni:string){
        this._dni=dni;
    }
    set cumpleaños(cumpleaños:Date){
        this._cumpleaños=cumpleaños;
    }
    set colorfav(colorfav:string){
        this._colorfav=colorfav;
    }
    set sexo(sexo:string){
        this._sexo=sexo;
    }
    set direcciones(direcciones:Array<direccion>){
        this._direcciones=direcciones;
    }
    set mails(mails:Array<mail>){
        this._mails=mails;
    }
    set telefonos(telefonos:Array<telefono>){
        this._telefonos=telefonos;
    }
    set notas(notas:string){
        this._notas=notas;
    }

    agregarNuevaDireccion(direccion:direccion){
        this._direcciones.push(direccion)
    }
    agregarNuevoMail(mail:mail){
        this._mails.push(mail)
    }
    agregarNuevoTelefono(telefono:telefono){
        this._telefonos.push(telefono)
    }
}