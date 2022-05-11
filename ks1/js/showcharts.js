function showcharts(){
	const btdata[];
	$.get("k10.json",function(d){
		for(var i=0;i<d.length;i++){
			var obj={
				"value":d[i].value,
				"name":d[i].name
			}
			btdata.push(obj);
		}
		btoption.series[0].data=btdata;
		myCharts.setOption(option);
	});
}