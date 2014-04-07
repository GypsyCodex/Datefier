/**
 * Set the date picker.
 */
$(function() {	
	$( ".datepicker" ).each(function(){
		$(this).datepicker({
		    defaultDate: new Date(),
		    changeMonth: true,
		    changeYear: true,
		    numberOfMonths: 1,
		});
	});

	/**
	 * Set date to be lower than ".to" element and greater than ".from" element	 *
	 */
	$(".from" ).each(function(index){	
		$(this).datepicker("option",{
			onClose: function( selectedDate ) {
				$( ".to" ).eq(index).datepicker( "option", "minDate", selectedDate );
			}
		});
	});
	$(".to" ).each(function(index){
		$( this ).datepicker("option",{
			onClose: function( selectedDate ) {
				$( ".from" ).eq(index).datepicker( "option", "maxDate", selectedDate );
			}
		});
	});
	
	/**
	 * Set tomorrow as the minimum selectable date 
	 */
	$(".gt-today").each(function(){
		$(this).datepicker("option", "minDate", +1);
	});

	/**
	 * Set today as the minimum selectable date 
	 */
	$(".gte-today").each(function(){
		$(this).datepicker("option", "minDate", 0);
	});
	
	/**
	 * Set yesterday as the maximum selectable date 
	 */
	$(".lw-today").each(function(){
		$(this).datepicker("option", "maxDate", -1);
	});

	/**
	 * Set today as the maximum selectable date 
	 */
	$(".lwe-today").each(function(){
		$(this).datepicker("option", "maxDate", 0);
	});
});
