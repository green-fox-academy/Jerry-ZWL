// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__10472__auto__,writer__10473__auto__,opt__10474__auto__){
return cljs.core._write.call(null,writer__10473__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13170 = arguments.length;
var i__10975__auto___13171 = (0);
while(true){
if((i__10975__auto___13171 < len__10974__auto___13170)){
args__10981__auto__.push((arguments[i__10975__auto___13171]));

var G__13172 = (i__10975__auto___13171 + (1));
i__10975__auto___13171 = G__13172;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq13169){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13169));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13174 = arguments.length;
var i__10975__auto___13175 = (0);
while(true){
if((i__10975__auto___13175 < len__10974__auto___13174)){
args__10981__auto__.push((arguments[i__10975__auto___13175]));

var G__13176 = (i__10975__auto___13175 + (1));
i__10975__auto___13175 = G__13176;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq13173){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13173));
});

var g_QMARK__13177 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_13178 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13177){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__13177))
,null));
var mkg_13179 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13177,g_13178){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__13177,g_13178))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__13177,g_13178,mkg_13179){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__13177).call(null,x);
});})(g_QMARK__13177,g_13178,mkg_13179))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__13177,g_13178,mkg_13179){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_13179).call(null,gfn);
});})(g_QMARK__13177,g_13178,mkg_13179))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__13177,g_13178,mkg_13179){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_13178).call(null,generator);
});})(g_QMARK__13177,g_13178,mkg_13179))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__11066__auto___13199 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__11066__auto___13199){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13200 = arguments.length;
var i__10975__auto___13201 = (0);
while(true){
if((i__10975__auto___13201 < len__10974__auto___13200)){
args__10981__auto__.push((arguments[i__10975__auto___13201]));

var G__13202 = (i__10975__auto___13201 + (1));
i__10975__auto___13201 = G__13202;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11066__auto___13199))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11066__auto___13199){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11066__auto___13199),args);
});})(g__11066__auto___13199))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__11066__auto___13199){
return (function (seq13180){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13180));
});})(g__11066__auto___13199))
;


var g__11066__auto___13203 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__11066__auto___13203){
return (function cljs$spec$impl$gen$list(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13204 = arguments.length;
var i__10975__auto___13205 = (0);
while(true){
if((i__10975__auto___13205 < len__10974__auto___13204)){
args__10981__auto__.push((arguments[i__10975__auto___13205]));

var G__13206 = (i__10975__auto___13205 + (1));
i__10975__auto___13205 = G__13206;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11066__auto___13203))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11066__auto___13203){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11066__auto___13203),args);
});})(g__11066__auto___13203))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__11066__auto___13203){
return (function (seq13181){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13181));
});})(g__11066__auto___13203))
;


var g__11066__auto___13207 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__11066__auto___13207){
return (function cljs$spec$impl$gen$map(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13208 = arguments.length;
var i__10975__auto___13209 = (0);
while(true){
if((i__10975__auto___13209 < len__10974__auto___13208)){
args__10981__auto__.push((arguments[i__10975__auto___13209]));

var G__13210 = (i__10975__auto___13209 + (1));
i__10975__auto___13209 = G__13210;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11066__auto___13207))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11066__auto___13207){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11066__auto___13207),args);
});})(g__11066__auto___13207))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__11066__auto___13207){
return (function (seq13182){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13182));
});})(g__11066__auto___13207))
;


var g__11066__auto___13211 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__11066__auto___13211){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13212 = arguments.length;
var i__10975__auto___13213 = (0);
while(true){
if((i__10975__auto___13213 < len__10974__auto___13212)){
args__10981__auto__.push((arguments[i__10975__auto___13213]));

var G__13214 = (i__10975__auto___13213 + (1));
i__10975__auto___13213 = G__13214;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11066__auto___13211))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11066__auto___13211){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11066__auto___13211),args);
});})(g__11066__auto___13211))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__11066__auto___13211){
return (function (seq13183){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13183));
});})(g__11066__auto___13211))
;


