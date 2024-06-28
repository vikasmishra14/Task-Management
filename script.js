let array = JSON.parse(localStorage.getItem("key")) || [];


function task(event) {
    event.preventDefault();
    let task = document.querySelector("#name").value;
    let date = document.querySelector("#date").value;
    let link = document.querySelector("#link").value;
    let obj = {
        task: task,
        date: date,
        link: link
    }
    if (task=="" && date=="" && link=="") {
        alert("please eneter data");
    }
    else {
        array.push(obj);
        localStorage.setItem("key", JSON.stringify(array));
    }
    window.location.reload();
}
document.querySelector("#form").addEventListener("submit", function () {
    task(event);
})
function display(data) {
    let container = document.querySelector("#container");
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    let tr = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    let th4 = document.createElement("th");
    th1.innerHTML = "No.";
    th2.innerHTML = "Task Name";
    th3.innerHTML = "deadline";
    th4.innerHTML = "Linl";
    tr.append(th1, th2, th3,th4);
    thead.append(tr);
    table.append(thead);
    let index = 1
    data.map((element) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let btn = document.createElement("button");

        td1.innerHTML = element.task;
        td2.innerHTML = element.date;
        td3.innerHTML = element.link;
        td4.innerHTML = index;
        btn.innerHTML = "delete";

        btn.addEventListener("click", function () {
            deleteTask(element);
        })

        td5.append(btn);
        tr.append(td4, td1, td2, td3, td5);
        tbody.append(tr);
        index++;

    })

    table.append(tbody);
    container.append(table);

}
display(array);

function deleteTask(data) {
    let index = array.indexOf(data);
    array.splice(index, 1);
    localStorage.setItem("key", JSON.stringify(array));
    window.location.reload();
}