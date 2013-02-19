jQuery(document).ready(function($) {
//var suggestedbundle = $("#dailymonthly-cost").text(estimatedMonthlyfromDaily);
var estimatedusage = '6000';
var response = '';
//switch (estimatedusage) {
    //case ('500'):
   if (0 <= estimatedusage &&  estimatedusage < 500){
        response= '25,000'
    } else if (501 <= estimatedusage &&  estimatedusage < 1024) {
            response= '45,000';
        } else if (1025 <= estimatedusage && estimatedusage < 3024) {
            response= '85,000'; 
        } else if (3025 <= estimatedusage && estimatedusage < 10024) {
            response= '150,000';
        } else if (10025 <= estimatedusage && estimatedusage < 20024) {
            response= '250,000';
        } else {response= '530,000';}
    
  //$("#suggestedbundle").text(response);
//}
document.getElementById("yoursolution").innerHTML=response;
//$("yoursolution").text(response);
    //outputs a bundle value deepending on your monthly data usage.
});

