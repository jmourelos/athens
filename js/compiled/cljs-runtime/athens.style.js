goog.provide('athens.style');
goog.require('cljs.core');
goog.require('garden.color');
goog.require('garden.core');
athens.style.COLORS = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"link-color","link-color",1347118056),"#0075E1",new cljs.core.Keyword(null,"highlight-color","highlight-color",-1394121540),"#F9A132",new cljs.core.Keyword(null,"warning-color","warning-color",924289810),"#D20000",new cljs.core.Keyword(null,"confirmation-color","confirmation-color",346216600),"#009E23",new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680),"#322F38",new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),"#433F38",new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527),"#EFEDEB",new cljs.core.Keyword(null,"app-bg-color","app-bg-color",168697297),"#FFFFFF"], null);
athens.style.DEPTH_SHADOWS = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"4","4",-1197948085),"0px 1.6px 3.6px rgba(0, 0, 0, 0.13), 0px 0.3px 0.9px rgba(0, 0, 0, 0.1)",new cljs.core.Keyword(null,"8","8",1405994928),"0px 3.2px 7.2px rgba(0, 0, 0, 0.13), 0px 0.6px 1.8px rgba(0, 0, 0, 0.1)",new cljs.core.Keyword(null,"16","16",1354114028),"0px 6.4px 14.4px rgba(0, 0, 0, 0.13), 0px 1.2px 3.6px rgba(0, 0, 0, 0.1)",new cljs.core.Keyword(null,"64","64",977820579),"0px 24px 60px rgba(0, 0, 0, 0.15), 0px 5px 12px rgba(0, 0, 0, 0.1)"], null);
athens.style.HSL_COLORS = cljs.core.reduce_kv((function (p1__49779_SHARP_,p2__49780_SHARP_,p3__49781_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49779_SHARP_,p2__49780_SHARP_,garden.color.hex__GT_hsl(p3__49781_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,athens.style.COLORS);
athens.style.OPACITIES = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,0.25,0.5,0.75,(1)], null);
athens.style.base_styles = (function athens$style$base_styles(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Sans, Sans-Serif",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.Keyword(null,"h6","h6",557293780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"50px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(600),new cljs.core.Keyword(null,"line-height","line-height",1870784992),"65px",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"38px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(500),new cljs.core.Keyword(null,"line-height","line-height",1870784992),"49px",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"28px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(500),new cljs.core.Keyword(null,"line-height","line-height",1870784992),"36px",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.02em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"21px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"27px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(500),new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"0.08em",new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"uppercase"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".MuiSvgIcon-root",".MuiSvgIcon-root",2093876191),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"inherit"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".block-ref",".block-ref",1634213113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px","solid",new cljs.core.Keyword(null,"highlight-color","highlight-color",-1394121540).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),garden.color.opacify(new cljs.core.Keyword(null,"highlight-color","highlight-color",-1394121540).cljs$core$IFn$_invoke$arity$1(athens.style.HSL_COLORS),cljs.core.first(athens.style.OPACITIES)),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"alias"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".athena-result",".athena-result",1322604255),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"12px 32px 12px 32px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid rgba(67, 63, 56, 0.2)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255, 255, 255, 1)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(255, 255, 255, .9)"], null)], null)], null)], null)], 0))], null);
});

//# sourceMappingURL=athens.style.js.map
