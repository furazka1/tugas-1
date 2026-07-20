const skor = [100, 450, 800 , 150, 900];

let total = 0;
for (let i = 0; i < skor.length; i++) {
    total += skor[i];
    if (skor[i] >= 800) {
        console.log(`KAMU ADALAH PLAYER MYITHIC${i + 1} = ${skor[i]} - `)
    } else if (skor[i] >= 400) {
        console.log(`KAMU ADALAH PLAYER EPIC${i + 1} = ${skor[i]} - `)
    } else if (skor[i] >= 600){
        console.log(`KAMU ADALAH PLAYER LEGENDARY${i + 1} = ${skor[i]}]`)
    } else 
        console.log(`KAMU ADALAH PLAYER WARRIOR (BOTFREG)${i + 1} = ${skor[i]} - `)
}
