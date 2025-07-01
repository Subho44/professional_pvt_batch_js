let n = 5;
for(let i=1; i<= n; i++){        // outer loop for row
    let pattern = '';          //string for each row
    for(let j=1; j<=n-i; j++){   //add spaces before star
        pattern +="  ";        //2 spaces for alignment
    }
    for(let k=1; k <=i;k++){
        pattern +="* ";        //add star
    }
    console.log(pattern);     //row print
}