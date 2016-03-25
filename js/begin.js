var notification;

$(function()
{ 
    var tableLang = 
        {
            "decimal":        "",
            "emptyTable":     "No data available in table",
             "info":           "Showing _START_ to _END_ of _TOTAL_ entries",
             "infoEmpty":      "Showing 0 to 0 of 0 entries",
             "infoFiltered":   "(filtered from _MAX_ total entries)",
             "infoPostFix":    "",
             "thousands":      ",",
             "lengthMenu":     "Show _MENU_ entries",
             "loadingRecords": "Loading...",
             "processing":     "Processing...",
             "search":         "Search:",
             "zeroRecords":    "No matching records found",
             "paginate": 
                     {
                        "first":      "First",
                        "last":       "Last",
                        "next":       "Next",
                        "previous":   "Previous"
                    }                        
        };
        
$('#table2').DataTable(
    {
        "language": tableLang, 
        "pagingType": "full_numbers", 
        "lengthMenu": [[5, 10, 25, -1], [5, 10, 25, "All"]],
        order: [],
        columns: 
            [                    
                {"orderable": false,  "width":"20%", "className": "dt-center"},
                {"className": "dt-center"},
                {"className": "dt-center"},
                {"className": "dt-center"},
                {"className": "dt-center"},
                {"className": "dt-center"},
                {"className": "dt-center"},
                {"className": "dt-center"}                
            ] 
    }); 
     
        $(".cancelButton").on("click",function()
        {
             if(notification)
                 $(notification.ntf).remove(); 
        });
});       

function new_NotificationFx(message,type,ttl)
{
    notification = new NotificationFx(   
                        {
                           wrapper : document.body,
                           message : message,
                           layout : 'growl',
                           effect : 'jelly',
                           type : type,
                           ttl : ttl                               
                       });
    notification.show();                    
                       
}

function isValidFirstLetter(text)
{
 return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(text.charAt(0));
}

function validateEmail(email) 
{
     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePhone(phone) 
{
     var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
     return re.test(phone);
}


function checkInputCorrect(text)
{
     if(notification)
        $(notification.ntf).remove(); 
     new_NotificationFx(text,'error',3500);
     $(".ns-box").css("z-index","9999"); 
}

