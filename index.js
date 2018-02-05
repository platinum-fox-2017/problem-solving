var tampung = ''
for(let i = 7;i<=31;i++){
    let member = ''
    if((i-7)%2==0){
      member+= " Tono,"
    }
    if((i-7)%4==0){
      member+= " Anton,"
    }
    if((i-7)%5==0){
      member+= " Budi,"
    }
    console.log(member);
    if(i%5==0){
    tampung +="Tanggal " +i+ ": Tempat Fitness Tutup \n"
    } else {
    tampung += "Tanggal " +i+ ":"+ member+"\n"
    member = ''
  }
}

console.log(tampung)
