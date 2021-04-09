var strSplit = "India is a great country and I will work towards making our country the better India".split(' ');
var makeAry=[]
var makeAryNum=[]
strSplit.forEach(function(value,key){
    makeAryNum.push(value.length)
    makeAry.push({res:value,countnum:value.length})
})

var sort_by;
(function() {
    var default_cmp = function(a, b) {
        if (a == b) return 0;
        return a < b ? -1 : 1;
    },
        getCmpFunc = function(primer, reverse) {
            var cmp = default_cmp;
            if (primer) {
                cmp = function(a, b) {
                    return default_cmp(primer(a), primer(b));
                };
            }
            if (reverse) {
                return function(a, b) {
                    return -1 * cmp(a, b);
                };
            }
            return cmp;
        };

    // actual implementation
    sort_by = function() {
        var fields = [],
            n_fields = arguments.length,
            field, name, reverse, cmp;

        // preprocess sorting options
        for (var i = 0; i < n_fields; i++) {
            field = arguments[i];
            if (typeof field === 'string') {
                name = field;
                cmp = default_cmp;
            }
            else {
                name = field.name;
                cmp = getCmpFunc(field.primer, field.reverse);
            }
            fields.push({
                name: name,
                cmp: cmp
            });
        }

        return function(A, B) {
            var a, b, name, cmp, result;
            for (var i = 0, l = n_fields; i < l; i++) {
                result = 0;
                field = fields[i];
                name = field.name;
                cmp = field.cmp;

                result = cmp(A[name], B[name]);
                if (result !== 0) break;
            }
            return result;
        }
    }
}());



makeAry.sort(sort_by('countnum', {
    name: 'countnum',
    primer: parseInt,
    reverse: false
}));

var hj=makeAry.reverse();
// console.log(hj,"I am the final array to reverse form");
makeFinalAry=[];
hj.forEach(function(index,key){
    makeFinalAry.push(index.res)
})
let unique = [...new Set(makeFinalAry)];
console.log(unique.toString(),unique,"This result according to frequency word ********")
