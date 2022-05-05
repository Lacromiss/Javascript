function checkString(stringg) {
    let checkUpper= false;
    let checkLower= false;
    let checkNumber= false;
    for (let index = 0; index < stringg.length; index++) {

        if (stringg[index].toUpperCase()==stringg[index]) {
            checkUpper= true;
        }
        if (stringg[index].toLowerCase()==stringg[index]) {
            checkLower= true;
        }
        if (!isNaN(stringg[index])) {
            checkNumber= true;
        }
        
        
    }
    if (checkUpper && checkLower&& checkNumber) {
        return true;
        
    }
    else{
        return false;
    }
    
}
let musi= "Mustafa123";
console.log(CheckString(musi));
function checkk(string2) {
    m1=false;
    m2=false;

    let count=string2.split(" ")
    if (count.length==2) {
        if (string2[0][0]==string2[0][0].toUpperCase()) {
            m1=true;
        }
        if (string2[1][0]==string2[1][0].toUpperCase()) {
            m2=true;
        }
        if (m1 && m2) {
            return true;
            
        }
        else false;
        
        
        }
           
}
function addInt(arrs,intt) {
    arrs.push(intt)
    return arrs;

    
}
function trimm(stringg) {
     return stringg.trimEnd().trimStart()
    
}
function sortAndFilter(arrs) {
   var d= arrs.trimEnd().trimStart()
   let newArr=[]
   for (let index = 0; index < array.length; index++) {
       if (d[index]%2==0) {
           newArr.push()
           
       }
       return newArr;
       
   }
    
}
