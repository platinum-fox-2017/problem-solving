// jadwal member
// buat variabel jadwal untuk outputnya-> Tanggal X :
// buat variable array kosong untuk tampung nama" member yang nantinya gabung dengan variabel jadwal
// looping dari 7-31
// jika i/5 ==0 maka tempat fitness libur
// 

for(let i=7; i<=31 ;i++){
    let jadwal = `Tanggal ${i} : `
    let member = []
    if(i % 5 ==0){
        jadwal+= `Tempat Fitness Tutup`
    }else{
        // console.log(jadwal)
        let resetTanggal = i-7;
        if(resetTanggal % 2 ==0){
            member.push("Tono")
        }
        if(resetTanggal % 4 ==0){
            member.push("Anton")
        }
        if(resetTanggal % 5 ==0){
            member.push("Budi")
        }
        // console.log(jadwal+resetTanggal)
    }
// console.log(member,"ini ke",i)
console.log(jadwal+member)
}
