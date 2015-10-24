$(function() {

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '1. rok, 2015',
            a: 100,
            b: 90
        }, {
            y: '2. rok, 2015',
            a: 75,
            b: 65
        }, {
            y: '3. rok, 2015',
            a: 50,
            b: 40
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['#opravljenih izpitov', '#neopravljenih izpitov'],
        hideHover: 'auto',
        resize: true
        //barColors: ['#5cb85c', '#d9534f']
    });

});
