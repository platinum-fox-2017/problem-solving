//PSEUDOCODE
// input 
// Tono = 2 hari sekali
// Anton = 4 hari sekali
// Budi = 5 hari sekali

// VAR tanggal_buka = 7

// ULANGI i = tanggal_buka SAMPAI i <= 31
//     JIKA (((i - tanggal_buka) == 0) || (( (i - tanggal_buka) % 2 == 0) && ((i - tanggal_buka) % 4 == 0) && ((i - tanggal_buka) % 5 == 0))) {
//         TAMPILKAN "Tanggal " + i + ": Tono, Anton, Budi"        
//     APABILA (((i - tanggal_buka) % 2 == 0) && ((i - tanggal_buka) % 4 != 0)) 
//         JIKA ((i % 5) == 0) 
//             TAMPILKAN "Tanggal " + i + ": Tempat Fitness Tutup"    
//         APABILA ((i - tanggal_buka) % 5 == 0) 
//             TAMPILKAN "Tanggal " + i + ": Tono, Budi"
//         LAINNYA
//             TAMPILKAN "Tanggal " + i + ": Tono"
//     APABILA ((i - tanggal_buka) % 4 == 0)
//         JIKA ((i % 5) == 0)
//             TAMPILKAN "Tanggal " + i + ": Tempat Fitness Tutup"    
//         LAINNYA
//             TAMPILKAN "Tanggal " + i + ": Tono, Anton"
//     APABILA ((i - tanggal_buka) % 5 == 0)
//         JIKA ((i % 5) == 0) 
//             TAMPILKAN Tanggal " + i + ": Tempat Fitness Tutup"    
//         LAINNYA
//             TAMPILKAN "Tanggal " + i + ": Budi "
//     APABILA (i % 5 == 0) 
//         TAMPILKAN "Tanggal " + i + ": Tempat Fitness Tutup"
//     LAINNYA
//         TAMPILKAN "Tanggal " + i + ":"

var tanggal_buka = 7;

for (var i = tanggal_buka; i <= 31; i++) {
    if (((i - tanggal_buka) == 0) || (( (i - tanggal_buka) % 2 == 0) && ((i - tanggal_buka) % 4 == 0) && ((i - tanggal_buka) % 5 == 0))) {
        console.log("Tanggal " + i + ": Tono, Anton, Budi");        
    } else if (((i - tanggal_buka) % 2 == 0) && ((i - tanggal_buka) % 4 != 0)) {
        if ((i % 5) == 0) {
            console.log("Tanggal " + i + ": Tempat Fitness Tutup");    
        } else if ((i - tanggal_buka) % 5 == 0) {
            console.log("Tanggal " + i + ": Tono, Budi");
        } else {
            console.log("Tanggal " + i + ": Tono");
        }
    } else if ((i - tanggal_buka) % 4 == 0) {
        if ((i % 5) == 0) {
            console.log("Tanggal " + i + ": Tempat Fitness Tutup");    
        } else {
            console.log("Tanggal " + i + ": Tono, Anton");
        }
    } else if ((i - tanggal_buka) % 5 == 0) {
        if ((i % 5) == 0) {
            console.log("Tanggal " + i + ": Tempat Fitness Tutup");    
        } else {
            console.log("Tanggal " + i + ": Budi ");
        }
    } else if (i % 5 == 0) {
        console.log("Tanggal " + i + ": Tempat Fitness Tutup");
    } else {
        console.log("Tanggal " + i + ":");
    }
}