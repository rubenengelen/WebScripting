window.addEventListener("load", loaded);

function loaded() {
    let ButtonShips = document.getElementById('get_ships');
    ButtonShips.addEventListener("click", handleGetShips);
    fetch("http://localhost:3000/country/")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw `error with status ${response.status}`;
            }
        })
        let myParent = document.body;
        let lijst = response;

//Create and append select list
        var selectList = document.createElement("select");
        selectList.id = "mySelect";
        myParent.appendChild(selectList);

//Create and append the options
        for (var i = 0; i < array.length; i++) {
            var option = document.createElement("option");
            option.value = array[i];
            option.text = array[i];
            selectList.appendChild(option);
        }
}

function handleGetShips() {
    let url = 'http://localhost:3000/ship/?country_id=';
    let output = document.getElementById("div_output");
    let select = document.getElementById("select_country");
    let landId = select.options[select.selectedIndex].value;
    makeElementEmpty(output);
    fetch(url + landId)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw `error with status ${response.status}`;
            }
        })
        .then((ships) => {
            let data = [];
            for (let ship of ships) {
                data.push([ship.id, ship.name]);
            }
            let table = makeTable(data);
            output.appendChild(table);
            let ul = document.createElement("ul");
            output.appendChild(ul);
        })
        .catch((error) => {
            output.appendChild(document.createTextNode(error));
        });
}

function makeElementEmpty(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}

function makeTable(matrix) {
    let table = document.createElement("table");
    for (let i = 0; i < matrix.length; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < matrix[i].length; j++) {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(matrix[i][j]));
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}