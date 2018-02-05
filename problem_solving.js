let result = [];

for (let i = 7; i <= 31; i++) {
  result.push(`Tanggal ${i}: `)
}

for (let i = 0; i < result.length; i++) {
  if((i+8)%5 == 1){
    result[i] += `Tempat Fitness Libur`
  }
  else{
    if((i+1)%2 == 1){
      result[i] += `Tono, `
    }
    if((i+1)%4 == 1){
      result[i] += `Anton, `
    }
    if((i+1)%5 == 1){
      result[i] += `Budi`
    }
  }
}

console.log(result.join('\n'));
