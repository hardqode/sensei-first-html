
$(function () {
    $(".dial").knob({
        min: 0,
        max: 100,
        fgColor: '#8caaf3',
        readOnly: true,
        inputColor: '#000',
        thickness: '.25',
        'format': function (v) {
            return v + '%';
        },
        'draw': function () {
            $(this.i).css('font-size', '30px');
        }

    });
});
$('.dial_input').keyup(function(){
    var sum = 0;
    if($(this).val()<0 || $(this).val()>10){
        $(this).val($(this).val().slice(-1));
    }
    $('.dial_input').each(function () {
        sum += parseInt($(this).val() || 0);
    });
    var controlSum = (100/60)*sum;
    console.log(controlSum);
    $('#dial_result').val(controlSum + '%').trigger('change');
});