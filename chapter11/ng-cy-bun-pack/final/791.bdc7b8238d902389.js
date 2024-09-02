"use strict";(self.webpackChunkng_cy_bun_pack=self.webpackChunkng_cy_bun_pack||[]).push([[791],{4791:($,f,c)=>{c.r(f),c.d(f,{UsersComponent:()=>D});var s=c(3953),p=c(177),y=c(2616),x=c(127),w=c(4412),C=c(3669),g=c(9974),v=c(4360);function A(r,e){return r===e}var U=c(8359);class b extends U.yU{constructor(e,t){super()}schedule(e,t=0){return this}}const d={setInterval(r,e,...t){const{delegate:n}=d;return n?.setInterval?n.setInterval(r,e,...t):setInterval(r,e,...t)},clearInterval(r){const{delegate:e}=d;return(e?.clearInterval||clearInterval)(r)},delegate:void 0};var E=c(7908);const I={now:()=>(I.delegate||Date).now(),delegate:void 0};class h{constructor(e,t=h.now){this.schedulerActionCtor=e,this.now=t}schedule(e,t=0,n){return new this.schedulerActionCtor(this,e).schedule(n,t)}}h.now=I.now;const P=new class T extends h{constructor(e,t=h.now){super(e,t),this.actions=[],this._active=!1}flush(e){const{actions:t}=this;if(this._active)return void t.push(e);let n;this._active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this._active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}}(class F extends b{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){var n;if(this.closed)return this;this.state=e;const i=this.id,l=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(l,i,t)),this.pending=!0,this.delay=t,this.id=null!==(n=this.id)&&void 0!==n?n:this.requestAsyncId(l,this.id,t),this}requestAsyncId(e,t,n=0){return d.setInterval(e.flush.bind(e,this),n)}recycleAsyncId(e,t,n=0){if(null!=n&&this.delay===n&&!1===this.pending)return t;null!=t&&d.clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let i,n=!1;try{this.work(e)}catch(l){n=!0,i=l||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){const{id:e,scheduler:t}=this,{actions:n}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,E.o)(n,this),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null,super.unsubscribe()}}});var k=c(1397);function V(r,e){if(1&r&&(s.qex(0),s.nrm(1,"app-users-list",10),s.bVm()),2&r){const t=s.XpG();s.R7$(),s.Y8G("users",t.users())}}function M(r,e){1&r&&(s.j41(0,"h2",13),s.EFF(1,"Loading..."),s.k0s())}function N(r,e){1&r&&(s.j41(0,"h2",14),s.EFF(1,"Nothing returned for the following search"),s.k0s())}function R(r,e){if(1&r&&s.DNE(0,M,2,0,"h2",11)(1,N,2,0,"h2",12),2&r){const t=s.XpG();s.Y8G("ngIf",t.callInProgress()),s.R7$(),s.Y8G("ngIf",""!==t.searchInput())}}let D=(()=>{class r{constructor(){this.userService=(0,s.WQX)(y.D),this.searchUserInputChange$=new w.t(""),this.searchInput=(0,s.vPA)(""),this.users=(0,s.vPA)([]),this.callInProgress=(0,s.vPA)(!1),this.searchInputEffect=(0,s.QZP)(()=>{this.searchUserInputChange$.next(this.searchInput())})}ngOnInit(){this.searchUserInputChange$.pipe(function S(r,e=C.D){return r=r??A,(0,g.N)((t,n)=>{let i,l=!0;t.subscribe((0,v._)(n,a=>{const u=e(a);(l||!r(i,u))&&(l=!1,i=u,n.next(a))}))})}(),function j(r,e=P){return(0,g.N)((t,n)=>{let i=null,l=null,a=null;const u=()=>{if(i){i.unsubscribe(),i=null;const o=l;l=null,n.next(o)}};function G(){const o=a+r,m=e.now();if(m<o)return i=this.schedule(void 0,o-m),void n.add(i);u()}t.subscribe((0,v._)(n,o=>{l=o,a=e.now(),i||(i=e.schedule(G,r),n.add(i))},()=>{u(),n.complete()},void 0,()=>{l=i=null}))})}(500),(0,k.Z)(t=>(this.callInProgress.set(!0),this.userService.findByTerm(t)))).subscribe(t=>{this.users.set(t),this.callInProgress.set(!1)})}onSearchValChange(t){this.searchInput.set(t.target.value)}static#e=this.\u0275fac=function(n){return new(n||r)};static#t=this.\u0275cmp=s.VBU({type:r,selectors:[["app-users"]],standalone:!0,features:[s.aNF],decls:13,vars:2,consts:[["loadingOrMessage",""],[1,"relative","flex","mb-8"],["for","Search",1,"sr-only"],["type","text","id","Search","data-test-id","searchUsersInput","placeholder","Search for...",1,"w-full","rounded-md","border-gray-200","py-2.5","pe-10","shadow-sm","sm:text-sm",3,"input"],[1,"absolute","inset-y-0","end-0","right-0","grid","w-10","place-content-center"],["type","button",1,"unset","text-gray-600","hover:text-gray-700"],[1,"sr-only"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"h-4","w-4"],["stroke-linecap","round","stroke-linejoin","round","d","M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"],[4,"ngIf","ngIfElse"],[3,"users"],["class","text-xl",4,"ngIf"],["data-test-id","noResultsFoundMessage","class","text-xl",4,"ngIf"],[1,"text-xl"],["data-test-id","noResultsFoundMessage",1,"text-xl"]],template:function(n,i){if(1&n){const l=s.RV6();s.j41(0,"div",1)(1,"label",2),s.EFF(2," Search "),s.k0s(),s.j41(3,"input",3),s.bIt("input",function(u){return s.eBV(l),s.Njj(i.onSearchValChange(u))}),s.k0s(),s.j41(4,"span",4)(5,"span",5)(6,"span",6),s.EFF(7,"Search"),s.k0s(),s.qSk(),s.j41(8,"svg",7),s.nrm(9,"path",8),s.k0s()()()(),s.DNE(10,V,2,1,"ng-container",9)(11,R,2,2,"ng-template",null,0,s.C5r)}if(2&n){const l=s.sdS(12);s.R7$(10),s.Y8G("ngIf",i.users().length>0&&!i.callInProgress())("ngIfElse",l)}},dependencies:[p.MD,p.bT,x._]})}return r})()}}]);