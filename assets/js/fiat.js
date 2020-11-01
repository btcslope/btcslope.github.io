    $(document).ready(function () {
        var headerHeight = $("#main-navbar").outerHeight();
        $('#currency-ranking').DataTable({
            "paging": false,
            "info": false,
            fixedHeader: {
                header: true,
                headerOffset: headerHeight
            },
            responsive: true
        });
    });
