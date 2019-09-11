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




   var Appartments = parseInt(document.getElementById("residential_appartments").value);
       var Floors = parseInt(document.getElementById("residential_floors").value);
       var total = Math.ceil(Appartments/(Floors*6));
       var total2 = Math.ceil(Floors/20);
       quantity = total+total2;
       console.log("quantity",quantity);
       updateQuantity(quantity);
       InstallationTotal();
   }



   $('#residential').click(function(){
      $("#nb_shop").hide();
      $("#nb_park").hide();
      $("#nb_elevator").hide();
      $("#nb_comp").hide();
      $("#nb_occ").hide();
      $("#nb_ha").hide();
      $("#nb_apart").show();
      $("#nb_floor").show();
      $("#nb_basement").show();






      $( document ).ready(function() {
   $('#residential').click(function(){
       $(".nb_shop").hide();
       $(".nb_park").hide();
       $(".nb_elevator").hide();
       $(".nb_comp").hide();
       $(".nb_occ").hide();
       $(".nb_ha").hide();
       $(".nb_apart").show();
       $(".nb_floor").show();
       $(".nb_basement").show();
   });
   $('#commercial').click(function(){
       $(".nb_apart").hide();
       $(".nb_comp").hide();
       $(".nb_occ").hide();
       $(".nb_ha").hide();
       $(".nb_shop").show();
       $(".nb_floor").show();
       $(".nb_basement").show();
       $(".nb_park").show();
       $(".nb_elevator").show();
   });
   $('#corporate').click(function(){
       $(".nb_apart").hide();
       $(".nb_shop").hide();
       $(".nb_elevator").hide();
       $(".nb_ha").hide();
       $(".nb_comp").show();
       $(".nb_floor").show();
       $(".nb_basement").show();
       $(".nb_park").show();
       $(".nb_elevator").show();
   });
   $('#hybrid').click(function(){
       $(".nb_apart").hide();
       $(".nb_comp").hide();
       $(".nb_elevator").hide();
       $(".nb_shop").show();
       $(".nb_floor").show();
       $(".nb_basement").show();
       $(".nb_park").show();
       $(".nb_occ").show();
       $(".nb_ha").show();
   });





     <section>
					
						<div class="col-md-4">
							<label for="residential">How Many Unit in the Building ? </label>
							<input required type="var" value="" class="form-control" name="residential[residential][required]" id="nb_appartments">
						</div>
						
						<div class="col-md-4">
							<label for="residential">How Many Level in the Building ?<br>(from street level) </label>
							<input required type="var" value="" class="form-control" name="residential[residential][required]" id="nb_floors">
						</div>
						
						<div class="col-md-4">
							<label for="residential">How Many Level in the Basement ? </label>
							<input type="var" value="" class="form-control" name="residential[residential][required]" id="nb_basements">
						</div>

					</section>

					
					<!-- /commercial -->

					<section>

							<div class="col-md-4">
								<label for="commercial">How Many Different Business in the Building ? </label>
								<input required type="var" value="" class="form-control" name="commercial[commercial][required]" id="nb_business">
							</div>

							<div class="col-md-4">
								<label for="commercial">How Many Level in the Building ? </label>
								<input required type="var" value="" class="form-control" name="commercial[commercial][required]" id="nb_level_building">
							</div>
							
							<div class="col-md-4">
									<label for="commercial">How Many Level in the Basement ?</label>
									<input type="var" value="" class="form-control" name="commercial[commercial][required]" id="nb_level_basement">
							</div>
								
							<div class="col-md-4">
									<label for="commercial">How Many Parking Space Avilable ?</label>
									<input type="var" value="" class="form-control" name="commercial[commercial][required]" id="nb_parking">
							</div>

							<div class="col-md-4">
										<label for="commercial">How Many Elevator Shaft to Unfurl ?</label>
										<input type="var" value="" class="form-control" name="commercial[commercial][required]" id="nb_elv_shaft">
							</div>

	
					</section>

					<!-- corporative -->

					<section>

							<div class="col-md-4">
								<label for="corporative">How Many Business Rent a Unit ?</label>
								<input required type="var" value="" class="form-control" name="corporative[corporative][required]" id="nb_corpo_business">
							</div>

							<div class="col-md-4">
								<label for="corporative">How Many Floor in the Building ?</label>
								<input required type="var" value="" class="form-control" name="corporative[corporative][required]" id="nb_corpo_floors">
							</div>
							
							<div class="col-md-4">
									<label for="corporative">How Many Level in the Basemnt ?</label>
									<input type="var" value="" class="form-control" name="corporative[corporative][required]" id="nb_corpo_level_basement">
							</div>
								
							<div class="col-md-4">
									<label for="corporative">How Many parking Space Avilable ?</label>
									<input type="var" value="" class="form-control" name="corporative[corporative][required]" id="nb_corpo_parking">
							</div>

							<div class="col-md-4">
										<label for="corporative">How Many Occupants Maximum per Level ?</label>
										<input type="var" value="" class="form-control" name="corporative[corporative][required]" id="nb_max_pers_level">
							</div>

					
					</section>
					<!-- hybride -->

					<sectoin>

							<div class="col-md-4">
								<label for="hybride">How Many Differant Business in the Building ?</label>
								<input required type="var" value="" class="form-control" name="contact[hybride][required]" id="nb_diff_business">
							</div>

							<div class="col-md-4">
								<label for="hybride">How Many Floor in the Building ?</label>
								<input required type="var" value="" class="form-control" name="hybride[hybride][required]" id="nb_hyb_floors">
							</div>
							
							<div class="col-md-4">
								<label for="hybride">How Many Level in the Basement ?</label>
								<input type="var" value="" class="form-control" name="contact[phone]" id="nb_hyb_basement">
							</div>
								
							<div class="col-md-4">
								<label for="hybride">How Many Parking Space Avilable ?</label>
								<input type="var" value="" class="form-control" name="hybride[hybride]" id="nb_hyb_parking">
							</div>

							<div class="col-md-4">
								<label for="hybride">How Many Occupants Maximum per Level ?</label>
								<input type="var" value="" class="form-control" name="hybride[hybride]" id="nb_hyb_max_pers_level">
							</div>

							<div class="col-md-4">
									<label for="hybride">How Many Hour of Activity per Day ?<br>(Maximum 24)</label>
									<input type="var" value="" class="form-control" name="hybride[hybride]" id="nb_hrs_activ_day">
							</div>
							
					</section>
