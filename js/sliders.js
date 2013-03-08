//jQuery(document).ready(function($) {
$(function() {


var estimatedDaily, estimatedMonthlyfromDaily, estimatedMonthlyMBS, estimatedDailyfromweekly, stimatedDailyfrommonthly;

//daily data usage
$( "#sliderdailyvideo" ).slider({
	range: "max",
		min: 0,
		max: 100,
		
		value: 0,
		
		slide: function( event, ui ) {
                $( "#dailyvideo" ).val( ui.value );
                var estimatedDailyVideo = Math.round(100 * (parseFloat(ui.value)  * 2.27)) / 100;
                estimatedDaily = Math.round(100 * (ui.value * 2.27 + $('#sliderdailyemail').slider("value") * 0.05 + $('#sliderdailybrowsing').slider("value") * 0.94 + $('#sliderdailystreaming').slider("value") * 23.52 + $('#sliderdailygaming').slider("value") * 1.51)) / 100;
                estimatedMonthlyfromDaily = Math.round(100 * 30 * (ui.value * 2.27 + $('#sliderdailyemail').slider("value") * 0.05 + $('#sliderdailybrowsing').slider("value") * 0.94 + $('#sliderdailystreaming').slider("value") * 23.52 + $('#sliderdailygaming').slider("value") * 1.51)) / 100;

            myFunction(estimatedMonthlyfromDaily);
            monthlyFunction(estimatedMonthlyfromDaily);
            dailyFunction(estimatedDaily);
            $("#video-cost").text(estimatedDailyVideo);
            $("#daily-cost").text(estimatedDaily);
            $("#dailymonthly-cost").text(estimatedMonthlyfromDaily);
    		//$("#daily-cost2").text(estimatedDailyVideo + $("#email-cost").text(estimatedDailyEmail) + $("#browsing-cost").text(estimatedDailyBrowsing) + $("#streaming-cost").text(estimatedDailyStreaming) + $("gaming-cost").text(estimatedDailyGaming));
    		}     
               
	});
 //$( "#dailyvideo" ).val( $( "#sliderdailyvideo" ).slider( "value" ) );
//});
//return estimatedMonthlyfromDaily;

$( "#sliderdailyemail" ).slider({
		range: "max",
		min: 0,
		max: 100,
		
		value: 0,
		
		slide: function( event, ui ) {
                $("#dailyemail").val( ui.value );
                var estimatedDailyEmail = Math.round(100 * (parseFloat(ui.value)  * 0.05)) / 100;
                estimatedDaily = Math.round(100 * (ui.value * 0.05 + $('#sliderdailyvideo').slider("value") * 2.27 + $('#sliderdailybrowsing').slider("value") * 0.94 + $('#sliderdailystreaming').slider("value") * 23.52 + $('#sliderdailygaming').slider("value") * 1.51)) / 100;
                estimatedMonthlyfromDaily = Math.round(100 * 30 * (ui.value * 0.05 + $('#sliderdailyvideo').slider("value") * 2.27 + $('#sliderdailybrowsing').slider("value") * 0.94 + $('#sliderdailystreaming').slider("value") * 23.52 + $('#sliderdailygaming').slider("value") * 1.51)) / 100;

            myFunction(estimatedMonthlyfromDaily);
            monthlyFunction(estimatedMonthlyfromDaily);
            dailyFunction(estimatedDaily);
            $("#email-cost").text(estimatedDailyEmail);
            $("#daily-cost").text(estimatedDaily);
            $("#dailymonthly-cost").text(estimatedMonthlyfromDaily);

    		//$("#daily-cost2").text(estimatedDailyEmail * 0.05 + $("#video-cost").text(estimatedDailyVideo) + $("#browsing-cost").text(estimatedDailyBrowsing) + $("#streaming-cost").text(estimatedDailyStreaming) + $("gaming-cost").text(estimatedDailyGaming));
    		}        
	});



$( "#sliderdailygaming" ).slider({
		range: "max",
		min: 0,
		max: 100,
		
		value: 0,
		
		slide: function( event, ui ) {
                $( "#dailygaming" ).val( ui.value );
                var estimatedDailyGaming = Math.round(100 * (parseFloat(ui.value)  * 1.51)) / 100;
                estimatedDaily = Math.round(100 * (ui.value * 1.51 + $('#sliderdailyemail').slider("value") * 0.05 + $('#sliderdailybrowsing').slider("value") * 0.94 + $('#sliderdailystreaming').slider("value") * 23.52 + $('#sliderdailyvideo').slider("value") * 2.27) ) / 100;
                estimatedMonthlyfromDaily = Math.round(100 * 30 * (ui.value * 1.51 + $('#sliderdailyemail').slider("value") * 0.05 + $('#sliderdailybrowsing').slider("value") * 0.94 + $('#sliderdailystreaming').slider("value") * 23.52 + $('#sliderdailyvideo').slider("value") * 2.27) ) / 100;

            myFunction(estimatedMonthlyfromDaily);
            monthlyFunction(estimatedMonthlyfromDaily);
            dailyFunction(estimatedDaily);
            $("#gaming-cost").text(estimatedDailyGaming);
            $("#daily-cost").text(estimatedDaily);
            $("#dailymonthly-cost").text(estimatedMonthlyfromDaily);
    		//$("#daily-cost2").text(estimatedDailyGaming + $("#email-cost").text(estimatedDailyEmail) + $("#browsing-cost").text(estimatedDailyBrowsing) + $("#streaming-cost").text(estimatedDailyStreaming) + $("video-cost").text(estimatedDailyVideo));
    		}        
	});

$( "#sliderdailystreaming" ).slider({
		range: "max",
		min: 0,
		max: 100,
		
		value: 0,
		
		slide: function( event, ui ) {
                $( "#dailystreaming" ).val( ui.value );
                var estimatedDailyStreaming = Math.round(100 * (parseFloat(ui.value)  * 23.52)) / 100;
                estimatedDaily = Math.round(100 * (ui.value * 23.52 + $('#sliderdailyemail').slider("value") * 0.05 + $('#sliderdailybrowsing').slider("value") * 0.94 + $('#sliderdailyvideo').slider("value") * 2.27 + $('#sliderdailygaming').slider("value") * 1.51) ) / 100;
                estimatedMonthlyfromDaily = Math.round(100 * 30 * (ui.value * 23.52 + $('#sliderdailyemail').slider("value") * 0.05 + $('#sliderdailybrowsing').slider("value") * 0.94 + $('#sliderdailyvideo').slider("value") * 2.27 + $('#sliderdailygaming').slider("value") * 1.51) ) / 100;

            myFunction(estimatedMonthlyfromDaily);
            monthlyFunction(estimatedMonthlyfromDaily);
            dailyFunction(estimatedDaily);
            $("#streaming-cost").text(estimatedDailyStreaming);
            $("#daily-cost").text(estimatedDaily);
            $("#dailymonthly-cost").text(estimatedMonthlyfromDaily);
    		//$("#daily-cost2").text(estimatedDailyStreaming + $("#email-cost").text(estimatedDailyEmail) + $("#browsing-cost").text(estimatedDailyBrowsing) + $("#streaming-cost").text(estimatedDailyStreaming) + $("video-cost").text(estimatedDailyVideo));
    		}        
	});

$( "#sliderdailybrowsing" ).slider({
		range: "max",
		min: 0,
		max: 100,
		
		value: 0,
		
		slide: function( event, ui ) {
                $( "#dailybrowsing" ).val( ui.value );
                var estimatedDailyBrowsing = Math.round(100 * (parseFloat(ui.value)  * 0.94)) / 100;
                estimatedDaily = Math.round(100 * (ui.value * 0.94 + $('#sliderdailyemail').slider("value") * 0.05 + $('#sliderdailyvideo').slider("value") * 2.27 + $('#sliderdailystreaming').slider("value") * 23.52 + $('#sliderdailygaming').slider("value") * 1.51) ) / 100;
                estimatedMonthlyfromDaily = Math.round(100 * 30 * (ui.value * 0.94 + $('#sliderdailyemail').slider("value") * 0.05 + $('#sliderdailyvideo').slider("value") * 2.27 + $('#sliderdailystreaming').slider("value") * 23.52 + $('#sliderdailygaming').slider("value") * 1.51) ) / 100;

            myFunction(estimatedMonthlyfromDaily);
            monthlyFunction(estimatedMonthlyfromDaily);
            dailyFunction(estimatedDaily);
            $("#browsing-cost").text(estimatedDailyBrowsing);
            $("#daily-cost").text(estimatedDaily);
            $("#dailymonthly-cost").text(estimatedMonthlyfromDaily);
    		//$("#daily-cost2").text(estimatedDailyBrowsing + $("#email-cost").text(estimatedDailyEmail) + $("#browsing-cost").text(estimatedDailyBrowsing) + $("#streaming-cost").text(estimatedDailyStreaming) + $("video-cost").text(estimatedDailyVideo));
    		}        
	});
//weekly data usage
$( "#sliderweeklyvideo" ).slider({
    range: "max",
        min: 0,
        max: 700,
        
        value: 0,
        
        slide: function( event, ui ) {
                $( "#weeklyvideo" ).val( ui.value );
                var estimatedweeklyVideo = Math.round(100 * (parseFloat(ui.value)  * 2.27)) / 100;
                estimatedweekly = Math.round(100 * (ui.value * 2.27 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklygaming').slider("value") * 1.51)) / 100;
                estimatedMonthlyfromweekly = Math.round(100 * 30 * (ui.value * 2.27 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklygaming').slider("value") * 1.51)) / 100;
                estimatedDailyfromweekly = Math.round(100 * 100 * (ui.value * 2.27 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklygaming').slider("value") * 1.51) / 700) / 100;
                
            myFunction2(estimatedMonthlyfromweekly);
            monthlyFunction2(estimatedMonthlyfromweekly);
            dailyFunction2(estimatedDailyfromweekly);
            $("#video-cost").text(estimatedweeklyVideo);
            $("#weekly-cost").text(estimatedweekly);
            $("#weeklymonthly-cost").text(estimatedDailyfromweekly);
            //$("#weekly-cost2").text(estimatedweeklyVideo + $("#email-cost").text(estimatedweeklyEmail) + $("#browsing-cost").text(estimatedweeklyBrowsing) + $("#streaming-cost").text(estimatedweeklyStreaming) + $("gaming-cost").text(estimatedweeklyGaming));
            }     
               
    });
 //$( "#weeklyvideo" ).val( $( "#sliderweeklyvideo" ).slider( "value" ) );
//});
//return estimatedMonthlyfromweekly;

$( "#sliderweeklyemail" ).slider({
        range: "max",
        min: 0,
        max: 700,
        
        value: 0,
        
        slide: function( event, ui ) {
                $("#weeklyemail").val( ui.value );
                var estimatedweeklyEmail = Math.round(100 * (parseFloat(ui.value)  * 0.05)) / 100;
                estimatedweekly = Math.round(100 * (ui.value * 0.05 + $('#sliderweeklyvideo').slider("value") * 2.27 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklygaming').slider("value") * 1.51)) / 100;
                estimatedMonthlyfromweekly = Math.round(100 * 30 * (ui.value * 0.05 + $('#sliderweeklyvideo').slider("value") * 2.27 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklygaming').slider("value") * 1.51)) / 100;
                estimatedDailyfromweekly = Math.round(100 * 100 * (ui.value * 0.05 + $('#sliderweeklyvideo').slider("value") * 2.27 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklygaming').slider("value") * 1.51) / 700) / 100;
                
            myFunction2(estimatedMonthlyfromweekly);
            monthlyFunction2(estimatedMonthlyfromweekly);
            dailyFunction2(estimatedDailyfromweekly);
            $("#email-cost").text(estimatedweeklyEmail);
            $("#weekly-cost").text(estimatedweekly);
            $("#weeklymonthly-cost").text(estimatedMonthlyfromweekly);

            //$("#weekly-cost2").text(estimatedweeklyEmail * 0.05 + $("#video-cost").text(estimatedweeklyVideo) + $("#browsing-cost").text(estimatedweeklyBrowsing) + $("#streaming-cost").text(estimatedweeklyStreaming) + $("gaming-cost").text(estimatedweeklyGaming));
            }        
    });



$( "#sliderweeklygaming" ).slider({
        range: "max",
        min: 0,
        max: 700,
        
        value: 0,
        
        slide: function( event, ui ) {
                $( "#weeklygaming" ).val( ui.value );
                var estimatedweeklyGaming = Math.round(100 * (parseFloat(ui.value)  * 1.51)) / 100;
                estimatedweekly = Math.round(100 * (ui.value * 1.51 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklyvideo').slider("value") * 2.27) ) / 100;
                estimatedMonthlyfromweekly = Math.round(100 * 30 * (ui.value * 1.51 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklyvideo').slider("value") * 2.27) ) / 100;
                estimatedDailyfromweekly = Math.round(100 * 100 *(ui.value * 1.51 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklyvideo').slider("value") * 2.27) / 700 ) / 100;
                
            myFunction2(estimatedMonthlyfromweekly);
            monthlyFunction2(estimatedMonthlyfromweekly);
            dailyFunction2(estimatedDailyfromweekly);
            $("#gaming-cost").text(estimatedweeklyGaming);
            $("#weekly-cost").text(estimatedweekly);
            $("#weeklymonthly-cost").text(estimatedMonthlyfromweekly);
            //$("#weekly-cost2").text(estimatedweeklyGaming + $("#email-cost").text(estimatedweeklyEmail) + $("#browsing-cost").text(estimatedweeklyBrowsing) + $("#streaming-cost").text(estimatedweeklyStreaming) + $("video-cost").text(estimatedweeklyVideo));
            }        
    });

$( "#sliderweeklystreaming" ).slider({
        range: "max",
        min: 0,
        max: 700,
        
        value: 0,
        
        slide: function( event, ui ) {
                $( "#weeklystreaming" ).val( ui.value );
                var estimatedweeklyStreaming = Math.round(100 * (parseFloat(ui.value)  * 23.52)) / 100;
                estimatedweekly = Math.round(100 * (ui.value * 23.52 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklyvideo').slider("value") * 2.27 + $('#sliderweeklygaming').slider("value") * 1.51) ) / 100;
                estimatedMonthlyfromweekly = Math.round(100 * 30 * (ui.value * 23.52 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklyvideo').slider("value") * 2.27 + $('#sliderweeklygaming').slider("value") * 1.51) ) / 100;
                estimatedDailyfromweekly = Math.round(100 * 100 * (ui.value * 23.52 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklyvideo').slider("value") * 2.27 + $('#sliderweeklygaming').slider("value") * 1.51) / 700 ) / 100;
                
            myFunction2(estimatedMonthlyfromweekly);
            monthlyFunction2(estimatedMonthlyfromweekly);
            dailyFunction2(estimatedDailyfromweekly);
            $("#streaming-cost").text(estimatedweeklyStreaming);
            $("#weekly-cost").text(estimatedweekly);
            $("#weeklymonthly-cost").text(estimatedMonthlyfromweekly);
            //$("#weekly-cost2").text(estimatedweeklyStreaming + $("#email-cost").text(estimatedweeklyEmail) + $("#browsing-cost").text(estimatedweeklyBrowsing) + $("#streaming-cost").text(estimatedweeklyStreaming) + $("video-cost").text(estimatedweeklyVideo));
            }        
    });

$( "#sliderweeklybrowsing" ).slider({
        range: "max",
        min: 0,
        max: 700,
        
        value: 0,
        
        slide: function( event, ui ) {
                $( "#weeklybrowsing" ).val( ui.value );
                var estimatedweeklyBrowsing = Math.round(100 * (parseFloat(ui.value)  * 0.94)) / 100;
                estimatedweekly = Math.round(100 * (ui.value * 0.94 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklyvideo').slider("value") * 2.27 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklygaming').slider("value") * 1.51) ) / 100;
                estimatedMonthlyfromweekly = Math.round(100 * 30 * (ui.value * 0.94 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklyvideo').slider("value") * 2.27 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklygaming').slider("value") * 1.51) ) / 100;
                estimatedDailyfromweekly = Math.round(100 * 100 * (ui.value * 0.94 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklyvideo').slider("value") * 2.27 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklygaming').slider("value") * 1.51) / 700) / 100;
                
            myFunction2(estimatedMonthlyfromweekly);
            monthlyFunction2(estimatedMonthlyfromweekly);
            dailyFunction2(estimatedDailyfromweekly);
            $("#browsing-cost").text(estimatedweeklyBrowsing);
            $("#weekly-cost").text(estimatedweekly);
            $("#weeklymonthly-cost").text(estimatedMonthlyfromweekly);
            //$("#weekly-cost2").text(estimatedweeklyBrowsing + $("#email-cost").text(estimatedweeklyEmail) + $("#browsing-cost").text(estimatedweeklyBrowsing) + $("#streaming-cost").text(estimatedweeklyStreaming) + $("video-cost").text(estimatedweeklyVideo));
            }        
    });

//monthly data usage

var slidermonthlyvideo = $( "#slidermonthlyvideo" ).slider({
	range: "max",
		min: 0,
		max: 3000,
		
		value: 0,
		
		slide: function( event, ui ) {
                $( "#monthlyvideo" ).val( ui.value );
                var estimatedMonthlyVideo = Math.round(100 * (parseFloat(ui.value)  * 0.0022737)) / 100;
                var estimatedMonthly = Math.round(100 * (ui.value * 0.0022737 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlygaming').slider("value") * 0.001513) ) / 100;
                estimatedMonthlyMBS = Math.round(100 * 1024 * (ui.value * 0.0022737 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlygaming').slider("value") * 0.001513) ) / 100;
                estimatedDailyfrommonthly = Math.round(100 * 100024 * (ui.value * 0.0022737 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlygaming').slider("value") * 0.001513) / 3000) / 100;
            
            myFunction3(estimatedMonthly);
            monthlyFunction3(estimatedMonthlyMBS);
            dailyFunction3(estimatedDailyfrommonthly);
            $("#monthvideo-cost").text(estimatedMonthlyVideo);
            $("#monthly-cost").text(estimatedMonthly);

    		}        
	});

var slidermonthlyemail = $( "#slidermonthlyemail" ).slider({
		range: "max",
		min: 0,
		max: 3000,
		
		value: 0,
		
		slide: function( event, ui ) {
                $( "#monthlyemail" ).val( ui.value );
                var estimatedMonthlyEmail = Math.round(100 * (parseFloat(ui.value)  * 0.000049)) / 100;
                var estimatedMonthly = Math.round(100 * (ui.value * 0.000049 + $('#slidermonthlyvideo').slider("value") * 0.0022737 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlygaming').slider("value") * 0.001513) ) / 100;
                estimatedMonthlyMBS = Math.round(100 * 1024 * (ui.value * 0.000049 + $('#slidermonthlyvideo').slider("value") * 0.0022737 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlygaming').slider("value") * 0.001513) ) / 100;
                estimatedDailyfrommonthly = Math.round(100 * 100024 * (ui.value * 0.000049 + $('#slidermonthlyvideo').slider("value") * 0.0022737 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlygaming').slider("value") * 0.001513) /3000 ) / 100;
            
            myFunction3(estimatedMonthly);
            monthlyFunction3(estimatedMonthlyMBS);
            dailyFunction3(estimatedDailyfrommonthly);
            $("#monthemail-cost").text(estimatedMonthlyEmail);
            $("#monthly-cost").text(estimatedMonthly);
    		}        
	});

var slidermonthlygaming = $( "#slidermonthlygaming" ).slider({
		range: "max",
		min: 0,
		max: 3000,
		
		value: 0,
		
		slide: function( event, ui ) {
                $( "#monthlygaming" ).val( ui.value );
                var estimatedMonthlyGaming = Math.round(100 * (parseFloat(ui.value)  * 0.001513)) / 100;
                var estimatedMonthly = Math.round(100 * (ui.value * 0.001513 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlyvideo').slider("value") * 0.0022737) ) / 100;
                estimatedMonthlyMBS = Math.round(100 * 1024 * (ui.value * 0.001513 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlyvideo').slider("value") * 0.0022737) ) / 100;
                estimatedDailyfrommonthly = Math.round(100 * 100024 * (ui.value * 0.001513 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlyvideo').slider("value") * 0.0022737) / 3000) / 100;
            
            myFunction3(estimatedMonthly);
            monthlyFunction3(estimatedMonthlyMBS);
            dailyFunction3(estimatedDailyfrommonthly);
            $("#monthgaming-cost").text(estimatedMonthlyGaming);
            $("#monthly-cost").text(estimatedMonthly);
    		}        
	});

var slidermonthlystreaming = $( "#slidermonthlystreaming" ).slider({
		range: "max",
		min: 0,
		max:3000,
		
		value: 0,
		
		slide: function( event, ui ) {
                $( "#monthlystreaming" ).val( ui.value );
                var estimatedMonthlyStreaming = Math.round(100 * (parseFloat(ui.value)  * 0.0235243)) / 100;
                var estimatedMonthly = Math.round(100 * (ui.value * 0.0235243 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlyvideo').slider("value") * 0.0022737 + $('#slidermonthlygaming').slider("value") * 0.001513) ) / 100;
                estimatedMonthlyMBS = Math.round(100 * 1024 * (ui.value * 0.0235243 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlyvideo').slider("value") * 0.0022737 + $('#slidermonthlygaming').slider("value") * 0.001513) ) / 100;
                estimatedDailyfrommonthly = Math.round(100 * 100024 * (ui.value * 0.0235243 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlyvideo').slider("value") * 0.0022737 + $('#slidermonthlygaming').slider("value") * 0.001513) / 3000) / 100;
                
            myFunction3(estimatedMonthly);
            monthlyFunction3(estimatedMonthlyMBS);
            dailyFunction3(estimatedDailyfrommonthly);
            $("#monthstreaming-cost").text(estimatedMonthlyStreaming);
            $("#monthly-cost").text(estimatedMonthly);
    		}        
	});

var slidermonthlybrowsing = $( "#slidermonthlybrowsing" ).slider({
		range: "max",
		min: 0,
		max: 3000,
		
		value: 0,
		
		slide: function( event, ui ) {
                $( "#monthlybrowsing" ).val( ui.value );
                var estimatedMonthlyBrowsing = Math.round(100 * (parseFloat(ui.value)  * 0.0009357)) / 100;
                var estimatedMonthly = Math.round(100 * (ui.value * 0.0009357 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlyvideo').slider("value") * 0.0022737 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlygaming').slider("value") * 0.001513)) / 100;
                estimatedMonthlyMBS = Math.round(100 * 1024 * (ui.value * 0.0009357 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlyvideo').slider("value") * 0.0022737 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlygaming').slider("value") * 0.001513)) / 100;
                estimatedDailyfrommonthly = Math.round(100 * 100024 * (ui.value * 0.0009357 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlyvideo').slider("value") * 0.0022737 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlygaming').slider("value") * 0.001513) / 3000) / 100;
            
            myFunction3(estimatedMonthly);
            monthlyFunction3(estimatedMonthlyMBS);
            dailyFunction3(estimatedDailyfrommonthly);
            $("#monthbrowsing-cost").text(estimatedMonthlyBrowsing);
            $("#monthly-cost").text(estimatedMonthly);
    		}       
	});


$('#submit_btn').click(function(){
    $(".slider_width").slider("value", 0);
    $(".for_reset").val("0");
    myFunction(0);
    $("#monthlydata").text("0");
    $("#dailydata").text("0");
});

var response = '';
var estimatedusage = estimatedMonthlyfromDaily;


//start of tabs
$('div.htmltabs div.tabsContent').hide();//tabsContent class is used to hide all the tabs content in the start
	$('div.tab1').show(); // It will show the first tab content when page load, you can set any tab content you want - just put the tab content class e.g. tab4
	$('div.htmltabs ul.tabs li.tab1 a').addClass('tab-current');// We will add the class to the current open tab to style the active state
	//It will add the click event on all the anchor tag under the htmltabs class to show the tab content when clicking to the tab
	$('div.htmltabs ul li a').click(function()
	{
		var thisClass = this.className.slice(0,4);//"this" is the current anchor where user click and it will get the className from the current anchor and slice the first part as we have two class on the anchor 
		$('div.htmltabs div.tabsContent').hide();// It will hide all the tab content
		$('div.' + thisClass).show(); // It will show the current content of the user selected tab
		$('div.htmltabs ul.tabs li a').removeClass('tab-current');// It will remove the tab-current class from the previous tab to remove the active style
		$(this).addClass('tab-current'); //It will add the tab-current class to the user selected tab
	});

	//end of tabs

//for daily estimates
function myFunction(estimatedMonthly)
{
    var estimatedusage = estimatedMonthly;
    var response = smart_suggestions(estimatedusage, ' ', 0, 3);
    if(response.trim() == '') response = 'no bundle';
    $("#yoursolution").text(response);
}

//for weekly estimates
function myFunction2(estimatedMonthly)
{
    var estimatedusage = estimatedMonthly;
    var response = smart_suggestions(estimatedusage, ' ', 0, 3);
    if(response.trim() == '') response = 'no bundle';
    $("#yoursolution").text(response);
}

//for monthly estimates
function myFunction3(estimatedMonthly)
{
    var estimatedusage = estimatedMonthly;
    var response = smart_suggestions(estimatedusage, ' ', 0, 0);
    if(response.trim() == '') response = 'no bundle';
    $("#yoursolution").text(response);
}

var bundle_data = {0: [50, 530000, '530,000 for 50GB Monthly\n', 51200],
                   1: [20, 250000, '250,000 for 20GB Monthly\n', 20480],
                   2: [10, 150000, '150,000 for 10GB Monthly\n', 10240],
                   3: [3, 85000, '85,000 for 3GB Monthly\n', 3072],
                   4: [1, 45000, '45,000 for 1GB Monthly\n', 1024],
                   5: [0.5, 25000, '25,000 for 500MB Monthly\n', 512]
                  };

/** 
* from the list of bundles available, this function sums up the 
* GBs starting from the index specified as the function parameter
*/
function sum_items(start_index, bundle_index){
    var sum = 0;
    var index = start_index;
    for (index; index < 6; index++){
        sum += bundle_data[index][bundle_index];
    }
    return sum;
}

/** 
* from the list of bundles available, this function sums up the 
* prices starting from the index specified as the function parameter.
*/
function sum_bundle_prices(start_index){
    var sum = 0;
    var index = start_index;
    for (index; index < 6; index++){
        sum += bundle_data[index][1];
    }
    return sum;
}

/**
* recursive function to determine what combination  
* of bundles suit the user's estimate
*/
function smart_suggestions(estimatedusage, response, start_index_for_search, bundle_index){
    var index = start_index_for_search;
    //if it's the last item in the list of bundles...
    if(index == 5){
        //if it's a valid value, return the response for 500MB
        if(estimatedusage > 0){
            response += bundle_data[index][2];            
        } else {   //otherwise return an empty string
            response += ' ';
        } 
        return response;       
    } else { //if it's not the last item in the list of bundles...
        if(estimatedusage > sum_items(index+1, bundle_index)){
            //if the estimate, is bigger than the bundle we're currently checking, add the response for the current bundle
            //and recurse down the list to match the remaining estimate
            response += bundle_data[index][2];
            return smart_suggestions((estimatedusage - bundle_data[index][bundle_index]), response, index+1, bundle_index);        
        } else {
            //if the estimate, is bigger than the bundle we're currently checking, skip this bundle and recurse down the list
            //to check if any other bundles match
            return smart_suggestions(estimatedusage, response, index+1, bundle_index);
        }
    
    }
    
}


function monthlyFunction(Monthlyusage)
{
    $("#monthlydata").text(estimatedMonthlyfromDaily)
}

function monthlyFunction2(Monthlyusage)
{
    $("#monthlydata").text(estimatedMonthlyfromweekly)
}


function monthlyFunction3(Monthlyusage)
{
    $("#monthlydata").text(estimatedMonthlyMBS)
}

function dailyFunction(DailyUsage)
{
    $("#dailydata").text(estimatedDaily)
}

function dailyFunction2(DailyUsage)
{
    $("#dailydata").text(estimatedDailyfromweekly)
}

function dailyFunction3(DailyUsage)
{
    $("#dailydata").text(estimatedDailyfrommonthly)
}

});

