const hero = ["Layla", "Ling", "Fanco", "Fanny", "Miya", "Eudora"];

for (let i = 0; i < hero.length; i++) {
    let Karakter = hero[i].slice(0, 1);
    if (Karakter === "F") {
        console.log(`Hero Favorit = ${hero[i]}`); }
    else {
        console.log(`hero nub = ${hero[i]}`);
    }
}