var g__11066__auto___13215 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__11066__auto___13215){
return (function cljs$spec$impl$gen$set(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13216 = arguments.length;
var i__10975__auto___13217 = (0);
while(true){
if((i__10975__auto___13217 < len__10974__auto___13216)){
args__10981__auto__.push((arguments[i__10975__auto___13217]));

var G__13218 = (i__10975__auto___13217 + (1));
i__10975__auto___13217 = G__13218;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11066__auto___13215))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11066__auto___13215){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11066__auto___13215),args);
});})(g__11066__auto___13215))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__11066__auto___13215){
return (function (seq13184){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13184));
});})(g__11066__auto___13215))
;


var g__11066__auto___13219 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__11066__auto___13219){
return (function cljs$spec$impl$gen$vector(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13220 = arguments.length;
var i__10975__auto___13221 = (0);
while(true){
if((i__10975__auto___13221 < len__10974__auto___13220)){
args__10981__auto__.push((arguments[i__10975__auto___13221]));

var G__13222 = (i__10975__auto___13221 + (1));
i__10975__auto___13221 = G__13222;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11066__auto___13219))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11066__auto___13219){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11066__auto___13219),args);
});})(g__11066__auto___13219))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__11066__auto___13219){
return (function (seq13185){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13185));
});})(g__11066__auto___13219))
;


var g__11066__auto___13223 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__11066__auto___13223){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13224 = arguments.length;
var i__10975__auto___13225 = (0);
while(true){
if((i__10975__auto___13225 < len__10974__auto___13224)){
args__10981__auto__.push((arguments[i__10975__auto___13225]));

var G__13226 = (i__10975__auto___13225 + (1));
i__10975__auto___13225 = G__13226;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11066__auto___13223))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11066__auto___13223){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11066__auto___13223),args);
});})(g__11066__auto___13223))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__11066__auto___13223){
return (function (seq13186){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13186));
});})(g__11066__auto___13223))
;


var g__11066__auto___13227 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__11066__auto___13227){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13228 = arguments.length;
var i__10975__auto___13229 = (0);
while(true){
if((i__10975__auto___13229 < len__10974__auto___13228)){
args__10981__auto__.push((arguments[i__10975__auto___13229]));

var G__13230 = (i__10975__auto___13229 + (1));
i__10975__auto___13229 = G__13230;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11066__auto___13227))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11066__auto___13227){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11066__auto___13227),args);
});})(g__11066__auto___13227))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__11066__auto___13227){
return (function (seq13187){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13187));
});})(g__11066__auto___13227))
;


var g__11066__auto___13231 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__11066__auto___13231){
return (function cljs$spec$impl$gen$elements(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13232 = arguments.length;
var i__10975__auto___13233 = (0);
while(true){
if((i__10975__auto___13233 < len__10974__auto___13232)){
args__10981__auto__.push((arguments[i__10975__auto___13233]));

var G__13234 = (i__10975__auto___13233 + (1));
i__10975__auto___13233 = G__13234;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11066__auto___13231))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11066__auto___13231){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11066__auto___13231),args);
});})(g__11066__auto___13231))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__11066__auto___13231){
return (function (seq13188){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13188));
});})(g__11066__auto___13231))
;


var g__11066__auto___13235 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__11066__auto___13235){
return (function cljs$spec$impl$gen$bind(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13236 = arguments.length;
var i__10975__auto___13237 = (0);
while(true){
if((i__10975__auto___13237 < len__10974__auto___13236)){
args__10981__auto__.push((arguments[i__10975__auto___13237]));

var G__13238 = (i__10975__auto___13237 + (1));
i__10975__auto___13237 = G__13238;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11066__auto___13235))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11066__auto___13235){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11066__auto___13235),args);
});})(g__11066__auto___13235))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__11066__auto___13235){
return (function (seq13189){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13189));
});})(g__11066__auto___13235))
;


