<?= $header ?>
<div id="el-contact">
<div class="page-title page-title-contacts bg-pattern" data-bgcolor="5295BD">
    <div class="page-title-overlay">
        <div class="container">

            <h1 class="bold600 color-child-6"><i class="fa fa-phone"></i> CONTACT US</h1>
            <p class="bold600 color-child-6">Our Clinic has grown to provide a world class 
            facility for the treatment of tooth loss, dental cosmetics and advanced restorative 
            dentistry.</p>
        </div>
    </div>
</div>

<div class="breadcrumbs">
    <div class="container">
        <div class="row">
            
            <ol class="breadcrumb">
                <li class="breadcrumb-home"><a href="#"><i class="fa fa-home"></i></a></li>
                <li class="active">Contact us</li>
            </ol>
            
        </div>
    </div>
</div>
    
<div class="map" id="map">
</div>
<div class="map-info-container">
    <div class="map-info" id="map-info">
        <div class="map-info-contacts">
            <div class="map-info-phone">
                <i class="fa fa-phone"></i> <span>NUMBER</span>
            </div>
            <div class="map-info-mail">
                <i class="fa fa-envelope"></i> <span>{{ contact.number }}</span><br>
                <span>
                    <a href="mailto:office@dantal.com">
                        {{ contact.gmail }}
                    </a>
                </span>
            </div>
            <div class="map-info-location">
                <i class="flaticon-navigation-arrow"></i> <span>{{ contact.address }} </span>
            </div>
        </div>
        <div class="map-info-socials">
            <a :href="contact.facebook"><i class="fa fa-facebook"></i> </a> 
            <a :href="contact.gmail"><i class="fa fa-google-plus"></i></a> 
            <a :href="contact.twitter"><i class="fa fa-twitter"></i></a> 
            <a :href="contact.skype"><i class="fa fa-skype"></i></a>
            <a :href="contact.yahoo"><i class="fa fa-yahoo"></i></a>
        </div>
    </div>
</div>
 

    
<!-- <div class="get">
    <div class="container">
        <div class="row">
            
            <h2 class="section-title">how to get Us</h2>
            
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 get-item">
                <div class="get-item-icon">
                    <i class="fa fa-subway"></i>
                </div>
                <h4 class="get-item-title">Subway</h4>
                <p class="get-item-text">Lorem ipsum dolor sit amet, consectetur<br>adipisicing elit, sed do eiusmod aliqua. </p>
            </div>
            
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 get-item">
                <div class="get-item-icon">
                    <i class="fa fa-car"></i>
                </div>
                <h4 class="get-item-title">Car</h4>
                <p class="get-item-text">Henderson Blvd PO Box 356012,<br>Tampa, FL 54452</p>
            </div>
            
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 get-item">
                <div class="get-item-icon">
                    <i class="fa fa-bus"></i>
                </div>
                <h4 class="get-item-title">Bus</h4>
                <p class="get-item-text">Lorem ipsum dolor sit amet - 10, 12, 24, 27,<br>52, 54, 64. </p>
            </div>
            
        </div>
    </div>
</div> -->
</div>
<?= $footer ?>
<!-- =========================
    END POPUP FORMS
============================== -->
