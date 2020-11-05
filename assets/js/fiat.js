    $(document).ready(function () {
        $('#currency-ranking').DataTable({
            "paging": false,
            "info": false,
            fixedHeader: {
                header: true,
                headerOffset: 50px
            },
            responsive: true
        });
    });
