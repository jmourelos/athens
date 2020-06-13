goog.provide('athens.devcards.left_sidebar');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.devcards.athena');
goog.require('athens.devcards.buttons');
goog.require('athens.devcards.db');
goog.require('athens.router');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.left_sidebar","athens.devcards.left_sidebar",-1110254216),new cljs.core.Keyword(null,"Import-Styles","Import-Styles",584958882)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Import-Styles",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.left_sidebar !== 'undefined') && (typeof athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50853 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50853 = (function (meta50854){
this.meta50854 = meta50854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50855,meta50854__$1){
var self__ = this;
var _50855__$1 = this;
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50853(meta50854__$1));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50855){
var self__ = this;
var _50855__$1 = this;
return self__.meta50854;
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50853.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50853.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
var self__ = this;
var this__47803__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47804__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47822__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.style.base_styles], null);
if(cljs.core.fn_QMARK_(v__47822__auto__)){
return (function (data_atom__47823__auto__,owner__47824__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47822__auto__,data_atom__47823__auto__,owner__47824__auto__], null));
});
} else {
return reagent.core.as_element(v__47822__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47804__auto__))], 0))], 0));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50854","meta50854",-1706177305,null)], null);
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50853.cljs$lang$type = true);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50853.cljs$lang$ctorStr = "athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50853");

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50853.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50853");
}));

/**
 * Positional factory function for athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50853.
 */
athens.devcards.left_sidebar.__GT_t_athens$devcards$left_sidebar50853 = (function athens$devcards$left_sidebar$__GT_t_athens$devcards$left_sidebar50853(meta50854){
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50853(meta50854));
});

}

return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50853(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.left_sidebar","athens.devcards.left_sidebar",-1110254216),new cljs.core.Keyword(null,"Instantiate-Dsdb","Instantiate-Dsdb",-544389239)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Instantiate-Dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.left_sidebar !== 'undefined') && (typeof athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50856 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50856 = (function (meta50857){
this.meta50857 = meta50857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50858,meta50857__$1){
var self__ = this;
var _50858__$1 = this;
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50856(meta50857__$1));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50858){
var self__ = this;
var _50858__$1 = this;
return self__.meta50857;
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50856.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50856.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
var self__ = this;
var this__47803__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47804__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47822__auto__ = null;
if(cljs.core.fn_QMARK_(v__47822__auto__)){
return (function (data_atom__47823__auto__,owner__47824__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47822__auto__,data_atom__47823__auto__,owner__47824__auto__], null));
});
} else {
return reagent.core.as_element(v__47822__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47804__auto__))], 0))], 0));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50857","meta50857",839556270,null)], null);
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50856.cljs$lang$type = true);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50856.cljs$lang$ctorStr = "athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50856");

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50856.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50856");
}));

/**
 * Positional factory function for athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50856.
 */
athens.devcards.left_sidebar.__GT_t_athens$devcards$left_sidebar50856 = (function athens$devcards$left_sidebar$__GT_t_athens$devcards$left_sidebar50856(meta50857){
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50856(meta50857));
});

}

return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50856(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.left_sidebar !== 'undefined') && (typeof athens.devcards.left_sidebar.conn !== 'undefined')){
} else {
athens.devcards.left_sidebar.conn = athens.devcards.db.new_conn();
}
athens.devcards.db.posh_conn_BANG_(athens.devcards.left_sidebar.conn);
athens.devcards.left_sidebar.handler = (function athens$devcards$left_sidebar$handler(){
var n = new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.devcards.left_sidebar.conn));
var G__50862 = athens.devcards.left_sidebar.conn;
var G__50863 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),n,new cljs.core.Keyword("node","title","node/title",628940777),["Page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null)], null);
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__50862,G__50863) : posh.reagent.transact_BANG_.call(null,G__50862,G__50863));
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.left_sidebar","athens.devcards.left_sidebar",-1110254216),new cljs.core.Keyword(null,"Create-Shortcut","Create-Shortcut",1916776015)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Shortcut",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.left_sidebar !== 'undefined') && (typeof athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50864 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50864 = (function (meta50865){
this.meta50865 = meta50865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50866,meta50865__$1){
var self__ = this;
var _50866__$1 = this;
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50864(meta50865__$1));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50866){
var self__ = this;
var _50866__$1 = this;
return self__.meta50865;
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50864.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50864.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
var self__ = this;
var this__47803__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47804__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47822__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),athens.devcards.left_sidebar.handler,new cljs.core.Keyword(null,"label","label",1718410804),"Create Shortcut"], null)], null);
if(cljs.core.fn_QMARK_(v__47822__auto__)){
return (function (data_atom__47823__auto__,owner__47824__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47822__auto__,data_atom__47823__auto__,owner__47824__auto__], null));
});
} else {
return reagent.core.as_element(v__47822__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47804__auto__))], 0))], 0));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50864.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50865","meta50865",-875906003,null)], null);
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50864.cljs$lang$type = true);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50864.cljs$lang$ctorStr = "athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50864");

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50864.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50864");
}));

