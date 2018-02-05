'use strict'

//Pseudocode
// 1. Lakukan looping yg dimulai dari angka 7 s/d angka 31
// 2. Beri kondisi jika angka 7 maka tampilkan Tono, Anton, dan Budi
// 3. Beri kondisi jika kelipatan 2 dari angka 7, tampilkan Tono
// 4. Beri kondisi jika kelipatan 4 dari angka 7, tampilkan Anton
// 5. Beri kondisi jika kelipatan 5 dari angka 7, tampilkan Budi
// 6. Beri kondisi jika angka habis dibagi 5, tampilkan Tempat Fitness tutup

for ( let i = 7; i <=31 ; i++ ) {
    let result = []
    let day = i-7
    if( i === 7 ) {
        console.log(`Tanggal ${i}: Tono, Anton, Budi`);
    } else if(i % 5 === 0) {
        console.log(`Tanggal ${i}: Tempat Fitness tutup`);
    } else {
        if( day % 2 === 0 ) {
            result.push('Tono')
        }
        if( day % 4 === 0 ) {
            result.push('Anton')
        }
        if( day % 5 === 0 ) {
            result.push('Budi')
        }
        console.log(`Tanggal ${i}: ${result}`);
    }
}


