// Compiled by ClojureScript 1.9.473 {}
goog.provide('exercises_cljs.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello, World!");
cljs.core.print.call(null,"exercise 1");
cljs.core.println.call(null,"Hello, Jerry!");
cljs.core.print.call(null,"exercise 2");
cljs.core.println.call(null,"All the king's horses and all the king's men");
cljs.core.println.call(null,"Humpty Dumpty sat on a wall,");
cljs.core.println.call(null,"All the king's horses and all the king's men");
cljs.core.println.call(null,"Couldn't put Humpty together again.");
cljs.core.println.call(null,"exercise 3");
cljs.core.println.call(null,"Hello, Esther!");
cljs.core.println.call(null,"Hello, Mary!");
cljs.core.println.call(null,"Hello, Joe!");
cljs.core.print.call(null,"exerceise 4");
cljs.core.println.call(null,"jerry z w liu");
cljs.core.println.call(null,"28");
cljs.core.println.call(null,"1.76");
cljs.core.print.call(null,"exercise 5");
console.log("13 + 22",((13) + (22)));
console.log("22 - 13",((22) - (13)));
cljs.core.print.call(null,"22 * 13",((22) * (13)));
cljs.core.print.call(null,"22 / 13",((22) / (13)));
cljs.core.print.call(null,"22 % 13",cljs.core.mod.call(null,(22),(13)));
cljs.core.print.call(null,"exercise 6");
console.log("hours spent in coding in a semester: ",(((17) * (5)) * (6)),"percentage",((((6) * (5)) * (100)) / 52.0),"%");
cljs.core.print.call(null,"exercise 7");
cljs.core.print.call(null,"my favourite number is ",(6));
cljs.core.print.call(null,"exercise 8");
exercises_cljs.core.a = (123);
exercises_cljs.core.b = (526);
exercises_cljs.core.swap = (function exercises_cljs$core$swap(){
var c = exercises_cljs.core.a;
var a12123 = exercises_cljs.core.a;
var b12124 = exercises_cljs.core.b;
exercises_cljs.core.a = exercises_cljs.core.b;

exercises_cljs.core.b = c;

try{return cljs.core.println.call(null,"a ",exercises_cljs.core.a,"b ",exercises_cljs.core.b);
}finally {exercises_cljs.core.b = b12124;

exercises_cljs.core.a = a12123;
}});
exercises_cljs.core.swap.call(null);
cljs.core.print.call(null,"exercise 9");
cljs.core.println.call(null,"BMI",(81.2 / (1.78 * 1.78)));
cljs.core.print.call(null,"exercise 10");
exercises_cljs.core.name1 = "jerry z w liu";
exercises_cljs.core.age = (28);
exercises_cljs.core.height = 176.0;
exercises_cljs.core.married = false;
console.log("name:",exercises_cljs.core.name1,"age:",exercises_cljs.core.age,"height:",exercises_cljs.core.height,"married:",exercises_cljs.core.married);
cljs.core.println.call(null,"exercise 11");
exercises_cljs.core.aa = (3);
var aa12125_12126 = exercises_cljs.core.aa;
exercises_cljs.core.aa = (11);

try{cljs.core.println.call(null,exercises_cljs.core.aa);
}finally {exercises_cljs.core.aa = aa12125_12126;
}exercises_cljs.core.bb = (100);
var bb12127_12128 = exercises_cljs.core.bb;
exercises_cljs.core.bb = (6);

try{cljs.core.println.call(null,exercises_cljs.core.bb);
}finally {exercises_cljs.core.bb = bb12127_12128;
}exercises_cljs.core.cc = (44);
cljs.core.println.call(null,(exercises_cljs.core.cc * 1.0));
exercises_cljs.core.d = (125);
cljs.core.println.call(null,(exercises_cljs.core.d / (5)));
exercises_cljs.core.e = (8);
cljs.core.println.call(null,(((8) * (8)) * (8)));
exercises_cljs.core.f1 = (123);
exercises_cljs.core.f2 = (345);
cljs.core.print.call(null,(exercises_cljs.core.f1 > exercises_cljs.core.f2));
exercises_cljs.core.g1 = (350);
exercises_cljs.core.g2 = (200);
cljs.core.print.call(null,((exercises_cljs.core.g2 * 1.0) > exercises_cljs.core.g1));
exercises_cljs.core.h = (1357988018575474);
cljs.core.print.call(null,cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,exercises_cljs.core.h,(11))));
exercises_cljs.core.i1 = (10);
exercises_cljs.core.i2 = (3);
cljs.core.print.call(null,((exercises_cljs.core.i1 > (exercises_cljs.core.i2 * exercises_cljs.core.i2))) && ((exercises_cljs.core.i1 < ((exercises_cljs.core.i2 * exercises_cljs.core.i2) * exercises_cljs.core.i2))));
exercises_cljs.core.j = (1521);
cljs.core.print.call(null,(cljs.core.boolean$.call(null,cljs.core.mod.call(null,exercises_cljs.core.j,(3)))) || (cljs.core.boolean$.call(null,cljs.core.mod.call(null,exercises_cljs.core.j,(5)))));
exercises_cljs.core.k = "Apple";
cljs.core.print.call(null,clojure.string.join.call(null,"",cljs.core.take.call(null,(4),cljs.core.repeat.call(null,exercises_cljs.core.k))));
cljs.core.println.call(null,"exercise 12");
exercises_cljs.core.ll = (10);
exercises_cljs.core.ww = (10);
exercises_cljs.core.hh = (10);
cljs.core.println.call(null,"volume ",((exercises_cljs.core.ll * exercises_cljs.core.ww) * exercises_cljs.core.hh));
exercises_cljs.core.vol = (function exercises_cljs$core$vol(){
var s = (function (){var iter__7901__auto__ = (function exercises_cljs$core$vol_$_iter__12135(s__12136){
return (new cljs.core.LazySeq(null,(function (){
var s__12136__$1 = s__12136;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12136__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__7897__auto__ = ((function (s__12136__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function exercises_cljs$core$vol_$_iter__12135_$_iter__12137(s__12138){
return (new cljs.core.LazySeq(null,((function (s__12136__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__12138__$1 = s__12138;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__12138__$1);
if(temp__4657__auto____$1){
var s__12138__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12138__$2)){
var c__7899__auto__ = cljs.core.chunk_first.call(null,s__12138__$2);
var size__7900__auto__ = cljs.core.count.call(null,c__7899__auto__);
var b__12140 = cljs.core.chunk_buffer.call(null,size__7900__auto__);
if((function (){var i__12139 = (0);
while(true){
if((i__12139 < size__7900__auto__)){
var j = cljs.core._nth.call(null,c__7899__auto__,i__12139);
cljs.core.chunk_append.call(null,b__12140,(i * j));

var G__12141 = (i__12139 + (1));
i__12139 = G__12141;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12140),exercises_cljs$core$vol_$_iter__12135_$_iter__12137.call(null,cljs.core.chunk_rest.call(null,s__12138__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12140),null);
}
} else {
var j = cljs.core.first.call(null,s__12138__$2);
return cljs.core.cons.call(null,(i * j),exercises_cljs$core$vol_$_iter__12135_$_iter__12137.call(null,cljs.core.rest.call(null,s__12138__$2)));
}
} else {
return null;
}
break;
}
});})(s__12136__$1,i,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__12136__$1,i,xs__5205__auto__,temp__4657__auto__))
;
var fs__7898__auto__ = cljs.core.seq.call(null,iterys__7897__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exercises_cljs.core.ll,exercises_cljs.core.ww,exercises_cljs.core.hh], null)));
if(fs__7898__auto__){
return cljs.core.concat.call(null,fs__7898__auto__,exercises_cljs$core$vol_$_iter__12135.call(null,cljs.core.rest.call(null,s__12136__$1)));
} else {
var G__12142 = cljs.core.rest.call(null,s__12136__$1);
s__12136__$1 = G__12142;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7901__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exercises_cljs.core.ll,exercises_cljs.core.ww,exercises_cljs.core.hh], null));
})();
var ll2 = (exercises_cljs.core.ll * exercises_cljs.core.ll);
var ww2 = (exercises_cljs.core.ww * exercises_cljs.core.ww);
var hh2 = (exercises_cljs.core.hh * exercises_cljs.core.hh);
return (((cljs.core.reduce.call(null,cljs.core._PLUS_,s) - ll2) - ww2) - hh2);
});
cljs.core.println.call(null,"surface ",exercises_cljs.core.vol.call(null));
cljs.core.println.call(null,"exercise 13");
exercises_cljs.core.remindSeconds = (function exercises_cljs$core$remindSeconds(h,m,s){
var h__$1 = (((24) - h) - (1));
var m__$1 = (((60) - m) - (1));
var s__$1 = ((60) - s);
return (((((60) * (60)) * h__$1) + ((60) * m__$1)) + s__$1);
});
cljs.core.println.call(null,"remindseconds ",exercises_cljs.core.remindSeconds.call(null,(14),(34),(42)));

//# sourceMappingURL=core.js.map