/**
 * Positional factory function for athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50864.
 */
athens.devcards.left_sidebar.__GT_t_athens$devcards$left_sidebar50864 = (function athens$devcards$left_sidebar$__GT_t_athens$devcards$left_sidebar50864(meta50865){
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50864(meta50865));
});

}

return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50864(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.left_sidebar.left_sidebar_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"height","height",1025178622)],[["1px 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top-line","top-line",-1024691303),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"40px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 auto",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"auto",new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 auto",new cljs.core.Keyword(null,"align-self","align-self",1475936794),"stretch",new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-auto-flow","grid-auto-flow",-1754873684),"column",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"1fr auto auto",new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"4px"], null),new cljs.core.Keyword(null,"small-icon","small-icon",-1258883016),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null),new cljs.core.Keyword(null,"large-icon","large-icon",-1011018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"22px"], null)], null),"288px","0 0 288px","32px 32px 16px 32px",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),"flex","column","100%"]);
athens.devcards.left_sidebar.left_sidebar_collapsed_style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.devcards.left_sidebar.left_sidebar_style,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"align-self","align-self",1475936794)],["1px 0 #EFEDEB",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"40px",new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"auto",new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"4px",new cljs.core.Keyword(null,"grid-auto-flow","grid-auto-flow",-1754873684),"row"], null)], null),"4px","44px","auto auto 1fr","0 0 44px","32px 4px 16px","hidden","grid","stretch"])], 0));
athens.devcards.left_sidebar.main_navigation = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 32px",new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-auto-flow","grid-auto-flow",-1754873684),"row",new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"4px",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-start",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605),"flex-start"], null)], null)], null)], null);
athens.devcards.left_sidebar.shortcuts_list_style = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 32px",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 auto",new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.5",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 4px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"inherit"], null)], null)], null);
athens.devcards.left_sidebar.shortcut_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"link-color","link-color",1347118056).cljs$core$IFn$_invoke$arity$1(athens.style.COLORS),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 0",new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.05s ease",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.8"], null)], null)], null)], null);
athens.devcards.left_sidebar.notional_logotype = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["#000","18px",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.8"], null)], null)], null),"all 0.05s ease","bold","flex-start","0.5","none","-0.05em","center","IBM Plex Serif"]);
athens.devcards.left_sidebar.q_shortcuts = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?order","?order",2076500391,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null)], null);
athens.devcards.left_sidebar.left_sidebar = (function athens$devcards$left_sidebar$left_sidebar(conn){
var open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var shortcuts = (posh.reagent.q.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$2(athens.devcards.left_sidebar.q_shortcuts,conn) : posh.reagent.q.call(null,athens.devcards.left_sidebar.q_shortcuts,conn));
return (function (){
var sorted_shortcuts = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.deref(shortcuts)));
if(cljs.core.not(cljs.core.deref(open_QMARK_))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.left_sidebar.left_sidebar_collapsed_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,cljs.core.not);
}),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ChevronRight], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
var G__50874 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-athena","toggle-athena",102452770)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50874) : re_frame.core.dispatch.call(null,G__50874));
}),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Search], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.left_sidebar.left_sidebar_collapsed_style,new cljs.core.Keyword(null,"footer","footer",1606445390)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.TextFormat], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Settings], null)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.left_sidebar.left_sidebar_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.left_sidebar.left_sidebar_style,new cljs.core.Keyword(null,"top-line","top-line",-1024691303)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.athena.athena_prompt], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,cljs.core.not);
}),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ChevronLeft], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.left_sidebar.main_navigation),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Today], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Daily Notes"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return athens.router.navigate(new cljs.core.Keyword(null,"home","home",-74557309));
}),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.FileCopy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"All Pages"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.BubbleChart], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Graph Overview"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.left_sidebar.shortcuts_list_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.left_sidebar.shortcuts_list_style,new cljs.core.Keyword(null,"heading","heading",-1312171873)),"Shortcuts"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$left_sidebar$left_sidebar_$_iter__50882(s__50883){
return (new cljs.core.LazySeq(null,(function (){
var s__50883__$1 = s__50883;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50883__$1);
if(temp__5735__auto__){
var s__50883__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50883__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50883__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50885 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50884 = (0);
while(true){
if((i__50884 < size__4581__auto__)){
var vec__50886 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50884);
var _order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50886,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50886,(1),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50886,(2),null);
cljs.core.chunk_append(b__50885,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>a","li>a",-1587586072),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.left_sidebar.shortcut_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50884,vec__50886,_order,title,uid,c__4580__auto__,size__4581__auto__,b__50885,s__50883__$2,temp__5735__auto__,sorted_shortcuts,open_QMARK_,shortcuts){
return (function (){
return athens.router.navigate_page(uid);
});})(i__50884,vec__50886,_order,title,uid,c__4580__auto__,size__4581__auto__,b__50885,s__50883__$2,temp__5735__auto__,sorted_shortcuts,open_QMARK_,shortcuts))
], null)),title], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)));

