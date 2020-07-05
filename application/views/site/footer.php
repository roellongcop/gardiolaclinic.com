
        <!-- =========================
            FOOTER
        ============================== -->
        <div class="footer">
            <div class="container-fluid">
                <div class="row">
                    
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 footer-matchheight">
                        <div class="row">
                            <!-- FOOTER ITEM 2 -->
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 footer-item footer-item-2" id="el-opening">
                                <h3 class="footer-title footer-title-line"><i class="fa fa-clock-o"></i> OPENING HOURS</h3>
                                <div class="opening-left">
                                    <p v-for="opening in openings">
                                        {{ opening.day }}
                                    </p>
                                </div>
                                <div class="opening-right">
                                    <p v-for="opening in openings">
                                        {{ opening.open + ' - ' + opening.close }}
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 footer-copyright" id="el-clinic_name">
                                <div style="color: #fff">
                                    Copyright &copy;  {{ clinicName }}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- FOOTER ITEM 3 -->
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 footer-item footer-item-3 footer-matchheight" id="footer-item-3">
                        <h3 class="footer-title"><i class="fa fa-map-marker"></i> CONTACTS</h3>
                        <div class="footer-item-3-phone">
                            <h4><i class="fa fa-phone"></i> {{ contact.number }}</h4>
                        </div> 
                        <div class="footer-item-3-phone">
                            <h4><i class="fa fa-facebook"></i> {{ contact.facebook }}</h4>
                        </div> 
                        <div class="footer-item-3-phone">
                            <h4><i class="fa fa-google"></i> {{ contact.gmail }}</h4>
                        </div> 
                        <div class="footer-item-3-phone">
                            <h4><i class="fa fa-twitter"></i> {{ contact.twitter }}</h4>
                        </div> 
                        <div class="footer-item-3-phone">
                            <h4><i class="fa fa-skype"></i> {{ contact.skype }}</h4>
                        </div> 
                        <div class="footer-item-3-phone">
                            <h4><i class="fa fa-yahoo"></i> {{ contact.yahoo }}</h4>
                        </div> 
                    </div>
                    <!-- FOOTER ITEM 4 -->
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 footer-item footer-item-4 footer-matchheight" id="googleMap"></div>
                    <!-- <div id="googleMap" class="card hoverable" style="width: 300px;height: 300px;"></div> -->
                        
                </div>
            </div>
        </div>
        <!-- =========================
            END FOOTER
        ============================== -->

 


    </div> <!-- header partner -->
</div><!-- header partner -->




<!-- =========================
    END POPUP FORMS
============================== -->

<!-- =========================
    LOGIN REGISTER
============================== -->
<div class="modal fade" id="registration" role="dialog" data-toggle="modal" data-dismiss="modal" style="margin-top: 100px"> 
    <input type="hidden" name="" id="alert" value="<?= $this->session->flashdata('success') ?>"> 
    <input type="hidden" name="" id="alert2" value="<?= $this->session->flashdata('failed') ?>"> 
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-login">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-xs-6">
                            <a href="#"  id="login-form-link"><h3>Login</h3></a>
                        </div>
                        <div class="col-xs-6">
                            <a href="#"  id="register-form-link"><h3>Register</h3></a>
                        </div>
                    </div>
                    <hr>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-12">
                            <?= form_open('user_login',"id='login-form'") ?>
                                <div class="form-group">
                                    <input 
                                        type="text" name="username" id="user" tabindex="1" 
                                        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 booking-form-item" 
                                        placeholder="Username" value="" required>
                                </div>
                                <div class="form-group">
                                    <input type="password" name="password" id="passwordlog" 
                                        tabindex="2" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 booking-form-item" 
                                        placeholder="Password" required>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-sm-6 col-sm-offset-3">
                                            <input type="submit" name="login-submit" id="login-submit" tabindex="4" class="fancybox-4 btn btn-default" value="Log In">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            <?= form_close(); ?>
                           
                           <?= form_open('register_patient') ?>
                                <registration></registration>
                            <?= form_close(); ?>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- =========================
    POPUP FORMS
============================== -->










  
<!-- =========================
    LOGIN REGISTER
============================== -->

<div class="totop" id="totop">
    <i class="fa fa-angle-up"></i>
</div> 
<script type="text/javascript">
    var base_url='<?=base_url()?>';
</script>
<!-- <link rel="stylesheet" type="text/css" href="../assets/css/responsive.css" /> -->
<?= link_tag('assets/assets/css/responsive.css')?>

    
<!-- =========================
     SCRIPTS   
============================== -->  
<!-- JQUERY -->
<script src="<?= base_url('assets/assets/js/jquery-2.2.0.min.js')?>"></script>

