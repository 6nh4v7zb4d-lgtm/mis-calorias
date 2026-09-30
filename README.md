# Mis calorías

Aplicación web instalable para llevar un registro diario de comidas y calorías.

## Uso

1. Abre la página publicada en el teléfono.
2. Pulsa **Agregar comida** e indica el nombre, la porción y sus calorías por porción.
3. Elige ½, 1, 2, 3 o 4+ porciones y pulsa **+** para registrar la comida en el día seleccionado. La opción 4+ calcula al menos cuatro porciones.
4. En iPhone, usa Compartir → Añadir a pantalla de inicio para abrirla como una app.

## Privacidad y almacenamiento

Los datos se guardan en `localStorage` del navegador de ese teléfono y no se envían al repositorio ni a GitHub Pages. Cada navegador y cada sitio web tienen su propio almacenamiento; cambiar de dispositivo o borrar los datos del navegador no transfiere ni recupera los registros. No hay inicio de sesión porque la app se usa en un solo teléfono.

## Desarrollo

Es una página estática: `index.html`, `style.css`, `app.js`, `manifest.webmanifest`, `icon.svg` y `sw.js`. Se publica desde la rama `main`, carpeta raíz, con GitHub Pages.
