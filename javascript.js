var wylosowane = [];





for(var i=0;i<6;i++){

	wylosowane[i] = document.getElementsByClassName('wynik_lotto')[i].innerHTML

	console.log(document.getElementsByClassName('wynik_lotto')[i].innerHTML);

}

document.getElementById('losowane').innerHTML = wylosowane;




$.ajax({
    type: 'POST',
    url: 'losy.json',
    data: JSON.stringify({ "userName": 'userName', "password" : 'password' }),
    success: function(data) { alert('data: ' + data); },
    contentType: "application/json",
    dataType: 'json'
});







