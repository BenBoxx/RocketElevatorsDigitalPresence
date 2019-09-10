//question and answer


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

    function collect_data(building_type){
        if( building_type == "residential") {
            var nb_appartments = $('#nb_appartments').val();
            console.log(nb_appartments);
        }
        
        if( building_type == "residential") {
            var nb_floors = $('#nb_floors').val();
            console.log(nb_floors);
        }
        
        if( building_type == "residential") {
            var nb_basements = $('#nb_basements').val();
            console.log(nb_basements);    
        }   
             
        if( building_type == "commercial") {
            var nb_business = $('#nb_business').val();
            console.log(nb_business);    
        }

        if( building_type == "commercial") {
            var nb_level_building = $('#nb_level_building').val();
            console.log(nb_level_building); 

        }

        if( building_type == "commercial") {
            var nb_level_basement = $('#nb_level_basement').val();
            console.log(nb_level_basement); 

        }

        if( building_type == "commercial") {
            var nb_parking = $('#nb_parking').val();
            console.log(nb_parking);

        }

        if( building_type == "commercial") {
            var nb_elv_shaft = $('#nb_elv_shaft').val();
            console.log(nb_elv_shaft);
            
        }

        if( building_type == "corporative") {
            var nb_corpo_business = $('#nb_corpo_business').val();
            console.log(nb_corpo_business);  

        }

        if( building_type == "corporative") {
            var nb_corpo_floors = $('#nb_corpo_floors').val();
            console.log(nb_corpo_floors); 

        }

        if( building_type == "corporative") {
            var nb_corpo_level_basement = $('#nb_corpo_level_basement').val();
            console.log(nb_corpo_level_basement);

        }
            
        if( building_type == "corporative") {
            var nb_corpo_parking = $('#nb_corpo_parking').val();
            console.log(nb_corpo_parking);

        }
            
        if( building_type == "corporative") {
            var nb_corpo_max_pers_level = $('#nb_corpo_max_pers_level').val();
            console.log(nb_corpo_max_pers_level); 

        }

        if( building_type == "hybride") {
            var nb_diff_business = $('#nb_diff_business').val();
            console.log(nb_diff_business);

        }

        if( building_type == "hybride") {
            var nb_hyb_floors = $('#nb_hyb_floors').val();
            console.log(nb_hyb_floors);

        }

        if( building_type == "hybride") {
            var nb_hyb_basement = $('#nb_hyb_basement').val();
            console.log(nb_hyb_basement);

        }

        if( building_type == "hybride") {
            var nb_hyb_parking = $('#nb_hyb_parking').val();
            console.log(nb_hyb_parking);

        }

        if( building_type == "hybride") {
            var nb_hyb_max_pers_level = $('#nb_hyb_max_pers_level').val();
            console.log(nb_hyb_max_pers_level);

        }

        if( building_type == "hybride") {
            var nb_hrs_activ_day = $('#nb_hrs_activ_day').val();
            console.log(nb_hrs_activ_day);

        }

        return 
    }
    function compute_data(building_type, collected_data){
        if( building_type == "residential") {
        //    calcul

        }
        return 
    }
 });