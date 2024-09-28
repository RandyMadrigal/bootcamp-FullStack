"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
describe('isValidate', () => {
    // Espiamos el método alert antes de cada prueba
    beforeEach(() => {
        spyOn(window, 'alert');
    });
    it('debería devolver true cuando ambos números no están vacíos', () => {
        const result = (0, app_1.default)("123", "456");
        expect(result).toBe(true);
        expect(window.alert).not.toHaveBeenCalled(); // No se debe llamar a alert
    });
    it('debería devolver false cuando num1 está vacío', () => {
        const result = (0, app_1.default)("", "456");
        expect(result).toBe(false);
        expect(window.alert).toHaveBeenCalledWith("Completar todos los campos.");
    });
    it('debería devolver false cuando num2 está vacío', () => {
        const result = (0, app_1.default)("123", "");
        expect(result).toBe(false);
        expect(window.alert).toHaveBeenCalledWith("Completar todos los campos.");
    });
    it('debería devolver false cuando ambos están vacíos', () => {
        const result = (0, app_1.default)("", "");
        expect(result).toBe(false);
        expect(window.alert).toHaveBeenCalledWith("Completar todos los campos.");
    });
});
