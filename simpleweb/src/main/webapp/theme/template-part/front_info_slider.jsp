
<c:forEach var="product" items="${products}">
<div class="info-item">
    	<a href="">
			<img src="/theme/images/slider1.jpg"
            	alt="Slider 1">
   		</a>
        <div class="info-item__header">
	   		<span>
	        	06.12.2019
	    	</span>
		</div>
		<div class="info-item-hover__box">
			<div class="info-item-hover__title">
	     		<span>
				  <form method="post" action='<c:url value="/delete" />'>
				        <input type="hidden" name="id" value="${product.id}">
				        <input type="submit" value="Delete">
				    </form>
	        	</span>
	        	
	 		</div>
	    	<div class="info-item-hover__subtitle">
	        	<span>
	        	${product.name}
	        	</span>
	        </div>
	        <a href='<c:url value="/edit?id=${product.id}" />' class="info-item-hover__link icon-arrow-right">
	        	Edit
	    	</a>
	    </div>
</div>
</c:forEach>