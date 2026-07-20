const stok = [12, 0, 5, 8, 0, 20];

let  tersedia = 0;
    let habis = 0;
    for (let i = 0; i < stok.length; i++) {
    if (stok[i] > 0) {
        tersedia++;
        console.log(`stok ke-${i + 1} = ${stok[i]} - tersedia`);
    } else {
        habis++;

        console.log(`stok ke-${i + 1} = ${stok[i]} - habis`)
    }
    }

    console.log(`tersedia = ${tersedia}`)
    console.log(`habis = ${habis}`)
