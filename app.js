let music = new Audio('Mp3/mp3.m4a');
let music2 = new Audio('Mp3/mp3-2.m4a');
let musicExample = new Audio('Mp3/mp3Example.mp3');

// <div id="main-bar" class="container img-fluid">
//     <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
//     <div class="container">
//     <a href="index.html" class="navbar-brand text-warning">
//     <i class="fa fa-snowflake"></i> FREESONGS</a>
// <button class="navbar-toggler" data-toggle="collapse" data-target="#uinavbar">
//     <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="uinavbar">
//     <ul class="navbar-nav">
//     <li class="nav-item active">
//     <a href="index.html" class="nav-link">
//     <i class="fa fa-home"></i> Home</a>
// </li>
// <li class="nav-item">
//     <a href="bollywoodaudio.html" class="nav-link">
//     <i class="fa fa-headphones"></i> Audio Songs</a>
// </li>
// <li class="nav-item">
//     <a href="bollywoodvideo.html" class="nav-link">
//     <i class="fa fa-video"></i> Video Songs</a>
// </li>
// <li class="nav-item">
//     <a href="contact.html" class="nav-link">
//     <i class="fa fa-envelope"></i> Contact Us</a>
// </li>
//
// </ul>
// <ul class="navbar-nav ml-auto">
//     <li class="nav-item dropdown">
//     <a href="#" class="nav-link" data-toggle="dropdown">
//     <i class="fa fa-sign-in-alt text-muted"></i> AUDIO Songs <i class="fa fa-caret-down"></i></a>
//     <div class="dropdown-menu">
//     <a href="bollywoodvideo.html" class="dropdown-item">
//     <i class="fa fa-video"></i> VIDEO Songs</a>
// <a href="contact.html" class="dropdown-item">
//     <i class="fa fa-envelope"></i> CONTACT Us</a>
// </div>
// </li>
// <li class="nav-item">
//     <a href="login.html" class="nav-link">
//     <i class="fa fa-sign-out-alt text-muted"></i> SignOut</a>
// </li>
// </ul>
// </div>
// </div>
// </nav>


$('#audio_play_btn').click(function() {
    if($(this).text() === 'Play'){
        $(this).text('Pause');
        music.loop= true;
        music.currentTime = 0;
        music.play();
        $(this).css("background-image", "url('images/music1.gif')");

       // For Stopping Other Songs
        // musicExample.pause();
       //  $('#audio_play_btn2').text('Pause');
       //  music2.pause();
       //  $('#audio_play_btn2').text('Play');
       //  $('#audio_play_btn2').css("background-image", "url('images/bg sky.gif')");
       //  $('#audio_play_btn3').text('Pause');
       //  musicExample.pause();
       //  $('#audio_play_btn3').text('Play');
       //  $(playbtnsection3).css(
       //      "background","transparent");
    }
    else{
        $(this).text('Pause');
        music.pause();
        $(this).text('Play');
        $(this).css("background-image", "url('images/bg sky.gif')");
    }
});


$('#audio_play_btn2').click(function() {
    if($(this).text() === 'Play'){
        $(this).text('Pause');
        music2.loop= true ;
        music2.currentTime = 0;
        music2.play();
        $(this).css("background-image", "url('images/music1.gif')");
    }
    else{
        $(this).text('Pause');
        music2.pause();
        $(this).text('Play');
        $(this).css("background-image", "url('images/bg sky.gif')");
    }
});

let playbtnsection3=document.querySelector('#playbtnsection3');

$('#audio_play_btn3').click(function() {
    if($(this).text() === 'Play'){
        $(this).text('Pause');
        musicExample.loop= true;
        musicExample.currentTime = 0;
        musicExample.play();
        $(playbtnsection3).css("background-image", "url('images/music1.gif')");
    }
    else{
        $(this).text('Pause');
        musicExample.pause();
        $(this).text('Play');
        $(playbtnsection3).css(
            "background","transparent");
    }
});

let playbtnsection4=document.querySelector('#playbtnsection4');

$('#audio_play_btn4').click(function() {
    if($(this).text() === 'Play'){
        $(this).text('Pause');
        musicExample.loop= true;
        musicExample.currentTime = 0;
        musicExample.play();
        $(playbtnsection4).css("background-image", "url('images/music1.gif')");
    }
    else{
        $(this).text('Pause');
        musicExample.pause();
        $(this).text('Play');
        $(playbtnsection4).css(
            "background","transparent");
    }
});

