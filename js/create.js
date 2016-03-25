// Create new User

$(".createNewUser").on("click", function()
{
   $('#createUser').modal('show'); 
   $("#createUser input").val("");
});

$('#createUser .modal-footer .btn-primary').on("click", function()
{
      
    var getName = $("<td>").html($("#createUser .inputName").val());
    var getEmail = $("<td>").html($("#createUser .inputEmail").val()); 
    var getTelephone = $("<td>").html($("#createUser .inputTelephone").val());
    var getStreet = $("<td>").html($("#createUser .inputStreet").val());
    var getState = $("<td>").html($("#createUser .inputState").val());
    var getCity = $("<td>").html($("#createUser .inputCity").val());
    var getZip = $("<td>").html($("#createUser .inputZip").val());
    
    var data = 
            {
                "getName" : $("#createUser .inputName").val(),
                "getEmail" : $("#createUser .inputEmail").val(),
                "getTelephone": $("#createUser .inputTelephone").val(),
                "getStreet" : $("#createUser .inputStreet").val(),
                "getState" : $("#createUser .inputState").val(),
                "getCity" : $("#createUser .inputCity").val(),
                "getZip" : $("#createUser .inputZip").val()
            };
            
    var iEdit = $("<i>");
    var aUpdate = $("<a>");    
    iEdit.addClass("fa fa-lg fa-edit").css("margin","7px");
    aUpdate.addClass("update").attr("tite","Update").append(iEdit).data("data",data);

    var iRemove = $("<i>");
    var aDelete = $("<a>");    
    iRemove.addClass("fa fa-lg fa-remove");
    aDelete.addClass("delete").attr("tite","Delete").append(iRemove);

            
    var iAlt = $("<i>");
    var aList = $("<a>");    
    iAlt.addClass("fa fa-lg fa-list-alt");
    aList.addClass("list").attr("tite","List").data("name",data.getName).append(iAlt);
    
    var td = $("<td>");    
        td.append(aList).append(aUpdate).append(aDelete);
    
    var tr = $("<tr>");
        tr.append(td).append(getName).append(getEmail).append(getTelephone).append(getStreet).append(getState).append(getCity).append(getZip);

    if(data.getName=="")
        checkInputCorrect("The field 'Name' must be filled!");

    else if(isValidFirstLetter(data.getName))
        checkInputCorrect("Input name new User in correct format!");

    else if (!validateEmail(data.getEmail))   
        checkInputCorrect("Input Email of new User in correct format!");

    else if (!validatePhone(data.getTelephone))              
            checkInputCorrect("Input Telephone number of new User in correct format like: XXX-XXX-XXXX or +(XXX)-XXX-XXXX or XXXXXXXXXX ");

    else if(isValidFirstLetter(data.getStreet))
        checkInputCorrect("Input Street of a new User in correct format!");

    else if(isValidFirstLetter(data.getState))
        checkInputCorrect("Input State of a new User in correct format!");

    else if(isValidFirstLetter(data.getCity))
        checkInputCorrect("Input City of a new User in correct format!"); 

    else if (Math.sign (data.getZip)!==1)              
            checkInputCorrect("Input Zip number of new User in correct format!");
        
    else
    {    
        var table = $('#table2').DataTable();
        table.row.add(tr.get(0)).draw();
        $('#createUser').modal('hide'); 
        new_NotificationFx("New User is created",'success',3500);
       
   }
    
   aList.on("click", function()
    {
        var userName = $(this).data("name");
        $('#viewList').modal('show'); 
        $('#viewList .account-col h1').html(userName);
        $("#viewList .imgTile").attr("src","img/"+userName+".jpg");
        $(".imgTile").on('error', function() 
         {
             $("#viewList .imgTile").attr("src","img/no_image.gif");;
         }); 
    });  
    
    
    aUpdate.on("click", function()
    {       
        $('#updateUser').modal('show'); 
   
        var closestTr = $(this).closest("tr");  
        var userName = $(this).data("data").getName; 
        var userEmail = $(this).data("data").getEmail;
        var userTelephone = $(this).data("data").getTelephone;   
        var userStreet = $(this).data("data").getStreet;
        var userCity = $(this).data("data").getCity; 
        var userState = $(this).data("data").getState;  
        var userZip = $(this).data("data").getZip;  

        $('#updateUser .account-col h1').html(userName);     

        $("#updateUser .inputName").val(userName);
        $("#updateUser .inputEmail").val(userEmail);
        $("#updateUser .inputTelephone").val(userTelephone);
        $("#updateUser .inputStreet").val(userStreet);
        $("#updateUser .inputCity").val(userCity);
        $("#updateUser .inputState").val(userState);
        $("#updateUser .inputZip").val(userZip);

        $("#updateUser .modal-footer .btn-primary").data("this", $('#table2').DataTable().row(closestTr).index()); 
          
    });
    
    
    $('#updateUser .modal-footer .btn-primary').on("click", function()
    {
        var count=1;
        var data = 
                {
                    "getName" : $("#updateUser .inputName").val(),
                    "getEmail" : $("#updateUser .inputEmail").val(),
                    "getTelephone": $("#updateUser .inputTelephone").val(),
                    "getStreet" : $("#updateUser .inputStreet").val(),
                    "getState" : $("#updateUser .inputState").val(),
                    "getCity" : $("#updateUser .inputCity").val(),
                    "getZip" : $("#updateUser .inputZip").val()
                };
    
    
    if(data.getName=="")
        checkInputCorrect("The field 'Name' must be filled!");

    else if(isValidFirstLetter(data.getName))
        checkInputCorrect("Input name new User in correct format!");

    else if (!validateEmail(data.getEmail))   
        checkInputCorrect("Input Email of new User in correct format!");

    else if (!validatePhone(data.getTelephone))              
            checkInputCorrect("Input Telephone number of new User in correct format like: XXX-XXX-XXXX or +(XXX)-XXX-XXXX or XXXXXXXXXX ");

    else if(isValidFirstLetter(data.getStreet))
        checkInputCorrect("Input Street of a new User in correct format!");

    else if(isValidFirstLetter(data.getState))
        checkInputCorrect("Input State of a new User in correct format!");

    else if(isValidFirstLetter(data.getCity))
        checkInputCorrect("Input City of a new User in correct format!"); 

    else if (Math.sign (data.getZip)!==1)              
            checkInputCorrect("Input Zip number of new User in correct format!");
        
    else
    {    
        for (var i in data)
            {
                console.info(data[i])
                 $('#table2').dataTable().fnUpdate(data[i], $(this).data("this"), count );        
                ++count;
            }  

            aUpdate.data("data",data);

            new_NotificationFx("User is update",'success',3500);
    }
      
      $('#updateUser').modal('hide'); 
      
});

aDelete.on("click", function()
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

});
  