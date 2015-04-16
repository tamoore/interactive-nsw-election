import Ractive from 'ractive';
import jquery from 'jquery';
import poll from '../templates/poll.html.txt!text';

var key = "1OeE60Qg7yfmFM1leSJk09Zt3Fo9fgXg76O9tskssz7A";
var ref  = "now";
var timeout;

var loadJSON = function(){
	clearTimeout(timeout);
	jquery.getJSON(`http://interactive.guim.co.uk/spreadsheetdata/${key}.json`, (data) => {
		handleResults(data);
	}).done(()=>{
		//timeout = setTimeout(loadJSON, 5000);
	}).
		fail(()=>{
		//timeout = setTimeout(loadJSON, 5000);
	});
}

var handleResults = function(data){
	var result = data.sheets.Sheet1;
	//pollSubHeading
	document.getElementById("pollSubHeading").innerText = result[0].subheading;
	var total = result.length;
	var labour = (result.filter((item)=>{ return item[ref] === "ALP" }).length/total*100);
	var greens = (result.filter((item)=>{ return item[ref] === "GRN" }).length/total*100);
	var liberal = (result.filter((item)=>{ return item[ref] === "LIB" }).length/total*100);
	var independents = (result.filter((item)=>{ return item[ref] === "IND" }).length/total*100);
	var nationals = (result.filter((item)=>{ return item[ref] === "NAT" }).length/total*100);
	document.getElementById("labour").style.width = labour + "%";
	document.getElementById("greens").style.width = greens + "%";
	document.getElementById("liberal").style.width = liberal + "%";
	document.getElementById("independents").style.width = independents + "%";
	document.getElementById("nationals").style.width = nationals + "%";
	document.getElementById("labour").setAttribute("data-seats", result.filter((item)=>{ return item[ref] === "ALP" }).length || "");
	document.getElementById("greens").setAttribute("data-seats", result.filter((item)=>{ return item[ref] === "GRN" }).length || "");
	document.getElementById("liberal").setAttribute("data-seats", result.filter((item)=>{ return item[ref] === "LIB" }).length || "");
	document.getElementById("independents").setAttribute("data-seats", result.filter((item)=>{ return item[ref] === "IND" }).length || "");
	document.getElementById("nationals").setAttribute("data-seats", result.filter((item)=>{ return item[ref] === "NAT" }).length || "");
};


class Main {
	constructor(el) {
		this.el = el;
		this.template = poll;
		this.data = {
		}
	}
}g

var load = new Promise((resolved, error)=>{
	jquery.getJSON(`http://interactive.guim.co.uk/spreadsheetdata/${key}.json`, (data) => {
	 	resolved(data);
	});
}).then(handleResults);

window.__boot__ = function(el){
	new Ractive(new Main(el));
};

export default {};