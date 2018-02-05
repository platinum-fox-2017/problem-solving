function fitness(){
    day = [];
    names = [];

    // buatlah template tanggal dari tanggal 7 sampai 31
    for(i = 7; i <= 31; i++){
        // tempat fitness tutup setiap tangga kelipatan 5
        if (i % 5 == 0){
            day.push(`Tanggal ${i}: Tempat Fitness Tutup`)
        // tampilan untuk jadwal kosong
        } else {
            day.push(`Tanggal ${i}:`)
        }
    }
    // console.log(day.length)

    // push nama pada array 'names' berdasarkan hari-harinya
    for (i = 0; i <= day.length; i++){
        names.push([])
        if (i % 2 == 0){
            names[i].push(' Tono');
        }
        if (i % 4 == 0){
            names[i].push(' Anton')
        }
        if (i % 5 == 0){
            names[i].push(' Budi')
        }
    }

    // modify array 'day', bila belum ada 'tempat fitness tutup' akan .concat array 'names' kepada array 'day'
    for (j = 0; j < day.length; j++){
        if (day[j].length < 32){
            console.log(day[j].concat(names[j]))
        } else {
            console.log(day[j])
        }
    }
}

fitness();