var data = "India is a great country and I will work towards making our country the better India";
var words = data.split(" ");
var unique = [];
words.sort();
console.log(words);
for (var i = 0; i < words.length; i++){
    var word = words[i];
    if(word in unique){
        var count  = unique[word];
        count++;
        unique[word] = count;
    }
    else{
        unique[word] = 1;
    }   
}

console.log(typeof(unique));
console.log(unique);

