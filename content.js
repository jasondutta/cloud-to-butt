walk(document.body);
setTimeout(function () {
	walk(document.body);
}, 1000);

function walk(node)
{
	// Source: http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;
	
	v = v.replace(/\bMillennial Men\b/g, "Men under 40");
	v = v.replace(/\bMillennial men\b/g, "Men under 40");
	v = v.replace(/\bmillennial men\b/g, "men under 40");
	v = v.replace(/\bMillennial Women\b/g, "Women under 40");
	v = v.replace(/\bMillennial women\b/g, "Women under 40");
	v = v.replace(/\bmillennial women\b/g, "women under 40");
	
	v = v.replace(/\bmillennials\b/g, "people under 40");
	v = v.replace(/\bMillennials\b/g, "People under 40");
	v = v.replace(/\bMillennial\b/g, "People under 40");
	v = v.replace(/\bmillennial\b/g, "people under 40");
	/*
	code to dynamically change the sentence structure, will look to work on this in the future.
	should convert sentences like 'millennial habits' to 'habits of people under 40', and so on.
	trying to detect words ending in 's' after millennial, and then adjust the sentence.
	need a bit more practise in js though!

	var mill = ["Millennial", "millennial", "Millennials\'", "millennial\'"];
	}
	if ( mill.indexOf(v) == -1 ) { 
	// do stuff
	}
	var result = v.match(new RegExp(mill + '\\s(\\w+)'))[1];
	var n = result.endsWith("s");
	if (n) {
		v = v.replace(/\bMillennial Men\b/g, result.concat("of men under 40"));

	switch (v) {

	default:
	break;*/
	textNode.nodeValue = v;
}