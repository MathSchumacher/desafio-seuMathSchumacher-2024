import { RecintosZoo } from './recintos-zoo';

describe('Recintos do Zoológico', () => {
    let zoo;

    beforeEach(() => {
        zoo = new RecintosZoo();
    });

    test('Deve rejeitar animal inválido', () => {
        const resultado = zoo.analisaRecintos('ELEFANTE', 1);
        expect(resultado.erro).toBe('Animal inválido');
        expect(resultado.recintosViaveis).toEqual([]);
    });

    test('Deve rejeitar quantidade inválida', () => {
        const resultado = zoo.analisaRecintos('MACACO', -1);
        expect(resultado.erro).toBe('Quantidade inválida');
        expect(resultado.recintosViaveis).toEqual([]);
    });

    test('Não deve encontrar recintos para 10 macacos', () => {
        const resultado = zoo.analisaRecintos('MACACO', 10);
        expect(resultado.erro).toBe('Não há recinto viável');
        expect(resultado.recintosViaveis).toEqual([]);
    });

    test('Deve encontrar recinto para 1 crocodilo', () => {
        const resultado = zoo.analisaRecintos('CROCODILO', 1);
        expect(resultado.erro).toBeUndefined();
        expect(resultado.recintosViaveis).toEqual([
            'Recinto 3 (espaço livre: 1 total: 7)',
            'Recinto 4 (espaço livre: 5 total: 8)'
        ]);
    });

    test('Deve encontrar recintos para 2 macacos', () => {
        const resultado = zoo.analisaRecintos('MACACO', 2);
        expect(resultado.erro).toBeUndefined();
        expect(resultado.recintosViaveis).toEqual([
            'Recinto 1 (espaço livre: 5 total: 10)',
            'Recinto 2 (espaço livre: 3 total: 5)',
            'Recinto 3 (espaço livre: 2 total: 7)',
            'Recinto 5 (espaço livre: 3 total: 9)'
        ]);
    });
});