var G__50919 = (i__50884 + (1));
i__50884 = G__50919;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50885),athens$devcards$left_sidebar$left_sidebar_$_iter__50882(cljs.core.chunk_rest(s__50883__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50885),null);
}
} else {
var vec__50889 = cljs.core.first(s__50883__$2);
var _order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50889,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50889,(1),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50889,(2),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>a","li>a",-1587586072),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.left_sidebar.shortcut_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__50889,_order,title,uid,s__50883__$2,temp__5735__auto__,sorted_shortcuts,open_QMARK_,shortcuts){
return (function (){
return athens.router.navigate_page(uid);
});})(vec__50889,_order,title,uid,s__50883__$2,temp__5735__auto__,sorted_shortcuts,open_QMARK_,shortcuts))
], null)),title], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)),athens$devcards$left_sidebar$left_sidebar_$_iter__50882(cljs.core.rest(s__50883__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sorted_shortcuts);
})())], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.left_sidebar.left_sidebar_style,new cljs.core.Keyword(null,"footer","footer",1606445390)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.left_sidebar.notional_logotype,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/athensresearch/athens",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null)),"Athens"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.TextFormat], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Settings], null)], null)], null)], null)], null);
}
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.left_sidebar","athens.devcards.left_sidebar",-1110254216),new cljs.core.Keyword(null,"Left-Sidebar","Left-Sidebar",8868535)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Left-Sidebar",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.left_sidebar !== 'undefined') && (typeof athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50892 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50892 = (function (meta50893){
this.meta50893 = meta50893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50894,meta50893__$1){
var self__ = this;
var _50894__$1 = this;
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50892(meta50893__$1));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50894){
var self__ = this;
var _50894__$1 = this;
return self__.meta50893;
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50892.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50892.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47803__auto__,devcard_opts__47804__auto__){
var self__ = this;
var this__47803__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47804__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47822__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"height","height",1025178622),"60vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.left_sidebar.left_sidebar,athens.devcards.left_sidebar.conn], null)], null);
if(cljs.core.fn_QMARK_(v__47822__auto__)){
return (function (data_atom__47823__auto__,owner__47824__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47822__auto__,data_atom__47823__auto__,owner__47824__auto__], null));
});
} else {
return reagent.core.as_element(v__47822__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47804__auto__))], 0))], 0));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50892.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50893","meta50893",60477056,null)], null);
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50892.cljs$lang$type = true);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50892.cljs$lang$ctorStr = "athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50892");

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50892.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50892");
}));

/**
 * Positional factory function for athens.devcards.left-sidebar/t_athens$devcards$left_sidebar50892.
 */
athens.devcards.left_sidebar.__GT_t_athens$devcards$left_sidebar50892 = (function athens$devcards$left_sidebar$__GT_t_athens$devcards$left_sidebar50892(meta50893){
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50892(meta50893));
});

}

return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar50892(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.left_sidebar.js.map
