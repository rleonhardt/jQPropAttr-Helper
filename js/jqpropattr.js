$().ready(function() {
	/* Case sensitive start of string match */
	String.prototype.startsWith = function(str) {
		return this.substr(0, str.length) === str;
	};
	
	/* Case insensitive start of string match */
	String.prototype.startsWithIgnoreCase = function(str) {
		return this.toLowerCase().substr(0, str.length) === str.toLowerCase();
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
		location : "prop", 
		defaultValue : "prop", 
		nodeName : "prop", 
		nodeType : "prop"
	}, 
	attrs = {
		accesskey : "attr", 
		align : "attr", 
		"class" : "attr", 
		contenteditable : "attr", 
		draggable : "attr", 
		href : "attr",
		id : "attr",
		label : "attr",
		rel : "attr"
	}, 
	queryField = $("#attr_prop"), 
	resultsContainer = $("#result");
	
	var jQPropAttr = function() {
		if(queryField.val().length > 0) {
			getPropertyUsage(queryField.val());
		}
	};
	
	var getPropertyUsage = function(value) {
		var matches = "", 
		prop;
			
		for(prop in props) {
			/* Filtering out erroneous keys that might have been added to the Object prototype */
			if(props.hasOwnProperty(prop)) {
				if(prop.startsWithIgnoreCase(value)) {
					matches += "<li>For " + prop + " you should use the prop() function.</li>";
				}
			}			
		}
		
		if(matches !== "") {
			resultsContainer.empty().html(matches);
		} else {
			getAttrUsage(value);
		}				
	};
	
	var getAttrUsage = function(value) {
		var matches = "", 
		attr;
			
		for(attr in attrs) {
			/* Filtering out erroneous keys that might have been added to the Object prototype */
			if(attrs.hasOwnProperty(attr)) {
				if(attr.startsWithIgnoreCase(value)) {
					matches += "<li>For " + attr + " you should use the attr() function.</li>";
				}
			}			
		}
		resultsContainer.empty().html(matches);
	};
	
	$("#attr_prop").keyup(function() {
		jQPropAttr();		
	});
	
	$("#question").submit(function(event) {
		event.preventDefault();
		jQPropAttr();		
	});		
});