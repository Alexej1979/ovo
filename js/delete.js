$("#table2 .delete").on("click", function()
{
    if(notification)
        $(notification.ntf).remove(); 
    var table = $('#table2').DataTable();
    table
        .row( $(this).parents('tr') )
        .remove()
        .draw();
    new_NotificationFx("User is deleted",'success',3500);
});