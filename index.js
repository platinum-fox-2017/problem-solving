/*
initialisasi variabel counter dengan nilai 0
initialisasi variabel counter dengan nilai string kosong
buat looping untuk menjalankan hari dimulai dari tanggal 7 dan berakhir tanggal 31 dan setiap index akan dilooping 1 kali
di dalam looping buat kondisi jika nilai i sama dengan 7 tampilkan semua nama custommer
dan jika i mod 5 sama dengan 0 dan i tidak sama dengan 7 tambahkan counter 1 dan tampilkan bahwa tempat fitnes Tutup
dan jika semua kondisi tidak terpenuhi counter di tambah 1
selanjutnya buat kondisi dimana counter mod 2 sama dengan 0 simpan nama customer di dalalam variabel nama
dan buat juga kondisi dimana counter mod 4 sama dengan 0 simpan nama customer dalam variabel nama
dan buat juga kondisi dimana counter mod 5 sama dengan 0 simpan nama customer dalam variabel nama
dan yang terakhir tampilkan nama dan change nilai nama menjadi kosong

*/

function problemsolving(){
  var counter=0;nama=''
  for(let i=7;i<=31;i++){
    if(i===7){
      console.log('Tanggal '+i+' : Tono,Anton,Budi')
    }
    else if(i%5===0 & i != 7){
      counter++
      console.log('Tanggal '+i+' : Tempat Fitnes Tutup')
    }else{
      counter++
      if(counter%2===0){
        nama=nama+'Tono'
      }
      if(counter%4===0){
        nama=nama+',Anton'
      }
      if(counter%5===0){
        nama=nama+',Budi'
      }
      console.log('Tanggal '+i+' : '+nama)
    }
    nama=''
  }
}

problemsolving();
