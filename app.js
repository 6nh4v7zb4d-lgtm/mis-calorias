const $ = id => document.getElementById(id);
const today = new Date();
const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
let foods = read('calorias-foods-v1', []);
let entries = read('calorias-entries-v1', []);
let quantities = {};
$('day').value = localDate;

// Add starter foods once without replacing the user's existing menu or records.
const starterFoods = [
  ['te-frio-500', 'Té frío 500 ml', 50],
  ['te-frio-350', 'Té frío 350 ml', 20],
  ['pasta-macarrones', 'Pasta y macarrones', 500],
  ['prensada', 'Prensada', 200],
  ['media-prensada', 'Media prensada', 100],
  ['brownie', 'Brownie', 350],
  ['subway-tripleta-15-oil', 'Subway Tripleta 15 cm, con aceite (estimado)', 800],
  ['subway-tripleta-15-no-oil', 'Subway Tripleta 15 cm, sin aceite (estimado)', 760],
  ['subway-tripleta-30-oil', 'Subway Tripleta 30 cm, con aceite (estimado)', 1600],
  ['subway-tripleta-30-no-oil', 'Subway Tripleta 30 cm, sin aceite (estimado)', 1520],
  ['sandwich-casa', 'Sándwich de casa', 500],
  ['sandwich-cole', 'Sándwich del cole', 200],
  ['ready-pizza-pepperoni', 'Ready Pizza, porción de pepperoni (estimado)', 270],
  ['papajohns-pepperoni', 'Papa John’s, porción de pepperoni (estimado)', 320],
  ['papajohns-pepperoni-stuffed', 'Papa John’s, pepperoni con borde relleno (estimado)', 390],
  ['papajohns-suprema', 'Papa John’s, porción Suprema (estimado)', 330],
  ['compadres-birria-taco', 'Compadres, 1 taco de birria (estimado)', 220],
  ['lafabbrica-pomodoro', 'La Fabbrica, penne Pomodoro con extra de quesos (estimado)', 900],
  ['cosi-cheesy-promo-pomodoro', 'Così, Cheesy Promo Pomodoro (estimado)', 610],
  ['arroz-carne', 'Plato de arroz y carne', 500],
  ['arroz-pollo', 'Plato de arroz y pollo', 500]
].map(([id, name, calories]) => ({id: `preset-${id}`, name, calories}));
if (!localStorage.getItem('calorias-presets-v2')) {
  const existingIds = new Set(foods.map(food => food.id));
  foods = [...starterFoods.filter(food => !existingIds.has(food.id)), ...foods];
  localStorage.setItem('calorias-presets-v2', '1');
  localStorage.setItem('calorias-foods-v1', JSON.stringify(foods));
}
// Correct the combo estimate if an earlier version of the starter menu was installed.
if (!localStorage.getItem('calorias-presets-v3')) {
  const cheesyPromo = foods.find(food => food.id === 'preset-cosi-cheesy-promo-pomodoro');
  if (cheesyPromo) cheesyPromo.calories = 610;
  localStorage.setItem('calorias-foods-v1', JSON.stringify(foods));
  localStorage.setItem('calorias-presets-v3', '1');
}

