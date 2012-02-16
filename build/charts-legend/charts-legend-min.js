YUI.add("charts-legend",function(a){var c=a.config.doc,p="top",h="right",f="bottom",j="left",s="external",u="horizontal",q="vertical",b="width",n="height",m="position",i="x",g="y",e="px",l={setter:function(w){var v=this.get("legend");if(v){v.destroy(true);}if(w instanceof a.ChartLegend){v=w;v.set("chart",this);}else{w.chart=this;if(!w.hasOwnProperty("render")){w.render=this.get("contentBox");w.includeInChartLayout=true;}v=new a.ChartLegend(w);v.after("legendRendered",a.bind(this._itemRendered,this));}return v;}},t={_positionLegendItems:function(K,T,N,w,X,H,E,A,Q,G){var R=0,L=0,V,O,y,P,S,M=this.get("width"),F,D,z,C,J,v=H.top-A,U=M-(H.left+H.right),x,I,W,B;t._setRowArrays(K,U,E);F=t.rowArray;C=t.totalWidthArray;D=F.length;for(;L<D;++L){v+=A;z=F[L];S=z.length;J=t.getStartPoint(M,C[L],Q,H);for(R=0;R<S;++R){V=z[R];O=V.node;y=V.width;P=V.height;V.x=J;V.y=0;x=!isNaN(x)?Math.min(x,J):J;I=!isNaN(I)?Math.min(I,v):v;W=!isNaN(W)?Math.max(J+y,W):J+y;B=!isNaN(B)?Math.max(v+P,B):v+P;O.setStyle("left",J+e);O.setStyle("top",v+e);J+=y+E;}v+=V.height;}this._contentRect={left:x,top:I,right:W,bottom:B};if(this.get("includeInChartLayout")){this.set("height",v+H.bottom);}},_setRowArrays:function(B,v,D){var F=B[0],C=[[F]],x=1,w=0,z=B.length,y=F.width,A,E=[[y]];for(;x<z;++x){F=B[x];A=F.width;if((y+D+A)<=v){y+=D+A;C[w].push(F);}else{y=D+A;if(C[w]){w+=1;}C[w]=[F];}E[w]=y;}t.rowArray=C;t.totalWidthArray=E;},getStartPoint:function(x,v,A,z){var y;switch(A){case j:y=z.left;break;case"center":y=(x-v)*0.5;break;case h:y=x-v-z.right;break;}return y;}},o={_positionLegendItems:function(M,T,N,x,X,I,E,C,Q,G){var R=0,F=0,V,O,P,B,S,L=this.get("height"),v,y,w,H,A,Y=I.left-E,K,U=L-(I.top+I.bottom),z,J,W,D;o._setColumnArrays(M,U,C);v=o.columnArray;H=o.totalHeightArray;y=v.length;for(;F<y;++F){Y+=E;w=v[F];S=w.length;A=o.getStartPoint(L,H[F],G,I);K=0;for(R=0;R<S;++R){V=w[R];O=V.node;P=V.height;B=V.width;V.y=A;V.x=Y;z=!isNaN(z)?Math.min(z,Y):Y;J=!isNaN(J)?Math.min(J,A):A;W=!isNaN(W)?Math.max(Y+B,W):Y+B;D=!isNaN(D)?Math.max(A+P,D):A+P;O.setStyle("left",Y+e);O.setStyle("top",A+e);A+=P+C;K=Math.max(K,V.width);}Y+=K;}this._contentRect={left:z,top:J,right:W,bottom:D};if(this.get("includeInChartLayout")){this.set("width",Y+I.right);}},_setColumnArrays:function(C,x,z){var F=C[0],D=[[F]],y=1,v=0,A=C.length,B=F.height,w,E=[[B]];for(;y<A;++y){F=C[y];w=F.height;if((B+z+w)<=x){B+=z+w;D[v].push(F);}else{B=z+w;if(D[v]){v+=1;}D[v]=[F];}E[v]=B;}o.columnArray=D;o.totalHeightArray=E;},getStartPoint:function(w,v,z,y){var x;switch(z){case p:x=y.top;break;case"middle":x=(w-v)*0.5;break;case f:x=w-v-y.bottom;break;}return x;}},d=a.Base.create("cartesianChartLegend",a.CartesianChart,[],{_redraw:function(){if(this._drawing){this._callLater=true;return;}this._drawing=true;this._callLater=false;var L=this.get("width"),V=this.get("height"),D=this._getLayoutBoxDimensions(),T=D.left,C=D.right,Z=D.top,x=D.bottom,v=this.get("leftAxesCollection"),J=this.get("rightAxesCollection"),K=this.get("topAxesCollection"),Y=this.get("bottomAxesCollection"),U=0,R,E,A="visible",B=this.get("graph"),G,M,S,Q,H,I,X,W,P=this.get("allowContentOverflow"),N,y,ab,O,F,z=this.get("legend"),aa={};if(v){ab=[];R=v.length;for(U=R-1;U>-1;--U){ab.unshift(T);T+=v[U].get("width");}}if(J){y=[];R=J.length;U=0;for(U=R-1;U>-1;--U){C+=J[U].get("width");y.unshift(L-C);}}if(K){O=[];R=K.length;for(U=R-1;U>-1;--U){O.unshift(Z);Z+=K[U].get("height");}}if(Y){F=[];R=Y.length;for(U=R-1;U>-1;--U){x+=Y[U].get("height");F.unshift(V-x);}}H=L-(T+C);I=V-(x+Z);aa.left=T;aa.top=Z;aa.bottom=V-x;aa.right=L-C;if(!P){G=this._getTopOverflow(v,J);M=this._getBottomOverflow(v,J);S=this._getLeftOverflow(Y,K);Q=this._getRightOverflow(Y,K);N=G-Z;if(N>0){aa.top=G;if(O){U=0;R=O.length;for(;U<R;++U){O[U]+=N;}}}N=M-x;if(N>0){aa.bottom=V-M;if(F){U=0;R=F.length;for(;U<R;++U){F[U]-=N;}}}N=S-T;if(N>0){aa.left=S;if(ab){U=0;R=ab.length;for(;U<R;++U){ab[U]+=N;}}}N=Q-C;if(N>0){aa.right=L-Q;if(y){U=0;R=y.length;for(;U<R;++U){y[U]-=N;}}}}H=aa.right-aa.left;I=aa.bottom-aa.top;X=aa.left;W=aa.top;if(z){if(z.get("includeInChartLayout")){switch(z.get("position")){case"left":z.set("y",W);z.set("height",I);break;case"top":z.set("x",X);z.set("width",H);break;case"bottom":z.set("x",X);z.set("width",H);break;case"right":z.set("y",W);z.set("height",I);break;}}}if(K){R=K.length;U=0;for(;U<R;U++){E=K[U];if(E.get("width")!==H){E.set("width",H);}E.get("boundingBox").setStyle("left",X+e);E.get("boundingBox").setStyle("top",O[U]+e);}if(E._hasDataOverflow()){A="hidden";}}if(Y){R=Y.length;U=0;for(;U<R;U++){E=Y[U];if(E.get("width")!==H){E.set("width",H);}E.get("boundingBox").setStyle("left",X+e);E.get("boundingBox").setStyle("top",F[U]+e);}if(E._hasDataOverflow()){A="hidden";}}if(v){R=v.length;U=0;for(;U<R;++U){E=v[U];E.get("boundingBox").setStyle("top",W+e);E.get("boundingBox").setStyle("left",ab[U]+e);if(E.get("height")!==I){E.set("height",I);}}if(E._hasDataOverflow()){A="hidden";}}if(J){R=J.length;U=0;for(;U<R;++U){E=J[U];E.get("boundingBox").setStyle("top",W+e);E.get("boundingBox").setStyle("left",y[U]+e);if(E.get("height")!==I){E.set("height",I);}}if(E._hasDataOverflow()){A="hidden";}}this._drawing=false;if(this._callLater){this._redraw();return;}if(B){B.get("boundingBox").setStyle("left",X+e);B.get("boundingBox").setStyle("top",W+e);B.set("width",H);B.set("height",I);B.get("boundingBox").setStyle("overflow",A);}if(this._overlay){this._overlay.setStyle("left",X+e);this._overlay.setStyle("top",W+e);this._overlay.setStyle("width",H+e);this._overlay.setStyle("height",I+e);}},_getLayoutBoxDimensions:function(){var x={top:0,right:0,bottom:0,left:0},C=this.get("legend"),z,B,v,E,D=this.get(b),y=this.get(n),A;if(C&&C.get("includeInChartLayout")){A=C.get("styles").gap;z=C.get(m);if(z!=s){B=C.get("direction");v=B==u?n:b;E=C.get(v);x[z]=E+A;switch(z){case p:C.set(g,0);break;case f:C.set(g,y-E);break;case h:C.set(i,D-E);break;case j:C.set(i,0);break;}}}return x;},destructor:function(){var v=this.get("legend");if(v){v.destroy(true);}}},{ATTRS:{legend:l}});a.CartesianChart=d;
var k=a.Base.create("pieChartLegend",a.PieChart,[],{_redraw:function(){if(this._drawing){this._callLater=true;return;}this._drawing=true;this._callLater=false;var J=this.get("graph"),H=this.get("width"),z=this.get("height"),G=this.get("legend"),E=0,C=0,B=0,A=0,I,F,v,D;if(J){if(G){I=G.get("width");F=G.get("height");D=G.get("styles").gap;switch(G.get("position")){case j:I+=D;v=Math.min(H-I,z);F=v;E=I;break;case p:F+=D;v=Math.min(z-F,H);I=v;C=F;break;case h:I+=D;v=Math.min(H-I,z);F=v;B=v+D;break;case f:F+=D;v=Math.min(z-F,H);I=v;A=v+D;break;}}else{J.set(i,0);J.set(g,0);J.set(b,H);J.set(n,z);}}this._drawing=false;if(this._callLater){this._redraw();return;}if(J){J.set(i,E);J.set(g,C);J.set(b,v);J.set(n,v);}if(G){G.set(i,B);G.set(g,A);G.set(b,I);G.set(n,F);}}},{ATTRS:{legend:l}});a.PieChart=k;a.ChartLegend=a.Base.create("chartlegend",a.Widget,[a.Renderer],{initializer:function(){this._items=[];},renderUI:function(){var y=this.get("boundingBox"),v=this.get("contentBox"),x=this.get("styles").background,w=new a.Rect({graphic:v,fill:x.fill,stroke:x.stroke});y.setStyle("display","block");y.setStyle("position","absolute");this.set("background",w);},bindUI:function(){this.get("chart").after("seriesCollectionChange",this._updateHandler);this.after("stylesChange",this._updateHandler);this.after("positionChange",this._updateHandler);this.after("widthChange",this._handleSizeChange);this.after("heightChange",this._handleSizeChange);},syncUI:function(){var v=this.get("width"),x=this.get("height");if(isFinite(v)&&isFinite(x)&&v>0&&x>0){this._drawLegend();}},_updateHandler:function(v){if(this.get("rendered")){this._drawLegend();}},_handleSizeChange:function(x){var w=x.attrName,z=this.get(m),v=z==j||z==h,y=z==f||z==p;if((y&&w==b)||(v&&w==n)){this._drawLegend();}},_drawLegend:function(){if(this._drawing){this._callLater=true;return;}this._drawing=true;this._callLater=false;if(this.get("includeInChartLayout")){this.get("chart")._itemRenderQueue.unshift(this);}var N=this.get("chart"),R=this.get("contentBox"),E=N.get("seriesCollection"),J,H=this.get("styles"),M=H.padding,x,I=H.horizontalGap,C=H.verticalGap,U=H.hAlign,L=H.vAlign,D=H.marker,B=H.label,A,ac=this._layout[this.get("direction")],X,Y,K,w,G,ab,W,F,v,T,Z,O=[],V=D.width,Q=D.height,y=0-I,ad=0-C,aa=0,P=0,z,S;if(D&&D.shape){w=D.shape;}this._destroyLegendItems();if(N instanceof a.PieChart){J=E[0];A=J.get("categoryAxis").getDataByKey(J.get("categoryKey"));x=J.get("styles").marker;v=x.fill.colors;T=x.border.colors;Z=x.border.weight;X=0;Y=A.length;w=w||a.Circle;K=a.Lang.isArray(w);for(;X<Y;++X){w=K?w[X]:w;W={color:v[X]};F={colors:T[X],weight:Z};A=N.getSeriesItems(J,X).category.value;ab=this.getLegendItem(R,this._getShapeClass(w),W,F,B,V,Q,A);z=ab.width;S=ab.height;aa=Math.max(aa,z);P=Math.max(P,S);y+=z+I;ad+=S+C;O.push(ab);}}else{X=0;Y=E.length;for(;X<Y;++X){J=E[X];x=this._getStylesBySeriesType(J,w);if(!w){w=x.shape;if(!w){w=a.Circle;}}G=a.Lang.isArray(w)?w[X]:w;ab=this.getLegendItem(R,this._getShapeClass(w),x.fill,x.stroke,B,V,Q,J.get("valueDisplayName"));z=ab.width;S=ab.height;aa=Math.max(aa,z);P=Math.max(P,S);y+=z+I;ad+=S+C;O.push(ab);}}this.set("items",O);this._drawing=false;if(this._callLater){this._drawLegend();}else{ac._positionLegendItems.apply(this,[O,aa,P,y,ad,M,I,C,U,L]);this._updateBackground(H);this.fire("legendRendered");}},_updateBackground:function(C){var D=C.background,z=this._contentRect,E=C.padding,v=z.left-E.left,F=z.top-E.top,A=z.right-v+E.right,B=z.bottom-F+E.bottom;this.get("background").set({fill:D.fill,stroke:D.stroke,width:A,height:B,x:v,y:F});},_getStylesBySeriesType:function(v){var w=v.get("styles");if(v instanceof a.LineSeries||v instanceof a.StackedLineSeries){w=v.get("styles").line;return{stroke:{weight:1,color:w.color},fill:{color:w.color}};}else{if(v instanceof a.AreaSeries||v instanceof a.StackedAreaSeries){v=v.get("styles").fill;return{stroke:{weight:1,color:w.color},fill:{color:w.color}};}else{w=v.get("styles").marker;return{fill:w.fill,stroke:{weight:w.border.weight,color:w.border.color,shape:w.shape},shape:w.shape};}}},getLegendItem:function(x,D,J,K,E,G,B,H){var z=a.one(c.createElement("div")),y=a.one(c.createElement("span")),C,A,F,v,I;z.setStyle(m,"absolute");y.setStyle(m,"absolute");y.setStyles(E);y.appendChild(c.createTextNode(H));z.appendChild(y);x.appendChild(z);A=y.get("offsetHeight");F=A-B;v=G+F;y.setStyle("left",v+e);z.setStyle("height",A+e);z.setStyle("width",(v+y.get("offsetWidth"))+e);C=new D({fill:J,stroke:K,width:G,height:B,x:F*0.5,y:F*0.5,w:G,h:B,graphic:z});y.setStyle("left",A+e);I={node:z,width:z.get("offsetWidth"),height:z.get("offsetHeight"),shape:C,textNode:y,text:H};this._items.push(I);return I;},_getShapeClass:function(){var v=this.get("background").get("graphic");return v._getShapeClass.apply(v,arguments);},_getDefaultStyles:function(){var v={padding:{top:5,right:5,bottom:5,left:5},gap:5,horizontalGap:4,verticalGap:4,hAlign:"center",vAlign:"middle",marker:this._getPlotDefaults(),label:{color:"#808080",alpha:1,fontSize:"85%"},background:{shape:"rect",fill:{color:"#faf9f2"},stroke:{color:"#dad8c9",weight:1}}};return v;},_getPlotDefaults:function(){var v={width:10,height:10};return v;},_destroyLegendItems:function(){var v;if(this._items){while(this._items.length>0){v=this._items.shift();v.shape.get("graphic").destroy();v.node.empty();v.node.remove(true);v=null;}}this._items=[];},_layout:{vertical:o,horizontal:t},destructor:function(){var v=this.get("graphic");this._destroyLegendItems();if(v){v.destroy();}}},{ATTRS:{includeInChartLayout:{value:false},chart:{},direction:{value:"vertical"},position:{lazyAdd:false,value:"right",setter:function(v){if(v==p||v==f){this.set("direction",u);}else{if(v==j||v==h){this.set("direction",q);}}return v;}},width:{getter:function(){var w=this.get("chart"),v=this._parentNode;if(v&&((w&&this.get("includeInChartLayout"))||this._width)){if(!this._width){this._width=0;}return this._width;}else{return v.get("offsetWidth");}},setter:function(v){this._width=v;return v;}},height:{getter:function(){var w=this.get("chart"),v=this._parentNode;
if(v&&((w&&this.get("includeInChartLayout"))||this._height)){if(!this._height){this._height=0;}return this._height;}else{return v.get("offsetHeight");}},setter:function(v){this._height=v;return v;}},x:{lazyAdd:false,value:0,setter:function(w){var v=this.get("boundingBox");if(v){v.setStyle(j,w+e);}return w;}},y:{lazyAdd:false,value:0,setter:function(w){var v=this.get("boundingBox");if(v){v.setStyle(p,w+e);}return w;}},background:{}}});function r(v){if(v.type!="pie"){return new a.CartesianChart(v);}else{return new a.PieChart(v);}}a.Chart=r;},"@VERSION@",{requires:["charts-base"]});