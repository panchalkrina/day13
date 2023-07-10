function displayVals(){
    var singleValues=$("#single").val();
    var multipleValue=$("#multiple").val();
    $("p").html("<b>Single:</b>" + singleValues +
    "<b>Multiple:</b>"+ multipleValue.join(","));
}
$("select").on("change", displayVals);
displayVals();