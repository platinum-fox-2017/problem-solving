function fitness(){
    var countTono = 7;
    var countAnton = 7;
    var countBudi = 7;

    for(var i = 7; i <= 31; i++){
        var str  = `Tanggal ${i}:`;
        var names = [];
        var tutup = ' Tempat Fitness Tutup';
        
        if (i % 5 == 0){
            names.push(tutup);
        }
        if (countTono === i){
            countTono += 2;
            if (names.indexOf(tutup) == -1){
                names.push(' Tono');
            }
        }
        if (countAnton === i){
            countAnton += 4;
            if (names.indexOf(tutup) == -1){
                names.push(' Anton');
            }
        }
        if (countBudi === i){
            countBudi += 5;
            if (names.indexOf(tutup) == -1){
                names.push(' Budi');
            }
        }
        names = names.join(',');
        console.log(str.concat(names));
    }
}
fitness();