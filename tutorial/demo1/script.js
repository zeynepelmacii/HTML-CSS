function showContent() {
    var div = document.getElementsByTagName("div")[1];
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    div.appendChild(clon);
}

/*function showContent() {
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
}*/

/*function showContent() {
    var heading = document.getElementsByTagName("h4")[1];
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    heading.appendChild(clon);
}*/