let playbtnsection5=document.querySelector('#playbtnsection5');

$('#audio_play_btn5').click(function() {
    if($(this).text() === 'PLAY'){
        $(this).addClass('btn-outline-white').text('PAUSE').css(
            "background","transparent");
        musicExample.loop= true;
        musicExample.currentTime = 0;
        musicExample.play();
        $(playbtnsection5).css("background-image", "url('images/bgplay.gif')");

    }
    else{
        musicExample.pause();
        $(this).text('PLAY');
        $(this).css("background-image", "url('images/bg sky.gif')");
        $(playbtnsection5).css("background-image", "url('images/bestcollection.jpg')");
    }
});

let playbtnsection6=document.querySelector('#playbtnsection6');

$('#audio_play_btn6').click(function() {
    if($(this).text() === 'PLAY'){
        $(this).addClass('btn-outline-white').text('PAUSE').css(
            "background","transparent");
        musicExample.loop= true;
        musicExample.currentTime = 0;
        musicExample.play();
        $(playbtnsection6).css("background-image", "url('images/bgplay.gif')");

    }
    else{
        musicExample.pause();
        $(this).text('PLAY');
        $(this).css("background-image", "url('images/bg sky.gif')");
        $(playbtnsection6).css("background-image", "url('images/bestcollection.jpg')");
    }
});

// Audio Play Btn Logic 'on Click' changes Background

$('#play_btn_2_1').click(function() {
    if($(this).text() === 'PLAY'){
        $(this).text('PAUSE');
        $(this).removeClass('btn-info').addClass('btn-outline-warning');
        musicExample.loop= true;
        musicExample.currentTime = 0;
        musicExample.play();
        $('#audio_card_2_1').css("background-image", "url('images/bglights.gif')");
    }
    else{
        $(this).text('PAUSE');
        musicExample.pause();
        $(this).text('PLAY').css("background","transparent");
        $('#audio_card_2_1').css("background","transparent");
        $(this).removeClass('btn-outline-warning').addClass('btn-info');
    }
});

