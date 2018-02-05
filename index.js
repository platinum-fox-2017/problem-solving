/*
1. tentukan tanggal buka dan jumlah hari dalam 1 bulan.
2. lakukan pengulangan untuk mengecek jadwal yang ada dari tanggal buka hingga tutup,
dengan kondisi seperti dibawah.
3. setiap tanggal yang merupakan kelipatan 5 akan menampilkan jadwal tempat fitness tutup.
4. Tono akan datang ke gym setiap 2 hari sekali, anton 4 hari sekali, dan budi, 5 hari sekali.
*/

function problem(input) {
    console.log(`Example Output:`)
    for (let i = 7; i < 32; i++) {
        if (i % 5 == 0) {
            console.log(`Tanggal ${i}: Tempat Fitness Tutup`)
        } else {
            let result = []
            schedule.forEach(person => {
                if ((i - 7) % person.gymSchedule == 0) {
                    result.push(person.name)
                }
            })
            console.log(`Tanggal ${i}: ${result}`)
        }
    }
}
let schedule = [{
        name: "Tono",
        gymSchedule: 2
    },
    {
        name: "Anton",
        gymSchedule: 4
    },
    {
        name: "Budi",
        gymSchedule: 5
    }
]

problem(schedule)