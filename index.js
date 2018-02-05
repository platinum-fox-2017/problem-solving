// Tentukan tanggal buka dan tutup
// Buat sebuah object untuk para member
// Lakukan pengulangan untuk print jadwal 1 bulan
    // Apabila tanggal habis dibagi 5 tempat fitness tutup
    // Buat sebuah array kosong untuk menampung siapa saja yang latihan di hari tersebut

    class ProblemSolving{
        constructor(jadwal){
            this.tanggalBuka = 7
            this.jadwalPersons = jadwal
            this.jadwal = []
        }
    
        setDay(){
            for(let i = this.tanggalBuka; i <= 31; i++){
                if(i % 5 == 0){
                    this.jadwal += `Tanggal ${i} : Tempat Fitness Tutup \n`
                }else{
                    let jadwalPerHari = []
                    jadwal.forEach(function(person) {
                        if((i - 7) % person.waktu === 0){
                        jadwalPerHari.push(person.name)
                        }
                    });
                    this.jadwal += `Tanggal ${i} : ${jadwalPerHari.join(", ")} \n`
                }
            }
    
            return this.jadwal
        }
    }
    
    let jadwal = [{
        name: "Tono",
        waktu: 2
    },
    {
        name: "Anton",
        waktu: 4
    },
    {
        name: "Budi",
        waktu: 5
    }]
    
    let soal1 = new ProblemSolving(jadwal)
    console.log(soal1.setDay())
    
    
    
    