//alert("Make Your Choice");

//$("#button").onclick(function(){
   // $("body").css("background-color", "red");
//}); 

function submitForm(){
               // alert("Form submitted;
                
                var prefix = "";
                
                var gender = $("input[name='gender']:checked").val();
                if(gender=="male"){
                    prefix="Mr.";
                }
                if(gender=="female"){
                    prefix="Ms."
                }
                //alert(gender);
                var fullname = $("input[name='firstname']").val() + " " + $("input[name='lastname']").val();
                $("#username").html(prefix + " " + fullname);
                
                var favoriteColor = $("input[name='favoriteColor']").val();
                $("body").css("background-color", favoriteColor);
}