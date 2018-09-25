
// this is the start of the photo gallery page( its a slideshow )

$("#slide > div").hide();

setInterval(function() {
    $('#slide > div:first')
    .fadeOut(1)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#slide');
}, 3500);

//making title change

function light () {
    document.getElementById('homename').innerHTML = "Created by: Bungie."
}

//i am replacing text on home page 

function replace () {

    document.getElementById('hometextinner').innerHTML = "Haha too bad thats my opinion!!"
}

//replacing text on hunter page

function replace2 () {

    document.getElementById('hunterabout').innerHTML = "I will debate you all day!"
}

//replacing text on warlock page

function replace3 () {

    document.getElementById('warlockabout').innerHTML = "but they always blow themselves up"
}

//replacing text on titan page

function replace4 () {

    document.getElementById('titanabout').innerHTML = "just....just cheese"
}

// this function will make text on all pages move

// function ticker() {
//     var sep = document.getElementById("linesep"); 
//     var position = 0;
//     var inter = setInterval(effect, 5);

//     function effect() {
//         if (position === 500) {
//             clearInterval(inter);
//         } else {
//             pos++; 
//             sep.style.left = pos + 'px'; 
//         }
//     }
// }
