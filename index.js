/*
tono 2 hari
anton 4 hari
bud 5 hari
setiap kelipatan 5 libur
dimulai bareng tanggal 7
*/

for(let i = 7 ; i < 31 ; i ++){
  let result = `tanggal${i}:`
  let today = []
  if(i%5 === 0){
    today.push('hari ini libur ya')
  }else {
    let now = i - 7
    if(now%2 === 0) today.push('tono')
    if(now%4 === 0) today.push('anton')
    if(now%5 === 0) today.push('budi')
  }
  console.log( result + today.join(',') )
}