var g__11066__auto___13239 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__11066__auto___13239){
return (function cljs$spec$impl$gen$choose(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13240 = arguments.length;
var i__10975__auto___13241 = (0);
while(true){
if((i__10975__auto___13241 < len__10974__auto___13240)){
args__10981__auto__.push((arguments[i__10975__auto___13241]));

var G__13242 = (i__10975__auto___13241 + (1));
i__10975__auto___13241 = G__13242;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11066__auto___13239))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11066__auto___13239){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11066__auto___13239),args);
});})(g__11066__auto___13239))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__11066__auto___13239){
return (function (seq13190){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13190));
});})(g__11066__auto___13239))
;


var g__11066__auto___13243 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__11066__auto___13243){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13244 = arguments.length;
var i__10975__auto___13245 = (0);
while(true){
if((i__10975__auto___13245 < len__10974__auto___13244)){
args__10981__auto__.push((arguments[i__10975__auto___13245]));

var G__13246 = (i__10975__auto___13245 + (1));
i__10975__auto___13245 = G__13246;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11066__auto___13243))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11066__auto___13243){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11066__auto___13243),args);
});})(g__11066__auto___13243))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__11066__auto___13243){
return (function (seq13191){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13191));
});})(g__11066__auto___13243))
;


var g__11066__auto___13247 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__11066__auto___13247){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13248 = arguments.length;
var i__10975__auto___13249 = (0);
while(true){
if((i__10975__auto___13249 < len__10974__auto___13248)){
args__10981__auto__.push((arguments[i__10975__auto___13249]));

var G__13250 = (i__10975__auto___13249 + (1));
i__10975__auto___13249 = G__13250;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11066__auto___13247))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11066__auto___13247){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11066__auto___13247),args);
});})(g__11066__auto___13247))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__11066__auto___13247){
return (function (seq13192){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13192));
});})(g__11066__auto___13247))
;


var g__11066__auto___13251 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__11066__auto___13251){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13252 = arguments.length;
var i__10975__auto___13253 = (0);
while(true){
if((i__10975__auto___13253 < len__10974__auto___13252)){
args__10981__auto__.push((arguments[i__10975__auto___13253]));

var G__13254 = (i__10975__auto___13253 + (1));
i__10975__auto___13253 = G__13254;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11066__auto___13251))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11066__auto___13251){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11066__auto___13251),args);
});})(g__11066__auto___13251))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__11066__auto___13251){
return (function (seq13193){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13193));
});})(g__11066__auto___13251))
;


var g__11066__auto___13255 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__11066__auto___13255){
return (function cljs$spec$impl$gen$sample(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13256 = arguments.length;
var i__10975__auto___13257 = (0);
while(true){
if((i__10975__auto___13257 < len__10974__auto___13256)){
args__10981__auto__.push((arguments[i__10975__auto___13257]));

var G__13258 = (i__10975__auto___13257 + (1));
i__10975__auto___13257 = G__13258;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11066__auto___13255))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11066__auto___13255){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11066__auto___13255),args);
});})(g__11066__auto___13255))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__11066__auto___13255){
return (function (seq13194){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13194));
});})(g__11066__auto___13255))
;


var g__11066__auto___13259 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__11066__auto___13259){
return (function cljs$spec$impl$gen$return(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13260 = arguments.length;
var i__10975__auto___13261 = (0);
while(true){
if((i__10975__auto___13261 < len__10974__auto___13260)){
args__10981__auto__.push((arguments[i__10975__auto___13261]));

var G__13262 = (i__10975__auto___13261 + (1));
i__10975__auto___13261 = G__13262;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11066__auto___13259))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11066__auto___13259){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11066__auto___13259),args);
});})(g__11066__auto___13259))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__11066__auto___13259){
return (function (seq13195){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13195));
});})(g__11066__auto___13259))
;


var g__11066__auto___13263 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__11066__auto___13263){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13264 = arguments.length;
var i__10975__auto___13265 = (0);
while(true){
if((i__10975__auto___13265 < len__10974__auto___13264)){
args__10981__auto__.push((arguments[i__10975__auto___13265]));

var G__13266 = (i__10975__auto___13265 + (1));
i__10975__auto___13265 = G__13266;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11066__auto___13263))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11066__auto___13263){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11066__auto___13263),args);
});})(g__11066__auto___13263))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__11066__auto___13263){
return (function (seq13196){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13196));
});})(g__11066__auto___13263))
;


