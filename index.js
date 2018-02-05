// inputan
// tanggal  = 7 - 31
// tono = 2 hari sekali
// anton = 4 hari sekali
// budi = 5 hari sekali

// 0 buat variable 'arr' untuk untuk menampung nilai secara sementara
// 1. proses hari dari tanggal 7 ke tanggal 31
// 2. jika sudah 5 hari terhitung dari tanggal 7, tempat fitnes tutup
// 3. setiap 2 hari masukkan nama tono
// 4. setiap 4 hari masukkan nama anton
// 5. setiap 5 hari masukkan nama budi

// console.log('Test');
for(var i=7; i<=31; i++){
    var arr = [];
    if(i % 5 == 0){
        arr.push('tempat Fitnes Tutup');
        // console.log('Tempat Fitnes tutup');
    } else {
        if((i-7) % 2 == 0){
            arr.push('Tono');
        } 
        if((i-7) % 4 == 0){
            arr.push('Anton');
        }
        if((i-7) % 5 == 0){
            arr.push('Budi');
        }
    }
    console.log('Tanggal ke-' + i + ' ' +arr);
}


// console.log();
