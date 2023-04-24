var sizeForShoes = ["Anthocyanins", "Flavanones"]; 
var sizeForDress = ["Plasm", "Urine"]; 

$('#Category').change(function() {
    var selectedCategory = $('#Category').val();  
    if(selectedCategory != ""){
    
   //Removing current option
    $('#size').find('option').remove();

    var sizeList = [];
   
   if(selectedCategory == 'shoes'){
    for (var i = 1; i <= sizeForShoes.length; i++) {
    var shoeSize = sizeForShoes[i];
$('#size').append($("<option></option>").attr("value", shoeSize).text(shoeSize));
    }
   }
   else{
     for (var i = 1; i <= sizeForDress.length; i++) {
     var dressSize = sizeForDress[i];
        $('#size').append($("<option></option>").attr("value", dressSize).text(dressSize));
    }
   } 
   }else{
   
   //If nothing is selected then it will remove previous options

   $("#size").empty();
    $('#size').append($("<option></option>").attr("value", "").text("Select size"));
   }
});