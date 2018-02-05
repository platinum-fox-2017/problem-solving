/*
input: ..
process: LOOPING
output: laporan bulanan tanggal 7 sampai tanggal 31 berisi peserta hadir

criteria:
tono: 2 hari
anton: 4 hari
budi: 5 hari
tanggal=7
tanggal kelipatan 5 libur

PSEUDOCODE
1. SIMPAN variable 'tanggal' dengan nilai 7
2. SIMPAN variable 'libur' dengan nilai string 'Tempat Fitness Tutup'
3. SIMPAN variable array kosong
4. WHILE tanggal kurang sama dengan 31
5. JIKA tanggal habis dibagi 5
    MAKA TAMPILKAN variabel 'libur'
6. JIKA Tanggal - 7 habis dibagi 2 dan tidak habis dibagi 5
    MAKA PUSH 'Tono' ke variable array kosong
7. JIKA Tanggal - 7 habis dibagi 4 dan tidak habis dibagi 5
    MAKA PUSH 'Anton' ke variable array kosong
8. JIKA Tanggal - 7 habis dibagi 5 dan tidak habis dibagi 5
    MAKA PUSH 'Budi' ke variable array kosong
9. TAMPILKAN Tanggal variable 'tanggal': variable array kosong
10. KOSONGKAN lagi array kosong dan tambah tanggal dengan 1

*/

function laporanBulanan () {

    var tanggal = 7;
    var libur = 'Tempat Fitness Tutup';
    var visitors = [];
 
    while (tanggal <= 31) {
        if (tanggal % 5 == 0) {
            visitors.push(libur);
        } 
        if ((tanggal-7) % 2 == 0 && tanggal % 5 != 0) {
            visitors.push('Tono');
        } 
        if ((tanggal-7) % 4 == 0 && tanggal % 5 != 0) {
            visitors.push('Anton');
        } 
        if ((tanggal-7) % 5 == 0 && tanggal % 5 != 0) {
            visitors.push('Budi');
        }
        var visitorsMerge = visitors.join(', ');
        console.log(`Tanggal ${tanggal}: ${visitorsMerge}`);
        // console.log(hasilArr);
        tanggal++;
        visitors = [];
    }

}


laporanBulanan();