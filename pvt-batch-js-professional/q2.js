let n = 5;
for(let i=1; i<=n; i++){        // outer loop for rows
    let pattern = '';          //string for each row
    for(let j=1; j<=i; j++){   //inner  loop print stars
        pattern +="* "         //add star with space
    }
    console.log(pattern);     //row print
}