/*pseudocode

buat variable tanggalBuka dengan nilai 7
buat variable akhirBulan dengan nilai 31
buat variable libur dengan nilai 5
buat variable fitnesTono dengan nilai 0
buat variable fitnesAnton dengan nilai 0
buat variable fitnesBudi dengan nilai 0

//ketentuan fitnes 
Tono tiap 2 hari sekali
Anton tiap 4 hari sekali
Budi tiap 5 hari sekali

looping for dengan iteration mulai dari tanggalBuka, lakukan looping selama iteration kurang dari atau sama dengan  akhirBulan
buat variable yangFitness dengan nilai string kosong
IF fitnesTono habis dibagi 2 sama dengan 0 
THEN
  IF yangFitness sama dengan string kosong 
  THEN
  tambah isi yangFitness dengan 'Tono'
  ELSE 
  tambah isi yangFitness dengan ', Tono'
  ENDIF
ENDIF
IF fitnesAnton habis dibagi 4 sama dengan 0 
THEN
  IF yangFitness sama dengan string kosong 
  THEN
  tambah isi yangFitness dengan 'Anton'
  ELSE 
  tambah isi yangFitness dengan ', Anton'
  ENDIF
ENDIF
IF fitnesBudi habis dibagi 5 sama dengan 0 
THEN
  IF yangFitness sama dengan string kosong 
  THEN
  tambah isi yangFitness dengan 'Budi'
  ELSE 
  tambah isi yangFitness dengan ', Budi'
  ENDIF
ENDIF

IF iteration sama dengan tanggalBuka
THEN
tampilkan 'Tanggal ' + iteration + ': Tono, Anton, Budi' 
ELSE IF iteration habis dibagi libur sama dengan 0
THEN 
tampilkan 'Tanggal ' + iteration + ': Tempat Fitness Tutup'
ELSE 
tampilkan 'Tanggal ' + iteration + ': ' + yangFitness 
END IF
tambah fitnesTono dengan nilai 1 
tambah fitnesAnton dengan nilai 1 
tambah fitnesBudi dengan nilai 1 


*/

var tanggalBuka = 7;
var akhirBulan = 31;
var libur = 5;
var fitnessTono = 0;
var fitnessAnton = 0;
var fitnessBudi = 0

for(var i = tanggalBuka; i <= akhirBulan; i++){
  var yangFitness = '';
  if(fitnessTono % 2 === 0){
      if(yangFitness != ''){
        yangFitness += ', Tono';
      } else {
        yangFitness += 'Tono';    
      }
   }    
  if(fitnessAnton % 4 === 0){
      if(yangFitness != ''){
        yangFitness += ', Anton';
      } else {
        yangFitness += 'Anton';    
      }
   }    
  if(fitnessBudi % 5 === 0){
      if(yangFitness != ''){
        yangFitness += ', Budi';
      } else {
        yangFitness += 'Budi';    
      }
   }    
   if(i === tanggalBuka){
     console.log('Tanggal ' + i + ': Tono, Anton, Budi');    
   } else if(i % libur === 0){
     console.log('Tanggal ' + i + ': Tempat Fitness Tutup');    
   } else {
     console.log('Tanggal ' + i + ':' + yangFitness);
   }
   fitnessTono++;
   fitnessBudi++;
   fitnessAnton++;
    
} //end loop for
