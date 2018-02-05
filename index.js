function gymSchedule(members) {
  var count = 0;
  var date = 7;
  var member = [];

  while(date <= 31) {
    for(var i = 0; i < members.length; i++) {
      if(date === 7) {
        member.push(members[i].name);
      } else {
        if(count%2 === 0 && members[i].frequency === 2) {
          member.push(members[i].name);
        } else if(count%4 === 0 && members[i].frequency === 4) {
          member.push(members[i].name);
        } else if(count%5 === 0 && members[i].frequency === 5) {
          member.push(members[i].name);
        }
      }
    }
    if(date%5 === 0) {
      console.log('Tanggal ' + date + ': ' + 'Tempat Fitness Tutup')
    } else {
      console.log('Tanggal ' + date + ': ' + member.join(', ')); 
    }
    member = [];
    date++;
    count++;
  }
}

//--------------------------------------------------
gymSchedule([
  { name: "Tono", frequency: 2 },
  { name: "Anton", frequency: 4 },
  { name: "Budi", frequency: 5 }
]);