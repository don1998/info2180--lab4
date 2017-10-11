window.onload=myFunction;

function myFunction(){
	var x=document.querySelectorAll(".boundary");
	for (let i=0;i<x.length-1;i++){
		x[i].addEventListener("mouseover",function(){
			for(let b=0;b<x.length-1;b++){
				x[b].classList.add("youlose");
			}
		})
	}

}
