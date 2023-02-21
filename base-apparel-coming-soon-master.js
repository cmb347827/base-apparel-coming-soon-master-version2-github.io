'use strict';

$(window).on('load',function(){
	
	console.log("Document loaded");
	let check='';
	//assuming an email containing charcters : a-z , A-Z, 0-9 and underscore. And from either a .com or .net account
	const regex = /\w+@\w+\.(com|net)\b/; 
	const width = window.innerWidth;
	
	
	document.querySelector('#check-input').addEventListener('click', function() {
		console.log('button is clicked');
		event.preventDefault();
		let email_input_el;
		let cue; let err;
		
	    //to store input value
		email_input_el = document.querySelector('.input');
		//get message to user output element
		cue = document.querySelector('.cue');
	    //get error icon element
		err = document.querySelector('.error');
		console.log(err);
			
		//get email entered by user input value
		const val = email_input_el.value;
		console.log('val:',val);
			
		//check to see if it validates 
		check = regex.test(val);
			
		if(check === false){ 
		    //use jquery for styling
		    $(cue).css('color','hsl(0, 93%, 68%)');
			$(email_input_el).css('border','2px solid hsl(0,93%,68%)');
			$(err).css('display','block');
			//back to js
			cue.textContent="Please provide a valid email";
			
		}
		if(check){
			//use Jquery for styling
			$(cue).css('color','#000');
			$(err).css('display','none');
			$(email_input_el).css('border','2px solid #000');
			//back to js
		    cue.textContent = "Thank you!";
			//reset form
		    const form = document.querySelector('form');
			form.reset();
	    }
	});
	
});