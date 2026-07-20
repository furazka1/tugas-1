const menu = [
 10000,
 25000,
 18000,
 12000,
 50000,
];

let total = 0;
for (let i = 0; i < menu.length; i++) {
    total += menu[i];
    if (menu[i] >= 20000) {
    console.log(`HARGA PREMIUM: ${menu[i]}`);
}
 else {
    console.log(`HARGA BUSSUK: ${menu[i]}`)
 }
}

