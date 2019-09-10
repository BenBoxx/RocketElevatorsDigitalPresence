//question and answer

function collect_data(building_type){

    var donnees = {};

    if( building_type == "residential") {
        var nb_appartments = parseInt($('#nb_appartments').val());
        console.log(nb_appartments);
        donnees["nb_appartments"] = nb_appartments;
       
        var nb_floors = parseInt($('#nb_floors').val());
        console.log(nb_floors);
        donnees["nb_floors"] = nb_floors;
       
        var nb_basements = parseInt($('#nb_basements').val());
        console.log(nb_basements);   
    }
    
    if( building_type == "commercial") {
        var nb_business = parseInt($('#nb_business').val());
        console.log(nb_business);    
   
        var nb_level_building = parseInt($('#nb_level_building').val());
        console.log(nb_level_building); 

        var nb_level_basement = parseInt($('#nb_level_basement').val());
        console.log(nb_level_basement); 

        var nb_parking = parseInt($('#nb_parking').val());
        console.log(nb_parking);

        var nb_elv_shaft = parseInt($('#nb_elv_shaft').val());
        console.log(nb_elv_shaft);
        
    }

    if( building_type == "corporative") {
        var nb_corpo_business = parseInt($('#nb_corpo_business').val());
        console.log(nb_corpo_business);  

    if( building_type == "corporative") {
        var nb_corpo_floors = parseInt($('#nb_corpo_floors').val());
        console.log(nb_corpo_floors); 

    if( building_type == "corporative") {
        var nb_corpo_level_basement = parseInt($('#nb_corpo_level_basement').val());
        console.log(nb_corpo_level_basement);

    if( building_type == "corporative") {
        var nb_corpo_parking = parseInt($('#nb_corpo_parking').val());
        console.log(nb_corpo_parking);

    if( building_type == "corporative") {
        var nb_corpo_max_pers_level = parseInt($('#nb_corpo_max_pers_level').val());
        console.log(nb_corpo_max_pers_level); 

    }

    if( building_type == "hybride") {
        var nb_diff_business = parseInt($('#nb_diff_business').val());
        console.log(nb_diff_business);

    if( building_type == "hybride") {
        var nb_hyb_floors = parseInt($('#nb_hyb_floors').val());
        console.log(nb_hyb_floors);

    if( building_type == "hybride") {
        var nb_hyb_basement = parseInt($('#nb_hyb_basement').val());
        console.log(nb_hyb_basement);

    if( building_type == "hybride") {
        var nb_hyb_parking = parseInt($('#nb_hyb_parking').val());
        console.log(nb_hyb_parking);

    if( building_type == "hybride") {
        var nb_hyb_max_pers_level = parseInt($('#nb_hyb_max_pers_level').val());
        console.log(nb_hyb_max_pers_level);

    if( building_type == "hybride") {
        var nb_hrs_activ_day = parseInt($('#nb_hrs_activ_day').val());
        console.log(nb_hrs_activ_day);

    }

    return donnees;
}


$(document).ready(function(){
    $('#building_type').change(function(){
        var building_type = $(this).val();
        if( building_type == "residential") {

            collected_data = collect_data(building_type);
            compute_data(building_type, collected_data);

            $("#residential").show();
            // $(".commercial,#corporate,#hybrid").hide(); 
        }
        else if( building_type == "commercial") {
            $("#commercial").show();
            $("#residential,#corporate,#hybrid").hide();
        }
        else if( building_type == "corporate") {
            $("#corporate").show();
            $("#residential,#commercial,#hybrid").hide();
        }
        else if( building_type == "hybrid") {
            $("#hybrid").show();
            $("#residential,#corporate,#commercial").hide();
        }
        else if( building_type == "0") {
            $("#residential,#commercial,#corporate,#hybrid").hide();
        }
    });

     function compute_data(building_type, collected_data){

        console.log("compute_data");

        if( building_type == "residential") {
        //    calcul

        }
        return 
    }
 });