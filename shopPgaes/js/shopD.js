$(function(){
$('#reviews').click(function(){
    $('#description').css({'background-color':'white','color':'black'});
    $('#additional').css({'background-color':'white','color':'black'});
    $(this).css({'background-color':'#f26900','color':'white'});
    
    $('#description-div').css('display','none');
    $('#information').css('display','none');
    $('#reviews-div').slideToggle();
})



$('#description').click(function(){
    console.log('Hi');
    $('#reviews').css({'background-color':'white','color':'black'});
    $('#additional').css({'background-color':'white','color':'black'});
    $("#description").css({'background-color':'#f26900','color':'white'});
    $('#reviews-div').css('display','none');
    $('#information').css('display','none');
    $('#description-div').slideToggle();

})


$('#additional').click(function(){
    console.log('Hi');
    $('#reviews').css({'background-color':'white','color':'black'});
    $('#description').css({'background-color':'white','color':'black'});
    $("#additional").css({'background-color':'#f26900','color':'white'});
    $('#reviews-div').css('display','none');
    $('#description-div').css('display','none');
    $('#information').slideToggle();
})
})