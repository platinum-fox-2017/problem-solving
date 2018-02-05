for (let i = 7; i <= 31; i++) {
    // console.log('Tanggal ' + i);
    let members = ""
    if (i === 7) {
        console.log('Tanggal ' + i + ": " + "Tono, Anton, Budi")
    } else if ((i - 7) % 2 === 0) {
        members += 'Tono'
        if ((i - 7) % 4 === 0) {
            members += ', Anton'
        }
        if ((i - 7) % 5 === 0) {
            members += ', Budi'
        }
        console.log('Tanggal ' + i + ": " + members);
    }
    else if ((i - 7) % 5 === 0) {
        members += 'Budi'
        console.log('Tanggal ' + i + ": " + members);
    }
    else if (i % 5 === 0) {
        console.log('Tanggal ' + i + ": " + "Tempat Fitnes Tutup")
    } else {
        console.log('Tanggal ' + i);
    }
}

/*
    Tono 2 hari sekali
    Anton 4 hari sekali
    Budi 5 hari sekali
    Hari pertama Tono, Anton, Budi
*/