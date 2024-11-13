let h1 = document.querySelector("h1");

function saveToDb(data, success, failure) {
    let netSpeed = Math.floor(Math.random() * 10) + 1;
    if (netSpeed > 4) {
        success(data);
    } else {
        failure(data);
    }
}

saveToDb("first",
    (data) => {
        console.log(`Success1: Your data was saved= ${data}`);
        let test = h1.innerHTML;
        h1.innerHTML = `${test}<br> Success1: Your data was saved= ${data}`;

        saveToDb("Second",
            (data) => {
                console.log(`Success2: Your data was saved= ${data}`);
                let test = h1.innerHTML;
                h1.innerHTML = `${test}<br> Success2: Your data was saved= ${data}`;

                saveToDb("third",
                    (data) => {
                        console.log(`Success3: Your data was saved= ${data}`);
                        let test = h1.innerHTML;
                        h1.innerHTML = `${test}<br> Success3: Your data was saved= ${data}`;

                        saveToDb("foruth",
                            (data) => {
                                console.log(`Success4: Your data was saved= ${data}`);
                                let test = h1.innerHTML;
                                h1.innerHTML = `${test}<br> Success4: Your data was saved= ${data}`;
                            },
                            (data) => {
                                console.log(`Failure4: Network Connection Error= ${data}`);
                                let test = h1.innerHTML;
                                h1.innerHTML = `${test}<br> Failure4: Network Connection Error= ${data}`;
                            });
                    },
                    (data) => {
                        console.log(`Failure3: Network Connection Error= ${data}`);
                        let test = h1.innerHTML;
                        h1.innerHTML = `${test}<br> Failure3: Network Connection Error= ${data}`;
                    });
            },
            (data) => {
                console.log(`Failure2: Network Connection Error= ${data}`);
                let test = h1.innerHTML;
                h1.innerHTML = `${test}<br> Failure2: Network Connection Error= ${data}`;
            });
    },
    (data) => {
        console.log(`Failure1: Network Connection Error= ${data}`);
        let test = h1.innerHTML;
        h1.innerHTML = `${test}<br> Failure1: Network Connection Error= ${data}`;
    });