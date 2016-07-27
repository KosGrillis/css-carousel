//carousel.js
//
//Creates and loads the carousel for index.html
//
//Author: Kos Grillis

function load(){
    /*$(".carousel-container + div").css('visibility', 'hidden');
    $('[name=multiples], [name=multiples] + label').css('visibility', 'visible');
    $(".carousel-loader").css('display', 'block');
    $('.inner').animate({marginTop: '-=300px'});
    $('[name=multiples], [name=multiples] + label').animate({marginTop: '-=300px'});*/
    var html ='';

    //load data from the json file and use it to create carousel HTML...
    $.getJSON('./assets/carousel-info.json', function(data){
        data.forEach(function(member){
            var imagePath = './assets/images/MemberAvatars/' + member.firstname + '.png';
            html += '<div class="item not-visible" style="text-align:center" id="' + member.firstname + '" onclick="">';
            html += '<img src=http://placehold.it/450x450 style="margin:auto"</img>'
            html += '<p>' + member.firstname + ' ' + member.lastname +'</p>'
            html += '<p style="text-align:center">' + 'Has the following info: ' + member.info + '</p>';
            html += '</div>';
        });

        //append above HTML to the div of class member-carousel and apply the CSS to it...
        $('.carousel-button').css('visibility', 'hidden');
        $('.member-carousel').html(html);
        $('head').append('<link rel="stylesheet" type="text/css" href="./assets/css/carousel-style.css" />');
        $(".carousel-loader").css('display', 'none');
    });
}