$('#play_btn_2_2').click(function() {
    if($(this).text() === 'PLAY'){
        $(this).text('PAUSE');
        $(this).removeClass('btn-info').addClass('btn-outline-warning');
        musicExample.loop= true;
        musicExample.currentTime = 0;
        musicExample.play();
        $('#audio_card_2_2').css("background-image", "url('images/bg music.gif')");
    }
    else{
        $(this).text('PAUSE');
        musicExample.pause();
        $(this).text('PLAY').css("background","transparent");
        $('#audio_card_2_2').css("background","transparent");
        $(this).removeClass('btn-outline-warning').addClass('btn-info');
    }
});
$('#play_btn_2_3').click(function() {
    if($(this).text() === 'PLAY'){
        $(this).text('PAUSE');
        $(this).removeClass('btn-info').addClass('btn-outline-warning');
        musicExample.loop= true;
        musicExample.currentTime = 0;
        musicExample.play();
        $('#audio_card_2_3').css("background-image", "url('images/music1.gif')");
    }
    else{
        $(this).text('PAUSE');
        musicExample.pause();
        $(this).text('PLAY').css("background","transparent");
        $('#audio_card_2_3').css("background","transparent");
        $(this).removeClass('btn-outline-warning').addClass('btn-info');
    }
});
$('#play_btn_2_4').click(function() {
    if($(this).text() === 'PLAY'){
        $(this).text('PAUSE');
        $(this).removeClass('btn-info').addClass('btn-outline-warning');
        musicExample.loop= true;
        musicExample.currentTime = 0;
        musicExample.play();
        $('#audio_card_2_4').css("background-image", "url('images/music1.gif')");
    }
    else{
        $(this).text('PAUSE');
        musicExample.pause();
        $(this).text('PLAY').css("background","transparent");
        $('#audio_card_2_4').css("background","transparent");
        $(this).removeClass('btn-outline-warning').addClass('btn-info');
    }
});
$('#play_btn_2_5').click(function() {
    if($(this).text() === 'PLAY'){
        $(this).text('PAUSE');
        $(this).removeClass('btn-info').addClass('btn-outline-warning');
        musicExample.loop= true;
        musicExample.currentTime = 0;
        musicExample.play();
        $('#audio_card_2_5').css("background-image", "url('images/music1.gif')");
    }
    else{
        $(this).text('PAUSE');
        musicExample.pause();
        $(this).text('PLAY').css("background","transparent");
        $('#audio_card_2_5').css("background","transparent");
        $(this).removeClass('btn-outline-warning').addClass('btn-info');
    }
});
$('#play_btn_2_6').click(function() {
    if($(this).text() === 'PLAY'){
        $(this).text('PAUSE');
        $(this).removeClass('btn-info').addClass('btn-outline-warning');
        musicExample.loop= true;
        musicExample.currentTime = 0;
        musicExample.play();
        $('#audio_card_2_6').css("background-image", "url('images/music1.gif')");
    }
    else{
        $(this).text('PAUSE');
        musicExample.pause();
        $(this).text('PLAY').css("background","transparent");
        $('#audio_card_2_6').css("background","transparent");
        $(this).removeClass('btn-outline-warning').addClass('btn-info');
    }
});
$('#play_btn_2_7').click(function() {
    if($(this).text() === 'PLAY'){
        $(this).text('PAUSE');
        $(this).removeClass('btn-info').addClass('btn-outline-warning');
        musicExample.loop= true;
        musicExample.currentTime = 0;
        musicExample.play();
        $('#audio_card_2_7').css("background-image", "url('images/music1.gif')");
    }
    else{
        $(this).text('PAUSE');
        musicExample.pause();
        $(this).text('PLAY').css("background","transparent");
        $('#audio_card_2_7').css("background","transparent");
        $(this).removeClass('btn-outline-warning').addClass('btn-info');
    }
});
$('#play_btn_2_8').click(function() {
    if($(this).text() === 'PLAY'){
        $(this).text('PAUSE');
        $(this).removeClass('btn-info').addClass('btn-outline-warning');
        musicExample.loop= true;
        musicExample.currentTime = 0;
        musicExample.play();
        $('#audio_card_2_8').css("background-image", "url('images/music1.gif')");
    }
    else{
        $(this).text('PAUSE');
        musicExample.pause();
        $(this).text('PLAY').css("background","transparent");
        $('#audio_card_2_8').css("background","transparent");
        $(this).removeClass('btn-outline-warning').addClass('btn-info');
    }
});
$('#play_btn_2_9').click(function() {
    if($(this).text() === 'PLAY'){
        $(this).text('PAUSE');
        $(this).removeClass('btn-info').addClass('btn-outline-warning');
        musicExample.loop= true;
        musicExample.currentTime = 0;
        musicExample.play();
        $('#audio_card_2_9').css("background-image", "url('images/music1.gif')");
    }
    else{
        $(this).text('PAUSE');
        musicExample.pause();
        $(this).text('PLAY').css("background","transparent");
        $('#audio_card_2_9').css("background","transparent");
        $(this).removeClass('btn-outline-warning').addClass('btn-info');
    }
});
$('#play_btn_2_10').click(function() {
    if($(this).text() === 'PLAY'){
        $(this).text('PAUSE');
        $(this).removeClass('btn-info').addClass('btn-outline-warning');
        musicExample.loop= true;
        musicExample.currentTime = 0;
        musicExample.play();
        $('#audio_card_2_10').css("background-image", "url('images/music1.gif')");
    }
    else{
        $(this).text('PAUSE');
        musicExample.pause();
        $(this).text('PLAY').css("background","transparent");
        $('#audio_card_2_10').css("background","transparent");
        $(this).removeClass('btn-outline-warning').addClass('btn-info');
    }
});
$('#play_btn_2_11').click(function() {
    if($(this).text() === 'PLAY'){
        $(this).text('PAUSE');
        $(this).removeClass('btn-info').addClass('btn-outline-warning');
        musicExample.loop= true;
        musicExample.currentTime = 0;
        musicExample.play();
        $('#audio_card_2_11').css("background-image", "url('images/music1.gif')");
    }
    else{
        $(this).text('PAUSE');
        musicExample.pause();
        $(this).text('PLAY').css("background","transparent");
        $('#audio_card_2_11').css("background","transparent");
        $(this).removeClass('btn-outline-warning').addClass('btn-info');
    }
});

$('#play_btn_2_12').click(function() {
    if($(this).text() === 'PLAY'){
        $(this).text('PAUSE');
        $(this).removeClass('btn-info').addClass('btn-outline-warning');
        musicExample.loop= true;
        musicExample.currentTime = 0;
        musicExample.play();
        $('#audio_card_2_12').css("background-image", "url('images/music1.gif')");
    }
    else{
        $(this).text('PAUSE');
        musicExample.pause();
        $(this).text('PLAY').css("background","transparent");
        $('#audio_card_2_12').css("background","transparent");
        $(this).removeClass('btn-outline-warning').addClass('btn-info');
    }
});


