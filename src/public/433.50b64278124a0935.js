"use strict";(self.webpackChunkdesafio_final_front=self.webpackChunkdesafio_final_front||[]).push([[433],{433:(bn,ft,d)=>{d.d(ft,{Fj:()=>b,NI:()=>Q,u:()=>te,cw:()=>S,sg:()=>k,Fd:()=>oe,qQ:()=>ie,JJ:()=>xe,JL:()=>Ie,wV:()=>Z,UX:()=>An,kI:()=>Nt,_Y:()=>Xe});var o=d(8256),le=d(6895),pt=d(2076),mt=d(9751),gt=d(4742),_t=d(8421),yt=d(7669),vt=d(5403),Ct=d(3268),Vt=d(1810),Mt=d(4004);let ue=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),g=(()=>{class n extends ue{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const h=new o.OlP("NgValueAccessor"),bt={provide:h,useExisting:(0,o.Gpc)(()=>b),multi:!0},Et=new o.OlP("CompositionEventMode");let b=(()=>{class n extends ue{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Ft(){const n=(0,le.q)()?(0,le.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Et,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([bt]),o.qOj]}),n})();function f(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}function ce(n){return null!=n&&"number"==typeof n.length}const l=new o.OlP("NgValidators"),p=new o.OlP("NgAsyncValidators"),wt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class Nt{static min(t){return he(t)}static max(t){return fe(t)}static required(t){return function pe(n){return f(n.value)?{required:!0}:null}(t)}static requiredTrue(t){return function me(n){return!0===n.value?null:{required:!0}}(t)}static email(t){return function ge(n){return f(n.value)||wt.test(n.value)?null:{email:!0}}(t)}static minLength(t){return function _e(n){return t=>f(t.value)||!ce(t.value)?null:t.value.length<n?{minlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static maxLength(t){return function ye(n){return t=>ce(t.value)&&t.value.length>n?{maxlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static pattern(t){return function ve(n){if(!n)return F;let t,e;return"string"==typeof n?(e="","^"!==n.charAt(0)&&(e+="^"),e+=n,"$"!==n.charAt(n.length-1)&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),r=>{if(f(r.value))return null;const i=r.value;return t.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}(t)}static nullValidator(t){return null}static compose(t){return be(t)}static composeAsync(t){return Fe(t)}}function he(n){return t=>{if(f(t.value)||f(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}function fe(n){return t=>{if(f(t.value)||f(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}function F(n){return null}function Ce(n){return null!=n}function Ve(n){return(0,o.QGY)(n)?(0,pt.D)(n):n}function Ae(n){let t={};return n.forEach(e=>{t=null!=e?{...t,...e}:t}),0===Object.keys(t).length?null:t}function Me(n,t){return t.map(e=>e(n))}function De(n){return n.map(t=>function St(n){return!n.validate}(t)?t:e=>t.validate(e))}function be(n){if(!n)return null;const t=n.filter(Ce);return 0==t.length?null:function(e){return Ae(Me(e,t))}}function H(n){return null!=n?be(De(n)):null}function Fe(n){if(!n)return null;const t=n.filter(Ce);return 0==t.length?null:function(e){return function At(...n){const t=(0,yt.jO)(n),{args:e,keys:r}=(0,gt.D)(n),i=new mt.y(s=>{const{length:a}=e;if(!a)return void s.complete();const c=new Array(a);let y=a,C=a;for(let P=0;P<a;P++){let ae=!1;(0,_t.Xf)(e[P]).subscribe((0,vt.x)(s,Dn=>{ae||(ae=!0,C--),c[P]=Dn},()=>y--,void 0,()=>{(!y||!ae)&&(C||s.next(r?(0,Vt.n)(r,c):c),s.complete())}))}});return t?i.pipe((0,Ct.Z)(t)):i}(Me(e,t).map(Ve)).pipe((0,Mt.U)(Ae))}}function T(n){return null!=n?Fe(De(n)):null}function Ee(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Oe(n){return n._rawValidators}function we(n){return n._rawAsyncValidators}function R(n){return n?Array.isArray(n)?n:[n]:[]}function E(n,t){return Array.isArray(n)?n.includes(t):n===t}function Ne(n,t){const e=R(t);return R(n).forEach(i=>{E(e,i)||e.push(i)}),e}function Se(n,t){return R(t).filter(e=>!E(n,e))}class Ge{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=H(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=T(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class u extends Ge{get formDirective(){return null}get path(){return null}}class m extends Ge{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Be{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let xe=(()=>{class n extends Be{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(m,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})(),Ie=(()=>{class n extends Be{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[o.qOj]}),n})();const V="VALID",w="INVALID",v="PENDING",A="DISABLED";function L(n){return(N(n)?n.validators:n)||null}function Pe(n){return Array.isArray(n)?H(n):n||null}function Y(n,t){return(N(t)?t.asyncValidators:n)||null}function He(n){return Array.isArray(n)?T(n):n||null}function N(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class Ue{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=Pe(this._rawValidators),this._composedAsyncValidatorFn=He(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===V}get invalid(){return this.status===w}get pending(){return this.status==v}get disabled(){return this.status===A}get enabled(){return this.status!==A}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=Pe(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=He(t)}addValidators(t){this.setValidators(Ne(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Ne(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Se(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Se(t,this._rawAsyncValidators))}hasValidator(t){return E(this._rawValidators,t)}hasAsyncValidator(t){return E(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=v,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=A,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=V,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===V||this.status===v)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?A:V}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator=!0;const e=Ve(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){let e=t;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?A:this.errors?w:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(w)?w:V}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){N(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}}class S extends Ue{constructor(t,e,r){super(L(e),Y(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){(function Re(n,t,e){n._forEachChild((r,i)=>{if(void 0===e[i])throw new o.vHH(1002,"")})})(this,0,t),Object.keys(t).forEach(r=>{(function Te(n,t,e){const r=n.controls;if(!(t?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[e])throw new o.vHH(1001,"")})(this,!0,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{const i=this.controls[r];i&&i.patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const[e,r]of Object.entries(this.controls))if(this.contains(e)&&t(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}}function M(n,t){W(n,t),t.valueAccessor.writeValue(n.value),n.disabled&&t.valueAccessor.setDisabledState?.(!0),function Rt(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&je(n,t)})}(n,t),function jt(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function Ut(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&je(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function Tt(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function B(n,t,e=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),I(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function x(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function W(n,t){const e=Oe(n);null!==t.validator?n.setValidators(Ee(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=we(n);null!==t.asyncValidator?n.setAsyncValidators(Ee(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();x(t._rawValidators,i),x(t._rawAsyncValidators,i)}function I(n,t){let e=!1;if(null!==n){if(null!==t.validator){const i=Oe(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==t.validator);s.length!==i.length&&(e=!0,n.setValidators(s))}}if(null!==t.asyncValidator){const i=we(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==t.asyncValidator);s.length!==i.length&&(e=!0,n.setAsyncValidators(s))}}}const r=()=>{};return x(t._rawValidators,r),x(t._rawAsyncValidators,r),e}function je(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function We(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}function $e(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const Q=class extends Ue{constructor(t=null,e,r){super(L(e),Y(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),N(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=$e(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){We(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){We(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){$e(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};let Xe=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})();const Zt={provide:h,useExisting:(0,o.Gpc)(()=>Z),multi:!0};let Z=(()=>{class n extends g{writeValue(e){this.setProperty("value",e??"")}registerOnChange(e){this.onChange=r=>{e(""==r?null:parseFloat(r))}}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},features:[o._Bn([Zt]),o.qOj]}),n})(),Ke=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const X=new o.OlP("NgModelWithFormControlWarning"),nn={provide:u,useExisting:(0,o.Gpc)(()=>k)};let k=(()=>{class n extends u{constructor(e,r){super(),this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(I(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const r=this.form.get(e.path);return M(r,e),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){B(e.control||null,e,!1),function Wt(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,r){this.form.get(e.path).setValue(r)}onSubmit(e){return this.submitted=!0,function Ye(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(e),"dialog"===e?.target?.method}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const r=e.control,i=this.form.get(e.path);r!==i&&(B(r||null,e),(n=>n instanceof Q)(i)&&(M(i,e),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const r=this.form.get(e.path);(function qe(n,t){W(n,t)})(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const r=this.form.get(e.path);r&&function qt(n,t){return I(n,t)}(r,e)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){W(this.form,this),this._oldForm&&I(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(l,10),o.Y36(p,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,r){1&e&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([nn]),o.qOj,o.TTD]}),n})();const sn={provide:m,useExisting:(0,o.Gpc)(()=>te)};let te=(()=>{class n extends m{constructor(e,r,i,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.update=new o.vpe,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function z(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===b?e=s:function Yt(n){return Object.getPrototypeOf(n.constructor)===g}(s)?r=s:i=s}),i||r||e||null}(0,s)}set isDisabled(e){}ngOnChanges(e){this._added||this._setUpControl(),function $(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return function G(n,t){return[...t.path,n]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(e){return new(e||n)(o.Y36(u,13),o.Y36(l,10),o.Y36(p,10),o.Y36(h,10),o.Y36(X,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o._Bn([sn]),o.qOj,o.TTD]}),n})();function at(n){return"number"==typeof n?n:parseFloat(n)}let _=(()=>{class n{constructor(){this._validator=F}ngOnChanges(e){if(this.inputName in e){const r=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):F,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return null!=e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,features:[o.TTD]}),n})();const fn={provide:l,useExisting:(0,o.Gpc)(()=>oe),multi:!0};let oe=(()=>{class n extends _{constructor(){super(...arguments),this.inputName="max",this.normalizeInput=e=>at(e),this.createValidator=e=>fe(e)}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(e,r){2&e&&o.uIk("max",r._enabled?r.max:null)},inputs:{max:"max"},features:[o._Bn([fn]),o.qOj]}),n})();const pn={provide:l,useExisting:(0,o.Gpc)(()=>ie),multi:!0};let ie=(()=>{class n extends _{constructor(){super(...arguments),this.inputName="min",this.normalizeInput=e=>at(e),this.createValidator=e=>he(e)}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(e,r){2&e&&o.uIk("min",r._enabled?r.min:null)},inputs:{min:"min"},features:[o._Bn([pn]),o.qOj]}),n})(),Vn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Ke]}),n})(),An=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:X,useValue:e.warnOnNgModelWithFormControl}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Vn]}),n})()}}]);