for (var i = 7; i <= 31 ; i++) {
  let tempName = ''
  if (i%5 === 0) {
    tempName += 'tempat Fitness tutup'
    console.log(i + tempName);
  }
  else {
    if ((i-7) % 2 == 0) {
      tempName += 'Tono'
    }
    if ((i-7) % 4 == 0) {
      tempName += ', Anton'
    }
    if ((i-7) % 5 == 0){
      tempName += 'Budi'
    }
  }
  console.log('tanggal ' + i + ': '+tempName);
}
