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

La primera vez que se abre la versión actual, se agregan las comidas solicitadas al menú local. La app conserva el menú y los registros existentes. Al actualizarse estas referencias, la app también recalcula los registros anteriores que correspondan a comidas iniciales del menú. Las cifras de restaurantes fuera de Costa Rica y las que indican «estimado» pueden variar por receta, tamaño y sucursal.

- **Subway Tripleta:** la guía oficial de Puerto Rico de junio de 2025 publica 620 kcal para la Tripleta de 15 cm y dice duplicar para 30 cm. La guía oficial de México publica 40 kcal para queso americano y 110 kcal por porción de mozzarella de 34 g. Para la orden indicada calculé 620 + 40 + 220 = 880 kcal a 15 cm sin aceite; añadí aproximadamente 40 kcal por el aceite. Para 30 cm dupliqué esos valores: 1.760 sin aceite y 1.840 con aceite. Son cálculos de referencia regional para una orden personalizada; Subway Costa Rica no publica datos para esa combinación exacta. [Guía oficial de Subway Puerto Rico (2025)](https://www.subway.com/es-pr/-/media/northamerica/puerto-rico/nutrition/2025/pr_nutrition_spa_6-2025.pdf) · [Guía oficial de Subway México (2025)](https://www.subway.com/-/media/Mexico/Documents/Nutritional-Info/Mexico-Nutrition-112025-SP.pdf) · [Guía nutricional de Subway Costa Rica](https://subwaycostarica.com/GuiaNutricional.pdf).
- **Papa John’s:** la guía oficial de EE. UU. da 320 kcal para una tajada grande de pepperoni y 390 para una tajada grande con masa rellena. Para la Suprema de Costa Rica usé 330 kcal de The Works en la guía oficial de El Salvador, ya que Papa John’s Costa Rica describe la Suprema con esa combinación de ingredientes. La página nutricional de Costa Rica no ofrece cifras; por eso las referencias de EE. UU. y El Salvador pueden variar localmente. [Nutrición oficial de Papa John’s EE. UU.](https://www.papajohns.com/company/nutritional-details/index.html) · [Nutrición oficial de Papa John’s El Salvador](https://www.papajohns.com.sv/site/nutrition.html) · [Pizzas de Papa John’s Costa Rica](https://www.papajohns.cr/pizzas/).
- **Ready Pizza:** el menú confirma pizzas Mega4 rectangulares de 8 porciones, pero no publica calorías. Se conserva una estimación de 270 kcal por tajada. [Menú oficial de Ready Pizza Costa Rica](https://www.readypizzacr.com/).
- **Compadres:** no publica información nutricional. Se estiman 250 kcal por taco de birria; el menú de entrega lista las quesabirrias como órdenes de varios tacos con queso y consomé, así que el tamaño y la preparación pueden cambiar la cifra. [Menú de Compadres en Rappi](https://www.rappi.co.cr/restaurantes/8077-compadres-taqueria-mexicana).
- **La Fabbrica:** el pedido es penne Pomodoro con mozzarella cherry, mozzarella en cubos y parmesano extra. El restaurante publica sus opciones de pasta y salsas, pero no calorías; las 900 kcal son una estimación de una porción de restaurante con esos quesos. [Menú de La Fabbrica](https://www.lafabbricapizzeria.com/menu.html) · [Menú actual en Uber Eats](https://www.ubereats.com/cr/store/la-fabbrica-pizzeria-curridabat-san-jose-cr/gcxtC42hQziV-s2loAmKDg).
- **Così Cheesy Promo Pomodoro:** combo con medio Cheesy Pomodoro de unos 10 × 10 cm, sopa pequeña de tomate y bolsa de papas tostadas. Se estiman 610 kcal: 300 para el sándwich, 150 para la sopa y 160 para las papas (dato del usuario). Così publica los componentes de la promoción, pero no sus calorías. [Menú de Così en Uber Eats](https://www.ubereats.com/cr-en/store/cosi-multiplaza-curridabat/IB-ef8DRRKqnGOYgC6LIWQ).

## Desarrollo

Es una página estática: `index.html`, `style.css`, `app.js`, `manifest.webmanifest`, `icon.svg` y `sw.js`. Se publica desde la rama `main`, carpeta raíz, con GitHub Pages.
