const produk = [
"Laptop",
"Mouse",
"Keyboard",
"Monitor",
"Flashdisk"
];

const harga = [
7000000,
150000,
350000,
1800000,
120000
];

let total = 0;
for (let i = 0; i < harga.length; i++) {
    total += harga[i];
    if (harga[i] >= 1000000) {
    console.log(`PRODUK MAHAL DAN BERKELAS: ${produk[i]} RP.  ${harga[i]} `);
}
 else {
    console.log(`PRODUK BUSSUK:   ${produk[i]} RP. ${harga[i]}`)
 }
}