function persist() {
  localStorage.setItem('calorias-foods-v1', JSON.stringify(foods));
  localStorage.setItem('calorias-entries-v1', JSON.stringify(entries));
}
function render() {
  const date = $('day').value;
  const daily = entries.filter(item => item.date === date);
  const total = daily.reduce((sum, item) => sum + Number(item.calories), 0);
  $('total').textContent = total.toLocaleString('es');
  $('meter').style.width = `${Math.min(total / 2000 * 100, 100)}%`;
  $('entry-count').textContent = daily.length ? `${daily.length} ${daily.length === 1 ? 'registro' : 'registros'}` : '';
  $('food-list').innerHTML = foods.map(food => `<div class="food-card"><div class="food-add"><span class="food-name">${escapeHtml(food.name)}</span><span class="food-kcal">${food.calories} kcal por porción</span></div><div class="food-actions"><select aria-label="Cantidad de porciones de ${escapeHtml(food.name)}" data-quantity="${food.id}"><option value="0.5" ${quantities[food.id] === .5 ? 'selected' : ''}>½</option><option value="1" ${!quantities[food.id] || quantities[food.id] === 1 ? 'selected' : ''}>1</option><option value="2" ${quantities[food.id] === 2 ? 'selected' : ''}>2</option><option value="3" ${quantities[food.id] === 3 ? 'selected' : ''}>3</option><option value="4" ${quantities[food.id] >= 4 ? 'selected' : ''}>4+</option></select><button class="add-icon" aria-label="Agregar ${escapeHtml(food.name)}" data-add="${food.id}">+</button><button class="icon-button" aria-label="Borrar comida" data-delete-food="${food.id}">×</button></div></div>`).join('');
  $('empty-foods').classList.toggle('hidden', foods.length > 0);
  $('entries').innerHTML = daily.map(item => `<div class="entry"><div class="entry-main"><span class="food-name">${escapeHtml(item.name)} · ${item.quantity} ${item.quantity === 1 ? 'porción' : 'porciones'}</span><span class="entry-time">${new Date(item.time).toLocaleTimeString('es', {hour:'2-digit',minute:'2-digit'})}</span></div><span class="entry-kcal">${item.calories} kcal</span><button class="delete" aria-label="Quitar registro" data-delete-entry="${item.id}">Quitar</button></div>`).join('');
  $('empty-entries').classList.toggle('hidden', daily.length > 0);
}
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
$('food-list').addEventListener('change', event => { const input = event.target.closest('[data-quantity]'); if (input) quantities[input.dataset.quantity] = Number(input.value); });
$('food-list').addEventListener('click', event => {
  const add = event.target.closest('[data-add]');
  const remove = event.target.closest('[data-delete-food]');
  if (add) {
    const food = foods.find(item => item.id === add.dataset.add);
    const quantity = Number(quantities[food.id] ?? 1);
    if (food) entries.unshift({id: crypto.randomUUID(), name: food.name, calories: Math.round(food.calories * quantity), quantity, date: $('day').value, time: new Date().toISOString()});
  }
  if (remove) foods = foods.filter(item => item.id !== remove.dataset.deleteFood);
  persist(); render();
});
$('entries').addEventListener('click', event => { const button = event.target.closest('[data-delete-entry]'); if (button) { entries = entries.filter(item => item.id !== button.dataset.deleteEntry); persist(); render(); } });
$('day').addEventListener('change', render);
$('show-form').addEventListener('click', () => { $('food-form').classList.remove('hidden'); $('food-name').focus(); });
$('cancel-form').addEventListener('click', () => { $('food-form').classList.add('hidden'); $('food-form').reset(); });
$('food-form').addEventListener('submit', event => {
  event.preventDefault(); const name = $('food-name').value.trim(); const calories = Number($('food-calories').value);
  if (!name || !Number.isInteger(calories) || calories < 1) return;
  foods.push({id: crypto.randomUUID(), name, calories}); persist(); render(); $('food-form').reset(); $('food-form').classList.add('hidden');
});
const savedCalc = read('calorias-calculator-v1', null);
if (savedCalc) for (const [key, value] of Object.entries(savedCalc)) if ($(key)) $(key).value = value;
$('toggle-calculator').addEventListener('click', () => $('calculator-form').classList.toggle('hidden'));
$('calculator-form').addEventListener('submit', event => {
  event.preventDefault();
  const age = Number($('age').value), weight = Number($('weight').value), height = Number($('height').value);
  const sex = $('sex').value, activity = Number($('activity').value);
  if (!(age >= 18 && age <= 100 && weight >= 30 && weight <= 300 && height >= 120 && height <= 230)) return;
  const bmr = 10 * weight + 6.25 * height - 5 * age + (sex === 'male' ? 5 : -161);
  const maintenance = Math.round(bmr * activity);
  const goal = {age: $('age').value, weight: $('weight').value, height: $('height').value, sex, activity: $('activity').value};
  localStorage.setItem('calorias-calculator-v1', JSON.stringify(goal));
  $('estimate').innerHTML = `Mantenimiento estimado: <strong>${maintenance.toLocaleString('es')} kcal/día</strong><br><span style="font-size:12px;font-weight:400">Estimación aproximada basada en edad, peso, estatura y actividad.</span>`;
  $('estimate').classList.remove('hidden');
});
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./sw.js').catch(() => {});
render();
