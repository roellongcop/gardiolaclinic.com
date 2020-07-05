<?= $header ?>
<!-- page content -->
<div class="right_col" role="main" id="carouselPage">
	<h3><i class="fa fa-pencil"></i> {{ title }} </h3>
	<div class="clearfix"></div>
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">

			<!-- main data -->
			<div class="x_panel" id="mainData">
				<div class="x_title">
					<div class="btn-group pull-left">
						<button class="btn btn-primary" @click="showAddForm">
							<i class="fa fa-plus-square"></i> Add Site Carousel
						</button>
						<button class="btn btn-success" @click="showUpdateForm">
							<i class="fa fa-edit"></i>
						</button>
						<button class="btn btn-danger" @click="showDeleteForm">
							<i class="fa fa-trash"></i>
						</button>
					</div>
					<div class="pull-right">
						<label @click="checkAllBox"><input type="checkbox" v-model="checkAll" class="check">
							Check All</label>
					</div>
					<div class="clearfix"></div>
				</div>

				<div class="x_content">
					<div class="col-md-6" v-for="carousel in carousels">
						<div class="x_panel">
							<div class="x_content">
								<div class="col-md-6">
									<label>
										<input type="checkbox" class="check" v-model="selected" :value="carousel"> Select
									</label>
									<img class="img-responsive thumbnail" :src="imagePath(carousel.image)" alt="" />
								</div>
								<div class="col-md-6">
									<label>Greetings: </label>
									<p class="paragraph">{{ carousel.greetings }}</p><hr>
									<label>Title: </label>
									<p class="paragraph">{{ carousel.title }}</p><hr>
									<label>Sub Title: </label>
									<p class="paragraph">{{ carousel.sub_title }}</p><hr>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- main data -->

			<add-form v-show="addForm" @cancel="cancel" :images="images" @save="save"></add-form>

			<update-form :images="images" v-show="updateForm" :carousels="selected" @cancel="cancel" @save="save"></update-form>

			<delete-form v-show="deleteForm" :carousels="selected" @cancel="cancel" @save="save"> </delete-form>


		</div>
	</div>
</div>
<?= $footer ?>
