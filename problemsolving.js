/*
1. Create a for loop that starts at 7 and ends at 31
2. Create an array inside the for loop
3. Create a variable j that is 7 less than the loop variable
4. Define the conditions to push the associated names in the array
5. Print the result
*/
    for (let i = 7; i <=31 ; i++) {
        let array =[]
        let j=i-7;
        if(j%2 === 0){
            array.push('Tono');
        }
        if(j%4 === 0){
            array.push('Anton');
        }
        if(j%5 === 0){
            array.push('Budi');
        }
        if(i%5 === 0){
            array =[];
            array.push('Tempat Fitness Tutup');
        }
        console.log(`Tanggal ${i}: ${array}`)
    }