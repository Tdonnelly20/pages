function quitAndLoadFunction() {
    if($(window).width() > 1040){
        var x = document.getElementById("draggable");
        var icon=document.getElementById("internet-icon");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
}
function email(){
    var x = document.getElementById("email");
    if(x.style.display !== "block"){
        x.style.display = "block";
        x.style.zIndex = '100';
    }else{
        x.style.display = "none";
    }
}
function increaseSize() {
    if($(window).width() > 1040){
        var draggable = document.getElementById("draggable");
        var menu = document.getElementById("nav-wrapper");
        if(draggable.style.width !=='100%'){
             draggable.style.width ='100%';
             draggable.style.height='100%';
             draggable.style.marginTop='0%';
             draggable.style.marginBottom='0%';
             menu.style.width='100%';
             draggable.style.left='0';
             draggable.style.top='0';
             draggable.style.right='0';
             draggable.style.float="center";
        }else{
             draggable.style.width ='90%';
             draggable.style.height='fit-content';
             draggable.style.marginTop='5%';
             draggable.style.marginBottom='5%';
             draggable.style.float="center";
        }
    }
}
$(document).ready(function(){
$.get("menu.html",function(data){
    $('#menu-placeholder').replaceWith(data);
});
$.get("icons.html",function(data){
    $('#icons-placeholder').replaceWith(data);
});
$.get("contact.html",function(data){
    $('#email-placeholder').replaceWith(data);
});
    $( function() {
        $( '#draggable' ).draggable({
            handle:"#nav-wrapper"
        });
        $( '#email' ).draggable();
        $('.drag').draggable({
            stack: ".drag"
        });
    });
});