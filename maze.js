window.onload=myFunction;

function myFunction(){
	var winner=0;
	var x=document.querySelectorAll(".boundary");
	for (let i=0;i<x.length-1;i++){
		x[i].addEventListener("mouseover",function(){
			for(let b=0;b<x.length-1;b++){
				x[b].classList.add("youlose");
				winner=1;
			}
		})
	}
	document.getElementById("end").addEventListener("mouseover",function(){
		if (winner===0){
			window.alert("You win!")
		}
	})
	document.getElementById("start").addEventListener("click",function(){
		location.reload();
	})
}
