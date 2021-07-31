(function(){var Gal=function(){if(this.N6G){this.N6G();return;}var VG=Gal.prototype;VG.N6G=function(){this.F1y="";this.MFf="";};VG.setServerURL=function(Z4){
this.F1y=Z4;};VG.setServerIP=function(LAg){this.MFf=LAg;};VG.createSecureOutputStream=function(OV,q8){var OAG=new ByteArray();var Lg=0;var zFG;
for(zFG in q8){Lg++;}OAG.writeInt(Lg);for(zFG in q8){var qn3=q8[zFG];this.dk(OAG,zFG);this.dk(OAG,qn3);}OAG.writeBytes(OV,0,OV.length);OAG.position=0;
return OAG;};VG.createSecureInputStream=function(OV,q8){var size=OV.readInt();for(var i=0; i<size; i++){var zFG=this.QU(OV);var qn3=this.QU(OV);
q8[zFG]=qn3;}var OAG=new ByteArray();OAG.writeBytes(OV,OV.position,OV.length-OV.position);OAG.position=0;return OAG;};VG.dk=function(OV,VJ){var i;
var pLJ=VJ.length;OV.writeInt(pLJ);var v;for(i=0; i<pLJ; i++){v=VJ.charCodeAt(i);OV.writeByte((v>>>8)&255);OV.writeByte((v>>>0)&255);}};VG.QU=function(OV){
var pLJ;var X0g,p7g;pLJ=OV.readInt();if(pLJ==-1){return "<NULL>";}else{if(pLJ<-1){throw new Error("A malformed string has been read in a data input stream.");
}}var VJ="";var position=OV.position;for(var i=0; i<pLJ; i++){X0g=OV[position+i*2];p7g=OV[position+i*2+1];if((X0g|p7g)<0){throw new Error("A malformed string has been read in a data input stream.");
}VJ+=String.fromCharCode((X0g<<8)+(p7g<<0));}OV.position+=pLJ*2;return VJ;};this.N6G();};return Gal;})();
