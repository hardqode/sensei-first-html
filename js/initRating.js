
$('#example-fontawesome-o').barrating({
    theme: 'fontawesome-stars-o',
    showSelectedRating: false,
    initialRating: '3.5',
    readonly: true,
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
$('#example-fontawesome-e').barrating({
    theme: 'fontawesome-stars-o',
    showSelectedRating: false,
    initialRating: '3.5',
    readonly: true,
    onSelect: function (value, text) {
        if (!value) {
            $('#example-fontawesome-e')
                .barrating('clear');
        } else {
            $('.stars-example-fontawesome-e .current-rating')
                .addClass('hidden');

            $('.stars-example-fontawesome-e .your-rating')
                .removeClass('hidden')
                .find('span')
                .html(value);
        }
    },
    onClear: function (value, text) {
        $('.stars-example-fontawesome-e')
            .find('.current-rating')
            .removeClass('hidden')
            .end()
            .find('.your-rating')
            .addClass('hidden');
    }
});