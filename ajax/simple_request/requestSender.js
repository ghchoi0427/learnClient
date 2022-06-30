function sendRequest(){
    var request = new XMLHttpRequest();
    request.open("GET","https://api.github.com/",true);
    request.send();

    request.onreadystatechange = function(){
        document.getElementById("content").innerHTML = this.response
    }
}

var reqeustBtn = document.getElementById("reqeustBtn");

reqeustBtn.onclick = function(){
    sendRequest();
}