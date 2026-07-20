const nama = "budi";{
    console.log("nama = " + nama);
}
const umur = 20;
    console.log("umur = " + umur);
const TotalHarga = [12000, 15000, 8000, 5000];

let total = 0;
for (let i = 0; i < TotalHarga.length; i++) {
    total += TotalHarga[i];
}

if (total >= 40000) {
    console.log ("Total harga = " + total);
    console.log("anda mendapatkan diskon 10%");
}
