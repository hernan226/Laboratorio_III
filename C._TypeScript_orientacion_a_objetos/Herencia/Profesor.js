"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Persona");
var Profesor = /** @class */ (function (_super) {
    __extends(Profesor, _super);
    function Profesor(nombre, apellido, horario, titulo) {
        var _this = _super.call(this, nombre, apellido) || this;
        _this._horario = horario;
        _this._titulo = titulo;
        return _this;
    }
    Profesor.prototype.ToString = function () {
        return _super.prototype.ToString.call(this) + "\nhorario: " + this._horario + "\n _titulo: " + this._titulo;
    };
    return Profesor;
}(Persona_1.Persona));
//# sourceMappingURL=Profesor.js.map