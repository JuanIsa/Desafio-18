"use strict";(self.webpackChunkdesafio_final_front=self.webpackChunkdesafio_final_front||[]).push([[688],{7688:(y,c,a)=>{a.r(c),a.d(c,{PublicAppModule:()=>w});var p=a(6895),l=a(6773),o=a(433),e=a(8256),m=a(4766),g=a(529);let f=(()=>{class t{constructor(r){this.http=r}loginUser(r){return this.http.post(`${m.N.urlFetch}/users/login`,r)}}return t.\u0275fac=function(r){return new(r||t)(e.LFG(g.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=a(7316),h=a(6221);let v=(()=>{class t{constructor(r,i,n,u){this.router=r,this.loginService=i,this.guardservice=n,this.authServices=u,this.loginForm=new o.cw({})}ngOnInit(){this.loginForm=new o.cw({email:new o.NI("",[o.kI.required]),password:new o.NI("",[o.kI.required])}),this.authServices.getCookie().subscribe({next:r=>{0==r.status&&(this.guardservice.flag=!0,this.router.navigate(["home"]))},error:r=>console.error(r)})}login(){this.loginForm.get("email")?.errors?.required||this.loginForm.get("password")?.errors?.required?alert("Ning\xfan campo puede estar vac\xedo."):this.loginService.loginUser(this.loginForm.value).subscribe({next:r=>{0==r.status?(this.guardservice.flag=!0,this.router.navigate(["home"])):alert("Credenciales inv\xe1lidas.")},error:r=>{401==r.status&&alert("Credenciales inv\xe1lidas")}})}goRegister(){this.router.navigate(["/auth/register"])}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(l.F0),e.Y36(f),e.Y36(d.a),e.Y36(h.e))},t.\u0275cmp=e.Xpm({type:t,selectors:[["front-login-page"]],decls:15,vars:1,consts:[[1,"container","mt-5","d-flex","justify-content-center","flex-column"],["action","submit",1,"d-flex","flex-column",3,"formGroup"],[1,"form-floating","mb-3"],["formControlName","email","type","email","placeholder","*","autocomplete","off",1,"form-control"],[1,"form-floating"],["formControlName","password","type","password","placeholder","*","autocomplete","off",1,"form-control"],["type","submit",1,"btn","btn-primary","mt-3",3,"click"],[1,"btn","btn-danger","my-5",3,"click"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div",2),e._UZ(3,"input",3),e.TgZ(4,"label"),e._uU(5,"E-mail"),e.qZA()(),e.TgZ(6,"div",4),e._UZ(7,"input",5),e.TgZ(8,"label"),e._uU(9,"Password"),e.qZA()(),e.TgZ(10,"input",6),e.NdJ("click",function(){return i.login()}),e.qZA()(),e.TgZ(11,"div"),e._uU(12," \xbfTodav\xeda no ten\xe9s cuenta?, registrate: "),e.TgZ(13,"button",7),e.NdJ("click",function(){return i.goRegister()}),e._uU(14,"Ir al registro"),e.qZA()()()),2&r&&(e.xp6(1),e.Q6J("formGroup",i.loginForm))},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u]}),t})(),Z=(()=>{class t{constructor(r){this.http=r}registerUser(r,i){const n=new FormData;return n.append("data",JSON.stringify(r)),n.append("file",i),this.http.post(`${m.N.urlFetch}/users/register`,n)}}return t.\u0275fac=function(r){return new(r||t)(e.LFG(g.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const F=["fileInput"],b=["form"],N=[{path:"",pathMatch:"full",redirectTo:"login"},{path:"login",component:v},{path:"register",component:(()=>{class t{constructor(r,i){this.router=r,this.registerService=i,this.registerForm=new o.cw({})}onFileSelected(r){this.file=r.target.files[0];const i=this.file.name.split(".");"jpg"!=i[i.length-1]&&(alert("El archivo tiene que ser una imagen formato: jpg"),this.fileInput.nativeElement.value=null)}ngOnInit(){this.registerForm=new o.cw({email:new o.NI("",[o.kI.required]),password:new o.NI("",[o.kI.required]),repeatpassword:new o.NI("",[o.kI.required]),completeName:new o.NI("",[o.kI.required]),address:new o.NI("",[o.kI.required]),age:new o.NI("",[o.kI.required]),telphoneNumber:new o.NI("",[o.kI.required])})}register(){this.registerForm.get("email")?.errors?.required||this.registerForm.get("password")?.errors?.required||this.registerForm.get("repeatpassword")?.errors?.required||this.registerForm.get("completeName")?.errors?.required||this.registerForm.get("address")?.errors?.required||this.registerForm.get("age")?.errors?.required||this.registerForm.get("telphoneNumber")?.errors?.required?alert("Ning\xfan campo puede estar vac\xedo."):this.registerForm.value.password===this.registerForm.value.repeatpassword?this.registerService.registerUser({email:this.registerForm.value.email,password:this.registerForm.value.password,completeName:this.registerForm.value.completeName,address:this.registerForm.value.address,age:this.registerForm.value.age,telphoneNumber:this.registerForm.value.telphoneNumber},this.file).subscribe({next:r=>{0==r.status?(alert(r.message),this.router.navigate(["/auth/login"])):(alert(r.message),this.form.nativeElement.reset())},error:()=>alert("Ah ocurrido un error inesperado, intente nuevamente en unos instantes.")}):alert("Las contrase\xf1as deben coincidir")}goLogin(){this.router.navigate(["/auth/login"])}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(l.F0),e.Y36(Z))},t.\u0275cmp=e.Xpm({type:t,selectors:[["front-register-page"]],viewQuery:function(r,i){if(1&r&&(e.Gf(F,5),e.Gf(b,5)),2&r){let n;e.iGM(n=e.CRH())&&(i.fileInput=n.first),e.iGM(n=e.CRH())&&(i.form=n.first)}},decls:42,vars:1,consts:[[1,"container","mt-5","d-flex","justify-content-center","flex-column"],["enctype","multipart/form-data",1,"d-flex","flex-column",3,"formGroup"],["form",""],[1,"form-floating","mb-3"],["formControlName","email","type","email","placeholder","*","autocomplete","off",1,"form-control"],["formControlName","password","type","password","placeholder","*","autocomplete","off",1,"form-control"],["formControlName","repeatpassword","type","password","placeholder","*","autocomplete","off",1,"form-control"],["formControlName","completeName","type","text","placeholder","*","autocomplete","off",1,"form-control"],["formControlName","address","type","text","placeholder","*","autocomplete","off",1,"form-control"],["formControlName","age","type","number","min","18","max","110","placeholder","*","autocomplete","off",1,"form-control"],["formControlName","telphoneNumber","type","tel","placeholder","*","autocomplete","off",1,"form-control"],[1,"form","mb-3"],["type","file","accept","image/jpeg",3,"change"],["fileInput",""],[1,"ms-4"],["type","submit","value","Registrarse",1,"btn","btn-primary","mt-3",3,"click"],[1,"btn","btn-danger","my-5",3,"click"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0),e._uU(1," Todos los campos son obligatorios "),e.TgZ(2,"form",1,2)(4,"div",3),e._UZ(5,"input",4),e.TgZ(6,"label"),e._uU(7,"E-mail"),e.qZA()(),e.TgZ(8,"div",3),e._UZ(9,"input",5),e.TgZ(10,"label"),e._uU(11,"Contrase\xf1a"),e.qZA()(),e.TgZ(12,"div",3),e._UZ(13,"input",6),e.TgZ(14,"label"),e._uU(15,"Reingrese contrase\xf1a"),e.qZA()(),e.TgZ(16,"div",3),e._UZ(17,"input",7),e.TgZ(18,"label"),e._uU(19,"Ingrese su nombre completo"),e.qZA()(),e.TgZ(20,"div",3),e._UZ(21,"input",8),e.TgZ(22,"label"),e._uU(23,"Ingrese su direcci\xf3n"),e.qZA()(),e.TgZ(24,"div",3),e._UZ(25,"input",9),e.TgZ(26,"label"),e._uU(27,"Ingrese su edad"),e.qZA()(),e.TgZ(28,"div",3),e._UZ(29,"input",10),e.TgZ(30,"label"),e._uU(31,"Ingrese su n\xfamero de tel\xe9fono"),e.qZA()(),e.TgZ(32,"div",11)(33,"input",12,13),e.NdJ("change",function(u){return i.onFileSelected(u)}),e.qZA(),e.TgZ(35,"label",14),e._uU(36,"Seleccione su avatar o foto de perfil"),e.qZA()(),e.TgZ(37,"input",15),e.NdJ("click",function(){return i.register()}),e.qZA()(),e.TgZ(38,"div"),e._uU(39," \xbfYa ten\xe9s cuenta?, logueate: "),e.TgZ(40,"button",16),e.NdJ("click",function(){return i.goLogin()}),e._uU(41,"Ir al Login"),e.qZA()()()),2&r&&(e.xp6(2),e.Q6J("formGroup",i.registerForm))},dependencies:[o._Y,o.Fj,o.wV,o.JJ,o.JL,o.qQ,o.Fd,o.sg,o.u]}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(N),l.Bz]}),t})(),w=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,T,o.UX]}),t})()}}]);