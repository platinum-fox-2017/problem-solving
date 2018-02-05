//Problem Solving - Challenges
/*
- mendapatkan daftar orang yang menjadi member, ada 3 orang member untuk dimasukkan ke dalam sebuah variabel "member"
- mdalam array terdapat perbedaan dari 3 member tersebut sesuai dengan karakter / pola jadwal masing-masing
   Tono : setiap 2 hari
   Anton : setiap 4 hari
   Budi : setiap 5 hari
- 3 member mulai datang per tanggal 7
- looping untuk cek tanggal mulai tanggal 7 sampai 31
- jika tanggal ke-i MOD 5 sama dengan 0 (setiap kelipatan tanggal 5),
menampilkan "Tanggal ke-i : Tempat Fitnes Tutup"
- jika tidak, melakukan looping untuk cek isi array member
- jika tanggal ke-i MOD array member[index ke-j][1] (setiap ke-n hari) sama dengan 0,
menampilkan tanggal + nama dalam array member index ke[0]
*/

var member = ([["Tono",2],["Anton",4],["Budi",5]]);
function cekJadwal(member){
	var tanggal = 7;
	
	
	for(var i=0; i<=31-tanggal; i++){
		var today = "Tanggal "+ (i + tanggal) + ": ";
		if((i+tanggal) % 5 === 0){
			today += "Tempat Fitnes Tutup";
			console.log(today);
		}
		else{
			for(var j=0; j<member.length; j++){
				if(i % member [j][1] === 0){
					today += member [j][0] + ", ";
				}					
			}
			console.log(today.slice(0,today.length-2));
		}
	}
}

cekJadwal(member);
