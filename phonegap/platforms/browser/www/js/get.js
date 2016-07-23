/*
The Usage of GET JS FUNCTION
var $_GET = $_GET(),
    branchid = $_GET['branchid'],
    table = $_GET['tables'];
	alert(branchid + "   "+table);*/
	
function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}