<!-- BOOTSTRAP -->
<script src="<?= base_url('assets/assets/js/bootstrap.min.js')?>"></script>


<!-- SLIDER PRO -->
<script src="<?= base_url('assets/assets/js/jquery.sliderPro.min.js')?>"></script>
    
<!-- LIGHTBOX -->
<script src="<?= base_url('assets/assets/js/jquery.fancybox.pack.js')?>"></script>

<!-- CAROUSEL -->
<script src="<?= base_url('assets/assets/js/owl.carousel.js')?>"></script>

<!-- STAR RATING -->
<script src="<?= base_url('assets/assets/js/jquery.barrating.min.js')?>"></script>   

<!-- ISOTOPE FILTER -->
<script src="<?= base_url('assets/assets/js/isotope.pkgd.min.js')?>"></script>

<!-- SCROLLSPY -->
<script src="<?= base_url('assets/assets/js/scrollspy.js')?>"></script>

<!-- DATEPICKER -->
<script src="<?= base_url('assets/assets/js/moment.js')?>"></script>
<script src="<?= base_url('assets/assets/js/bootstrap-datetimepicker.min.js')?>"></script>

<!-- CALENDAR -->
<script src="<?= base_url('assets/fullcalendar/dist/fullcalendar.min.js') ?>"></script>

 
<!-- FORM VALIDATOR -->
<script src="<?= base_url('assets/assets/js/jquery.form-validator.js')?>"></script>
    
<!-- SELECT STYLING -->
<script src="<?= base_url('assets/assets/js/jquery.selectBox.js')?>"></script>

<!-- MATCHHEIGHT --> 
<script src="<?= base_url('assets/assets/js/jquery.matchHeight.js')?>"></script>
<script src="<?= base_url('assets/js_frmwrk/printThis.js')?>"></script>

 

<!-- IMAGES LOADED -->
 
<script src="<?= base_url('assets/pnotify/dist/pnotify.js')?>"></script>
<script src="<?= base_url('assets/pnotify/dist/pnotify.buttons.js')?>"></script>
<script src="<?= base_url('assets/pnotify/dist/pnotify.nonblock.js')?>"></script>

<!-- CUSTOM SCRIPT -->
<script src="<?= base_url('assets/assets/js/theme.js')?>"></script>
<script src="<?= base_url('assets/vue.min.js')?>"></script>
<script src="<?= base_url('assets/main.js')?>"></script>


<?php if(isset($vue)): ?>
    <script type="text/javascript" src="<?= base_url('assets/' . $vue) ?>"></script>
<?php endif;?>


<!-- GOOGLE MAPS -->
<!-- <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyC1N87a_NHjocaepKKcovPAYTMUkJBr9pQ&amp;language=en&amp;sensor=true"></script> -->


    <!-- <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script> -->
    <!-- <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script> -->







 <textarea id="tooltip" style="display: none;">
     </textarea>


    <!-- Add Google Maps -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDDsziO7yBi_o0dmCucMAUgqUKp8o3ldNY&callback=myMap"></script>
    <script>
        var myCenter = new google.maps.LatLng(14.323719, 121.026559);
        function initialize() {
            var mapProp = {
                center:myCenter,
                zoom:12,
                scrollwheel:true,
                draggable:true,
                mapTypeId:google.maps.MapTypeId.ROADMAP
            };

            var contentString = $('#tooltip').val();



            var map = new google.maps.Map(document.getElementById("googleMap"),mapProp); 
            // var map2 = new google.maps.Map(document.getElementById("googleMap1"),mapProp); 

            var marker = new google.maps.Marker({
                position:myCenter,
                      title:"Gardiola Dentals", 

            });

             var infowindow = new google.maps.InfoWindow({
                  content: contentString
                });

                marker.addListener('click', function() {
                  infowindow.open(map, marker);
                  // infowindow.open(map2, marker);
                });

            marker.setMap(map);
            // marker.setMap(map2);

        }

        google.maps.event.addDomListener(window, 'load', initialize);
    </script>


















<script>
$(document).ready(function(){
   
  });

 $("#signup").click(function(){
        // alert("haha");
     $("#myModal").modal("toggle");
    });
    </script>   
    <script>
$(document).ready(function(){
  });

 $("#make").click(function(){
        // alert("haha");
     $("#myModal1").modal("toggle");
    });
 $("#login-form-link").click(function(){
        // alert("haha");
     $("#login-form").show();
    $("#register-form").hide();
    });
 $("#register-form-link").click(function(){
        // alert("haha");
    $("#login-form").hide();
    $("#register-form").show();
    $('body').removeClass('modal-open');
    });
 
    </script> 
<!-- <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-85192583-2', 'auto');
  ga('send', 'pageview');
</script> -->
 
</body>
</html>


