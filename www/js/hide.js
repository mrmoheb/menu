function hideDiv(divid){
			document.getElementById(divid).className = document.getElementById(divid).className + " hide";
			document.getElementById("arrow"+divid).innerHTML="<i class=\"fa fa-arrow-down fa-2x pull-right\" aria-hidden=\"true\" onclick=\"showDiv('"+divid+"')\"></i>";
}

function showDiv(divid){
			document.getElementById(divid).className =  "";
			document.getElementById("arrow"+divid).innerHTML="<i class=\"fa fa-arrow-up fa-2x pull-right\" aria-hidden=\"true\" onclick=\"hideDiv('"+divid+"')\"></i>";
		}
function plus(itemname){
	document.getElementById(itemname).innerHTML= parseInt(document.getElementById(itemname).innerHTML) + 1;
			
		}
function minus(itemname){
	document.getElementById(itemname).innerHTML= parseInt(document.getElementById(itemname).innerHTML) - 1;
			
		}
