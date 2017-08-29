// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12114){
var map__12139 = p__12114;
var map__12139__$1 = ((((!((map__12139 == null)))?((((map__12139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12139):map__12139);
var m = map__12139__$1;
var n = cljs.core.get.call(null,map__12139__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12139__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12141_12163 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12142_12164 = null;
var count__12143_12165 = (0);
var i__12144_12166 = (0);
while(true){
if((i__12144_12166 < count__12143_12165)){
var f_12167 = cljs.core._nth.call(null,chunk__12142_12164,i__12144_12166);
cljs.core.println.call(null,"  ",f_12167);

var G__12168 = seq__12141_12163;
var G__12169 = chunk__12142_12164;
var G__12170 = count__12143_12165;
var G__12171 = (i__12144_12166 + (1));
seq__12141_12163 = G__12168;
chunk__12142_12164 = G__12169;
count__12143_12165 = G__12170;
i__12144_12166 = G__12171;
continue;
} else {
var temp__4657__auto___12172 = cljs.core.seq.call(null,seq__12141_12163);
if(temp__4657__auto___12172){
var seq__12141_12173__$1 = temp__4657__auto___12172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12141_12173__$1)){
var c__10680__auto___12174 = cljs.core.chunk_first.call(null,seq__12141_12173__$1);
var G__12175 = cljs.core.chunk_rest.call(null,seq__12141_12173__$1);
var G__12176 = c__10680__auto___12174;
var G__12177 = cljs.core.count.call(null,c__10680__auto___12174);
var G__12178 = (0);
seq__12141_12163 = G__12175;
chunk__12142_12164 = G__12176;
count__12143_12165 = G__12177;
i__12144_12166 = G__12178;
continue;
} else {
var f_12179 = cljs.core.first.call(null,seq__12141_12173__$1);
cljs.core.println.call(null,"  ",f_12179);

var G__12180 = cljs.core.next.call(null,seq__12141_12173__$1);
var G__12181 = null;
var G__12182 = (0);
var G__12183 = (0);
seq__12141_12163 = G__12180;
chunk__12142_12164 = G__12181;
count__12143_12165 = G__12182;
i__12144_12166 = G__12183;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12184 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9861__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9861__auto__)){
return or__9861__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12184);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12184)))?cljs.core.second.call(null,arglists_12184):arglists_12184));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12145_12185 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12146_12186 = null;
var count__12147_12187 = (0);
var i__12148_12188 = (0);
while(true){
if((i__12148_12188 < count__12147_12187)){
var vec__12149_12189 = cljs.core._nth.call(null,chunk__12146_12186,i__12148_12188);
var name_12190 = cljs.core.nth.call(null,vec__12149_12189,(0),null);
var map__12152_12191 = cljs.core.nth.call(null,vec__12149_12189,(1),null);
var map__12152_12192__$1 = ((((!((map__12152_12191 == null)))?((((map__12152_12191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12152_12191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12152_12191):map__12152_12191);
var doc_12193 = cljs.core.get.call(null,map__12152_12192__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12194 = cljs.core.get.call(null,map__12152_12192__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12190);

cljs.core.println.call(null," ",arglists_12194);

if(cljs.core.truth_(doc_12193)){
cljs.core.println.call(null," ",doc_12193);
} else {
}

var G__12195 = seq__12145_12185;
var G__12196 = chunk__12146_12186;
var G__12197 = count__12147_12187;
var G__12198 = (i__12148_12188 + (1));
seq__12145_12185 = G__12195;
chunk__12146_12186 = G__12196;
count__12147_12187 = G__12197;
i__12148_12188 = G__12198;
continue;
} else {
var temp__4657__auto___12199 = cljs.core.seq.call(null,seq__12145_12185);
if(temp__4657__auto___12199){
var seq__12145_12200__$1 = temp__4657__auto___12199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12145_12200__$1)){
var c__10680__auto___12201 = cljs.core.chunk_first.call(null,seq__12145_12200__$1);
var G__12202 = cljs.core.chunk_rest.call(null,seq__12145_12200__$1);
var G__12203 = c__10680__auto___12201;
var G__12204 = cljs.core.count.call(null,c__10680__auto___12201);
var G__12205 = (0);
seq__12145_12185 = G__12202;
chunk__12146_12186 = G__12203;
count__12147_12187 = G__12204;
i__12148_12188 = G__12205;
continue;
} else {
var vec__12154_12206 = cljs.core.first.call(null,seq__12145_12200__$1);
var name_12207 = cljs.core.nth.call(null,vec__12154_12206,(0),null);
var map__12157_12208 = cljs.core.nth.call(null,vec__12154_12206,(1),null);
var map__12157_12209__$1 = ((((!((map__12157_12208 == null)))?((((map__12157_12208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12157_12208.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12157_12208):map__12157_12208);
var doc_12210 = cljs.core.get.call(null,map__12157_12209__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12211 = cljs.core.get.call(null,map__12157_12209__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12207);

cljs.core.println.call(null," ",arglists_12211);

if(cljs.core.truth_(doc_12210)){
cljs.core.println.call(null," ",doc_12210);
} else {
}

var G__12212 = cljs.core.next.call(null,seq__12145_12200__$1);
var G__12213 = null;
var G__12214 = (0);
var G__12215 = (0);
seq__12145_12185 = G__12212;
chunk__12146_12186 = G__12213;
count__12147_12187 = G__12214;
i__12148_12188 = G__12215;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__12159 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12160 = null;
var count__12161 = (0);
var i__12162 = (0);
while(true){
if((i__12162 < count__12161)){
var role = cljs.core._nth.call(null,chunk__12160,i__12162);
var temp__4657__auto___12216__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12216__$1)){
var spec_12217 = temp__4657__auto___12216__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_12217));
} else {
}

var G__12218 = seq__12159;
var G__12219 = chunk__12160;
var G__12220 = count__12161;
var G__12221 = (i__12162 + (1));
seq__12159 = G__12218;
chunk__12160 = G__12219;
count__12161 = G__12220;
i__12162 = G__12221;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__12159);
if(temp__4657__auto____$1){
var seq__12159__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12159__$1)){
var c__10680__auto__ = cljs.core.chunk_first.call(null,seq__12159__$1);
var G__12222 = cljs.core.chunk_rest.call(null,seq__12159__$1);
var G__12223 = c__10680__auto__;
var G__12224 = cljs.core.count.call(null,c__10680__auto__);
var G__12225 = (0);
seq__12159 = G__12222;
chunk__12160 = G__12223;
count__12161 = G__12224;
i__12162 = G__12225;
continue;
} else {
var role = cljs.core.first.call(null,seq__12159__$1);
var temp__4657__auto___12226__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12226__$2)){
var spec_12227 = temp__4657__auto___12226__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_12227));
} else {
}

var G__12228 = cljs.core.next.call(null,seq__12159__$1);
var G__12229 = null;
var G__12230 = (0);
var G__12231 = (0);
seq__12159 = G__12228;
chunk__12160 = G__12229;
count__12161 = G__12230;
i__12162 = G__12231;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map