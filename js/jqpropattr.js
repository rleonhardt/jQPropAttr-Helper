$().ready(function() {
			
	String.prototype.startsWith = function(str) {
		return (this.match("^"+str)==str)
	};
	
	var props = {
		autofocus : "prop",
		autoplay : "prop",
		async : "prop",
		checked : "prop",
		controls : "prop",
		defer : "prop",
		disabled : "prop",
		hidden : "prop",
		loop : "prop",
		multiple : "prop",
		open : "prop",
		readonly : "prop",
		required : "prop",
		scoped : "prop",
		selected : "prop", 
		location : "prop"
	}, 
	attrs = {
		accesskey : "attr", 
		align : "attr"
	}, 
	queryField = $("#attr_prop"), 
	resultsContainer = $("#result");
	
	
	$("#attr_prop").keyup(function() {
		
		if(queryField.val().length > 0) {
			getPropertyUsage(queryField.val());
		}
	});
	
	var getPropertyUsage = function(value) {
		var matches = "";
			
		for(prop in props) {
			if(prop.startsWith(value)) {
				matches += "<li>For " + prop + " you should use prop() function.</li>";
			}
		}
		if(matches !== "") {
			resultsContainer.empty().html(matches);
		} else {
			getAttrUsage(value);
		}				
	};
	
	var getAttrUsage = function(value) {
		var matches = "";
			
		for(attr in attrs) {
			if(attr.startsWith(value)) {
				matches += "<li>For " + attr + " you should use the attr() function.</li>";
			}
		}
		resultsContainer.empty().html(matches);
	}			
});