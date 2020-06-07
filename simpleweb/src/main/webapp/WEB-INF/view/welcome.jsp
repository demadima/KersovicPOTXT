

<%@include file="/theme/template-part/header.jsp"%>

<section class="banner">
	<%@include file="/theme/template-part/top_banner.jsp"%>
</section>

<section class="info">
	<div class="container-fluid">
		<div class="row scroll">
			<div class="col-lg-5">
				<div class="info__content">
                	<h2 class="info__title section__title">
                    	Our user's informations
                	</h2>
	               	<div class="info__description content">
	                	Here you can see a different information
	                	about our users. By using right slider
	                	you can discover some useful data.
	            	</div>
         		</div>
    		</div>
	    	<div id="front_slider" class="col-lg-7 p-0" style="display: none">
	        	<div class="info-wrapper animated fadeIn wow">
	            	<div class="info__slider">
	                	<%@include file="/theme/template-part/front_info_slider.jsp"%>
	            	</div>
	       		</div>
	  		</div>
		</div>
	</div>
</section>



<%@include file="/theme/template-part/footer.jsp"%>