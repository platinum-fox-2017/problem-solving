for (let i = 7; i <= 31; i++) {
    let resArr = [];
    if (i == 7) {
        resArr.push('Tono', 'Anton', 'Budi')
    } else if (i % 5 === 0) {
        resArr.push('Tempat Fitnes Tutup')
    } else {
        if ((i - 7) % 2 == 0) {
            resArr.push('Tono')
        }
        if ((i - 7) % 4 == 0) {
            resArr.push('Anton')
        }
        if ((i - 7) % 5 == 0) {
            resArr.push('Budi');
        }
    }
    console.log('tanggal ' + i + ':' + resArr);
}