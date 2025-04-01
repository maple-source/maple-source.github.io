//the tabs system is adapted directly from W3: https://www.w3schools.com/howto/howto_js_tabs.asp
function display(section) {
    var content = document.getElementsByClassName("content");
    console.log("hiding content")
    for ( var i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
    console.log("display " + section)
    document.getElementById(section).style.display = "block";
}