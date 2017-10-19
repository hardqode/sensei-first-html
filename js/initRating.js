
$('#example-fontawesome-o').barrating({
    theme: 'fontawesome-stars-o',
    showSelectedRating: false,
    currentRating: 4,
    onSelect: function (value, text) {
        if (!value) {
            $('#example-fontawesome-o')
                .barrating('clear');
        } else {
            $('.stars-example-fontawesome-o .current-rating')
                .addClass('hidden');

            $('.stars-example-fontawesome-o .your-rating')
                .removeClass('hidden')
                .find('span')
                .html(value);
        }
    },
    onClear: function (value, text) {
        $('.stars-example-fontawesome-o')
            .find('.current-rating')
            .removeClass('hidden')
            .end()
            .find('.your-rating')
            .addClass('hidden');
    }
});