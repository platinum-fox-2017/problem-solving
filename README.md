# problem-solving

1. initialize a new empty array that will hold out the string of calendar schedule
2. initialize an empty array that will hold out all the names based on the calendar dates

3. set a (for) loop that iterates over the calendar days from day 7 until 31
    3.a set an if statement, such that index is mod by 5 is 0
        3.a.1 will push the string that the 'gym is closed' to the empty array (step 1)
    3.b else will push a template string to the empty array
    
4.  set a (for) loop such that iterates over the length of array in step 1
    4.a  push a new array into the empty array on step 2
    4.b set an if statement such that, if index mod by 2 is 0, will push the name 'Tono' to corresponding empty array (in 4.a)
    4.c set an if statement such that, if index mod by 4 is 0, will push the name 'Anton' to corresponding empty array (in 4.a)
    4.d set an if statement such that, if index mod by 5 is 0, will push the name 'Budi' to corresponding empty array (in 4.a)
    
5. set a (for) loop to print result, that iterates over the length of array in step 1
    5.a set an if statement such that, if array at corresponding index does not yet have a 'gym is closed' string will add names based on array in step 2 (with corresponding index) and print it out
    5.b  set an if statement such that, if array at corresponding index already has a 'gym is closed' string will only print as is
