

function ShowCreate() {
    $('#AddComment').slideToggle("fast")
}
//    var AddCommentField = document.getElementById("AddComment")
//    var CommentButton = document.getElementById("AddButton")
//    if (AddCommentField.hidden == true) {
//        AddCommentField.hidden = false;
//        CommentButton.innerHTML = "Cancel comment"
//    }
//    else {
//        AddCommentField.hidden = true;
//        CommentButton.innerHTML = "Add new comment"
//    };
//}

//$('#AddComment').slideDown("fast")

function ShowAddFile() {
    var AddFileField = document.getElementById("UploadField")
    var FileButton = document.getElementById("AddFileButton")
    if (AddFileField.hidden == true) {
        AddFileField.hidden = false;
        FileButton.innerHTML = "Cancel adding"
    }
    else {
        AddFileField.hidden = true;
        FileButton.innerHTML = "Add file"
    };
}

//Table sorting

var compare = {
    name: function (a, b) {
        a = a.replace(/^the /i, '');
        b = b.replace(/^the /i, '');

        if (a < b) {
            return -1;
        } else {
            return a > b ? 1 : 0;
        }
    },


    date: function (a, b) {
        a = new Date(a);
        b = new Date(b);

        return a - b;
    }

};

$('.table-hover').each(function () {
    var $table = $(this);
    var $tbody = $table.find('tbody');
    var $controls = $table.find('th');
    var rows = $tbody.find('tr').toArray();

    $controls.on('click', function () {
        var $header = $(this);
        var order = $header.data('sort');
        var column;


        if ($header.is('.ascending') || $header.is('.descending')) {
            $header.toggleClass('ascending descending');
            $tbody.append(rows.reverse());
        } else {
            $header.addClass('ascending');

            $header.siblings().removeClass('ascending descending');
            if (compare.hasOwnProperty(order)) {
                column = $controls.index(this);

                rows.sort(function (a, b) {
                    a = $(a).find('td').eq(column).text();
                    b = $(b).find('td').eq(column).text();
                    return compare[order](a, b);
                });

                $tbody.append(rows);
            }
        }
    });
});


//document.getElementById("AddFileButton").addEventListener("click", ShowAddFile)


$(function () {

    // We can attach the `fileselect` event to all file inputs on the page
    $(document).on('change', ':file', function () {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });

    // We can watch for our custom `fileselect` event like this
    $(document).ready(function () {
        $(':file').on('fileselect', function (event, numFiles, label) {

            var input = $(this).parents('.input-group').find(':text'),
                log = numFiles > 1 ? numFiles + ' files selected' : label;

            if (input.length) {
                input.val(log);
            } else {
                if (log) alert(log);
            }

        });
    });

});

//function Priority() {

//    var $table = $('.table-hover:first');
//    var $tbody = $table.find('tbody'); 
//    var $rows = $tbody.find('tr').toArray();
//    for (var i = 0; i < $rows.length; i++) {

//        var $cells = $('td', $rows[i]).toArray();
//        if($cells.indexOf('Big')) {$rows.('danger')};
//        //if ($cells[7].innerHTML == 'Big') { $rows[i].addClass('danger') };
//        $cells = null;
//    }
//}

function priority() {
    document.getElementById("dropdownMenu1").innerHTML = 'Colorize by: Priority <span class="caret"></span>'
    var rows = document.getElementById("mainTable").rows;
    for (var i = 0; i < rows.length; i++) {
        cells = rows[i].cells;
        if (cells[7].innerHTML.indexOf('High') > 0) { rows[i].className = "danger" };
        if (cells[7].innerHTML.indexOf('Medium') > 0) { rows[i].className = "warning" };
        if (cells[7].innerHTML.indexOf('Low') > 0) { rows[i].className = "success" };
    }
}

function effort() {
    document.getElementById("dropdownMenu1").innerHTML = 'Colorize by: Effort <span class="caret"></span>'
    var rows = document.getElementById("mainTable").rows;
    for (var i = 0; i < rows.length; i++) {
        cells = rows[i].cells;
        if (cells[8].innerHTML.indexOf('Big') > 0) { rows[i].className = "danger" };
        if (cells[8].innerHTML.indexOf('Medium') > 0) { rows[i].className = "warning" };
        if (cells[8].innerHTML.indexOf('Small') > 0) { rows[i].className = "success" };
    }
}

function delivery() {
    document.getElementById("dropdownMenu1").innerHTML = 'Colorize by: Delivery status <span class="caret"></span>'
    var rows = document.getElementById("mainTable").rows;
    for (var i = 0; i < rows.length; i++) {
        cells = rows[i].cells;
        if (cells[9].innerHTML.indexOf('Red') > 0) { rows[i].className = "danger" };
        if (cells[9].innerHTML.indexOf('Amber') > 0) { rows[i].className = "warning" };
        if (cells[9].innerHTML.indexOf('Green') > 0) { rows[i].className = "success" };
    }
}

