(function(){var i8l=function(){if(this.N6G){this.N6G();return;}var VG=i8l.prototype;VG.N6G=function(){this.F1y="";this.MFf="";};VG.setServerURL=function(Z4){
this.F1y=Z4;};VG.setServerIP=function(LAg){this.MFf=LAg;};VG.createSecureOutputStream=function(OV,q8){var OAG=new ByteArray();var Lg=0;var zFG;
for(zFG in q8){Lg++;}OAG.writeInt(Lg);for(zFG in q8){var qn3=q8[zFG];this.dk(OAG,zFG);this.dk(OAG,qn3);}var DLf=new ByteArray();var evV=new this.qpf("forcs@#$",DLf);
evV.write(OV,0,OV.length);OAG.writeBytes(DLf,0,DLf.length);OAG.position=0;return OAG;};VG.createSecureInputStream=function(OV,q8){var size=OV.readInt();
for(var i=0; i<size; i++){var zFG=this.QU(OV);var qn3=this.QU(OV);q8[zFG]=qn3;}var OAG=new ByteArray();var Ztt=new this.cpf("forcs@#$",OV);var l1k=new ByteArray();
Ztt.zb(l1k,0,OV.length-OV.position);OAG.writeBytes(l1k,0,l1k.length);OAG.position=0;return OAG;};VG.dk=function(OV,VJ){var i;var pLJ=VJ.length;
OV.writeInt(pLJ);var v;for(i=0; i<pLJ; i++){v=VJ.charCodeAt(i);OV.writeByte((v>>>8)&255);OV.writeByte((v>>>0)&255);}};VG.QU=function(OV){var pLJ;
var X0g,p7g;pLJ=OV.readInt();if(pLJ==-1){return "<NULL>";}else{if(pLJ<-1){throw new Error("A malformed string has been read in a data input stream.");
}}var VJ="";var position=OV.position;for(var i=0; i<pLJ; i++){X0g=OV[position+i*2];p7g=OV[position+i*2+1];if((X0g|p7g)<0){throw new Error("A malformed string has been read in a data input stream.");
}VJ+=String.fromCharCode((X0g<<8)+(p7g<<0));}OV.position+=pLJ*2;return VJ;};var cpf=function(N0,lmx){if(this.UME){this.UME(N0,lmx);return;}var MAG=cpf.prototype;
MAG.UME=function(N0,lmx){this.m8n=N0;this.ax=0;this.bx=0;this.cx=0;this.dx=0;this.si=0;this.XJ=0;this.R3t=0;this.gkG=0;this.i=0;this.slG=0;this.p0G=new Array();
this.Jgf=0;this.ogf=0;this.V33=0;this.r5=lmx;this.p4G=new ByteArray();this.p4G.setLength(17);var ZCG=new ByteArray();ZCG.writeMultiByte(N0,"iso-8859-1");
this.p4G.writeBytes(ZCG,0,ZCG.length>16?16:ZCG.length);this.p4G.set(16,0);this.clear();};MAG.clear=function(){this.ax=0;this.bx=0;this.cx=0;this.dx=0;
this.si=0;this.XJ=0;this.R3t=0;this.gkG=0;this.i=0;this.slG=0;this.Jgf=0;this.ogf=0;this.V33=0;for(var i=0; i<8; i++){this.p0G[i]=0;}};MAG.IDg=function(){
var c=this.r5.readByte();if(c==-1){return -1;}this.xHf();this.Jgf=this.slG>>>8;this.ogf=this.slG&255;c=c^(this.Jgf^this.ogf);for(this.V33=0; this.V33<=15; this.V33++){
this.p4G.set(this.V33,this.p4G.get(this.V33)^c);}return c;};MAG.zb=function(b,off,qg,Rl3){if(b===undefined){b=null;}if(off===undefined){off=-1;
}if(qg===undefined){qg=-1;}if(Rl3===undefined){Rl3=-1;}if((b==null)||this.r5==null){ZfG("Null point exception");return -1;}if(qg<1){return 0;
}this.r5.readBytes(b,off,qg);var rt=qg;if(rt<=0){return rt;}var c=0;var i=0;for(i=0; i<rt; i++){this.xHf();this.Jgf=this.slG>>>8;this.ogf=this.slG&255;
c=b.get(i+off);c=c^(this.Jgf^this.ogf);for(var j=0; j<16; j++){this.p4G.set(j,this.p4G.get(j)^c);}b.set(i+off,c);}return rt;};MAG.LZ=function(){
return 0;};MAG.CP3=function(){this.dx=this.R3t+this.i;this.ax=this.p0G[this.i];this.cx=346;this.bx=20021;this.XJ=this.ax;this.ax=this.si;this.si=this.XJ;
this.XJ=this.ax;this.ax=this.dx;this.dx=this.XJ;this.ax=this.ax*this.bx&65535;this.XJ=this.ax;this.ax=this.cx;this.cx=this.XJ;if(this.ax!=0){
this.ax=(this.ax*this.si)&65535;this.cx=(this.ax+this.cx)&65535;}this.XJ=this.ax;this.ax=this.si;this.si=this.XJ;this.ax=(this.ax*this.bx)&65535;
this.dx=(this.cx+this.dx)&65535;this.ax=this.ax+1;this.R3t=this.dx;this.p0G[this.i]=this.ax;this.gkG=this.ax^this.dx;this.i=this.i+1;};MAG.xHf=function(){
this.p0G[0]=(this.p4G.get(0)*256)+this.p4G.get(1);this.CP3();this.slG=this.gkG;this.p0G[1]=this.p0G[0]^((this.p4G.get(2)*256)+this.p4G.get(3));
this.CP3();this.slG=this.slG^this.gkG;this.p0G[2]=this.p0G[1]^((this.p4G.get(4)*256)+this.p4G.get(5));this.CP3();this.slG=this.slG^this.gkG;this.p0G[3]=this.p0G[2]^((this.p4G.get(6)*256)+this.p4G.get(7));
this.CP3();this.slG=this.slG^this.gkG;this.p0G[4]=this.p0G[3]^((this.p4G.get(8)*256)+this.p4G.get(9));this.CP3();this.slG=this.slG^this.gkG;this.p0G[5]=this.p0G[4]^((this.p4G.get(10)*256)+this.p4G.get(11));
this.CP3();this.slG=this.slG^this.gkG;this.p0G[6]=this.p0G[5]^((this.p4G.get(12)*256)+this.p4G.get(13));this.CP3();this.slG=this.slG^this.gkG;
this.p0G[7]=this.p0G[6]^((this.p4G.get(14)*256)+this.p4G.get(15));this.CP3();this.slG=this.slG^this.gkG;this.i=0;};this.UME(N0,lmx);};VG.cpf=cpf;
var qpf=function(N0,YLU){if(this.uME){this.uME(N0,YLU);return;}var MAG=qpf.prototype;MAG.uME=function(N0,YLU){this.ax=0;this.bx=0;this.cx=0;this.dx=0;
this.si=0;this.XJ=0;this.R3t=0;this.gkG=0;this.i=0;this.slG=0;this.p0G=new Array();this.Jgf=0;this.ogf=0;this.V33=0;this.ho=YLU;this.p0G.length=8;
this.p4G=new ByteArray();this.p4G.setLength(17);var ZCG=new ByteArray();ZCG.writeMultiByte(N0,"iso-8859-1");this.p4G.writeBytes(ZCG,0,ZCG.length>16?16:ZCG.length);
this.p4G.set(16,0);this.clear();};MAG.clear=function(){this.ax=0;this.bx=0;this.cx=0;this.dx=0;this.si=0;this.XJ=0;this.R3t=0;this.gkG=0;this.i=0;
this.slG=0;this.Jgf=0;this.ogf=0;this.V33=0;for(var i=0; i<8; i++){this.p0G[i]=0;}};MAG.stG=function(b){this.xHf();this.Jgf=this.slG>>>8;this.ogf=this.slG&255;
for(this.V33=0; this.V33<=15; this.V33++){this.p4G.set(this.V33,this.p4G.get(this.V33)^b);}b=b^(this.Jgf^this.ogf);this.ho.writeByte(b);};MAG.write=function(b,off,qg){
if(b===undefined){b=null;}if(off===undefined){off=-1;}if(qg===undefined){qg=-1;}if((b==null)||this.ho==null){ZfG("Null point exception");return;
}if(qg<1){return;}var c=0;var kdf=new ByteArray();kdf.setLength(qg);for(var i=0; i<qg; i++){this.xHf();this.Jgf=this.slG>>>8;this.ogf=this.slG&255;
c=b.get(i+off);for(var j=0; j<16; j++){this.p4G.set(j,this.p4G.get(j)^c);}c=c^(this.Jgf^this.ogf);kdf.set(i,c);}this.ho.writeBytes(kdf,0,qg);
kdf=null;};MAG.flush=function(){};MAG.close=function(){};MAG.CP3=function(){this.dx=this.R3t+this.i;this.ax=this.p0G[this.i];this.cx=346;this.bx=20021;
this.XJ=this.ax;this.ax=this.si;this.si=this.XJ;this.XJ=this.ax;this.ax=this.dx;this.dx=this.XJ;this.ax=this.ax*this.bx&65535;this.XJ=this.ax;
this.ax=this.cx;this.cx=this.XJ;if(this.ax!=0){this.ax=(this.ax*this.si)&65535;this.cx=(this.ax+this.cx)&65535;}this.XJ=this.ax;this.ax=this.si;
this.si=this.XJ;this.ax=(this.ax*this.bx)&65535;this.dx=(this.cx+this.dx)&65535;this.ax=this.ax+1;this.R3t=this.dx;this.p0G[this.i]=this.ax;this.gkG=this.ax^this.dx;
this.i=this.i+1;};MAG.xHf=function(){this.p0G[0]=(this.p4G.get(0)*256)+this.p4G.get(1);this.CP3();this.slG=this.gkG;this.p0G[1]=this.p0G[0]^((this.p4G.get(2)*256)+this.p4G.get(3));
this.CP3();this.slG=this.slG^this.gkG;this.p0G[2]=this.p0G[1]^((this.p4G.get(4)*256)+this.p4G.get(5));this.CP3();this.slG=this.slG^this.gkG;this.p0G[3]=this.p0G[2]^((this.p4G.get(6)*256)+this.p4G.get(7));
this.CP3();this.slG=this.slG^this.gkG;this.p0G[4]=this.p0G[3]^((this.p4G.get(8)*256)+this.p4G.get(9));this.CP3();this.slG=this.slG^this.gkG;this.p0G[5]=this.p0G[4]^((this.p4G.get(10)*256)+this.p4G.get(11));
this.CP3();this.slG=this.slG^this.gkG;this.p0G[6]=this.p0G[5]^((this.p4G.get(12)*256)+this.p4G.get(13));this.CP3();this.slG=this.slG^this.gkG;
this.p0G[7]=this.p0G[6]^((this.p4G.get(14)*256)+this.p4G.get(15));this.CP3();this.slG=this.slG^this.gkG;this.i=0;};this.uME(N0,YLU);};VG.qpf=qpf;
this.N6G();};return i8l;})();
