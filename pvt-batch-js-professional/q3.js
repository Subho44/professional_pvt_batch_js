let n = 5;
for(let i=n; i>=1; i--){        // 5 down to  1
    let pattern = '';          //string for each row
    for(let j=1; j<=i; j++){   //inner  loop print stars
        pattern +="* "         //add star with space
    }
    console.log(pattern);     //row print
}