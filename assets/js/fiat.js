    $(document).ready(function () {
        $('#currency-ranking').DataTable({
            "paging": false,
            "info": false,
            fixedHeader: {
                header: true,
                headerOffset: 3.125rem
            },
            responsive: true
        });
    });
