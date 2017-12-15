<div class="row flexb_resp">
            <div class="col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3">
                <div class="profilepicture flexb fx_hcenter">
                    <img  <?php
                     if($pr->canEdit(@$usu)) echo 'data-toggle="modal" data-target="#changeprofilepicture"' ?> src="<?php echo $pr->getPicture();?>" class="img" alt="">
                    <div class="hidden-sm hidden-md hidden-lg hidden-xl">&nbsp;</div>
                   <?php
                     if($pr->canEdit(@$usu)) {?> <div class="edit_tag" data-toggle="modal" data-target="#changeprofilepicture"><i class="fa fa-camera fa-lg" aria-hidden="true"></i> EDIT</div> 
                    <script>
                        $(function(){
                            $(".profilepicture .edit_tag").hover(
                                function(){ 
                                $(".profilepicture .img").addClass("oscuri");
                                },
                                function(){
                                $(".profilepicture .img").removeClass("oscuri");  
                            });
                        });
                    </script><?php }?>
                </div>
                <script>
                    $(function(){
                        if( $(window).width() < 768 ) {
                            $(".profilepicture .img").height( $(".col-xs-6").width() );
                        }
                        else {
                            $(".profilepicture .img").height( $(".col-sm-4").width() );
                        }
												$(window).resize( () => {
													if( $(window).width() < 768 ) {
                            $(".profilepicture .img").height( $(".col-xs-6").width() );
													}
													else {
															$(".profilepicture .img").height( $(".col-sm-4").width() );
													}
												});
                    });
                </script>
            </div>
            <div class="col-sm-8 col-xs-12 flexb fx_col">
                <div class="row bloque_negro_tit flexb">
                    <div class="col-xs-8 flexb fx_col fx_hcenter">
                        <h2><?php echo ($pr->data["gym_name"] == "")? "": $pr->data["gym_name"] ?></h2>
                        <h2 style="text-transform: uppercase;"><?php echo $pr->data["name"]." ".$pr->data["surname"] ?></h2>
                    </div>
                    <div class="col-xs-4 flexb fx_vcenter fx_hcenter">
                        <a href="<?php echo ROOT_DOM."/academy/". str_replace("/", "-", str_replace(" ","_",$pr->data['gym_name']))  ?>">  <img class="img_academy" src="<?php  echo $gym->GetLogo() ?>" alt=""></a>
                    </div>
                </div>
                
                <style>
                    .bloque_gris{
                        min-height: 200px;
                        height: auto;
                    }
                    @media (max-width: 350px){
                        .bloque_gris{
                            min-height: 250px;
                        }
                    }
                </style>
                <div class="row bloque_gris flexb fx_vcenter fx_col fx_1">
                    <div class="col-xs-12" style="position: static;">
                        <br>
                        <p class="description"><?php echo $content; ?></p>
                        <!--<p class="description"><strong>Weight class: <?php echo $pr->cat[3] ?></strong></p>-->
                        <div class="belt-image" style="background-color: <?php echo $pr->cat[2] ?>;">
                            <div class="blacksquare">&nbsp;</div>
                        </div>
                        <script> /* RED TAG IN BLACK BELT */
                            $(function(){
                               if ( $(".belt-image").css("background-color") == "rgb(0, 0, 0)" ){
                                    $(".belt-image").css("border", 0);
                                    $(".blacksquare").css("background-color", "darkred");   
                                    $(".blacksquare").css("border-left", "1px solid white");
                                    $(".blacksquare").css("border-right", "1px solid white");
                               }
                            });
                        </script>
                        <p class="description"><strong><?php echo estateBonito( $pr->data["state"],$us_state_abbrevs_names) ?></strong></p>
                          <?php if($pr->canEdit(@$usu)) {?>
                        <div class="edit_tag" onClick="goTo('<?php echo ROOT_DOM ?>/edit_profile.php')"><i class="fa fa-sliders fa-lg" aria-hidden="true"  ></i> EDIT</div>
                       <?php } ?>
                    </div>
                </div>
            </div>
        </div> 