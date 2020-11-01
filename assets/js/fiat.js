$(window).resize(function() {
    var top_nav_height = $("#main-navbar").height();
});

    $(document).ready(function () {
        $('#currency-ranking').DataTable({
            "paging": false,
            "info": false,
            fixedHeader: {
                header: true,
                headerOffset: top_nav_height
            },
            responsive: true
        });
    });
