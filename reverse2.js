var t = "raman kumar aggarwal";
var z = "";
count = 0;
for (var i = t.length-1; i >= 0; i--){
    if(t[i] == " "){
        for(var j = t.lastIndexOf(t[i]); j<=t.length-1 ; j++){
           z = z+t[j];
        }
        break;
    }
}
z = z+ " ";
for (var i = 0; i<=t.length-1 ; i++){
    z = z + t[i];
    if(t[i] == " "){   
        count++;
    }
    if(count == 2){
        break;
    }
}
console.log(z);
