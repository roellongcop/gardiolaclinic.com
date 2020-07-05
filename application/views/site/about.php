<?=$header?>
<div id="about">
  <div class="page-title page-title-about bg-pattern" data-bgcolor="5295BD">
    <div class="page-title-overlay">
      <div class="container">
        <h1 class="bold600 color-child-6">
          <i class="fa fa-book"></i> ABOUT US
        </h1>
      </div>
    </div>
  </div>

  <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <ol class="breadcrumb">
          <li class="breadcrumb-home">
            <a href="#"><i class="fa fa-home"></i></a>
          </li>
          <li class="active">About us</li>
        </ol>
      </div>
    </div>
  </div>

  <div class="history">
    <div class="container">
      <div class="row" v-for="information in informations">
        <h3> {{ information.name }} </h3>
        <div v-html="information.description"></div>
        <hr>
      </div>
    </div>
  </div>
</div>

<?= $footer ?>
