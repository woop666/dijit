$(document).ready(function(){

   $("#form_start").click(function(){
			
			//передача данных
            var name = $('#name').val();
			var email = $('#email').val();
			
			if($('#opt-1').prop('checked')){
				var app1 = $('#opt-1').val();
			}else{
				var app1 = '';
			}
			
			if($('#opt-2').prop('checked')){
				var graphic_design = $('#opt-2').val();
			}else{
				var graphic_design = '';
			}
			
			if($('#opt-3').prop('checked')){
				var motion_design = $('#opt-3').val();
			}else{
				var motion_design = '';
			}
			
			if($('#opt-4').prop('checked')){
				var ux_design = $('#opt-4').val();
			}else{
				var ux_design = '';
			}
			
			if($('#opt-5').prop('checked')){
				var webdesign = $('#opt-5').val();
			}else{
				var webdesign = '';
			}
			if($('#opt-6').prop('checked')){
				var marketing = $('#opt-6').val();
			}else{
				var marketing = '';
			}
			
			//проверка по регулярке
			var reg_name = /[^A-zА-яЁёІіЇїЄє0-9 ]/ig;
			var reg_email = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/g;
			
			var res_name = name.match(reg_name);
			var res_email = email.match(reg_email);
			
			//console.log(name.length);
			//console.log(email.length);
			
			if (email.length > 5 && email.length < 40){
				
				//если емейл прошел длину и все норм с регуляркой
				if(res_email != null){
					var reg_test_email = true;
					
				}else{
					//не прошло регулярка
				var reg_test_email = false;
				$('[data-toggle="tooltip"]').tooltip('destroy');
				$('[data-toggle="tooltips"]').tooltip('show');
				$('.information-email').css({'border': '1px solid red', 'box-shadow':'0 0 7px red'});
				}

				var long_email = true;
			}else{
				// емаил не прошел дилнну
				var long_email = false;
				$('[data-toggle="tooltips"]').tooltip('destroy');
				$('[data-toggle="tooltip"]').tooltip('show');
				$('.information-email').css({'border': '1px solid red', 'box-shadow':'0 0 7px red'});
			}
			
			if (name.length > 2 && name.length < 64){
				var long_name = true;
				
				if(res_name == null){
					var reg_test_name = true;
					
				}else{
					//не прошло регулярка
				var reg_test_name = false;
				$('[data-toggle="tooltipName"]').tooltip('destroy');
				$('[data-toggle="tooltipNames"]').tooltip('show');
				$('.information-name').css({'border': '1px solid red', 'box-shadow':'0 0 7px red'});
				}
				
			}else{
				var long_name = false;
				$('[data-toggle="tooltipNames"]').tooltip('destroy');
				$('[data-toggle="tooltipName"]').tooltip('show');
				$('.information-name').css({'border': '1px solid red', 'box-shadow':'0 0 7px red'});
			}
			
			// обнуленеи подсказок и сброс красных рамочек если стали изменять инпут
			function refresh_e(){
				$('[data-toggle="tooltip"]').tooltip('destroy');
				$('[data-toggle="tooltips"]').tooltip('destroy');
				$('.information-email').css({'border': '', 'box-shadow':''});
			}
			
			function refresh_n(){
				$('[data-toggle="tooltipName"]').tooltip('destroy');
				$('[data-toggle="tooltipNames"]').tooltip('destroy');
				$('.information-name').css({'border': '', 'box-shadow':''});
			}
			
			
			names.addEventListener("keyup", refresh_n, true);
			emails.addEventListener("keyup", refresh_e, true);
			
			
			//console.log(res_name);
			//console.log(res_email);
			


		if(reg_test_email && reg_test_name){
				$.ajax({
				type: "POST",
				url:"./mail.php", 
				data:{
					pole1: name,
					pole2: email, 
					app_design: app1, 
					graphic_design: graphic_design, 
					motion_design: motion_design, 
					ux_design: ux_design, 
					webdesign: webdesign, 
					marketing: marketing
					}, 
				 success:function(result){
					 // окно отправленно
					$(".work-request").hide();
					$('#title_for_form').text("Мы свяжемся с вами в ближайшее время!");
					
					function gg(){
						$('.mfp-close').click();
					}
					setTimeout(gg, 1000);
					
					function reset(){
						$(".work-request").show();
						$('#title_for_form').text("Выбор услуг");
					}
					setTimeout(reset, 2000);
				
					
					}
			  });
		}
      
	  
	  
   });

});