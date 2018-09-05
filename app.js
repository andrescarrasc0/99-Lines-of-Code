var friends = ['Bika', 'Sarika', 'Andy', 'Martin', 'Chris']




for (var i = 0; i < friends.length; i++) {
    for (var j = 99; j > 1; j--) {
        console.log(j + ' lines of code in the file, ' + j-- + ' lines of code; '+friends[i]+' strikes it out, clears it all out, ' + j + ' more lines of code in the file.');
    }console.log('2 lines of code in the file, 2 lines of code; '+friends[i]+' strikes it out, clears it all out, 1 line of code in the file.');
    console.log('1 line of code in the file, 1 line of code; '+friends[i]+' strikes it out, clears it all out, no more lines of code in the file.');
}
