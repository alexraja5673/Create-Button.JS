var div1=document.querySelector(".head");
		 let a=["Click","Submit",35,"Enter"];
		 a.forEach(function(e){
		   let btn=document.createElement("button");
		   btn.textContent=e;
		   btn.style.width="60px";
		   btn.style.height="25px";
		   btn.style.margin="10px 10px";
		   div1.appendChild(btn);
		 })
		