const umur = [8, 13, 17, 20, 25, 11];

for (let i = 0; i < umur.length; i++) {
    if (umur[i] > 17) {
       
        console.log(`PENGUNJUNG KE=${i + 1} BOLEH MASUK`);
    } else {
      
        console.log(`PENGUNJUNG KE=${i + 1} DILARANG MASUK`);
    }
}