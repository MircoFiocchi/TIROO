var to=(function(){

var o={v:0,
		 a:0,
		 acel:9.8,
		 facVel:1,
		 facTita:Math.PI/180,
		 hmx:0,
		 thmx:0,
		 tT:0,
		 dT:0		 
		}

o.setUVelo=function(){
	if(document.getElementById('UnidadV').value == "ms") {
     o.facVel=1;
	};
	if(document.getElementById('UnidadV').value == "kmh") {
     o.facVel=0.278;
	};
};

 o.setVel= function(){
	o.v=parseFloat(document.getElementById('V').value);	     
};

 o.setAlfa= function(){
		o.a=parseFloat(document.getElementById('tita').value);
};
 o.setUAlfa=function(){
	if(document.getElementById('UnidadTita').value == "gr") {
     o.facTita=Math.PI/180;
	};
	if(document.getElementById('UnidadTita').value == "rad") {
     o.facTita=1;
	};
 };
 o.calculo=function () {
 	o.thmx=(o.v*o.facVel*Math.sin(o.a*o.facTita))/9.8;
 	o.hmx=(o.v*o.facVel*Math.sin(o.a*o.facTita)*o.thmx)-(9.8*o.thmx*o.thmx)/2;
 	o.tT=2*o.thmx;
 	o.dT=o.v*o.facVel*Math.cos(o.a*o.facTita)*o.tT;

 	var RAngulo = Math.round(o.a*o.facTita * 100) / 100;
 	var RVelocidad = Math.round(o.v*o.facVel * 100) / 100;
 	var RAltura = Math.round(o.hmx * 100) / 100;
 	var vRTiempoMx = Math.round(o.thmx * 100) / 100;
 	var RdTotal = Math.round(o.dT * 100) / 100;
 	var RtT = Math.round(o.tT * 100) / 100;

 	document.getElementById('RAngulo').innerHTML =RAngulo;
 	document.getElementById('RVelocidad').innerHTML=RVelocidad;
 	document.getElementById('RAltura').innerHTML=RAltura;
 	document.getElementById('RTiempoMx').innerHTML=vRTiempoMx;
 	document.getElementById('RdTotal').innerHTML=RdTotal;
 	document.getElementById('RtT').innerHTML=RtT;

 	inter = 0;
 	x = 0;

 	animar();
 };
 return o;
})();

function animar() {
    inter = setInterval(dibujar, 1000/24);
}

function dibujar() {
    var canvas = document.getElementById("micanvas");
    var ctx = canvas.getContext('2d');
    canvas.width=canvas.width;
    ctx.beginPath();
    y = 100 + ((1/70)*(x-100)*(x-100));
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.stroke();
    x++;



    ctx.beginPath();
    ctx.moveTo(0,254);
    ctx.lineTo(254,254);
    ctx.stroke();

    if(x>200)
        clearInterval(inter);
}