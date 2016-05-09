var wylosowane = [];





for(var i=0;i<6;i++){

	wylosowane[i] = document.getElementsByClassName('wynik_lotto')[i].innerHTML

	console.log(document.getElementsByClassName('wynik_lotto')[i].innerHTML);

}

document.getElementById('losowane').innerHTML = wylosowane;


var object = {
    name: 'test',
    caption: 'test2'
}

$.ajax({
    type: 'POST',
    url: 'losy.json',
    data: object,
    success: function(data) { alert('data: ' + data); },
    error: function() { console.log('error -> json'); },
    contentType: "application/json",
    dataType: 'json'
});


