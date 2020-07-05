<?=$header?>
<div class="page-title page-title-services bg-pattern" data-bgcolor="5295BD">
    <div class="page-title-overlay">
        <div class="container">

            <h1 class="bold600 color-child-6"> <i class="fa fa-wrench"></i>
                <?= strtoupper($service['name']) ?>
            </h1>
        </div>
    </div>
</div>

<div class="breadcrumbs">
    <div class="container">
        <div class="row">
            
            <ol class="breadcrumb">
                <li class="breadcrumb-home"><a href="#"><i class="fa fa-home"></i></a></li>
                <li class="active">Services / <?= $service['name'] ?> </li>
            </ol>
            
        </div>
    </div>
</div>
<div class="serv">
    <div class="container">
        <div class="row">
            <div class="serv-items" id="isotope-items">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 serv-item isotope-item dental">
                    <div class="serv-item-text">
                       <h2  class="bold600 color-child-6">About <?= ucwords($service['name']) ?> </h2>
                       <h3>Price PHP: <?= number_format($service['price'], 2) ?></h3>
                       <p><?=$service['description']?></p>
                        <div class="serv-item-button">
                            <div class="serv-item-tag">Dental service</div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</div>
<br><br><br><br><br>
<?=$footer?>
