
<?= $header ?>
<div id="home">
    <!-- =========================
         HEADER SLIDER
    ============================== --> 

                <!-- HEADER SLIDER ITEM -->
    <!-- <carousel :carousels="carousels"></carousel> -->
    <div id="slider" class="slider">
            <div class="sp-slides">
                <?php foreach($carousels as $carousel): ?>
                    <div class="sp-slide">
                        <img class="sp-image" src="" alt=""
                            data-src="<?= base_url($carousel['image']) ?>"/>
                        <div class="container">
                            <h3 class="sp-layer slider-welcome" 
                                data-position="leftCenter" data-horizontal="15" data-vertical="-370" 
                                data-show-transition="left" data-hide-transition="left"
                                data-show-delay="0" data-hide-delay="0">
                                <?= $carousel['greetings'] ?>
                            </h3>

                            <h1 class="sp-layer slider-title" 
                                data-position="leftCenter" data-horizontal="15" data-vertical="-230" 
                                data-show-transition="left" data-hide-transition="left"
                                data-show-delay="200" data-hide-delay="200">
                                <?= $carousel['title'] ?>
                            </h1>

                            <h2 class="sp-layer slider-subtitle" 
                                data-position="leftCenter" data-horizontal="15" data-vertical="-120" 
                                data-show-transition="left" data-hide-transition="left"
                                data-show-delay="400" data-hide-delay="400">
                                <?= $carousel['sub_title'] ?>
                            </h2> 
                        </div>
                    </div> 
                <?php endforeach; ?>
            </div>
        </div>
            
    <!-- =========================
         END HEADER SLIDER
    ============================== -->

    <!-- =========================
         SERVICES
    ============================== -->
    <div class="services" id="services">
        <!-- SERVICES ITEM -->
            <div v-for="(service, index) in services" :class="createBG(index)"> 
                <div class="service-icon">
                    <i class="flaticon-medical-1"></i>
                </div>
                <div class="service-title">
                    <h3> {{ service.name }} </h3>
                </div>
                <div class="service-text">
                    <div v-html="service.description"></div>
                </div>
            </div>
    </div>
    <!-- =========================
         END SERVICES
    ============================== -->
     
        
    <!-- =========================
         ABOUT
    ============================== -->    
    <div class="about">
        <div class="container">
            <div class="row">
                <!-- ABOUT TEXT -->
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 about-text">
                    <h2 class="section-title"><span class="bold700">ABOUT</span> OUR CLINIC</h2>
                    <p class="description"> {{ description }} </p>

                </div>
                
                <!-- ABOUT BACKGROUND -->
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                </div>
                
            </div>
        </div>
    </div>
    <!-- =========================
         END ABOUT
    ============================== -->
        

    <!-- =========================
         BOOKING FORM
    ============================== -->
        
    <!-- =========================
         NUMBERS
    ============================== -->
    <div class="numbers" id="numbers">
        <div class="numbers-overlay">
            <div class="container">
                <div class="row">

                    <h2 class="section-title"><span class="bold700"> {{ clinicName }} </span> 
                        in numbers
                    </h2>
                    <p class="section-subtitle">
                        We can talk for a long time about advantages of our Dental clinic before other 
                        medical treatment facilities.<br> But you can read the following facts in order 
                        to make sure of all pluses of our clinic:
                    </p>
                    <center>
                    <!-- NUMBERS ITEM -->
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 numbers-item">
                        <div id="num" class="numbers-item-number">1</div>
                        <div class="numbers-item-title">YEAR/S<br>OF EXPERIENCE</div>
                    </div>
                    
                    <!-- NUMBERS ITEM -->
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 numbers-item">
                        <div id="patient" class="numbers-item-number"> {{ happyPatients }} </div>
                        <div class="numbers-item-title">REGISTERED PATIENTS</div>
                    </div>
                    </center>
                </div>
            </div>
        </div>
    </div>
    <!-- =========================
         END NUMBERS
    ============================== -->



        
        
    <!-- =========================
        TIPS AND FAQ
    ============================== -->
    <!-- <div class="tipsfaq">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12 faq">
                    <h2 class="section-title"><span class="bold700">FAQ</span></h2>
                    <div class="panel-group" id="accordion">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" 
                                        href="#collapseTwo" class="collapsed">
                                        <i class="fa fa-medkit"></i> Teeth whitening
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseTwo" class="panel-collapse collapse">
                              <div class="panel-body">
                                    Dental implant placement is no longer performed only by oral surgeons 
                                    and periodontists; general dentists are also increasingly providing 
                                    difficult surgical implant services. Dental implants may be used to 
                                    replace single teeth, replace multiple teeth, or provide abutments for 
                                    complete dentures or partials. This topic focuses on the placement of 
                                    single-tooth dental implants.
                              </div>
                            </div>
                        </div>
                            
                        <div class="panel panel-default">
                            <div class="panel-heading">
                              <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" 
                                        href="#collapseThree" class="collapsed">
                                        <i class="fa fa-medkit"></i> Teeth cleaning
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseThree" class="panel-collapse collapse">
                                <div class="panel-body">
                                    Dental implant placement is no longer performed only by oral surgeons 
                                    and periodontists; general dentists are also increasingly providing 
                                    difficult surgical implant services. Dental implants may be used to 
                                    replace single teeth, replace multiple teeth, or provide abutments for 
                                    complete dentures or partials. This topic focuses on the placement of 
                                    single-tooth dental implants.
                                </div>
                            </div>
                          </div>
                            
                            
                            <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" 
                                        href="#collapseFive" class="collapsed">
                                        <i class="fa fa-medkit"></i> Crowns
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseFive" class="panel-collapse collapse">
                                <div class="panel-body">
                                    Dental implant placement is no longer performed only by oral surgeons 
                                    and periodontists; general dentists are also increasingly providing 
                                    difficult surgical implant services. Dental implants may be used to 
                                    replace single teeth, replace multiple teeth, or provide abutments for 
                                    complete dentures or partials. This topic focuses on the placement of 
                                    single-tooth dental implants.
                                </div>
                            </div>
                          </div>
                            
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <!-- =========================
        END TIPS AND FAQ
    ============================== -->
</div>
<?= $footer ?>

    
