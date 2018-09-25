canvas_h: 500,
canvas_w: document.body.offsetWidth-50


window.onload = function(){
	var canvas = document.getElementById('canvas');
	canvas.width=this.canvas_w;
	canvas.height=this.canvas_h;
	if(canvas.getContext('2d')){
	    var context = canvas.getContext('2d');
	}else {
	    alert('当前浏览器不支持canvas，请使用chrome');
	}
	__darwGrid(context,this.items[0].data)
}

function __darwGrid(cxt,data){
	console.log('y')
	var rowNum =10
	cxt.beginPath()
	cxt.lineWidth=1
	cxt.strokeStyle='red'
	for(var i = 0;i<=rowNum;i++){
		var y=(canvas_h/rowNum)*i
		cxt.moveTo(0,y)
		cxt.lineTo(canvas_w,y)
	}
	var columnNum=data.length +1
	for(var i = 0;i<=columnNum;i++){
		var x=(canvas_w/columnNum)*i 
		cxt.moveTo(x,0)
		cxt.lineTo(x,canvas_h)
	}
	cxt.stroke()
	cxt.closePath()
}