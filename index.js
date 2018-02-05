let cal =[];
for (let i=7; i<=31; i++){
       if(i==7){
           cal.push('Tono','Anton','Budi')
       }else if(i % 5 == 0){
            cal.push('Tempat fitness tutup')
       }else{
            if((i-7)%2===0){
                cal.push('Tono')
            }if((i-7)%4==0){
                cal.push('Anton')
            }if((i-7)%5==0){
                cal.push('Budi')
            }    
       }
      console.log(`tanggal ${i} : ${cal}`) 
      cal =[]
} 