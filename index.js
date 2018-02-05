function calendar_fitness(date_open) {
	var member = [['Tono', 2], ['Anton', 4], ['Budi', 5]]; //list member

	var index = 0;

	if (date_open % 5 != 0) {
		for (var i = date_open; i <= 31; i++) { //date from date_open -> date 31
			var result = [];

			if (i % 5 == 0) result.push('Tempat Fitness Tutup'); //cek tgl tutup tempat fitness
			else {
				for (var j = 0; j < member.length; j++) { //loop member
					if (index == 0) result.push(member[j][0]); else //if index == 0 cetak semua
					if (index % member[j][1] == 0) result.push(member[j][0]); //if index % jadwal member == 0 cetak member
				}
			}

			index++; //index++
			console.log('Tanggal ' + i + ': ' + result.join(', '));
		}
	} else {
		console.log('Pembukaan tempat fitness tidak bisa dilakukan di tanggal kelipatan 5');
	}
}

calendar_fitness(7);