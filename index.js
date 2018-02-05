/*Soal:
Tono : 2 hari sekali
Anton : 4 hari sekali
Budi : 5 hari sekali

Dibuka tanggal 7
Libur setiap kelipatan tanggal 5 (output: Tempat Fitness Tutup)
kalender tiap bulan berjumlah 31



PSEUDOCODE:
CREATE variable 'datang' as empty array
LOOPING from variable 'tanggal' equal 7 to 31
  ASSIGN 'datang' to empty array
  IF 'tanggal' devided by 5 has 0 reminder:
    PUSH 'Tempat Fitness Tutup' to 'datang'
  ELSE:
    IF 'tanggal' - 7 devided by 2 has 0 reminder:
        PUSH 'Tono' to 'datang'
    IF 'tanggal' - 7 devided by 4 has 0 reminder:
        PUSH 'Anton' to 'datang'
    IF 'tanggal' - 7 devided by 5 has 0 reminder:
        PUSH 'Budi' to 'datang'
    PRINT "Tanggal "+ 'tanggal' + ":" + 'datang'
*/


var datang = [];
for(var tanggal = 7; tanggal <= 31; tanggal ++){
  datang = [];
  if(tanggal%5==0)
    datang.push("Tempat Fitness Libur");
  else{
    if((tanggal-7)%2==0)
      datang.push("Tono");
    if((tanggal-7)%4==0)
      datang.push("Anton");
    if((tanggal-7)%5==0)
      datang.push("Budi");
  }
  console.log("Tanggal "+tanggal+": "+datang);


}
