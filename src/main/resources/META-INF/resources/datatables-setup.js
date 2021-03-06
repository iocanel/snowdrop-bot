//DataTables
var dataTablesRenderDate = function (data, type, row) {
    // If display or filter data is requested, format the date
    if (data == null) {
        return "--"
    }
    if ( type === 'display' || type === 'filter' ) {
        var d = new Date( data );
        return d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear()
    }

    // Otherwise the data type requested (`type`) is type detection or
    // sorting data, for which we want to use the integer, so just return
    // that, unaltered
    return data
}

var dataTablesRenderNumber = function (data, type, row) {
    if (!Array.isArray(data)) {
        var url = data
        var num = data.substring(data.lastIndexOf('/') + 1)
        return "<a href='" + url +"' target='_blank'>" + num +"</a>"
    }
    return data.map(e => dataTablesRenderNumber(e, type, row))
}


var dataTablesRenderUrl = function (data, type, row) {
    var url = data
    return "<a href='" + url +"' target='_blank'>" + url +"</a>"
}
