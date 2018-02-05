/*
name: Tono, freq: 2
name: Anton, freq: 4
name: Budi, freq: 5
start tanggal startDate:7 , closed every multiple of 5 days

set variable month = 31 days
set variable startDate as 7
// set visiting as an empty array to contain visiting members

// loop date from startDate to month with increment of 1 to log every day
  // reset visiting to empty array
  // set output as 'Tanggal ' + date + ': '; as the format for result
  // if the date is 7 then add Tono, Anton, Budi to visiting
    // turn visiting to string with ', ' separator
    // log output + visiting
  // else
    // if the date - startDate is divisible by 2 then add Tono to visiting
    // if the date - startDate is divisible by 4 then add Anton to visiting
    // if the date - startDate is divisible by 5 then add Budi to visiting
    // turn visiting to string with ', ' separator
    // after adding visiting members, add it to output
*/
var month = 31;
var startDate = 7;
var visiting = [];


for (var date = startDate; date <= month; date++) {
  visiting = [];
  var output = 'Tanggal ' + date + ': ';
  if(date === 7){
    visiting.push('Tono');
    visiting.push('Anton');
    visiting.push('Budi');
    visiting = visiting.join(', ');
    console.log(output + visiting);
  } else {
    // if the date is divisible by 5 then log output + 'Tempat Fitness Tutup'
    if(date % 5 === 0) {
      console.log(output + 'Tempat Fitness Tutup');
    } else {
      if((date-startDate) % 2 === 0){
        visiting.push('Tono');
      }
      if((date-startDate) % 4 === 0){
        visiting.push('Anton');
      }
      if((date-startDate) % 5 === 0){
        visiting.push('Budi');
      }
      visiting = visiting.join(', ');
      console.log(output + visiting);
    }
  }

}
