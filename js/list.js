// delete user

$("#table2 .list").on("click", function()
    {
        $('#viewList').modal('show'); 
        var closestTr = $(this).closest("tr");        
        var userName = closestTr.find(".name").html();       
        $('#viewList .account-col h1').html(userName);        
        $("#viewList .imgTile").attr("src","img/Homer Simpson.jpg");
        
    });  