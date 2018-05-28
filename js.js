var dataStoredSuccessful = 0; //flag 
var listBearButton = 0;

function loadData() {
    var url = "http://starlord.hackerearth.com/beercraft";
    fetch(url)
    .then(function(response) {
    return response.json();
    })
    .then(function(myJson) {
        if (typeof(Storage) != undefined) {
                var dataToStore = JSON.stringify(myJson); 
                localStorage.setItem('items', dataToStore);               
                dataStoredSuccessful = 1;
                alert("Data loaded to Local Storage successfully");
        } else {
                alert("Your browser does not support Web Storage.");
                dataStoredSuccessful = 0;
        }
        if(dataStoredSuccessful == 0) {
                alert("Allow 3rd party cookies and update your browser.");
        }  
    });
}

function showData() {
    if(JSON.parse(localStorage.getItem('items'))) {
        listBearButton = 1;
        var myJson = JSON.parse(localStorage.getItem('items')); 

        var table = document.createElement("table");              
        table.setAttribute('align', 'center');
        table.setAttribute('class', 'table table-sm');
        table.setAttribute('id', 'tableId');
        var row = document.createElement("tr");
        var clm = document.createElement("th"); clm.innerHTML = "S.No."; row.appendChild(clm);        
        var clm = document.createElement("th"); clm.innerHTML = "abv"; row.appendChild(clm);
        var clm = document.createElement("th"); clm.innerHTML = "ibu"; row.appendChild(clm);
        var clm = document.createElement("th"); clm.innerHTML = "id"; row.appendChild(clm);
        var clm = document.createElement("th"); clm.innerHTML = "name"; row.appendChild(clm);
        var clm = document.createElement("th"); clm.innerHTML = "style"; row.appendChild(clm);
        var clm = document.createElement("th"); clm.innerHTML = "ounces"; row.appendChild(clm);
        table.appendChild(row);
        
        for(var i=0; i<myJson.length; i++) {
            var row = document.createElement("tr");

            if(i<=8) {
                var clm = document.createElement("td"); clm.innerHTML = + "0" + (i+1).toString() ; row.appendChild(clm);
            } 
            else {
                var clm = document.createElement("td"); clm.innerHTML = i+1 ; row.appendChild(clm);
            }
            
            var clm = document.createElement("td"); clm.innerHTML = myJson[i].abv; row.appendChild(clm);
            var clm = document.createElement("td"); clm.innerHTML = myJson[i].ibu; row.appendChild(clm);
            var clm = document.createElement("td"); clm.innerHTML = myJson[i].id; row.appendChild(clm);
            var clm = document.createElement("td"); clm.innerHTML = myJson[i].name; row.appendChild(clm);
            var clm = document.createElement("td"); clm.innerHTML = myJson[i].style; row.appendChild(clm);
            var clm = document.createElement("td"); clm.innerHTML = myJson[i].ounces; row.appendChild(clm);
            table.appendChild(row);
        }
        var ele = document.getElementById("content");
        ele.appendChild(table);
    }
    else {
        alert("Click on Load Data first");
    }
}

function searchBear() {
    if(JSON.parse(localStorage.getItem('items'))) {
        if(listBearButton != 0) {
            document.getElementById("ListBeersBtnId").disabled = true;
            var input, filter, table, tr, td, i;
            input = document.getElementById("bearSearch");
            filter = input.value.toUpperCase();
            table = document.getElementById("tableId");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
              td = tr[i].getElementsByTagName("td")[4];
              if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
                } else {
                  tr[i].style.display = "none";
                }
              }       
            }
        }
        else {
            alert("First click 'List Beers' button to list bears");
        }
    }
    else {
        alert("Click on Load Data first");
    }    
}

function dataCheck(){
    if(! JSON.parse(localStorage.getItem('items'))) {
        alert("Click on Load Data first");
    }
    else {
        document.getElementById("LoadDataBtnId").disabled = true;
    }
}

function sortAsc() {
    if(JSON.parse(localStorage.getItem('items'))) {
        if(listBearButton != 0) {
            document.getElementById("ListBeersBtnId").disabled = true;
            var table, rows, switching, i, x, y, shouldSwitch;
            table = document.getElementById("tableId");
            switching = true;
            while (switching) {
                switching = false;
                rows = table.getElementsByTagName("tr");
                for (i = 1; i < 50 /*(rows.length - 1)*/; i++) {
                    shouldSwitch = false;
                    x = rows[i].getElementsByTagName("td")[1];
                    y = rows[i + 1].getElementsByTagName("td")[1];
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch= true;
                        break;
                    }
                }
                if (shouldSwitch) {
                    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    switching = true;
                }
            }
        }
        else {
            alert("First click 'List Beers' button to list bears");
        }
    }
    else {
        alert("Click on Load Data first");
    }
}

function sortDsc() {
    if(JSON.parse(localStorage.getItem('items'))) {
        if(listBearButton != 0) {
            document.getElementById("ListBeersBtnId").disabled = true;
            var table, rows, switching, i, x, y, shouldSwitch;
            table = document.getElementById("tableId");
            switching = true;
            while (switching) {
                switching = false;
                rows = table.getElementsByTagName("tr");
                for (i = 1; i < 50/*(rows.length - 1)*/; i++) {
                    shouldSwitch = false;
                    x = rows[i].getElementsByTagName("td")[1];
                    y = rows[i + 1].getElementsByTagName("td")[1];
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch= true;
                        break;
                    }
                }
                if (shouldSwitch) {
                    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    switching = true;
                }
            }
        }
        else {
            alert("First click 'List Beers' button to list bears");
        }
    }
    else {
        alert("Click on Load Data first");
    }
}

function sortReset() {
    if(JSON.parse(localStorage.getItem('items'))) {
        if(listBearButton != 0) {
            document.getElementById("ListBeersBtnId").disabled = true;
            var table, rows, switching, i, x, y, shouldSwitch;
            table = document.getElementById("tableId");
            switching = true;
            while (switching) {
                switching = false;
                rows = table.getElementsByTagName("tr");
                for (i = 1; i < 50 /*(rows.length - 1)*/; i++) {
                    shouldSwitch = false;
                    x = rows[i].getElementsByTagName("td")[0];
                    y = rows[i + 1].getElementsByTagName("td")[0];
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch= true;
                        break;
                    }
                }
                if (shouldSwitch) {
                    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    switching = true;
                }
            }
        }
        else {
            alert("First click 'List Beers' button to list bears");
        }
    }
    else {
        alert("Click on Load Data first");
    }
}

function filter() {
    if(JSON.parse(localStorage.getItem('items'))) {
        if(listBearButton != 0) {
            document.getElementById("ListBeersBtnId").disabled = true;
            var input, filter, table, tr, td, i;
            input = document.getElementById("bearFilter");
            filter = input.value.toUpperCase();
            table = document.getElementById("tableId");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
              td = tr[i].getElementsByTagName("td")[5];
              if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
                } else {
                  tr[i].style.display = "none";
                }
              }       
            }
        }
        else {
            alert("First click 'List Beers' button to list bears");
        }
    }
    else {
        alert("Click on Load Data first");
    }    
}