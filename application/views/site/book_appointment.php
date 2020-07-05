<?=$header?>
<br></br>
<div id="booked-appointment">
    <div class="page-title page-title-about bg-pattern" data-bgcolor="5295BD">
        <div class="page-title-overlay">
            <div class="container">
                <h1 class="bold600 color-child-6"><i class="fa fa-book"></i> BOOK APPOINTMENT</h1>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-1 col-sm-1 col-xs-1"></div>
        <div class="col-md-2 col-sm-2 col-xs-2"><br><br>
            <ul class="nav nav-tabs tabs-left" style="float: left;">
                <li style="width: 200px;" class="active">
                    <a id="to-step1" data-toggle="tab" href="#step1">DATE</a>
                </li><br>
                <li style="width: 200px;"><a @click="checkDate" id="to-step2" data-toggle="tab" href="#step2">TIME</a></li><br>
                <li style="width: 200px;"><a @click="checkDateTime" id="to-step3" data-toggle="tab" href="#step3">SERVICE</a></li><br>
                <li style="width: 200px;"><a @click="checkDateTimeService" id="to-step4" data-toggle="tab" href="#step4">TERMS</a></li><br>
                <li style="width: 200px;"><a id="to-step5" data-toggle="tab" href="#step5">FINISHED</a></li>
            </ul>
        </div>
        <div class="col-md-9 col-sm-9 col-xs-9">
            <div class="tab-content">
                <div id="step1" class="tab-pane fade in active">
                    <div class="col-md-3"></div>
                    <div class="col-md-6"><br>
                        <h3 class="bold600 color-child-6"><i class="fa fa-calendar"></i> DATE
                            <button class="btn danger btn-sm fancybox-2 pull-right"
                                style="background-color: red;color: white" disabled="disabled">
                                No Available Slot</button>
                        </h3><br>
                        <div @mouseover="isTherePending" id="calendar" class="panel panel-default"></div>
                    </div>
                    <div class="col-md-3"></div>
                </div>
                <div id="step2" class="tab-pane fade">
                    <div class="col-md-12" v-if="! book.date"><br><br>
                        <div class="alert alert-danger">
                            <h3>Please select "APPOINTMENT DATE"</h3>
                        </div>
                    </div>
                    <div class="col-md-4"></div>
                    <div class="col-md-4" v-if="book.date"><br>
                        <h3 class="bold600 color-child-6"><i class="fa fa-clock-o"></i> TIME</h3>
                         <h3 class="bold600 color-child-6"><label>DATE: {{ book.date }}</label> </h3>
                        <div class="radio" v-for="appointment in appointments" v-if="appointments.length" >
                            <!-- <label @click="gotoServices" v-if="appointment">
                                <input type="radio" name="optradio" v-model="book.time" :value="appointment">
                                {{ appointment }}
                            </label> -->

                            <div class="radio radio-primary" v-if="appointment">
                              <input @click="gotoServices" type="radio" v-model="book.time" :value="appointment">
                              <label for="radio"> {{ appointment }} </label>
                            </div>

                        </div><br>
                        <label v-if="appointments[7] == ''" class="label label-danger">No Slot ... </label>
                    </div>
                    <div class="col-md-4"></div>
                </div>

                <div id="step3" class="tab-pane fade container-fluid">
                    <div class="col-md-12" v-if="! book.date || ! book.time"><br><br>
                        <div class="alert alert-danger">
                            <h3>Please select "APPOINTMENT DATE and TIME"</h3>
                        </div>
                    </div>
                    <div class="col-md-12" v-if="book.date && book.time"><br>
                        <h3 class="bold600 color-child-6"><i class="fa fa-wrench"></i> SERVICE</h3>
                    </div>
                    <div class="col-md-3" v-for="service in services" v-if="book.date && book.time">
                        <div class="container-fluid panel panel-default"><br>
                            <div class="panel-heading">
                                <a :href="'service/' + service.id">
                                    <h4 style="text-transform: capitalize;" class="bold600 color-child-6">
                                        {{ service.name }}
                                    </h4>
                                </a>
                            </div>
                            <div class="panel-body">
                                <h3>Php {{ service.price }}</h3>

                                <button class="btn btn-primary btn-sm" @click="gotoTerms(service)">
                                    <i class="fa fa-thumbs-up"></i> Pick
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="step4" class="tab-pane fade">
                    <div class="col-md-12" v-if="! book.date || ! book.time || ! book.service"><br><br>
                        <div class="alert alert-danger">
                            <h3>Please select "APPOINTMENT DATE, TIME and SERVICE"</h3>
                        </div>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-10" v-if="book.date && book.time && book.service"><br>
                        <h3 class="bold600 color-child-6">
                            <i class="fa fa-info"></i> TERMS AND CONDITIONS
                        </h3>

                        <h4  style="text-indent: 20px; text-align: justify;font-family: Verdana; line-height: 2">
                            {{ terms }}
                        </h4>

                        <button class="btn btn-primary" @click="gotoFinished">
                            I Agree  <i class="fa fa-angle-right"></i>
                        </button>
                    <div class="col-md-1"></div>
                    </div>
                </div>

                <div id="step5" class="tab-pane fade">
                    <div class="col-md-12" v-if="! book.service || ! book.date || ! book.time"><br><br>
                        <div class="alert alert-danger">
                            <h3>Please Follow the "TAB PROCESS"</h3>
                            <em>Date , Time , Services, Terms & Conditions</em>
                        </div>
                    </div>
                    <div class="col-md-4"></div>

                    <div class="col-md-4 panel panel-default" v-if="book.service && book.date && book.time"><br>
                        <div class="alert alert-success">
                            <h3><i class="fa fa-check-circle"></i> FINISHED</h3>
                        </div>
                        <h3 class="bold600 color-child-6"><label> Reservation Info. </label> </h3>
                        <h3><label>Date: </label> {{ book.date }}</h3>
                        <h3><label>Time: </label> {{ book.time }}</h3>
                        <h3 style="text-transform: capitalize;"><label>Service:</label>  {{ book.service }}</h3>
                        <h3><label>Cost (Php): </label> {{ servicePrice }}</h3><br><br>

                        <button class="btn btn-primary" :disabled="! checkBook()" @click="bookedAppointment">
                            <i class="fa fa-book"></i>
                            Book Appointment
                        </button><br><br>
                    </div>
                    <div class="col-md-4"></div>
                </div>
            </div>
        </div>
    </div>


</div><br><br>



<?=$footer?>
