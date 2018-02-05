
function fitness(input)
{
	
  var firstDay=7; // Variabel penampung untuk tgl dibukanya tempat fitness
  var temp=[]; // Variabel penampung untuk hasil akhir
  var hari=0; // Variabel yang digunakan untuk menjadi pembanding dengan hari dimana  Tono, Anton, Budi akan melakukan fitness setiap berapa hari 
  var tampungNama=''; // Digunakan untuk menampung siapa saja yang fitness pada hari ke-sekian
  var tampungTgl=''; // Digunakan untuk menampung penggabungan dari "Tanggal ke-sekian :" dan variabel tampungNama
  
  //Melakukan looping dari hari dimulainnya fitness hingga tgl 31
 for(var i=firstDay;i<=31;i++)
  {
	  //Melakukan looping array inputan
    for(var j=0;j<input.length;j++)
      {
		 //Dilakukan pengecekan jika hari mod hari inputan sama dengan 0 maka dilakukan penggabungan dari setiap nama yang fitness di ahri tersebut
      if(hari %input[j][1]===0)
        {
		
          tampungNama+=input[j][0]+' ';
        }
        
     
      }
	  //Melakukan penggabungan dari "Tanggal  " variabel i sebagai tgl ke-berapa dan nama2 yang sudah masuk ke tampungNama
      tampungTgl+="Tanggal "+i+" : "+tampungNama;
	  //Dilakukan pengecekan jika variabel i(hari) merupakan kelipatan  5 maka akan di push pernyataan libur ke temp
       if(i%5===0)
        {
          temp.push("Tanggal "+i+" : Tempat fitness tutup");
        }
		// jika bukan kelipatan 5 maka temp akan diisi tampungTgl
        else{
            temp.push(tampungTgl);
        }
		
      hari++;
	  //tampungNama & tampungTgl dikosongkan kembali
      tampungNama='';
      tampungTgl='';
  }
  //return temp;
  
  //looping untuk output
  for(var k=0;k<temp.length;k++)
  {
	 
    console.log(temp[k]);
  }
}

fitness([['Tono',2],['Anton',4],['Budi',5]]);