/*
1. Memiliki list data bernama 'member' yang berisi setiap barisnya Nama dari member, dan berapa kali sehari ia datang.
2. Melakukan pengulangan sebanyak 31-6 kali
  2.a. Jika index+7 habis di bagi 5, menambah "Tempat Fitness Tutup" pada list_datang
    2.a.a.menampilkan list-datang
  2.b. lainnya
    2.b.a. melakukan pengulangan sebanyak jumlah list data 'member' 1 per 1 dari awal hingga akhir.
      2.a.b.a. Membuat data bernama list-datang, yang berisi "Tangga"+(index+7)+": "
      2.a.b.a.`` Mengecek jika jadwal kedatangan index saat ini modulus jadwal kedatangan member sama dengan 0, menambah kan nama member ke list-datang.
    2.b.b. menampilkan list datang.
*/

function aturJadwal(arr) {
  for(let i=0; i<25; i++) {
    var listDatang='Tanggal '+(i+7)+': ';
    if((i+7)%5===0) {
      listDatang+='Tempat Fitness Tutup';
      console.log(listDatang);
    } else {
      for(let j=0; j<arr.length; j++) {
        if(i%arr[j][1]===0) {
          listDatang+=arr[j][0]+', ';
        }
      }
      console.log(listDatang.slice(0,listDatang.length-2))
    }
  }
}

var member=[["Tono",2],["Anton",4],["Budi",5]];

aturJadwal(member)
