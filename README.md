# GenesisProgram
Repository holding the template to be used and edited for the Genesis Website

git bash 
cd /c/Projets/RocketElevatorsDigitalPresence

git add .
git commit -m
git push origin master






$("input[name*='building_type']").change(function(){
          //alert("The text has been changed.");
          console.log("selected value", $(this).val());
          var selected_building_type = $(this).val();
          if( selected_building_type == "residential") {
              $("#residential_info_zone").show();
              $("#commercial_info_zone").hide();
              $("#corporate_info_zone").hide();
              $("#hybrid_info_zone").hide();


              //question and answer
$(document).ready(function(){
   $('#building_type').change(function(){
       var type = $(this).val();
       if( type == "residential") {
           $("#residential").show();
           $("#commercial,#corporate,#hybrid").hide();
       }
       else if( type == "commercial") {
           $("#commercial").show();
           $("#residential,#corporate,#hybrid").hide();
       }
       else if( type == "corporate") {
           $("#corporate").show();
           $("#residential,#commercial,#hybrid").hide();
       }
       else if( type == "hybrid") {
           $("#hybrid").show();
           $("#residential,#corporate,#commercial").hide();
       }
       else if( type == "0") {
           $("#residential,#commercial,#corporate,#hybrid").hide();
       }
   });
});






//question and answer
$(document).ready(function(){
   $('#building_type').change(function(){
       var type = $(this).val();
       if( type == "residential") {
           $("#residential").show();
           $("#commercial,#corporate,#hybrid").hide();
       }
       else if( type == "commercial") {
           $("#commercial").show();
           $("#residential,#corporate,#hybrid").hide();
       }
       else if( type == "corporate") {
           $("#corporate").show();
           $("#residential,#commercial,#hybrid").hide();
       }
       else if( type == "hybrid") {
           $("#hybrid").show();
           $("#residential,#corporate,#commercial").hide();
       }
       else if( type == "0") {
           $("#residential,#commercial,#corporate,#hybrid").hide();
       }
   });
});