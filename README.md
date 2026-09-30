# Mis calorías

Aplicación web instalable para llevar un registro diario de comidas y calorías.

## Uso

1. Abre la página publicada en el teléfono.
2. Pulsa **Agregar comida** e indica el nombre, la porción y sus calorías por porción.
3. Elige ½, 1, 2, 3 o 4+ porciones y pulsa **+** para registrar la comida en el día seleccionado. La opción 4+ calcula al menos cuatro porciones.
4. En iPhone, usa Compartir → Añadir a pantalla de inicio para abrirla como una app.

## Privacidad y almacenamiento

Los datos se guardan en `localStorage` del navegador de ese teléfono y no se envían al repositorio ni a GitHub Pages. Cada navegador y cada sitio web tienen su propio almacenamiento; cambiar de dispositivo o borrar los datos del navegador no transfiere ni recupera los registros. No hay inicio de sesión porque la app se usa en un solo teléfono.

## Comidas iniciales y estimaciones

La primera vez que se abre la versión actual, se agregan las comidas solicitadas al menú local. La app conserva el menú y los registros que ya existan en ese teléfono. Las calorías seguidas de «estimado» no son datos nutricionales publicados por los restaurantes; son aproximaciones para llevar el registro.

- **Subway Tripleta:** se estimó usando como referencia la guía nutricional oficial de Subway Puerto Rico para el sándwich Tripleta de 15 cm y duplicando para 30 cm. Se sumaron aproximaciones por el queso americano, el queso mozzarella extra y el aceite. El pedido es pan italiano crocante, Tripleta, queso americano, cebolla y doble mozzarella; pimienta incluida, con o sin aceite. [Guía nutricional de Subway Costa Rica](https://subwaycostarica.com/GuiaNutricional.pdf) · [Guía nutricional de Subway Puerto Rico (2025)](https://www.subway.com/es-pr/-/media/northamerica/puerto-rico/nutrition/2025/pr_nutrition_spa_6-2025.pdf).
- **Pizzas:** Ready Pizza no publica calorías; la porción se aproxima a partir de una pizza grande de 8 tajadas. Para Papa John’s se usaron referencias nutricionales oficiales de otros mercados como aproximación; recetas y tamaños pueden variar en Costa Rica. [Menú de Ready Pizza Costa Rica](https://www.readypizzacr.com/) · [Pizzas Papa John’s Costa Rica](https://www.papajohns.cr/pizzas/) · [Información nutricional oficial de Papa John’s](https://www.papajohns.com.sv/site/nutrition.html).
- **Compadres:** el menú describe la birria como una orden de tres tacos pequeños; aquí se registra un taco individual. [Menú de Compadres en Uber Eats](https://www.ubereats.com/cr/store/compadres/l005bfSjXZCQrUCKcBbiqQ).
- **La Fabbrica:** la comida se configuró como penne Pomodoro con extra de quesos (mozzarella cherry, mozzarella en cubos y parmesano), según el pedido indicado. [Menú de La Fabbrica](https://lafabbricapizzeria.webflow.io/menu).
- **Così Cheesy Promo Pomodoro:** combo con medio Cheesy Pomodoro, sopa pequeña de tomate y una bolsa de papas tostadas, según el detalle indicado. La caloría total es aproximada porque Così no publica el desglose nutricional de la promoción. [Menú de Così en Uber Eats](https://www.ubereats.com/cr-en/store/cosi-multiplaza-curridabat/IB-ef8DRRKqnGOYgC6LIWQ?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlNpamhpaCUyMENhdGhheSUyMEdlbmVyYWwlMjBIb3NwaXRhbCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUpIVGwxN2hGVFhUUVI4RXBQU0FRQmR2MCUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0EyNS4wNzI2OTg5JTJDJTIybG9uZ2l0dWRlJTIyJTNBMTIxLjY2MTE4NDklN0Q%3D).

## Desarrollo

Es una página estática: `index.html`, `style.css`, `app.js`, `manifest.webmanifest`, `icon.svg` y `sw.js`. Se publica desde la rama `main`, carpeta raíz, con GitHub Pages.
