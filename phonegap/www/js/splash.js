var branches;
var tables;
function getbranches(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
			branches = JSON.parse(xhttp.responseText);
			document.getElementById("branches").innerHTML = "<option value=\"null\">Choose Branch</option>";
			for ( i = 0 ; i< branches.length; i++){
				document.getElementById("branches").innerHTML = document.getElementById("branches").innerHTML +"<option value="+i+">"+branches[i].branchname+"</option>";  
			}
		}
	};
	xhttp.open("GET", "http://159.122.254.219/artcafe/backend/splash.php", true);
	xhttp.send();
	//alert(rating+courseid+url);
}

function gettables(){
	var e = document.getElementById("branches");
	var branchid = e.options[e.selectedIndex].value;
	
	document.getElementById("tables").innerHTML = "";
	for(i = 1; i<= branches[branchid].numberoftables;i++){
		document.getElementById("tables").innerHTML =document.getElementById("tables").innerHTML +"<option value="+i+">"+i+"</option>";
	}
	document.getElementById("branchid").value = branches[branchid].branchid;
}