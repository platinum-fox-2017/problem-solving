# problem-solving

1. Input = array of object yg berisi nama & frekuensi datang
// Tono, 2 hari sekali
// Anton, 4 hari sekali
// Budi, 5 hari sekali

2. Output = jadwal datang ke gym dalam satu bulan
3. Opening date = tanggal 7, semua member datang
4. Gym tutup setiap kelipatan tanggal 5 --> 5, 10, 15, 20, 25, 30

5. Buat variabel tanggal mulai dari 7
6. Buat variabel count = 0 untuk pembagi frekuensi
7. Buat variable member dengan array kosong untuk menampung nama member yg akan datang
8. Tanggal 7 --> tampilkan semua nama
9. Looping tanggal mulai dari 7 sampai dengan 31
10. Looping input untuk mengambil nilai nama dan frekuensi datang
10. Nama Tono akan tampil tiap 2 hari sekali --> tanggal+2 // jika count%2 === 0, push nama ke variable member
11. Nama Anton akan tampil tiap 4 hari sekali --> tanggal+4 // jika count%4 === 0, push nama ke variable member
12. Nama Budi akan tampil tiap 5 hari sekali --> tanggal+5 // jika count%5 === 0, push nama ke variable member
13. Jika tanggal merupakan kelipatan 5 tampilkan "Tempat Fitness Tutup" 
    // if tanggal%5 === 0
14. Fungsi akan berjalan selama tanggal kurang dari sama dengan 31
    // tanggal <= 31