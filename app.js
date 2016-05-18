var appNavItems = {
	first: "All Thoughts",
	second: "Your Thoughts"
};

function renderHeader() {
	var header = document.getElementById("header")
	var source = document.getElementById("header-template").innerHTML;
	var template = Handlebars.compile(source);

	header.innerHTML = template(appNavItems);
}

renderHeader();