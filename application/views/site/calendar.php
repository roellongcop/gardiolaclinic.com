<?php echo $header ?>


<br></br>
<div id="el-calendar">
    <div class="page-title page-title-about bg-pattern" data-bgcolor="5295BD">
        <div class="page-title-overlay">
            <div class="container">
                <h1 class="bold600 color-child-6"><i class="fa fa-calendar"></i> CALENDAR</h1>
            </div>
        </div>
    </div>
    <div class="row">
    	<div>
            <div class="panel-body">
            	<center>
                <button class="btn danger fancybox-2" style="background-color: red;color: white" disabled="disabled">No Available Slot</button>
            </center>
            </div>
        </div>
        <div>
            <div class="panel-body">
            	<!-- <button class="btn info fancybox-2" style="background-color: #ffae13;color: white" disabled="disabled">Slot Almost Full</button> -->
            </div>
        </div>
    </div>
    <center><div id="calendar" class="panel panel-default" style="width: 1000px;height: 800px;"></div></center>
</div><br><br>



<?php echo $footer ?>
