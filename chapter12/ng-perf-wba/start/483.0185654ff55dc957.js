"use strict";(self.webpackChunkng_perf_wba=self.webpackChunkng_perf_wba||[]).push([[483],{6483:(h,u,e)=>{e.r(u),e.d(u,{AuthComponent:()=>_});var t=e(3953),r=e(177),c=e(7051),i=e(9195),o=e(2931);let _=(()=>{class s{constructor(){this.auth=(0,t.WQX)(c.u),this.router=(0,t.WQX)(i.Ix)}naviageToUserRoute(n){switch(n){case o.u.Admin:this.router.navigate(["/admin"]);break;case o.u.Employee:this.router.navigate(["/employee"])}}loginAsAdmin(){const n=o.u.Admin;this.auth.login(n),this.naviageToUserRoute(n)}loginAsEmployee(){const n=o.u.Employee;this.auth.login(n),this.naviageToUserRoute(n)}static#t=this.\u0275fac=function(a){return new(a||s)};static#n=this.\u0275cmp=t.VBU({type:s,selectors:[["app-auth"]],standalone:!0,features:[t.aNF],decls:5,vars:0,consts:[[1,"login","flex","items-center","justify-around","gap-4"],["type","button",3,"click"]],template:function(a,l){1&a&&(t.j41(0,"div",0)(1,"button",1),t.bIt("click",function(){return l.loginAsAdmin()}),t.EFF(2,"Login as Admin"),t.k0s(),t.j41(3,"button",1),t.bIt("click",function(){return l.loginAsEmployee()}),t.EFF(4,"Login as Employee"),t.k0s()())},dependencies:[r.MD,i.iI]})}return s})()}}]);