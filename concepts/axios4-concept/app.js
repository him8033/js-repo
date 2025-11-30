let btn = document.querySelector("button");
btn.addEventListener("click", async function () {
    let country = document.querySelector("input").value;
    console.log(country);

    let data = await getCollege(country);
    showData(data);
})

function showData(colarr) {
    let list = document.querySelector("#result");
    list.innerText = "";
    for (col of colarr) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

let url = "http://universities.hipolabs.com/search?name=";
async function getCollege(country) {
    try {
        let res = await axios.get(url + country);
        console.log(res);
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.log("error! ", err);
        return "data not Found";
    }
}