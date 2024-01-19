'use strict'

let optionsButtons = document.querySelectorAll(".option-button"),
    advancedOptionButton = document.querySelectorAll(".adv-option-button");

let fontName = document.getElementById("fontName"),
    fontSizeRef = document.getElementById("fontSize"),
    writingArea = document.getElementById("text-input"),
    linkButton = document.getElementById("createLink"),
    del = document.getElementById("cencel");

let alignButtons = document.querySelectorAll(".align"),
    spacingButtons = document.querySelectorAll(".spacing"),
    formatButtons = document.querySelectorAll(".format"),
    scriptButtons = document.querySelectorAll(".script");

let fontList = [
    "Arial",
    "Verona",
    "Times New Roman",
    "Garamond",
    "Yu Gothic Light",
    "Georgia",
    "Courier New",
    "Cursive",
    "Impact",
    "Comic Sans MS",

];

const initalizer = () => {
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);

    fontList.map((value)=> {
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option)
    });

    for(let i=1; i <= 7; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    fontSizeRef.value = 3;
};

const modifyText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value)
};

optionsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modifyText(button.id, false, button.value)
    });
});

advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, false, button.value)
    });
});

linkButton.addEventListener('click', ()=> {
    let userLink = prompt("Enter a URL?");
    if (/http/i.test(userLink)) {
        modifyText(linkButton.id, false, userLink);
    } else {
        userLink = "http://www." + userLink;
        modifyText(linkButton.id, false, userLink);
    }
});

const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener('click', ()=> {
            if (needsRemoval) {
                let alreadyActive = false;
                if (button.classList.contains("active")) {
                    alreadyActive = true;
                }
                highlighterRemover(className);
                if (!alreadyActive) {
                    button.classList.add("active");
                }
            } else {
                button.classList.toggle("active");
            }
        });
    });
};

let highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove("active")
    });
};

const removeAll = () => {
    del.addEventListener('click', () => {
        writingArea.innerHTML = "";
    })
}
removeAll()
window.onload = initalizer();






//LOCAL SCOPE  && Global variables 
// // ======== global variables ===============
// let course;
// var job;

// function myfunction() { 
  
//     //============== Local variable ======
//     course = "GeeksforGeeks";  
//     job = "teacher"; 

//     console.log(course);    // GeeksforGeeks
//     console.log(job);    // teaerch
// }; myfunction();

// console.log(course); // GeeksforGeeks
// console.log(job);  // teaerch

// course = "english"
// console.log(course); //english

// LOCAL SCOPE with Local variables (var, let)
// function myfunction() { 
//     //============== Local variable ======
//     let course = "GeeksforGeeks";  
//     var job = "teacher"; 

//     console.log(course);    // GeeksforGeeks
//     console.log(job);    // teaerch
// }; myfunction();

// console.log(course); // ReferenceError
// console.log(job);  // ReferenceError


// BLOCK SCOPE && local variables
// if(true) {
//     let x = 15;
//     var y = 11;

//     console.log(x); //15
//     console.log(y); //11
// }
// console.log(x); //ReferenceError
// console.log(y); //11



// BLOCK SCOPE &&& global variables
// let x;
// var y;

// if(true) {
//     x = 15;
//     y = 11;

//     console.log(x); //15
//     console.log(y);//11
// }
// console.log(y); //11
// console.log(x); //15




// TYPE CONVERTION
// // har qanday string qiymatni lyuboy data type ga qushganimizda string qaytaradi
// console.log('3'+ null); //3null
// console.log('8'+2); //82
// console.log('2'+"2"); //22
// console.log("ssds"+3); //ssds3
// console.log(typeof(''+3)); //string
// console.log('3'+ false); //3false
// // ********************
// console.log(null+'3'); //null3
// console.log(false+'3'); //false3
// console.log(6 +'3'); //63
// console.log('3' +'3'); //33

// string ni har qanday data type ga kupaytirsak yoki ayirsak yoki bulsak bunda number sifatida bajaradi va number qaytaradi
// console.log('5'-2); //3
// console.log(5-'2'); //3
// console.log(typeof('5'-'2')); //number
// console.log('5'-'2'); //3
// console.log(false-'2'); //-2
// console.log(true-'2'); //-1
// console.log('5'-null); //5
// console.log('5'-true); //4
// console.log('5'-false); //5
// console.log(true-false); //1
// console.log(true+false); //1
// // *********************
// console.log('5'*'2'); //10
// console.log('5'/'2'); //2.5
// console.log(true*'2'); //2
// console.log(null*'2'); //0
// console.log('5'*false); //0
// console.log(null*false); //0
// console.log(true*false); //0
// console.log(true/false); //Infinity


// GLOBAL SCOPE
// var uzgaruvchisi global scopda chaqirilganda, uning qiymati qayerda uzlashtirilganidan qatiy nazar uni qabul qiladi, ya'ni HOISTING da {var x;} ni uni qiymati elon qilingan qatordan oldinga olib chiqadi va uqiydi.
// x=5;
// var x;
// console.log(x); //5

// // let uzgaruvchisi global scopda faqat uzidan kngi qatorlarni uqiydi, shuning uchun buning qiymatini elon qilishda u chaqirilgandan sung qilinadi.
// y=5;
// let y;
// console.log(y); // ReferenceError, "y" is not defined.


