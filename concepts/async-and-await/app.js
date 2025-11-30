let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("color changed successfully");
        }, delay);
    })
}

async function demo() {
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
    await changeColor("yellow", 1000);
    await changeColor("pink", 1000);
}

demo2();

//          avoid rejection in asynce await promise using try and catch

function changeColor2(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5 + 1);
            if (num < 3) {
                reject("promise rejected!");
            } else {
                h1.style.color = color;
                console.log(`color changed to ${color}`);
                resolve("color changed successfully");
            }
        }, delay);
    })
}

async function demo2() {
    try {
        await changeColor2("red", 1000);
        await changeColor2("green", 1000);
        await changeColor2("blue", 1000);
        await changeColor2("yellow", 1000);
        await changeColor2("pink", 1000);
    }catch(err){
        console.log("error catched!");
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("new number is:", a + 3);
}