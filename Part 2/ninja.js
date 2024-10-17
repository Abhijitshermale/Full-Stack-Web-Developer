/*
Sample Input 1:
2
3 4 8
1 2 3 4
5 6 7 8
7 9 2 1
4 4 10
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16
Sample Output 2:
9
13
*/

/*
Sample Input 2:
2
2 3 6
2 3 1
2 1 5
4 2 7
1 2 
3 2
8 3
3 4
Sample Output 2:
2
8
*/








/* Declare and implement your function here 
eg: function example(parameter_name1,parameter_name2....){}
Handle the input/output from main()
*/




process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
input_stdin += data;
});

process.stdin.on('end', function () {
input_stdin_array = input_stdin.split("\n");
main();    
});

function readLine() {
return input_stdin_array[input_currentline++];
}


function main() {

    /* Read your input here 
    eg: For string variables:   let str = String(readLine()); 
        For int variables: let var_name = parseInt(readLine());
        For arrays : const arr = readLine().replace(/\s+$/g, '').split(' ');
    */
    let num = parseInt(readLine());
    let matrices = []
    for (let i = 0; i < num; i++){
        let [n, m, k] = readLine().replace(/\s+$/g, '').split(' ').map(Number);
        let matrix = []
        for (let j = 0; j < n; j++){
            matrix.push(readLine().replace(/\s+$/g, '').split(' ').map(Number))
        }
        matrices.push({ matrix, n, m, k });
    }
    // console.log(matrices)

    for (let i = 0; i < matrices.length; i++){
        const { matrix, n, m, k } = matrices[i];
        let x = calculate(matrix, n, m, k);
        console.log(x);
    }

    /*
    Call your function with the input/parameters read above
    eg: let x = example(var_name, arr);
    */

   /*
   Log your output here 
   eg: console.log(x);
   */

}

function calculate(matrix, n, m, k) {
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = m - 1;
    let count = 0;

    while (left <= right && top <= bottom) {

        // traversing from left to right
        for (let i = left; i <= right; i++){
            count++;
            // console.log(count)
            // console.log(k)
            if (count == k) {
                // console.log(matrix[top][i])
            return matrix[top][i];
            }
                
        }
        top++;
        // traversing from top to bottom
        for (let i = top; i <= bottom; i++){
            count++;
            // console.log(count)
            // console.log(k)
            if (count == k) {
                // console.log(matrix[i][right])
                return matrix[i][right];
            }
        }
        right--;
        // traversing from right to left
        if (top <= bottom) {
            for (let i = right; i >= left; i--){
                count++;
                // console.log(count)
                // console.log(k)
                if (count == k) {
                    // console.log(matrix[bottom][i])
                    return matrix[bottom][i];
                }
            }
            bottom--;
        }
        // traversing from bottom to top
        if (left <= right) {
            for (let i = bottom; i >= top; i--){
                count++;
                // console.log(count)
                // console.log(k)
                if (count == k) {
                    // console.log(matrix[i][left])
                    return matrix[i][left];
                }
            }
            left++
        }
    }
    return -1
}