import isValidate from '../app'

describe('isValidate', () => {
    // Espiamos el método alert antes de cada prueba
    beforeEach(() => {
      spyOn(window, 'alert');
    });
  
    it('debería devolver true cuando ambos números no están vacíos', () => {
      const result = isValidate("123", "456");
      expect(result).toBe(true);
      expect(window.alert).not.toHaveBeenCalled();  // No se debe llamar a alert
    });
  
    it('debería devolver false cuando num1 está vacío', () => {
      const result = isValidate("", "456");
      expect(result).toBe(false);
      expect(window.alert).toHaveBeenCalledWith("Completar todos los campos.");
    });
  
    it('debería devolver false cuando num2 está vacío', () => {
      const result = isValidate("123", "");
      expect(result).toBe(false);
      expect(window.alert).toHaveBeenCalledWith("Completar todos los campos.");
    });
  
    it('debería devolver false cuando ambos están vacíos', () => {
      const result = isValidate("", "");
      expect(result).toBe(false);
      expect(window.alert).toHaveBeenCalledWith("Completar todos los campos.");
    });
  });
