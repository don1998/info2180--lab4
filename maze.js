window.onload=myFunction1;

function myFunction(){
	var x=document.querySelectorAll(".boundary");
	var winner=0;
	document.getElementById("maze").addEventListener("mouseleave",function(){
		for (let i=0;i<x.length-1;i++){
				x[i].classList.add("youlose");
				document.getElementById("status").innerHTML="You lose";
				winner=1;
			
		}
	}
	)
	for (let i=0;i<x.length-1;i++){
		x[i].addEventListener("mouseover",function(){
			for(let b=0;b<x.length-1;b++){
				x[b].classList.add("youlose");
				document.getElementById("status").innerHTML="You lose";
				winner=1;
			}
		})
	}
	document.getElementById("end").addEventListener("mouseover",function(){
		if (winner===0){
			document.getElementById("status").innerHTML="You win";
		}
		else{
			document.getElementById("status").innerHTML="You lose";
		}
	})
	document.getElementById("start").addEventListener("click",function(){
		location.reload();
	})


}

function myFunction1(){
	document.getElementById("start").addEventListener("mouseover",myFunction)
}
