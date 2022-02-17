/*function fearNotLetter(str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var firstLetter = str[0]; // get the first letter of the string
    var index = alphabet.indexOf(firstLetter); // get the index of the first letter
    
    var lastLetter = str[str.length - 1]; // get the last letter of the string
    var lastIndex = alphabet.indexOf(lastLetter); // get the index of the last letter
    
    var missingLetter = []
    for (var i = index; i < lastIndex; i++) {
        missingLetter.push(alphabet[i]);
    }

    var arrayString = str.split("");
    var count = 0;
    for (var i = 0; i < missingLetter.length; i++) {
        if (arrayString[i] !== missingLetter[i]) {
            return missingLetter[i];
        }
        else if (arrayString[i] === missingLetter[i])
            count +=1 ; 
            if (count === missingLetter.length) {
                return undefined;
            }
            
        
        
    }

    


    return missingLetter
    
}
  
  
  console.log(fearNotLetter("stvwx"));*/

/*
  function uniteUnique(...arguments) {
    var args = Array.from(arguments);
    var array = [];
    args.forEach(function(element) {
      array = array.concat(element);
    });
    var array2 = [];
    array.forEach(function(element) {
      if (array2.indexOf(element) === -1) {
        array2.push(element);
      }
    });
    return array2;


  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));*/


/*
  function convertHTML(str) {

    var htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&apos;'
    };

    var htmlSplit = str.split("");
    
    for (var i = 0; i < htmlSplit.length; i++) {
        if (htmlEntities.hasOwnProperty(htmlSplit[i])) {
            htmlSplit[i] = htmlEntities[htmlSplit[i]];
        }
            
    }
return htmlSplit.join("");

    }
console.log(convertHTML("Dolce & Gabbana"));
  
*/

/*
function sumFibs(num) {
    let n1 = 0;
    let n2 = 1; 
    var fibArray = [];
    for (let i = 1; i <= num+1; i++) {
        fibArray.push(n1)
        
        let nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    
    }

    var sum = fibArray.reduce((a, b) => a + b, 0);

    return sum;

    

  }
  
  console.log(sumFibs(5));*/

/*
  function binaryAgent(str) {

    var binary = str.split(" ");
    var decimals = [];
    for (var i = 0; i < binary.length; i++) {
        decimals.push(parseInt(binary[i], 2));
    }
    var string = "";
    for (var i = 0; i < decimals.length; i++) {
        string += String.fromCharCode(decimals[i]);
    }
    return string;


  }
  
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 0110*/


  