function status() {
    document.getElementById("dropdownMenu1").innerHTML = 'Colorize by: Project status <span class="caret"></span>'
    var rows = document.getElementById("mainTable").rows;
    for (var i = 0; i < rows.length; i++) {
        cells = rows[i].cells;
        if (cells[6].innerHTML.indexOf('Cancelled') > 0) { rows[i].className = "danger" };
        if (cells[6].innerHTML.indexOf('On hold') > 0) { rows[i].className = "warning" };
        if (cells[6].innerHTML.indexOf('In progress') > 0) { rows[i].className = "success" };
    }
}

function clearColors() {
    document.getElementById("dropdownMenu1").innerHTML = 'Colorize by <span class="caret"></span>'
    //$('#dropdownMenu1').load();
    var rows = document.getElementById("mainTable").rows;
    for (var i = 0; i < rows.length; i++) {
        cells = rows[i].cells;
        rows[i].className = ""
    };
}

function hideShowCancelled() {
    var hs = document.getElementById("hsCancelled")
    if (hs.innerHTML.indexOf('Hide') > 0) {
        hs.innerHTML = "Show Cancelled";
    }
    else {
        hs.innerHTML = "Hide Cancelled";
    }
    var rows = document.getElementById("mainTable").rows;
    for (var i = 0; i < rows.length; i++) {
        cells = rows[i].cells;
        if (cells[6].innerHTML.indexOf('Cancelled') > 0 && rows[i].style.display != 'none') {
            rows[i].style.display = 'none';
            hs.innerHTML = "Show Cancelled";
        }
        else if (cells[6].innerHTML.indexOf('Cancelled') > 0 && rows[i].style.display == 'none') {
            rows[i].style.display = 'table-row';
        }
        //else {
        //    rows[i].style.display = 'table-row';
        //}
    }

}

function hideShowNotStarted() {
    var hs = document.getElementById("hsNotStarted")
    if (hs.innerHTML.indexOf('Hide') > 0) {
        hs.innerHTML = "Show Not Started";
    }
    else {
        hs.innerHTML = "Hide Not Started";
    }
    var rows = document.getElementById("mainTable").rows;
    for (var i = 0; i < rows.length; i++) {
        cells = rows[i].cells;
        if (cells[6].innerHTML.indexOf('started') > 0 && rows[i].style.display != 'none') {
            rows[i].style.display = 'none';
            hs.innerHTML = "Show Not Started";
        }
        else if (cells[6].innerHTML.indexOf('started') > 0 && rows[i].style.display == 'none') {
            rows[i].style.display = 'table-row';
        }
        //else {
        //    rows[i].style.display = 'table-row';
        //}
    }

}

function hideShowOnHold() {
    var hs = document.getElementById("hsOnHold")
    if (hs.innerHTML.indexOf('Hide') > 0) {
        hs.innerHTML = "Show On hold";
    }
    else {
        hs.innerHTML = "Hide On Hold";
    }
    var rows = document.getElementById("mainTable").rows;
    for (var i = 0; i < rows.length; i++) {
        cells = rows[i].cells;
        if (cells[6].innerHTML.indexOf('hold') > 0 && rows[i].style.display != 'none') {
            rows[i].style.display = 'none';
            hs.innerHTML = "Show On hold";
        }
        else if (cells[6].innerHTML.indexOf('hold') > 0 && rows[i].style.display == 'none') {
            rows[i].style.display = 'table-row';
        }
        //else {
        //    rows[i].style.display = 'table-row';
        //}
    }

}

function showAll() {
    var rows = document.getElementById("mainTable").rows;

    for (var i = 0; i < rows.length; i++) {
        rows[i].style.display = 'table-row';
        document.getElementById("hsOnHold").innerHTML = "Hide On hold";
        document.getElementById("hsCancelled").innerHTML = "Hide Cancelled";
        document.getElementById("hsNotStarted").innerHTML = "Hide Not Started";

    }
}

function calendar(){ 
var rows = document.getElementsByTagName('tr');
for (var i = 1; i < rows.length; i++) {

    var cells = rows[i].children;
    var start = new Date((cells[3].textContent).trim()).getDate() - 1;
    var end = new Date((cells[4].textContent).trim()).getDate() - 1;
    for (var j = start; j < end; j++) {
        cells[j + 5].style.backgroundColor = "#2196f3";
    }
}
}


//function calendar() {
//    var rows = document.getElementsByTagName('tr');
//    for (var i = 1; i < rows.length; i++) {

//        var cells = rows[i].children;
//        var start = parseInt(((cells[3].textContent).trim()).slice(3,5)) - 1;
//        var end = parseInt(((cells[4].textContent).trim()).slice(3, 5)) - 1;
//        for (var j = start; j < end; j++) {
//            cells[j + 5].style.backgroundColor = "#2196f3";
//        }
//    }
//}