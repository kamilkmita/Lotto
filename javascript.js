var wylosowane = [];
var data_to_send;
var liczby = [];
var losowanie = [];
var suma = [];
    var results = [];
    var zliczenie;
var arr;
    var sortable=[];

/*for(var i=0;i<6;i++){

	wylosowane[i] = document.getElementsByClassName('wynik_lotto')[i].innerHTML

	console.log(document.getElementsByClassName('wynik_lotto')[i].innerHTML);
}
document.getElementById('losowane').innerHTML = wylosowane;*/

function post_losy() {


        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("post_losy").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET", "pehap.php?pierwsza="+wylosowane[0]+"&druga="+wylosowane[1]+"&trzecia="+wylosowane[2]+"&czwarta="+wylosowane[3]+"&piata="+wylosowane[4]+"&szosta="+wylosowane[5], true);
        xmlhttp.send();

}





$( document ).ready(function() {
   
       $.getJSON('get.php', function(data) {

            document.getElementById("get_losy").innerHTML = data;
            losowanie = data;
            console.log(losowanie);
            sumuj();
        });

});



function sumuj() {


        for(var i=0;i<losowanie.length;i++){

            console.log('sumowane po raz:'+i);
            suma.push(parseInt(losowanie[i][0]));
            suma.push(parseInt(losowanie[i][1]));
            suma.push(parseInt(losowanie[i][2]));
            suma.push(parseInt(losowanie[i][3]));
            suma.push(parseInt(losowanie[i][4]));
            suma.push(parseInt(losowanie[i][5]));
        }
        console.log(suma);
        powtorka();
}




function powtorka() {


    zliczenie = suma.reduce(function(prev, cur) {
      prev[cur] = (prev[cur] || 0) + 1;
      return prev;
    }, {});

    console.log('zliczenie= '+zliczenie);




function sortProperties(obj)
{
  // convert object into array

    for(var key in obj)
        if(obj.hasOwnProperty(key))
            sortable.push([key, obj[key]]); // each item is an array in format [key, value]

    // sort items by value
    console.log("sortable = "+sortable);


    sortable.sort(function(a, b)
    {
            return b[1]-a[1]; // compare numbers
    });




    return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
}





sort = sortProperties(zliczenie,true);
console.log('sort= '+sort);










    for (var i = 0; i < sort.length; i++){

        if(sort[i][1] > 1){

            var table = document.getElementById("table");
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = sort[i][0];
            cell2.innerHTML = sort[i][1];


        }      


         if(sort[i][1] == 1){

            var table = document.getElementById("table2");
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = sort[i][0];
            cell2.innerHTML = sort[i][1];
        }
       
    }






}





/*



function sortProperties(obj)
{
  // convert object into array
    var sortable=[];
    for(var key in obj)
        if(obj.hasOwnProperty(key))
            sortable.push([key, obj[key]]); // each item is an array in format [key, value]

    // sort items by value
    console.log("sortable = "+sortable);


    sortable.sort(function(a, b)
    {
        if (a[1]==1) {
            return b[0]-a[0]; // compare numbers
            }
        else
            return b[1]-a[1]; // compare numbers
    });


    return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
}





sort = sortProperties(zliczenie,true);
console.log('sort= '+sort);


*/