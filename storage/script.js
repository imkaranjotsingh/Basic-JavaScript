
var emp = []
function showImages() {
			var user = f.user.value;
			var rollno = f.rollno.value;
			if(user=='admin' && rollno=='a1'){
				emp.unshift(user);
				window.localStorage.setItem('user',user);
				window.localStorage.setItem('rollno',rollno);
				var x=confirm('Do u want to continue');
				if(x==true){	
				//alert(emp[0]);
				window.location='3_2.html';
				
            
		}
	}
}