//////////////////////////////////////  Download Btn Click Logic ////////////////////////////////////


$('#audio_download_btn1').click(function () {
    $(this).addClass('btn-secondary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '2px solid white',
        'border-bottom' : '2px solid white',
    });
});

$('#audio_download_btn2').click(function () {
    $(this).addClass('btn-secondary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '2px solid white',
        'border-bottom' : '2px solid white',
    });
});

$('#audio_download_btn3').click(function () {
    $(this).addClass('btn-secondary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '2px solid white',
        'border-bottom' : '2px solid white',
    });
});

$('#audio_download_btn4').click(function () {
    $(this).addClass('btn-secondary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '2px solid white',
        'border-bottom' : '2px solid white',
    });
});

$('#audio_download_btn5').click(function () {
    $(this).addClass('btn-secondary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '2px solid white',
        'border-bottom' : '2px solid white',
    });
});

$('#audio_download_btn6').click(function () {
    $(this).addClass('btn-secondary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '2px solid white',
        'border-bottom' : '2px solid white',
    });
});


//////  Audio Download Btn Group ///////

$('#audio_download_btngroup1').click(function () {
    $(this).addClass('btn-primary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '1px solid white',
        'border-bottom' : '1px solid white',
    });
});

$('#audio_download_btngroup2').click(function () {
    $(this).addClass('btn-primary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '1px solid white',
        'border-bottom' : '1px solid white',
    });
});

$('#audio_download_btngroup3').click(function () {
    $(this).addClass('btn-primary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '1px solid white',
        'border-bottom' : '1px solid white',
    });
});
$('#audio_download_btngroup4').click(function () {
    $(this).addClass('btn-primary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '1px solid white',
        'border-bottom' : '1px solid white',
    });
});
$('#audio_download_btngroup5').click(function () {
    $(this).addClass('btn-primary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '1px solid white',
        'border-bottom' : '1px solid white',
    });
});
$('#audio_download_btngroup6').click(function () {
    $(this).addClass('btn-primary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '1px solid white',
        'border-bottom' : '1px solid white',
    });
});
$('#audio_download_btngroup7').click(function () {
    $(this).addClass('btn-primary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '1px solid white',
        'border-bottom' : '1px solid white',
    });
});
$('#audio_download_btngroup8').click(function () {
    $(this).addClass('btn-primary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '1px solid white',
        'border-bottom' : '1px solid white',
    });
});
$('#audio_download_btngroup9').click(function () {
    $(this).addClass('btn-primary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '1px solid white',
        'border-bottom' : '1px solid white',
    });
});
$('#audio_download_btngroup10').click(function () {
    $(this).addClass('btn-primary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '1px solid white',
        'border-bottom' : '1px solid white',
    });
});
$('#audio_download_btngroup11').click(function () {
    $(this).addClass('btn-primary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '1px solid white',
        'border-bottom' : '1px solid white',
    });
});
$('#audio_download_btngroup12').click(function () {
    $(this).addClass('btn-primary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '1px solid white',
        'border-bottom' : '1px solid white',
    });
});



///////// Audio Btn Watch //////////


$('#audio_watch_btn1').click(function () {
    $(this).addClass('btn-primary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '2px solid white',
        'border-bottom' : '2px solid white',
    });
});


$('#audio_watch_btn2').click(function () {
    $(this).addClass('btn-primary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '2px solid white',
        'border-bottom' : '2px solid white',
    });
});


$('#audio_watch_btn3').click(function () {
    $(this).addClass('btn-primary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '2px solid white',
        'border-bottom' : '2px solid white',
    });
});


$('#audio_watch_btn4').click(function () {
    $(this).addClass('btn-primary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '2px solid white',
        'border-bottom' : '2px solid white',
    });
});


$('#audio_watch_btn5').click(function () {
    $(this).addClass('btn-primary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '2px solid white',
        'border-bottom' : '2px solid white',
    });
});


$('#audio_watch_btn6').click(function () {
    $(this).addClass('btn-primary').text('Downloaded');
    $(this).css({
        'border-radius' : '20px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black',
        'border-top' : '2px solid white',
        'border-bottom' : '2px solid white',
    });
});


// $('.modal_submit').click(function () {
//     $('.modal_show_form').show;
//     });





