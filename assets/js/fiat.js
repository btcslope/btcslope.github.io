    $(document).ready(function () {
        $('#currency-ranking').DataTable({
            "paging": false,
            "info": false,
            fixedHeader: {
                header: true,
                headerOffset: $("#intro-header").outerHeight()
            },
            responsive: true
        });
    });
