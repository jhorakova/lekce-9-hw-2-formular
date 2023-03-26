/*Vytvořte klasický přihlašovací formulář, do kterého uživatel zadá svůj e-mail a heslo a stránka ověří, zda má uživatel přístup do systému. 
Postupujte podle instrukcí níže.

Vytvořte stránku s formulářem, který bude mít jedno textové pole pro e-mail (typ email), jedno pole pro heslo (typ password) a tlačíto „Přihlásit“.
Na začátek souboru index.js vložte následující objekt představující jednoho uživatele. Budeme se tvářit, že jsme jej získali například z databáze.
const user = {
    email: 'bartolomej.rozumbrada@gmail.com',
    password: 'vimzenicnevim',
    name: 'Bartoloměj',
}
Při kliknutí na tlačítko „Přihlásit“ ověřte, že uživatel zadal správné jméno a heslo. Pokud údaje souhlasí, nahraďte formulář na stránce nějakou zprávou, například 
„Přihlášený uživatel: Bartoloměj“.
Pokud uživatel zadal špatný e-mail nebo heslo, zobrazte ve formuláři výraznou zprávu „Neplatné přihlašovací údaje“. 
Zadaný e-mail nechte v políčku vyplněný. Vyplněné heslo naopak vymažte.
Všimněte si, že se snažíme dodržovat standardní praxi. Uživatel by neměl vědět, jestli zadal špatně heslo nebo e-mail. 
Nikdo by totiž neměl bý schopný zjistit, jestli v systému daný uživatel už existuje. Zároveň je dobré špatné heslo z políčka vymazat, 
aby jej mohl uživatel rovnou zkusit napsat znovu.*/

const user = {
    email: 'bartolomej.rozumbrada@gmail.com',
    password: 'vimzenicnevim',
    name: 'Bartoloměj',
}

const registrace = document.querySelector('#registration')
registrace.addEventListener('submit', (event) => {
	event.preventDefault()
    const emailInput = document.querySelector('#email')
	const hesloInput = document.querySelector('#heslo')
		if ( emailInput.value === user.email && hesloInput.value === user.password) {
		document.body.innerHTML = `<h1>Přihlášený uživatel: ${user.name}</h1>`
	} else {
		document.body.innerHTML = '<h1>Neplatné přihlašovací údaje</h1>'
    }
})






