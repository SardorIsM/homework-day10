// massala-1 tugatim
// let person = {
//     id: 1,
//     ism: "sardor"
// }
// function isEmpty(obj) {
//     let newObj = Object.keys(obj);
//     for (let i = 0; i < newObj.length; i++) {
//         return false;
//     }
//     return true;
// }

// console.log(isEmpty(person));

// massala-2 tugatim
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// function jami(daromat) {
//     let obshiy = 0;
//     let num = Object.values(daromat);
//     for (let i = 0; i < num.length; i++) {
//         obshiy += num[i];
//     }
//     return obshiy;
// }

// console.log(jami(salaries));
// massala-3 qilolmadim
let menu = {
    width: 200,
    height: 300,
    title: "my menu"
};

function multiplyNumeric(menu) {
    let newObj = {};
    let key = Object.keys(menu);
    let info = Object.values(menu);
    for (let i = 0; i < info.length; i++) {
        if (typeof info[i] === 'number') {
            info[i] = info[i] * 2;
        } else {
            info[i] = info[i];
        }
    }
    for (let el in key) {
        newObj = el;
    }
    for (let el1 in info) {
        newObj[el1] = info;
    }
    return newObj;
}
console.log(multiplyNumeric(menu));

// massala-4 tugatim

// let arr = [5, 2, 1, -10, 8];
// function teskari(num) {
//     for (let i = 0; i < num.length; i++) {
//         let newArr = num.sort((a, b) => {
//             if (a > b) {
//               return 1;
//             }
//             if (a < b) {
//               return -1;
//             }
//             if (a = b) {
//               return 0;
//             }
//           });
//           return newArr;
//     }
// }

// function teskari(num) {
//     let newArr = [];
//     for (let i = num.length - 1 ;i >= 0; i--) {
//         newArr.push(num[i]) ;
//     }
//     return newArr;
// }
// console.log(teskari(arr));

// massala-5 chala
// let arr = [];
// function inputNumber() {
//     let num = +prompt('Son kiriting: ');
//     if (!isNaN(num)) {
//         arr.push(num);
//         inputNumber();
//     }     
//     return arr;
// }
// console.log(inputNumber());