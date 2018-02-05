/* PSEUDOCODE - JADWAL MASUK GYM
Tono: 2 hari sekali
Anton: 4 hari sekali
Budi: 5 hari sekali

mencari array tanggal masing-masing
LOOPING i dari tanggal awal sampai tanggal akhir
  IF i/awal % tono == 0
  push tanggal tono
  (buat untuk ketiga orang tersebut)

gym buka tanggal 7, semua akan masuk, tutup setiap tanggal (kelipatan 5), tiap bulan berakhir tanggal 31

LOOPING dari tanggal 7 (tanggalAwal) sampai tanggal 31 (tanggalAkhir);
IF tanggal % 5 == 0; Fitness libur
*/

function problemSolving(tanggalAwal, tanggalAkhir) {
  var jadwalTono = 7
  var jadwalAnton = 7
  var jadwalBudi = 7

  var libur = 5
  var freqTono = 2
  var freqAnton = 4
  var freqBudi = 5
  var result = []


  for(var i = tanggalAwal; i <= tanggalAkhir; i++) {
    var text = ''
    text += `Tanggal ${i}: `

    if(i % libur == 0) {
      text += 'Tempat Fitness Tutup'
      if(i == jadwalTono) {
        jadwalTono += freqTono
      }
      if(i == jadwalAnton) {
        jadwalAnton += freqAnton
      }
      if(i == jadwalBudi) {
        jadwalBudi += freqBudi
      }

    } else {
      if(i == jadwalTono) {
        text += 'Tono, '
        jadwalTono += 2
      }
      if(i == jadwalAnton) {
        text += 'Anton, '
        jadwalAnton += 4
      }
      if(i == jadwalBudi) {
        text += 'Budi, '
        jadwalBudi += 5
      }
    }
    result.push(text);
  }

  for (var i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}

console.log(problemSolving(7, 31));
