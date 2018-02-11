/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction(id) {
    document.getElementById(id).classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.Catdropbtn')) {

        var dropdowns = document.getElementsByClassName("Catdropdown-content");
        var i;
        for (i = 0; i < Catdropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


window.onclick = function(event) {
    if (!event.target.matches('.Prodropbtn')) {

        var dropdowns = document.getElementsByClassName("Prodropdown-content");
        var i;
        for (i = 0; i < Prodropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


var data ={
    parts: {
        Banana: 89,
        Berries: 254,
        Dates: 277,
        Ginger: 80,
        Kiwi: 61,
        Mango: 65,
        Melon: 34,
        Peach: 39
    },
    base: {
        Milk: 61,
        Soy_milk: 45,
        Yogurt_15: 51
    },
    Additives: {
        Chia_seeds: 524,
        Protein_Powder: 381
    }
};

var main = $('main').css('padding-top', '20px');

var allparts = $('<div class="card-deck">');

var parts = data.parts;

var base = data.base;

var additives = data.Additives;

function choose() {
    $("#orderList").css("display", "block");
    var element = $(this).siblings().get(0);
    var text = $(element).text();
    console.log('you choose', text);
    var img = $('<img class="roundeed mx-auto d-block" width="40px" height="40px" style="float: left">')
        .attr('src', `images/${text}.png`);
    $("#orderList").append(img);
}

function showDrinks(allparts) {
    for (obj in allparts) {
        var img = $('<img class="roundeed mx-auto d-block" width="100px" height="100px">')
            .attr('src', `images/${obj}.png`);

        var card = $('<div class="card text-center">"').css('width', '20rem');

        var button = $('<a href="#" class="btn btn-dark"> Add</a>').on('click', choose);

        card.append(img);
        card.append(
            $('<div class="card-body">').append(
                '<h4 class="card-title">' + obj + '</h4>'
            ).append(
                '<p class="card-text"><small class="text-muted"><b>Calories:</b>+' +
                allparts[obj] + '</small></p>'
            ).append(
                button
            )
        )
        $('main').append(card);

    }
}

showDrinks(parts);
showDrinks(base);
showDrinks(additives);
