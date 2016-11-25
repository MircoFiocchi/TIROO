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
 	document.getElementById('RAngulo').innerHTML =""+(o.a*o.facTita);
 	document.getElementById('RVelocidad').innerHTML=""+(o.v*o.facVel);
 	document.getElementById('RAltura').innerHTML=""+(o.hmx);
 	document.getElementById('RTiempoMx').innerHTML=""+(o.thmx);
 	document.getElementById('RdTotal').innerHTML=""+(o.dT);
 	document.getElementById('RtT').innerHTML=""+(o.tT);
 };
 return o;
})();