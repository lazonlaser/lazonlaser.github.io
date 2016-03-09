/**
 *  details-pic 
 *  
 * [picTransition description]
 * this is overview scroll picture transition function
 * @type {Object}
 */


var getPic = function() {
    var pic = document.getElementsByClassName("details-pic");
    return pic;
}

var picArr = getPic();

var windowHeight = window.innerHeight;

var initClass = new Array();
var newClass = new Array();

for (var j = 0; j < picArr.length; j++) {
    initClass[j] = picArr[j].getAttribute("class");
}


for (var k = 0; k < picArr.length; k++) {
    newClass[k] = initClass[k] + " fadeOut";
}


window.onscroll = function() {
    var top = document.documentElement.scrollTop || document.body.scrollTop;

    for (var i = 0; i < picArr.length; i++) {

        if (top >= (picArr[i].offsetTop + picArr[i].scrollHeight - windowHeight - 200)) {
            picArr[i].setAttribute("class", newClass[i]);
            picArr[i] = null;
        }
    }

}
