/*
	krpano 1.19-pr3 Gyro Plugin (build 2015-08-04)

	for devices with a gyro sensor

	by Aldo Hoeben / fieldOfView.com
	contributions by
		Sjeiti / ronvalstar.nl
		Klaus Reinfeld / krpano.com

	http://github.com/fieldOfView/krpano_fovplugins/tree/master/gyro/
	http://krpano.com/plugins/userplugins/fieldofview/gyro/

	This software can be used free of charge and the source code is available
	under a Creative Commons Attribution license:
		http://creativecommons.org/licenses/by/3.0/
*/
var krpanoplugin=function(){function G(e){return String("yesontrue1")[n](String(e)[r]())>=0}function Y(){U=t,z=e;if(P===undefined){H=o;return}P&&!H?(window[f](l,gt,o),M[p][h][f](d,dt,o),M[p][h][f](v,vt,o),M[p][h][f](m,vt,o),H=o,W=-mt(),X=0,V=0,$=0,J=M[g][u],R=M[b][y],M[b][y]=o):H=t}function Z(){P&&H&&(window[c](l,gt,o),M[p][h][c](d,dt),M[p][h][c](v,vt),M[p][h][c](m,vt)),F&&M.call("tween(view.camroll,0)"),H=t,R!=e&&(M[b][y]=R,R=e)}function et(){H?Z():Y()}function tt(e){e=e*Math.PI/180;var t=Math.cos(e),n=Math.sin(e);return[1,0,0,0,t,n,0,-n,t]}function nt(e){e=e*Math.PI/180;var t=Math.cos(e),n=Math.sin(e);return[t,0,-n,0,1,0,n,0,t]}function rt(e){e=e*Math.PI/180;var t=Math.cos(e),n=Math.sin(e);return[t,n,0,-n,t,0,0,0,1]}function it(e,t){var n=new Array(9),r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=t[6],l=t[7],c=t[8],h=e[0],p=e[1],d=e[2];return n[0]=h*r+p*o+d*f,n[1]=h*i+p*u+d*l,n[2]=h*s+p*a+d*c,h=e[3],p=e[4],d=e[5],n[3]=h*r+p*o+d*f,n[4]=h*i+p*u+d*l,n[5]=h*s+p*a+d*c,h=e[6],p=e[7],d=e[8],n[6]=h*r+p*o+d*f,n[7]=h*i+p*u+d*l,n[8]=h*s+p*a+d*c,n}function st(e){var t,n,r;return e[3]>.9999?(t=Math[w](e[2],e[8]),n=Math.PI/2,r=0):e[3]<-0.9999?(t=Math[w](e[2],e[8]),n=-Math.PI/2,r=0):(t=Math[w](-e[6],e[0]),r=Math[w](-e[5],e[4]),n=Math.asin(e[3])),{pan:t*180/Math.PI,tilt:n*180/Math.PI,roll:r*180/Math.PI}}function ot(e,t){var n=Math[E](e-t),r=Math[E](e-360-t),i=Math[E](e+360-t);return r<n&&r<i?e-360:i<n&&i<r?e+360:e}function ut(e){e+=360180;var t=e|0;return t%360+(e-t)-180}function ht(e){var n=e.accelerationIncludingGravity,r=e.rotationRate;if(n&&r){P===undefined&&(P=o,M.call(D[a],D));if(!H)return;var i=0;if(e.interval>0)i=Number(e.interval)/1e3;else if(window[S]&&window[S].now){var s=window[S].now();at>0&&(i=s-at),at=s}var u=mt(),f=Number(n.x),l=Number(n.y),c=Number(n.z),h=Number(r[x]),p=Number(r.beta),d=Number(r.gamma),v=Number(M.get(T)),m=Number(M.get(N)),g=Number(M.get(C)),y=v,b=m,L=g,A=.1,O=Math[w](c,l)*180/Math.PI;O=ot(O,lt),lt=ut(lt*(1-A)+O*A);var _=Math[w](c,f)*180/Math.PI;_=ot(_,ft),ft=ut(ft*(1-A)+_*A);if(F){var B=-Math[w](f,l)*180/Math.PI;B=ot(B,ct),ct=ct*(1-A)+B*A}else ct=0;var I=rt(-lt),q=tt(-ft+90),R=tt(-ct),U=it(it(q,I),R),z=st(U),W=z.tilt,X=t;Math[E](Math[E](b)-W)<45&&(X=o,b<0&&(W=-W)),F?L=ct+u:L=0;if(j==t&&X){var V=W-b;V>10?V=10:V<-10&&(V=-10),b+=V*.1}var $=it(it(nt(-y),rt(-b)),tt(-L));$=it($,tt(+u)),$=it($,nt(p*180/Math.PI*i)),$=it($,rt(h*180/Math.PI*i)),$=it($,tt(-u));var J=st($);y=J.pan,b=J.tilt,L=J[k],M.set(T,y),M.set(N,b),M.set(C,L)}}function pt(e){window[c](l,pt,t),P=o,H&&(H=t,Y()),M.call(D[a],D)}function dt(e){q=o}function vt(e){q=t}function mt(){var e=Number.NaN,t=screen.width>screen.height,s=screen[L]||screen.msOrientation||screen.mozOrientation;if(s){s=(""+s)[r]();var o=s[n]("portrait")>=0,u=s[n]("landscape")>=0,a=s[n]("primary")>=0,f=s[n]("secondary")>=0;o&&a?e=0:u&&a?e=90:u&&f?e=-90:o&&f&&(e=180),!isNaN(e)&&!M[i].mobile&&(e-=90)}return isNaN(e)&&(e=M._have_top_access?top[L]:window[L]),isNaN(e)&&(M[i].mobile?e=t?90:0:e=t?0:90),e}function gt(t){if(!q&&H){var n=mt(),r=yt({yaw:t[x]*Q,pitch:t.beta*Q,roll:t.gamma*Q}),i=bt(r.yaw/Q),s=r[A]/Q,a=i,f,l=M[g].hlookat,c=M[g].vlookat,h=M[g][u],d=l-V,v=c-$;if(!U){if(z==e)z=r;else if(r.yaw!=z.yaw||r[A]!=z[A]||r[k]!=z[k])z=e,U=o,j&&(X=-s);return}F&&(J=bt(180+Number(n)-r[k]/Q));if(Math[E](s)>70){a=t[x];switch(n){case 0:s>0&&(a+=180);break;case 90:a+=90;break;case-90:a+=-90;break;case 180:s<0&&(a+=180)}a=bt(a),Math[E](a-i)>180&&(a+=a<i?360:-360),f=Math.min(1,(Math[E](s)-70)/10),i=i*(1-f)+a*f,J*=1-f}W+=d,X+=v,Math[E](s+X)>90&&(X=s+X>0?90-s:-90-s),V=bt(-i-180+W),$=Math.max(Math.min(s+X,90),-90),Math[E](V-l)>180&&(l+=V>l?360:-360),V=(1-I)*V+I*l,$=(1-I)*$+I*c,Math[E](J-h)>180&&(h+=J>h?360:-360),J=(1-I)*J+I*h;var m=bt(V),y=$,b=bt(J);isNaN(m)||(M[g].hlookat=m),isNaN(y)||(M[g].vlookat=y),isNaN(b)||(M[g][u]=b),X!=0&&B>0&&(v==0?B==1?(X=0,K=0):(K=1-(1-K)*M[p].touchfriction,X*=1-Math.pow(B,2)*K,Math[E](X)<.1&&(X=0,K=0)):K=0)}}function yt(e){var t,n,r,i=Math.cos(e.yaw),s=Math.sin(e.yaw),o=Math.cos(e[A]),u=Math.sin(e[A]),a=Math.cos(e[k]),f=Math.sin(e[k]),l=[s*f-i*u*a,-i*o,i*u*f+s*a,o*a,-u,-o*f,s*u*a+i*f,s*o,-s*u*f+i*a];return l[3]>.9999?(t=Math[w](l[2],l[8]),r=Math.PI/2,n=0):l[3]<-0.9999?(t=Math[w](l[2],l[8]),r=-Math.PI/2,n=0):(t=Math[w](-l[6],l[0]),n=Math[w](-l[5],l[4]),r=Math.asin(l[3])),{yaw:t,pitch:r,roll:n}}function bt(e){return e%=360,e<=180?e:e-360}var e=null,t=!1,n="indexOf",r="toLowerCase",i="device",s="registerattribute",o=!0,u="camroll",a="onavailable",f="addEventListener",l="deviceorientation",c="removeEventListener",h="layer",p="control",d="touchstart",v="touchend",m="touchcancel",g="view",y="loadwhilemoving",b="display",w="atan2",E="abs",S="performance",x="alpha",T="view.hlookat",N="view.vlookat",C="view.camroll",k="roll",L="orientation",A="pitch",O=this,M=e,_=e,D=e,P=undefined,H=t,B=0,j=t,F=t,I=.5,q=t,R=e,U=t,z=e,W=0,X=0,V=0,$=0,J=0,K=0,Q=Math.PI/180;O.registerplugin=function(c,h,p){M=c,D=p;if(M.version<"1.18"){M.trace(3,"gyro plugin - too old krpano version (min. 1.18)");return}_=M[i],D[s]("available",t,function(e){},function(){return P==o?o:t}),D[s]("enabled",o,function(e){G(e)?Y():Z()},function(){return H}),D[s]("velastic",0,function(e){B=Math.max(Math.min(Number(e),1),0)},function(){return B}),D[s]("vrelative",t,function(e){j=G(e)},function(){return j}),D[s](u,o,function(e){F=G(e)},function(){return F}),D[s]("friction",0,function(e){I=Math.max(Math.min(Number(e),1),0)},function(){return I}),D[s](a,e),D.enable=Y,D.disable=Z,D.toggle=et;var d=_.android&&(""+navigator.userAgent)[r]()[n]("ucbrowser")>0;_.android&&_.chrome?window[f](l,pt,t):(!_.androidstock||!!d)&&(!M[i].realDesktop||_.ie||d)&&window[f](l,pt,t)},O.unloadplugin=function(){window[c]("devicemotion",ht,t),window[c](l,pt,t),window[c](l,gt,t),Z(),D=e,_=e,M=e};var at=0,ft=0,lt=0,ct=0};