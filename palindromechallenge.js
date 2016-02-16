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
    var s = readLine();
    
    word1 = s.replace(/ /g,'');
    arr = word1.split('');
    arr = arr.map(String);
    var o = "";
    n = word1.length;
    
    for (i = 0; i < n; i++){
        var c = arr[i].charCodeAt();
        o = String.fromCharCode(c)+o;
    }
    word2 = o.replace(/ /g,'');
    
    console.log(word1);
    console.log(word2);
    
    if (word1 == word2){
        console.log("Is a palindrome")
    } else {
        console.log("Is not a palindrome")
    }
}
