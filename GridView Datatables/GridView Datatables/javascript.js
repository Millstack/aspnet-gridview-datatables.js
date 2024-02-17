

$(document).ready(function () {

    $(".datatable").prepend(

        $("<thead></thead>").append(
            $(this).find("tr:first")
        )

    ).DataTable({

        scrollX: false,
        sScrollXInner: "100%",
        bFilter: true,
        bSort: true,
        bPaginate: true,

        scrollCollapse: false,
        paging: true,
        searching: true,
        ordering: true,
        info: true,
        lengthChange: true,
        responsive: true,

        pagingType: 'full_numbers',

        lengthMenu: [
            [5, 10, 20, 25, 50, -1],
            [5, 10, 20, 25, 50, "All"]
        ],

        search: {
            return: false
        },
        language: {
            search: "Search: ",
            decimal: ',',
            thousands: '.'
        },
        initComplete: function () {
            $('.dataTables_filter input').attr('placeholder', 'Search here......')
        },
        
    });

});