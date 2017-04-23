/**
 * Created by Cao on 2017/4/11.
 */
if(window.addEventListener){
    window.addEventListener("load",adaptScreen,false);
    window.addEventListener("resize",adaptScreen,false);
}
else{
    window.attachEvent("onload",adaptScreen);
    window.attachEvent("onresize",adaptScreen);
}

// window.onload = function () {
//     if (document.body.offsetWidth > 500) {
//         var body_height = document.body.offsetHeight;
//         var nav_global_height = document.getElementById('nav_global').offsetHeight;
//         var content_should_height = body_height - nav_global_height;
//         document.getElementById('content').style.height = content_should_height + 'px';
//     }
// };
//
//
// window.onresize = function () {
//     if (document.body.offsetWidth > 500) {
//         var body_height = document.body.offsetHeight;
//         var nav_global_height = document.getElementById('nav_global').offsetHeight;
//         var content_should_height = body_height - nav_global_height;
//         document.getElementById('content').style.height = content_should_height + 'px';
//     }
// };

function adaptScreen() {
    //alert('You have changed the size of the window');
    if (document.body.offsetWidth > 500) {
        var body_height = document.body.offsetHeight;
        var nav_global_height = document.getElementById('nav_global').offsetHeight;
        var content_should_height = body_height - nav_global_height;
        document.getElementById('content').style.height = content_should_height + 'px';
    }
    else {
        document.getElementById('content').style.height = 'auto';
    }
};