var g__11066__auto___13267 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__11066__auto___13267){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13268 = arguments.length;
var i__10975__auto___13269 = (0);
while(true){
if((i__10975__auto___13269 < len__10974__auto___13268)){
args__10981__auto__.push((arguments[i__10975__auto___13269]));

var G__13270 = (i__10975__auto___13269 + (1));
i__10975__auto___13269 = G__13270;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11066__auto___13267))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11066__auto___13267){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11066__auto___13267),args);
});})(g__11066__auto___13267))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__11066__auto___13267){
return (function (seq13197){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13197));
});})(g__11066__auto___13267))
;


var g__11066__auto___13271 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__11066__auto___13271){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13272 = arguments.length;
var i__10975__auto___13273 = (0);
while(true){
if((i__10975__auto___13273 < len__10974__auto___13272)){
args__10981__auto__.push((arguments[i__10975__auto___13273]));

var G__13274 = (i__10975__auto___13273 + (1));
i__10975__auto___13273 = G__13274;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11066__auto___13271))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11066__auto___13271){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11066__auto___13271),args);
});})(g__11066__auto___13271))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__11066__auto___13271){
return (function (seq13198){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13198));
});})(g__11066__auto___13271))
;

var g__11079__auto___13296 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__11079__auto___13296){
return (function cljs$spec$impl$gen$any(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13297 = arguments.length;
var i__10975__auto___13298 = (0);
while(true){
if((i__10975__auto___13298 < len__10974__auto___13297)){
args__10981__auto__.push((arguments[i__10975__auto___13298]));

var G__13299 = (i__10975__auto___13298 + (1));
i__10975__auto___13298 = G__13299;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11079__auto___13296))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11079__auto___13296){
return (function (args){
return cljs.core.deref.call(null,g__11079__auto___13296);
});})(g__11079__auto___13296))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__11079__auto___13296){
return (function (seq13275){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13275));
});})(g__11079__auto___13296))
;


var g__11079__auto___13300 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__11079__auto___13300){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13301 = arguments.length;
var i__10975__auto___13302 = (0);
while(true){
if((i__10975__auto___13302 < len__10974__auto___13301)){
args__10981__auto__.push((arguments[i__10975__auto___13302]));

var G__13303 = (i__10975__auto___13302 + (1));
i__10975__auto___13302 = G__13303;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11079__auto___13300))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11079__auto___13300){
return (function (args){
return cljs.core.deref.call(null,g__11079__auto___13300);
});})(g__11079__auto___13300))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__11079__auto___13300){
return (function (seq13276){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13276));
});})(g__11079__auto___13300))
;


var g__11079__auto___13304 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__11079__auto___13304){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13305 = arguments.length;
var i__10975__auto___13306 = (0);
while(true){
if((i__10975__auto___13306 < len__10974__auto___13305)){
args__10981__auto__.push((arguments[i__10975__auto___13306]));

var G__13307 = (i__10975__auto___13306 + (1));
i__10975__auto___13306 = G__13307;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11079__auto___13304))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11079__auto___13304){
return (function (args){
return cljs.core.deref.call(null,g__11079__auto___13304);
});})(g__11079__auto___13304))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__11079__auto___13304){
return (function (seq13277){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13277));
});})(g__11079__auto___13304))
;


var g__11079__auto___13308 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__11079__auto___13308){
return (function cljs$spec$impl$gen$char(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13309 = arguments.length;
var i__10975__auto___13310 = (0);
while(true){
if((i__10975__auto___13310 < len__10974__auto___13309)){
args__10981__auto__.push((arguments[i__10975__auto___13310]));

var G__13311 = (i__10975__auto___13310 + (1));
i__10975__auto___13310 = G__13311;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11079__auto___13308))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11079__auto___13308){
return (function (args){
return cljs.core.deref.call(null,g__11079__auto___13308);
});})(g__11079__auto___13308))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__11079__auto___13308){
return (function (seq13278){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13278));
});})(g__11079__auto___13308))
;


