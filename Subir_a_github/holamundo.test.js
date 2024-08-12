const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Lee el archivo HTML
const html = fs.readFileSync(path.resolve(__dirname, './Index.html'), 'utf8');

describe('Pruebas unitarias para Index.html', () => {
    let dom;
    let document;

    beforeAll(() => {
        // Crea una instancia de JSDOM
        dom = new JSDOM(html);
        document = dom.window.document;
    });

    test('Verifica que el título del <h1> sea "¡Hola Mundo!"', () => {
        const h1 = document.querySelector('h1');
        expect(h1.textContent).toBe('¡Hola Mundo!');
    });
});
