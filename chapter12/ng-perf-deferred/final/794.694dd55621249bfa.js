"use strict";(self.webpackChunkng_perf_deferred=self.webpackChunkng_perf_deferred||[]).push([[794],{8794:(P,l,e)=>{e.r(l),e.d(l,{SwCharacterComponent:()=>B});var t=e(3953),a=e(177),c=e(1397),m=e(7468),d=e(9437),g=e(7673),v=e(1626),u=e(3236),C=e(8793),f=e(6697),F=e(9974),x=e(4360),j=e(5343),S=e(3703),O=e(8750);function p(r,o){return o?n=>(0,C.x)(o.pipe((0,f.s)(1),function E(){return(0,F.N)((r,o)=>{r.subscribe((0,x._)(o,j.l))})}()),n.pipe(p(r))):(0,c.Z)((n,s)=>(0,O.Tg)(r(n,s)).pipe((0,f.s)(1),(0,S.u)(n)))}var $=e(1584);function h(r,o=u.E){const n=(0,$.O)(r,o);return p(()=>n)}let D=(()=>{class r{constructor(){this.http=(0,t.WQX)(v.Qq),this.apiBaseUrl=`${location.href}assets/data`}fetchPerson(n){return this.http.get(`${this.apiBaseUrl}/people/${n}.json`).pipe(h(500*Math.floor(2*Math.random()+1)))}fetchFilm(n){return this.http.get(`${this.apiBaseUrl}/${n}.json`).pipe(h(500*Math.ceil(4*Math.random())))}static#t=this.\u0275fac=function(s){return new(s||r)};static#n=this.\u0275prov=t.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var I=e(9451);function y(r,o){if(1&r&&(t.j41(0,"div",5)(1,"h2",6),t.EFF(2),t.k0s()()),2&r){const n=o.$implicit;t.R7$(2),t.SpI("Film: ",n.title,"")}}function T(r,o){if(1&r&&(t.qex(0),t.j41(1,"div",2),t.EFF(2),t.k0s(),t.j41(3,"div",3),t.DNE(4,y,3,1,"div",4),t.k0s(),t.bVm()),2&r){const n=t.XpG();t.R7$(2),t.SpI(" Person: ",n.person.name," "),t.R7$(2),t.Y8G("ngForOf",n.person.filmObjects)}}function M(r,o){1&r&&t.nrm(0,"app-loader")}let B=(()=>{class r{constructor(){this.swapi=(0,t.WQX)(D),this.loadingData=!1}ngOnInit(){this.fetchData()}fetchData(){this.loadingData=!0,this.swapi.fetchPerson("1").pipe((0,c.Z)(n=>{const s={...n,filmObjects:[]};return this.person=s,(0,m.p)(this.person.films.map(i=>this.swapi.fetchFilm(i)))}),(0,d.W)(n=>(console.error("Error while fetching films",n),alert("Could not get films. Please try again."),(0,g.of)([])))).subscribe({next:n=>{this.person.filmObjects=n,this.loadingData=!1},error:n=>{console.error("Error while fetching person",n)}})}static#t=this.\u0275fac=function(s){return new(s||r)};static#n=this.\u0275cmp=t.VBU({type:r,selectors:[["app-sw-character"]],standalone:!0,features:[t.aNF],decls:3,vars:2,consts:[["loader",""],[4,"ngIf","ngIfElse"],[1,"person","flex","justify-center","text-2xl","mb-8"],[1,"films","grid","grid-cols-2","flex-wrap","gap-4"],["class","films__film w-42 p-4 text-center border border-black rounded-md",4,"ngFor","ngForOf"],[1,"films__film","w-42","p-4","text-center","border","border-black","rounded-md"],[1,"text-xl","mb-4"]],template:function(s,i){if(1&s&&t.DNE(0,T,5,2,"ng-container",1)(1,M,1,0,"ng-template",null,0,t.C5r),2&s){const N=t.sdS(2);t.Y8G("ngIf",!i.loadingData)("ngIfElse",N)}},dependencies:[a.MD,a.Sq,a.bT,I.V]})}return r})()}}]);