var g__11079__auto___13312 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__11079__auto___13312){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13313 = arguments.length;
var i__10975__auto___13314 = (0);
while(true){
if((i__10975__auto___13314 < len__10974__auto___13313)){
args__10981__auto__.push((arguments[i__10975__auto___13314]));

var G__13315 = (i__10975__auto___13314 + (1));
i__10975__auto___13314 = G__13315;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11079__auto___13312))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11079__auto___13312){
return (function (args){
return cljs.core.deref.call(null,g__11079__auto___13312);
});})(g__11079__auto___13312))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__11079__auto___13312){
return (function (seq13279){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13279));
});})(g__11079__auto___13312))
;


var g__11079__auto___13316 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__11079__auto___13316){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13317 = arguments.length;
var i__10975__auto___13318 = (0);
while(true){
if((i__10975__auto___13318 < len__10974__auto___13317)){
args__10981__auto__.push((arguments[i__10975__auto___13318]));

var G__13319 = (i__10975__auto___13318 + (1));
i__10975__auto___13318 = G__13319;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11079__auto___13316))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11079__auto___13316){
return (function (args){
return cljs.core.deref.call(null,g__11079__auto___13316);
});})(g__11079__auto___13316))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__11079__auto___13316){
return (function (seq13280){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13280));
});})(g__11079__auto___13316))
;


var g__11079__auto___13320 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__11079__auto___13320){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13321 = arguments.length;
var i__10975__auto___13322 = (0);
while(true){
if((i__10975__auto___13322 < len__10974__auto___13321)){
args__10981__auto__.push((arguments[i__10975__auto___13322]));

var G__13323 = (i__10975__auto___13322 + (1));
i__10975__auto___13322 = G__13323;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11079__auto___13320))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11079__auto___13320){
return (function (args){
return cljs.core.deref.call(null,g__11079__auto___13320);
});})(g__11079__auto___13320))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__11079__auto___13320){
return (function (seq13281){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13281));
});})(g__11079__auto___13320))
;


var g__11079__auto___13324 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__11079__auto___13324){
return (function cljs$spec$impl$gen$double(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13325 = arguments.length;
var i__10975__auto___13326 = (0);
while(true){
if((i__10975__auto___13326 < len__10974__auto___13325)){
args__10981__auto__.push((arguments[i__10975__auto___13326]));

var G__13327 = (i__10975__auto___13326 + (1));
i__10975__auto___13326 = G__13327;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11079__auto___13324))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11079__auto___13324){
return (function (args){
return cljs.core.deref.call(null,g__11079__auto___13324);
});})(g__11079__auto___13324))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__11079__auto___13324){
return (function (seq13282){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13282));
});})(g__11079__auto___13324))
;


var g__11079__auto___13328 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__11079__auto___13328){
return (function cljs$spec$impl$gen$int(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13329 = arguments.length;
var i__10975__auto___13330 = (0);
while(true){
if((i__10975__auto___13330 < len__10974__auto___13329)){
args__10981__auto__.push((arguments[i__10975__auto___13330]));

var G__13331 = (i__10975__auto___13330 + (1));
i__10975__auto___13330 = G__13331;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11079__auto___13328))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11079__auto___13328){
return (function (args){
return cljs.core.deref.call(null,g__11079__auto___13328);
});})(g__11079__auto___13328))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__11079__auto___13328){
return (function (seq13283){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13283));
});})(g__11079__auto___13328))
;


var g__11079__auto___13332 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__11079__auto___13332){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13333 = arguments.length;
var i__10975__auto___13334 = (0);
while(true){
if((i__10975__auto___13334 < len__10974__auto___13333)){
args__10981__auto__.push((arguments[i__10975__auto___13334]));

var G__13335 = (i__10975__auto___13334 + (1));
i__10975__auto___13334 = G__13335;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11079__auto___13332))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11079__auto___13332){
return (function (args){
return cljs.core.deref.call(null,g__11079__auto___13332);
});})(g__11079__auto___13332))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__11079__auto___13332){
return (function (seq13284){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13284));
});})(g__11079__auto___13332))
;


