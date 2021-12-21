
/*let var1 = prompt("birinci sayıyı giriniz")
let var2 = prompt("ikinci sayıyı giriniz")
let var3  = prompt("üçüncü sayıyı giriniz")

function findMax(param1,param2,param3) {
    

    if((param1>param2) && ( param1>param3)){return param1 ;

    }
    else if((param2>param1) && (param2>param3))
    {return param2;}
    else if ((param3>param1) && (param3>param2)){return param3;}
    
}

console.log(findMax(var1,var2,var3));


function evenAndOdds(param) {
    if (param%2===0){
        return "number is even";
    }
    
}
evenAndOdds(5);
function userIP() {
   let num1= Math.random()
   let num2= Math.random()
   let num3= Math.random()
   let num4= Math.random()
   return num1 + "." + num2 + "." + num3 + "." + num4 + "."
    
}*/
let arguman = "merhaba function";

function regularFunc(params) {
    return params;

}
regularFunc(arguman)

const expressFunc = function (params) {
    return params;

}
expressFunc(arguman)

const arrowFunc = (param1,param2) => {
    return (param1param2);
}
arrowFunc(arguman);
const arrowFunc1 = params => {
    return params;

}
arrowFunc1(arguman)

arguman = 15;
const arrowFunc2 = params => params * 2 + 10;//tek satırlık return yapar
console.log(arrowFunc2(arguman));

const arrowExample = (param1, param2) => {
    let result1 = param1 + param2;
    let result2 = param1 - param2;
    return ([result1, result2])
}
console.log(arrowExample(9, 3))

console.log(arrowExample(9, 3)[0])


const logUserName = () => {
    let name = 'bekir çiğdem';
    console.log(name);
};
logUserName();//bekir çiğdem
console.log(name);//referans error

let nam = 'çiğdem bekir';
const logUserNam = () => {
    nam = 'çiğdem bekir';//watch this line of code
    console.log(nam);
};
logUserNam();
console.log(nam);
let name = "mark";
const logUserName = () => {
    let isLoggedIn = true;
    let name='Guest User';
    if (isLoggedIn){
        let name='John Wayne';
        console.log(name); //John Wayne
    }
    console.log(name);//Guest User
};
console.log(name);
logUserName();
console.log(name);//referanserror


let firstName = "ahmet"
console.log(firstName[0]);
let myArr = ["merhaba",5,true]
console.log(myArr);
console.log(myArr[0]);//merhaba
console.log(myArr[1]);//5

//Array oluşturma
//1
let myArray = [];
console.log(myArray)
//2
let newArr = new Array(3);
console.log(newArr)

let newArray = new Array("merhaba","dünya",5,"bekir");
console.log(newArray);
console.log(newArray[1]);
//içerik değiştirme
newArray[2] = "jüpiter";
newArray[6]="çiğdem";
console.log(newArray);
//değişik içerikler
let var1="isim"
let var2;
let degArr =[null,undefined,NaN,5,"string"]
console.log(degArr)
//3
let lastName="bekir çiğdem";
let newestArr=lastName.split();
console.log(newestArr);
let newestArr1=lastName.split("");
console.log(newestArr1);
let newestArr2=lastName.split("  ");
console.log(newestArr2);
let newestArr3=lastName.split("");
console.log(newestArr3);
let letArr = ["mer","Ha",5]
const constArr = ["mermer","Halhal",55]
letArr[1] = "Harhar";
constArr[1] = "Hayhay";
console.log("letArr ==>",letArr);
console.log("constArr ==>",constArr);

let newArr = new Array(1).fill(3)
console.log(newArr)