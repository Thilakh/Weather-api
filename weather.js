function displayresult(){
    var city=document.getElementById("city").value;
    var apikey='e049366c28165699aa1b6b72c87afe1e';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey+'&units=metric')
    .then(response=> response.json())
    .then(data=>{
        var t=data['main']['temp']
        var a=data['main']['temp_min']
        var b=data['main']['temp_max']
        document.getElementById("output").innerHTML=t;
        document.getElementById("output1").innerHTML=a;
        document.getElementById("output2").innerHTML=b;
    })
}