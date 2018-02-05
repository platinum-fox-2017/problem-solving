function problem(input) {
    console.log(`Example Output:`)
    for (let i = 7; i < 32; i++) {
        if (i % 5 == 0) {
            console.log(`Tanggal ${i}: Tempat Fitness Tutup`)
        } else {
            let result = []
            jadwal.forEach(person => {
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