var g__11079__auto___13336 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__11079__auto___13336){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13337 = arguments.length;
var i__10975__auto___13338 = (0);
while(true){
if((i__10975__auto___13338 < len__10974__auto___13337)){
args__10981__auto__.push((arguments[i__10975__auto___13338]));

var G__13339 = (i__10975__auto___13338 + (1));
i__10975__auto___13338 = G__13339;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11079__auto___13336))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11079__auto___13336){
return (function (args){
return cljs.core.deref.call(null,g__11079__auto___13336);
});})(g__11079__auto___13336))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__11079__auto___13336){
return (function (seq13285){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13285));
});})(g__11079__auto___13336))
;


var g__11079__auto___13340 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__11079__auto___13340){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13341 = arguments.length;
var i__10975__auto___13342 = (0);
while(true){
if((i__10975__auto___13342 < len__10974__auto___13341)){
args__10981__auto__.push((arguments[i__10975__auto___13342]));

var G__13343 = (i__10975__auto___13342 + (1));
i__10975__auto___13342 = G__13343;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11079__auto___13340))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11079__auto___13340){
return (function (args){
return cljs.core.deref.call(null,g__11079__auto___13340);
});})(g__11079__auto___13340))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__11079__auto___13340){
return (function (seq13286){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13286));
});})(g__11079__auto___13340))
;


var g__11079__auto___13344 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__11079__auto___13344){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13345 = arguments.length;
var i__10975__auto___13346 = (0);
while(true){
if((i__10975__auto___13346 < len__10974__auto___13345)){
args__10981__auto__.push((arguments[i__10975__auto___13346]));

var G__13347 = (i__10975__auto___13346 + (1));
i__10975__auto___13346 = G__13347;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11079__auto___13344))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11079__auto___13344){
return (function (args){
return cljs.core.deref.call(null,g__11079__auto___13344);
});})(g__11079__auto___13344))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__11079__auto___13344){
return (function (seq13287){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13287));
});})(g__11079__auto___13344))
;


var g__11079__auto___13348 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__11079__auto___13348){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13349 = arguments.length;
var i__10975__auto___13350 = (0);
while(true){
if((i__10975__auto___13350 < len__10974__auto___13349)){
args__10981__auto__.push((arguments[i__10975__auto___13350]));

var G__13351 = (i__10975__auto___13350 + (1));
i__10975__auto___13350 = G__13351;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11079__auto___13348))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11079__auto___13348){
return (function (args){
return cljs.core.deref.call(null,g__11079__auto___13348);
});})(g__11079__auto___13348))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__11079__auto___13348){
return (function (seq13288){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13288));
});})(g__11079__auto___13348))
;


var g__11079__auto___13352 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__11079__auto___13352){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13353 = arguments.length;
var i__10975__auto___13354 = (0);
while(true){
if((i__10975__auto___13354 < len__10974__auto___13353)){
args__10981__auto__.push((arguments[i__10975__auto___13354]));

var G__13355 = (i__10975__auto___13354 + (1));
i__10975__auto___13354 = G__13355;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11079__auto___13352))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11079__auto___13352){
return (function (args){
return cljs.core.deref.call(null,g__11079__auto___13352);
});})(g__11079__auto___13352))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__11079__auto___13352){
return (function (seq13289){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13289));
});})(g__11079__auto___13352))
;


var g__11079__auto___13356 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__11079__auto___13356){
return (function cljs$spec$impl$gen$string(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13357 = arguments.length;
var i__10975__auto___13358 = (0);
while(true){
if((i__10975__auto___13358 < len__10974__auto___13357)){
args__10981__auto__.push((arguments[i__10975__auto___13358]));

var G__13359 = (i__10975__auto___13358 + (1));
i__10975__auto___13358 = G__13359;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11079__auto___13356))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11079__auto___13356){
return (function (args){
return cljs.core.deref.call(null,g__11079__auto___13356);
});})(g__11079__auto___13356))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__11079__auto___13356){
return (function (seq13290){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13290));
});})(g__11079__auto___13356))
;


