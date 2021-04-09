var s = "Web To Welcome";
data = s.split(" ");
j = "";
var temp = data[2];
data[2] = data[0];
data[0] = temp;
//console.log(data);
for (var i = 0;i < data.length;i++){
    j = j+data[i]+" ";
}
console.log(j);




