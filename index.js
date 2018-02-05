// 1. buat looping dari 7 sampai 31
//   2a. jika i adalah 7 atau i-7 dimodulus 4*5 adalah 0,
//       tuliskan 'Tanggal ' + i + ': Tono, Anton, Budi'
//   2b. jika i dimodulus 5 adalah 0,
//       tuliskan 'Tanggal ' + i + ': Tempat Fitness Tutup'
//   2c. jika i-7 dimodulus 2,5 adalah 0,
//       tuliskan 'Tanggal ' + i + ': Tono, Budi'
//   2d. jika i-7 dimodulus 2,4 adalah 0,
//       tuliskan 'Tanggal ' + i + ': Tono, Anton'
//   2e. jika i-7 dimodulus 5 adalah 0,
//       tuliskan 'Tanggal ' + i + ': Budi'
//   2f. jika i-7 dimodulus 4 adalah 0,
//       tuliskan 'Tanggal ' + i + ': Anton'
//   2g. jika i-7 dimodulus 2 adalah 0,
//       tuliskan 'Tanggal ' + i + ': Tono'
//   2h. selain itu, tuliskan tuliskan 'Tanggal ' + i


for(var i=7; i<=31; i++){
  if(i===7 || (i-7)%20===0){
    console.log('Tanggal ' + i + ': Tono, Anton, Budi');
  } else if(i%5===0){
    console.log('Tanggal ' + i + ': Tempat Fitness Tutup');
  } else if((i-7)%2===0 && (i-7)%5===0){
    console.log('Tanggal ' + i + ': Tono, Budi');
  } else if((i-7)%2===0 && (i-7)%4===0){
    console.log('Tanggal ' + i + ': Tono, Anton');
  } else if((i-7)%5===0){
    console.log('Tanggal ' + i + ': Budi');
  } else if((i-7)%4===0){
    console.log('Tanggal ' + i + ': Anton');
  } else if((i-7)%2===0){
    console.log('Tanggal ' + i + ': Tono');
  } else {
    console.log('Tanggal ' + i);
  }
}
