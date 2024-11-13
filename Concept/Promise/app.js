let h1 = document.querySelector("h1");

// function saveToDb(data, success, failure) {
//     let netSpeed = Math.floor(Math.random() * 10) + 1;
//     if (netSpeed > 4) {
//         success(data);
//     } else {
//         failure(data);
//     }
// }

// saveToDb("first",
//     (data) => {
//         console.log(`Success1: Your data was saved= ${data}`);
//         let test = h1.innerHTML;
//         h1.innerHTML = `${test}<br> Success1: Your data was saved= ${data}`;

//         saveToDb("Second",
//             (data) => {
//                 console.log(`Success2: Your data was saved= ${data}`);
//                 let test = h1.innerHTML;
//                 h1.innerHTML = `${test}<br> Success2: Your data was saved= ${data}`;

//                 saveToDb("third",
//                     (data) => {
//                         console.log(`Success3: Your data was saved= ${data}`);
//                         let test = h1.innerHTML;
//                         h1.innerHTML = `${test}<br> Success3: Your data was saved= ${data}`;

//                         saveToDb("foruth",
//                             (data) => {
//                                 console.log(`Success4: Your data was saved= ${data}`);
//                                 let test = h1.innerHTML;
//                                 h1.innerHTML = `${test}<br> Success4: Your data was saved= ${data}`;
//                             },
//                             (data) => {
//                                 console.log(`Failure4: Network Connection Error= ${data}`);
//                                 let test = h1.innerHTML;
//                                 h1.innerHTML = `${test}<br> Failure4: Network Connection Error= ${data}`;
//                             });
//                     },
//                     (data) => {
//                         console.log(`Failure3: Network Connection Error= ${data}`);
//                         let test = h1.innerHTML;
//                         h1.innerHTML = `${test}<br> Failure3: Network Connection Error= ${data}`;
//                     });
//             },
//             (data) => {
//                 console.log(`Failure2: Network Connection Error= ${data}`);
//                 let test = h1.innerHTML;
//                 h1.innerHTML = `${test}<br> Failure2: Network Connection Error= ${data}`;
//             });
//     },
//     (data) => {
//         console.log(`Failure1: Network Connection Error= ${data}`);
//         let test = h1.innerHTML;
//         h1.innerHTML = `${test}<br> Failure1: Network Connection Error= ${data}`;
//     });



//                      After Promise function 


function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let netSpeed = Math.floor(Math.random() * 10) + 1;
        if (netSpeed > 4) {
            resolve(`Success: data was saved = ${data}`);
        } else {
            reject(`Failure: weak Connection`);
        }
    })
}

//                  Syntax-------- of promise then() and catch()
// saveToDb("first")
//     .then(() => {
//         console.log(`Promise1 was resolved`);
//     })
//     .catch(() => {
//         console.log(`Promise1 was rejected`);
//     })


//                  Promise Chaining 

saveToDb("first")
    .then(() => {
        console.log(`Promise1 was resolved`);
        let test = h1.innerHTML;
        h1.innerHTML = `${test}<br> Promise1 was resolved`;
        return saveToDb("second")
    })
    .then(() => {
        console.log(`Promise2 was resolved`);
        let test = h1.innerHTML;
        h1.innerHTML = `${test}<br> Promise2 was resolved`;
        return saveToDb("third")
    })
    .then(() => {
        console.log(`Promise3 was resolved`);
        let test = h1.innerHTML;
        h1.innerHTML = `${test}<br> Promise3 was resolved`;
        return saveToDb("fourth")
    })
    .then(() => {
        console.log(`Promise4 was resolved`);
        let test = h1.innerHTML;
        h1.innerHTML = `${test}<br> Promise4 was resolved`;
    })
    .catch(() => {
        console.log(`Promise was rejected`);
        let test = h1.innerHTML;
        h1.innerHTML = `${test}<br> Promise was rejected`;
    })