var g__11079__auto___13360 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__11079__auto___13360){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13361 = arguments.length;
var i__10975__auto___13362 = (0);
while(true){
if((i__10975__auto___13362 < len__10974__auto___13361)){
args__10981__auto__.push((arguments[i__10975__auto___13362]));

var G__13363 = (i__10975__auto___13362 + (1));
i__10975__auto___13362 = G__13363;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11079__auto___13360))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11079__auto___13360){
return (function (args){
return cljs.core.deref.call(null,g__11079__auto___13360);
});})(g__11079__auto___13360))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__11079__auto___13360){
return (function (seq13291){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13291));
});})(g__11079__auto___13360))
;


var g__11079__auto___13364 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__11079__auto___13364){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13365 = arguments.length;
var i__10975__auto___13366 = (0);
while(true){
if((i__10975__auto___13366 < len__10974__auto___13365)){
args__10981__auto__.push((arguments[i__10975__auto___13366]));

var G__13367 = (i__10975__auto___13366 + (1));
i__10975__auto___13366 = G__13367;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11079__auto___13364))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11079__auto___13364){
return (function (args){
return cljs.core.deref.call(null,g__11079__auto___13364);
});})(g__11079__auto___13364))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__11079__auto___13364){
return (function (seq13292){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13292));
});})(g__11079__auto___13364))
;


var g__11079__auto___13368 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__11079__auto___13368){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13369 = arguments.length;
var i__10975__auto___13370 = (0);
while(true){
if((i__10975__auto___13370 < len__10974__auto___13369)){
args__10981__auto__.push((arguments[i__10975__auto___13370]));

var G__13371 = (i__10975__auto___13370 + (1));
i__10975__auto___13370 = G__13371;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11079__auto___13368))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11079__auto___13368){
return (function (args){
return cljs.core.deref.call(null,g__11079__auto___13368);
});})(g__11079__auto___13368))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__11079__auto___13368){
return (function (seq13293){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13293));
});})(g__11079__auto___13368))
;


var g__11079__auto___13372 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__11079__auto___13372){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13373 = arguments.length;
var i__10975__auto___13374 = (0);
while(true){
if((i__10975__auto___13374 < len__10974__auto___13373)){
args__10981__auto__.push((arguments[i__10975__auto___13374]));

var G__13375 = (i__10975__auto___13374 + (1));
i__10975__auto___13374 = G__13375;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11079__auto___13372))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11079__auto___13372){
return (function (args){
return cljs.core.deref.call(null,g__11079__auto___13372);
});})(g__11079__auto___13372))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__11079__auto___13372){
return (function (seq13294){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13294));
});})(g__11079__auto___13372))
;


var g__11079__auto___13376 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__11079__auto___13376){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13377 = arguments.length;
var i__10975__auto___13378 = (0);
while(true){
if((i__10975__auto___13378 < len__10974__auto___13377)){
args__10981__auto__.push((arguments[i__10975__auto___13378]));

var G__13379 = (i__10975__auto___13378 + (1));
i__10975__auto___13378 = G__13379;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});})(g__11079__auto___13376))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11079__auto___13376){
return (function (args){
return cljs.core.deref.call(null,g__11079__auto___13376);
});})(g__11079__auto___13376))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__11079__auto___13376){
return (function (seq13295){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13295));
});})(g__11079__auto___13376))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__10981__auto__ = [];
var len__10974__auto___13382 = arguments.length;
var i__10975__auto___13383 = (0);
while(true){
if((i__10975__auto___13383 < len__10974__auto___13382)){
args__10981__auto__.push((arguments[i__10975__auto___13383]));

var G__13384 = (i__10975__auto___13383 + (1));
i__10975__auto___13383 = G__13384;
continue;
} else {
}
break;
}

var argseq__10982__auto__ = ((((0) < args__10981__auto__.length))?(new cljs.core.IndexedSeq(args__10981__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__10982__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__13380_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__13380_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq13381){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13381));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__13385_SHARP_){
return (new Date(p1__13385_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map