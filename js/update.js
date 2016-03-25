// update User

$("#table2 .update").on("click", function()
{
   $('#updateUser').modal('show'); 
   
   var closestTr = $(this).closest("tr");  
   var userName = closestTr.find(".name").html();       
   var userEmail = closestTr.find(".email").html();  
   var userTelephone = closestTr.find(".telephone").html();    
   var userStreet = closestTr.find(".street").html();  
   var userCity = closestTr.find(".city").html();  
   var userState = closestTr.find(".state").html();  
   var userZip = closestTr.find(".zip").html();  
   
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
    
    new_NotificationFx("User is update",'success',3500);
    $('#updateUser').modal('hide'); 
    } 
      
      
      
});
  