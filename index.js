
var tanggalMulai = 7;
var tanggalSelesai = 31;
var tono = [];
var anton = [];
var budi = [];

for(var j=tanggalMulai; j<=tanggalSelesai; j+=2){
    tono.push(j);
}

for (var k=tanggalMulai; k<=tanggalSelesai; k+=4){
    anton.push(k);
}

for(var l=tanggalMulai; l<=tanggalSelesai; l+=5){
    budi.push(l);
}
// console.log(tono);
// console.log(anton);
// console.log(budi);

for (var i=tanggalMulai; i<=tanggalSelesai; i++){
    var absen = [];
    for(var q=0; q<tono.length; q++){
        if(i%5 !== 0){
            if(i === tono[q]){
                absen.push('Tono');
            }
        }
    }
    for(var w=0; w<anton.length; w++){
        if(i%5 !== 0){
            if(i === anton[w]){
                absen.push('Anton');
            }
        }
    }
    for(var e=0; e<budi.length; e++){
        if(i%5 !== 0){
            if(i === budi[e]){
                absen.push('Budi');
            }
        }
    }
    if(i%5 === 0){
        console.log('Tanggal '+i+': '+'Tempat Fitness Tutup');
    }else{
        console.log('Tanggal '+i+': '+absen);
    }
}