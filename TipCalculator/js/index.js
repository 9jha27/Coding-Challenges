//calculateTip function to display in total tip amount
$(document).ready(function(){
    const input = $("#totalTip");
    const mealCost = $("#mealCost");
    $("#tip15").click(function(){ //
        
        var totalTip = (mealCost.val() * .15).toFixed(2);

        input.val(totalTip);
        console.log(totalTip);
        console.log(typeof(totalTip));
    })
    $("#tip18").click(function(){ //
        
        var totalTip = (mealCost.val() * .18).toFixed(2);

        input.val(totalTip);
        console.log(totalTip);
        console.log(typeof(totalTip));
    })
    $("#tip20").click(function(){ //
        
        var totalTip = (mealCost.val() * .20).toFixed(2);

        input.val(totalTip);
        console.log(totalTip);
        console.log(typeof(totalTip));
    })
    $("#tip25").click(function(){ //
        
        var totalTip = (mealCost.val() * .25).toFixed(2);

        input.val(totalTip);
        console.log(totalTip);
        console.log(typeof(totalTip));
    })

    //Clear Button Function
    $("#clear").click(function(){
        $("#mealCost").val("");
        input.val("");
        $("#total").val("");
        $("#customTip").val("");
    })
    

    //custom tip section
    $("#addTip").click(function(){
        var customTip = parseFloat($("#customTip").val());
        if ($("#dollars").prop("checked")){
            input.val(customTip);
        }
        if ($("#percentage").is(":checked")){
            if (mealCost.val() == ""){
                alert("Please tell us how much your meal costs!");
            }
            input.val(((customTip/100) * mealCost.val()).toFixed(2));  
        }
        if (!(($("#dollars").prop("checked")) || ($("#percentage").is(":checked")))) {
            alert("Please select if you'd like to add tip in dollars or as a percentage of your meal")
        }
        console.log(customTip);
        console.log(typeof(customTip))
    })

    //Meal Total (Cost of meal + Tip Amount)
    $("#enter").click(function(){
        var mealTotal = (parseFloat(mealCost.val()) + parseFloat(input.val())).toFixed(2);
        $("#total").val(mealTotal);
        if(input.val() == ""){
            $("#total").val(mealCost.val());
        }
    })
    
})

$(function(){
    $("input[name='numonly']").on('input', function(e){
        $(this).val($(this).val().replace(/[^0-9],'.'/g, ''))
    })
})

