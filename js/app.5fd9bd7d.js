(function(){var t={3911:function(){window.initializeF8BlocksManually=!0},5529:function(t,e,a){"use strict";a(3911);function r(t,e,a=!1){let r=`__${t}`,n=$.fn[t];$.fn[t]=function(t,...a){return this.each((function(){let n=$(this),s=n.data(r),i=$.extend({},e.DEFAULTS,n.data(),"object"===typeof t&&t);s||n.data(r,s=new e(this,i)),"string"===typeof t&&(s[t].apply(s,a),"destroy"===t&&(n.removeData(r),s=void 0))}))},a&&($[t]=e=>$({})[t](e)),$.fn[t].noConflict=()=>$.fn[t]=n}function n(t,e=!1,a=!1){if("boolean"==typeof t)return t;if("number"==typeof t&&t>0)return!0;if("string"==typeof t){if(!e)return!0;if("TRUE"===t.toUpperCase()||"ON"===t.toUpperCase()||"YES"===t.toUpperCase()||"1"===t)return!0}return!!a&&t}function s(t,e,a=864e5){let r=localStorage.getItem(e),n=(new Date).getTime();r?n-r>a&&(localStorage.removeItem(t),localStorage.setItem(e,n)):localStorage.setItem(e,n)}class i{_properties(t,e){this.$element=$(t),this.options=this._getOptions(e),this.$target=$(e.f8Target),this.$checkbox=this.$element.find('[type="checkbox"]'),this._checkboxId="sd"}constructor(t,e){if(this._properties(t,e),!this.$target.length)throw new Error('.f8-switch-daylight blocks require a valid "f8Target" option');if(!this.$checkbox.length)throw new Error(".f8-switch-daylight blocks require an input with the checkbox type, inside themselves");this.options.f8CustomStyle||this._drawOurOwnDOM(),parseInt(this.options.f8LifeOfManuallyDefinedTheme)>0&&s("f8SwitchDaylight_isThemeDark","f8SwitchDaylight_lastTimeCleared",864e5*parseInt(this.f8LifeOfManuallyDefinedTheme));const a=window.matchMedia("(prefers-color-scheme: dark)").matches,r=n(localStorage.getItem("f8SwitchDaylight_isThemeDark"),!0,!0);!0===r?(this._handleTargetClasses(!0),this._setCheckbox(!0)):!1===r?(this._handleTargetClasses(!1),this._setCheckbox(!1)):a?(this._handleTargetClasses(!0),this._setCheckbox(!0)):(this._handleTargetClasses(!1),this._setCheckbox(!1)),this.$target.addClass("f8-switch-daylight__target")}static get DEFAULTS(){return{f8TargetDarkClass:"f8-switch-daylight__target--state-dark",f8TargetLightClass:"f8-switch-daylight__target--state-light",f8Target:void 0,f8CustomStyle:!1,f8LifeOfManuallyDefinedTheme:1}}_getOptions(t){return t.f8CustomStyle=n(t.f8CustomStyle),t}_handleTargetClasses(t=!1){t?this.$target.addClass(this.options.f8TargetDarkClass).removeClass(this.options.f8TargetLightClass):this.$target.addClass(this.options.f8TargetLightClass).removeClass(this.options.f8TargetDarkClass)}_setCheckbox(t=!1){this.$checkbox.prop("checked",t),this.$checkbox.off("change.f8switchdaylight").on("change.f8switchdaylight",(e=>{t=1==this.$checkbox.prop("checked"),this._handleTargetClasses(t),t?(localStorage.setItem("f8SwitchDaylight_isThemeDark",!0),parseInt(this.options.f8LifeOfManuallyDefinedTheme)>0&&localStorage.setItem("f8SwitchDaylight_lastTimeCleared",(new Date).getTime())):(localStorage.setItem("f8SwitchDaylight_isThemeDark",!1),parseInt(this.options.f8LifeOfManuallyDefinedTheme)>0&&localStorage.setItem("f8SwitchDaylight_lastTimeCleared",(new Date).getTime())),this.$element.trigger($.Event("changed.f8switchdaylight"),{checked:t})}))}_drawOurOwnDOM(){this.$checkbox.attr("id")&&(this._checkboxId=this.$checkbox.attr("id")),this.$element.html(`\n      <div class="f8-switch-daylight__indicator">\n        <input type="checkbox" id="${this._checkboxId}">\n        <label for="${this._checkboxId}" class="f8-switch-daylight__label">\n          <span class="f8-switch-daylight__handler">\n            <span class="sd-crater sd-crater--1"></span>\n            <span class="sd-crater sd-crater--2"></span>\n            <span class="sd-crater sd-crater--3"></span>\n          </span>\n          <span class="sd-star sd-star--1"></span>\n          <span class="sd-star sd-star--2"></span>\n          <span class="sd-star sd-star--3"></span>\n          <span class="sd-star sd-star--4"></span>\n          <span class="sd-star sd-star--5"></span>\n          <span class="sd-star sd-star--6"></span>\n        </label>\n      </div>\n    `),this.$checkbox=this.$element.find('[type="checkbox"]')}destroy(t=!1){this.options.f8CustomStyle||(this.$element.empty(),this.$element.append(`<input type="checkbox" id="${this._checkboxId}">`)),t||this.$target.removeClass("f8-switch-daylight__target").removeClass(this.options.f8TargetDarkClass).removeClass(this.options.f8TargetLightClass),this.$checkbox.off("change.f8switchdaylight"),t||(localStorage.removeItem("f8SwitchDaylight_isThemeDark"),parseInt(this.options.f8LifeOfManuallyDefinedTheme)>0&&localStorage.removeItem("f8SwitchDaylight_lastTimeCleared")),this.$element=void 0,this.options=void 0,this.$target=void 0,this.$checkbox=void 0}}r("f8switchdaylight",i),"boolean"===typeof window.initializeF8BlocksManually&&!1!==window.initializeF8BlocksManually||jQuery(document).ready((t=>{t(".f8-switch-daylight").f8switchdaylight()}));
/*!
 * Drinks - The web app
 *
 * @version v1.0.0
 * @author 2023 ImAliTavakoli. All Rights Reserved.
 */
var o=a(9242),l=a(3396);function c(t,e,a,r,n,s){const i=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(i,null,{default:(0,l.w5)((({Component:t})=>[(0,l.Wm)(o.uT,{name:"m-view--state",mode:"out-in"},{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.j4)((0,l.LL)(t),{class:"m-view"}))])),_:2},1024)])),_:1})}var d={name:"DrinksApp"},h=a(89);const f=(0,h.Z)(d,[["render",c]]);var u=f,p=a(5431);(0,p.z)("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var m=a(2483),g=a(7139);const v=t=>((0,l.dD)("data-v-ccf4b142"),t=t(),(0,l.Cn)(),t),k=v((()=>(0,l._)("section",{class:"m-drinks-topper g8-container"},[(0,l._)("h2",null,"List of the Available Alcoholic Drinks"),(0,l._)("p",null," An alcoholic drink is a drink that contains 0.5% or more ethanol. Red wine, malt whisky, lager, sparkling wine, lager, cherry liqueur, and etc. What else do you like? "),(0,l._)("blockquote",{class:"u8-mx-0"},[(0,l._)("q",null,"A drink is shorter than a tale."),(0,l._)("footer",null,[(0,l._)("a",{href:"https://en.wikipedia.org/wiki/Omar_Khayyam",target:"_blank",rel:"author"},"Omar Khayyam"),(0,l.Uk)(" - "),(0,l._)("cite",null,"Persian Sufi")])])],-1))),w=v((()=>(0,l._)("hr",null,null,-1))),y={class:"g8-container"},b={key:0,class:"u8-mt-xl u8-text-center"},_=v((()=>(0,l._)("h3",null,"Loading... Oh yea! An awesome collection of alcoholic drinks is about to be shown...",-1))),D=[_],C={key:0,class:"u8-mt-xl u8-text-center"},x=(0,l.uE)('<svg class="m-drinks-ic u8-svg-color-inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.99 32" data-v-ccf4b142><path stroke="none" d="M30.93,12.8a1.06,1.06,0,0,0-1.06,1.06h0v6.4a9.6,9.6,0,0,1-9.6,9.6H3.64l1.82-1.82a3.18,3.18,0,0,0,.94-2.27v-14A9.63,9.63,0,0,1,16,2.13h2.16A1.07,1.07,0,0,0,18.34,0H16A11.74,11.74,0,0,0,4.27,11.73V25.78a1,1,0,0,1-.32.76L.31,30.18a1.07,1.07,0,0,0,0,1.51,1.05,1.05,0,0,0,.74.31h19.2A11.73,11.73,0,0,0,32,20.27v-6.4a1.07,1.07,0,0,0-1.07-1.07Z" transform="translate(-0.01 0)" fill-rule="evenodd" data-v-ccf4b142></path><path stroke="none" d="M12.8,16.53a1.08,1.08,0,0,0,1,1.17,1.06,1.06,0,0,0,1.17-1,.74.74,0,0,0,0-.21,1.06,1.06,0,0,0-1.17-1A1.08,1.08,0,0,0,12.8,16.53Z" transform="translate(-0.01 0)" fill-rule="evenodd" data-v-ccf4b142></path><path stroke="none" d="M18.13,15.47a1.07,1.07,0,1,0,.21,0Z" transform="translate(-0.01 0)" fill-rule="evenodd" data-v-ccf4b142></path><path stroke="none" d="M22.4,17.6a1.07,1.07,0,1,0-1.07-1.07h0A1.07,1.07,0,0,0,22.4,17.6Z" transform="translate(-0.01 0)" fill-rule="evenodd" data-v-ccf4b142></path><path stroke="none" d="M25.6,6.4a1.06,1.06,0,0,0,1.07-1.07V1.07a1.07,1.07,0,0,0-2.14,0V5.33A1.06,1.06,0,0,0,25.6,6.4Z" transform="translate(-0.01 0)" fill-rule="evenodd" data-v-ccf4b142></path><path stroke="none" d="M25.6,9.6a1.07,1.07,0,1,0-1.07-1.07h0A1.07,1.07,0,0,0,25.6,9.6Z" transform="translate(-0.01 0)" fill-rule="evenodd" data-v-ccf4b142></path></svg>',1),A={key:0,class:"u8-mt-xl u8-text-center"},T=(0,l.uE)('<h3 data-v-ccf4b142>No alcoholic drink is available at the moment!</h3><svg class="m-drinks-ic u8-svg-color-inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 28.75" data-v-ccf4b142><path stroke="none" d="M11.14,3.39a.15.15,0,0,0,.11,0,6.52,6.52,0,0,1,.65-.42.17.17,0,1,0-.18-.28L11,3.09a.14.14,0,0,0,0,.22.13.13,0,0,0,.12.08" transform="translate(0 -1.63)" data-v-ccf4b142></path><path stroke="none" d="M22,2.89a2.86,2.86,0,0,1,.7.47,5.43,5.43,0,0,1,.48.48.19.19,0,0,0,.13.05.19.19,0,0,0,.1-.05.14.14,0,0,0,0-.22,3.14,3.14,0,0,0-.52-.51,4.18,4.18,0,0,0-.79-.5.14.14,0,0,0-.2.07.17.17,0,0,0,.08.21" transform="translate(0 -1.63)" data-v-ccf4b142></path><path stroke="none" d="M17,4.27A.17.17,0,0,0,17,4.5a.13.13,0,0,0,.08,0,.21.21,0,0,0,.15-.07,3.69,3.69,0,0,1,1-1.11.17.17,0,0,0,.06-.23.18.18,0,0,0-.23,0A3.69,3.69,0,0,0,17,4.27" transform="translate(0 -1.63)" data-v-ccf4b142></path><path stroke="none" d="M24.47,7.42a.16.16,0,0,0-.17.15A11.71,11.71,0,0,1,24,9.11a.16.16,0,0,0,.1.2h.05a.15.15,0,0,0,.15-.13,9.7,9.7,0,0,0,.3-1.58.19.19,0,0,0-.15-.18" transform="translate(0 -1.63)" data-v-ccf4b142></path><path stroke="none" d="M19.41,3.92a.15.15,0,0,0,.2.05.16.16,0,0,0,.05-.23,4.44,4.44,0,0,0-1.13-1.21.19.19,0,0,0-.23,0,.18.18,0,0,0,0,.23,4.23,4.23,0,0,1,1.08,1.13" transform="translate(0 -1.63)" data-v-ccf4b142></path><path stroke="none" d="M19.31,2.79h.05a4.07,4.07,0,0,1,1.23-.21h.28c.1,0,.18-.05.18-.15a.17.17,0,0,0-.16-.17c-.1,0-.2,0-.3,0h0a4.23,4.23,0,0,0-1.33.23.16.16,0,0,0-.1.2.15.15,0,0,0,.15.13" transform="translate(0 -1.63)" data-v-ccf4b142></path><path stroke="none" d="M19.13,6.26a.17.17,0,0,0-.05.23.15.15,0,0,0,.13.07.1.1,0,0,0,.07,0,1.61,1.61,0,0,0,.78-1.44v0a.16.16,0,0,0-.15-.15.17.17,0,0,0-.15.15v0a1.35,1.35,0,0,1-.63,1.16" transform="translate(0 -1.63)" data-v-ccf4b142></path><path stroke="none" d="M17.12,5.71s-.05-.13-.08-.18a.17.17,0,0,0-.2-.1.15.15,0,0,0-.1.2.77.77,0,0,0,.1.23A1.68,1.68,0,0,0,18,6.77h0a.14.14,0,0,0,.15-.13.17.17,0,0,0-.13-.2,1.21,1.21,0,0,1-.9-.73" transform="translate(0 -1.63)" data-v-ccf4b142></path><path stroke="none" d="M24.3,6.34a.16.16,0,0,0,.15.15h0a.17.17,0,0,0,.15-.18,4.66,4.66,0,0,0-.42-1.58A.15.15,0,0,0,24,4.65a.14.14,0,0,0-.07.2,4.8,4.8,0,0,1,.38,1.49" transform="translate(0 -1.63)" data-v-ccf4b142></path><path stroke="none" d="M15.76,2a6.33,6.33,0,0,1,1.51.31h.05a.18.18,0,0,0,.15-.1.16.16,0,0,0-.1-.21,5.68,5.68,0,0,0-1.61-.32.17.17,0,0,0-.18.15.28.28,0,0,0,.18.17" transform="translate(0 -1.63)" data-v-ccf4b142></path><path stroke="none" d="M13,2.41h0A7.07,7.07,0,0,1,14.52,2c.08,0,.15-.1.13-.17s-.1-.15-.18-.13a7.08,7.08,0,0,0-1.56.43.16.16,0,0,0-.1.2.24.24,0,0,0,.15.08" transform="translate(0 -1.63)" data-v-ccf4b142></path><path stroke="none" d="M29.71,28.66a.48.48,0,0,1-.48.45H2.83a.38.38,0,0,1-.4-.37L1.12,15.11a.48.48,0,0,1,.45-.51h.15l28.7,0a.61.61,0,0,1,.6.63ZM21.7,14l.66-1.09a.16.16,0,1,1,.27.18c-.37.66-.65,1.08-.65,1.11a.15.15,0,0,1-.13.07.1.1,0,0,1-.07,0c-.1-.08-.13-.18-.08-.25Zm9.22-.46h-.4V11.38a.9.9,0,0,0-.91-.91H23.92a10.45,10.45,0,0,1-.48,1.06.18.18,0,0,1-.15.1.09.09,0,0,1-.08,0,.16.16,0,0,1-.07-.2,10,10,0,0,0,.4-.93H9.94L9.13,9.18a.78.78,0,0,0-.71-.37H1.87a.66.66,0,0,0-.65.65v4.16H1a1.46,1.46,0,0,0-1,1.54L1.37,29a1.47,1.47,0,0,0,1.46,1.33h26.3A1.45,1.45,0,0,0,30.59,29L32,15.16a1.31,1.31,0,0,0-1-1.62Z" transform="translate(0 -1.63)" data-v-ccf4b142></path><path stroke="none" d="M9.1,4.4a.31.31,0,0,0,.38.15l1.06-.5a.31.31,0,0,0,.15-.38.31.31,0,0,0-.38-.15L9.26,4a.27.27,0,0,0-.16.38" transform="translate(0 -1.63)" data-v-ccf4b142></path><path stroke="none" d="M8.45,3.42l.73.3.93-.43.08-.73c0-.33-.18-.48-.38-.51s-.88.18-.63.61a.57.57,0,0,0-.86,0,.55.55,0,0,0,.13.79" transform="translate(0 -1.63)" data-v-ccf4b142></path><path stroke="none" d="M11.4,5.36c.1-.18.07-.38-.15-.61l-.63-.43-.94.43-.25.73c0,.35.3.66.51.61s.63-.13.55-.66c.2.45.78.13.91-.07" transform="translate(0 -1.63)" data-v-ccf4b142></path></svg>',2),M=[T],S={key:1,class:"g8-row g8-row-cols-1 g8-row-cols-md-3 u8-mt-xl"};function O(t,e,a,r,n,s){const i=(0,l.up)("Header"),o=(0,l.up)("Card");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(i,{type:"main",title:n.headerTitle},null,8,["title"]),k,w,(0,l._)("section",y,[n.isLoading?((0,l.wg)(),(0,l.iD)("div",b,D)):((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[""!=t.msgError?((0,l.wg)(),(0,l.iD)("div",C,[(0,l._)("h3",null,(0,g.zw)(t.msgError),1),x])):((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[0==t.all.length?((0,l.wg)(),(0,l.iD)("div",A,M)):((0,l.wg)(),(0,l.iD)("div",S,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(this.all,(t=>((0,l.wg)(),(0,l.iD)("div",{key:t.idDrink,class:"g8-col u8-mb"},[(0,l.Wm)(o,{id:parseInt(t.idDrink),img:t.strDrinkThumb,title:t.strDrink},null,8,["id","img","title"])])))),128))]))],64))],64))])])}var E=a(65),L=a(4090);a(7658);const I=t=>((0,l.dD)("data-v-6938f974"),t=t(),(0,l.Cn)(),t),j={class:"m-card f8-card f8-card--effect-zoomer u8-curved u8-h-100"},H={class:"m-card__figure-holder f8-card__figure-holder"},Z=["src","alt"],N={class:"f8-card__body u8-text-center"},B={class:"f8-card__foot u8-p-0"},F=I((()=>(0,l._)("svg",{class:"u8-svg-color-inherit u8-mx-sm",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 29.7 31.33",width:"24",height:"24"},[(0,l._)("path",{stroke:"none",d:"M12.51,23.06A11.36,11.36,0,1,0,1.15,11.7,11.37,11.37,0,0,0,12.51,23.06Zm0-3.5A7.87,7.87,0,1,0,4.64,11.7,7.86,7.86,0,0,0,12.51,19.56Z",transform:"translate(-1.15 -0.34)","fill-rule":"evenodd"}),(0,l._)("path",{stroke:"none",d:"M20.15,21a1.61,1.61,0,0,1,2.29,0l7.94,7.93a1.63,1.63,0,0,1-2.3,2.3l-7.93-7.94A1.61,1.61,0,0,1,20.15,21Z",transform:"translate(-1.15 -0.34)"})],-1))),P=[F];function q(t,e,a,r,n,s){return(0,l.wg)(),(0,l.iD)("div",j,[(0,l._)("a",{class:"f8-card__link",href:"#",onClick:e[1]||(e[1]=(0,o.iM)((t=>this.$router.push({name:"Drink",params:{drink:this.id}})),["prevent"]))},[(0,l._)("div",H,[(0,l._)("img",{src:this.img,class:"u8-img-contain u8-img-md-cover",alt:this.title},null,8,Z)]),(0,l._)("div",N,(0,g.zw)(a.title),1),(0,l._)("footer",B,[(0,l._)("button",{class:"f8-button f8-button--color-primary f8-button--visual-block u8-box-shadow-none",type:"button",onClick:e[0]||(e[0]=(0,o.iM)((()=>{}),["prevent"]))},P)])])])}var z={name:"Card",props:{id:Number,img:String,title:String}};const U=(0,h.Z)(z,[["render",q],["__scopeId","data-v-6938f974"]]);var W=U,K={name:"Drinks",components:{Header:L.Z,Card:W},data(){return{headerTitle:"Drinks Demo App",isLoading:!0}},computed:{...(0,E.rn)("drinks",{all:t=>t.all,msgError:t=>t.msgError})},watch:{all(t,e){t&&(this.isLoading=!1)},msgError(t,e){""!==t&&(this.isLoading=!1)}},created(){this.$store.state.drinks.msgError="",this.$store.dispatch("drinks/getAllDrinks")}};const V=(0,h.Z)(K,[["render",O],["__scopeId","data-v-ccf4b142"]]);var Y=V;const R=()=>a.e(605).then(a.bind(a,8605)),Q=()=>a.e(956).then(a.bind(a,4956)),G=[{path:"/",name:"Drinks",component:Y},{path:"/drinks",redirect:"/"},{path:"/home",redirect:"/"},{path:"/drinks/:drink",name:"Drink",component:R},{path:"/:notfound(.*)*",name:"NotFound",component:Q}],J=(0,m.p7)({history:(0,m.r5)(),routes:G,scrollBehavior(t,e,a){return a||new Promise(((t,e)=>{setTimeout((()=>{t({left:0,top:0})}),300)}))}});var X=J,tt=a(6265),et=a.n(tt);const at=" https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",rt="  https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";var nt={async getAllDrinks(){try{const t=await et().get(at);return t.data.drinks}catch(t){return"Error! Could not reach the API. "+t}},async getOneDrink(t){try{const e=await et().get(rt+t),a=e.data.drinks[0];return Object.keys(a).forEach((t=>(null==a[t]||""==a[t])&&delete a[t])),a}catch(e){return"Error! Could not reach the API. "+e}}},st={namespaced:!0,state(){return{all:[],current:void 0,msgError:""}},actions:{async getAllDrinks({commit:t}){const e=await nt.getAllDrinks();t("setAllDrinks",e)},async getOneDrink({commit:t},e){const a=await nt.getOneDrink(e);t("setOneDrink",a)}},mutations:{setAllDrinks(t,e){Array.isArray(e)?t.all=e:t.msgError=e},setOneDrink(t,e){e instanceof Object?t.current=e:t.msgError=e}}},it=(0,E.MT)({modules:{drinks:st}});(0,o.ri)(u).use(it).use(X).mount("#app")},4090:function(t,e,a){"use strict";a.d(e,{Z:function(){return _}});a(7658);var r=a(3396),n=a(7139),s=a(9242);const i=t=>((0,r.dD)("data-v-57aaae68"),t=t(),(0,r.Cn)(),t),o={key:0,class:"m-header m-header--visual-shadow"},l={class:"m-header__perspective g8-container"},c={class:"m-header__brand-holder"},d=(0,r.uE)('<figure class="m-header__brand m-header__brand--visual-stroke" data-v-57aaae68><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.7 31.59" data-v-57aaae68><path d="M17.24,9H28.15a.7.7,0,0,1,.7.7.69.69,0,0,1-.22.51L17.24,20.92,5.85,10.16a.69.69,0,0,1,.05-1A.7.7,0,0,1,6.33,9H10.9" transform="translate(-2.15 -0.2)" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" data-v-57aaae68></path><line x1="15.09" y1="20.72" x2="15.09" y2="30.59" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" data-v-57aaae68></line><line x1="9.45" y1="30.59" x2="20.72" y2="30.59" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" data-v-57aaae68></line><line x1="1" y1="1" x2="10.86" y2="10.86" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" data-v-57aaae68></line><circle cx="12.98" cy="12.98" r="2.11" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" data-v-57aaae68></circle><line x1="15.09" y1="15.09" x2="16.15" y2="16.15" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" data-v-57aaae68></line></svg></figure>',1),h=(0,r.uE)('<div class="f8-switch-daylight" data-f8-target="body" data-f8-custom-style data-f8-target-dark-class="m--theme-dark" data-v-57aaae68><div class="f8-switch-daylight__indicator" data-v-57aaae68><input type="checkbox" id="sd" data-v-57aaae68><label for="sd" class="f8-switch-daylight__label" data-v-57aaae68><span class="f8-switch-daylight__handler" data-v-57aaae68><span class="sd-crater sd-crater--1" data-v-57aaae68></span><span class="sd-crater sd-crater--2" data-v-57aaae68></span><span class="sd-crater sd-crater--3" data-v-57aaae68></span></span><span class="sd-star sd-star--1" data-v-57aaae68></span><span class="sd-star sd-star--2" data-v-57aaae68></span><span class="sd-star sd-star--3" data-v-57aaae68></span><span class="sd-star sd-star--4" data-v-57aaae68></span><span class="sd-star sd-star--5" data-v-57aaae68></span><span class="sd-star sd-star--6" data-v-57aaae68></span></label></div></div>',1),f={key:1,class:"m-header m-header--visual-shadow"},u={class:"m-header__perspective g8-container"},p={class:"m-header__brand-holder"},m=i((()=>(0,r._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 23.87"},[(0,r._)("path",{d:"M16,4.06a1.25,1.25,0,0,0-.72.25L8,9.77a1.24,1.24,0,0,0-.24,1.73,1.36,1.36,0,0,0,.24.24l7.28,5.46A1.24,1.24,0,0,0,17,17h0a1.23,1.23,0,0,0-.24-1.72h0L12.46,12h10.4a6.75,6.75,0,0,1,0,13.49H1.23A1.24,1.24,0,0,0,0,26.71H0a1.24,1.24,0,0,0,1.23,1.23H22.86a9.21,9.21,0,0,0,0-18.41H12.46l4.33-3.25A1.22,1.22,0,0,0,17,4.56h0a1.23,1.23,0,0,0-.81-.48l-.2,0Z",transform:"translate(0 -4.06)"})],-1))),g=[m],v=i((()=>(0,r._)("div",{class:"f8-switch-daylight u8-d-none","data-f8-custom-style":"","data-f8-target":"body","data-f8-target-dark-class":"m--theme-dark"},[(0,r._)("input",{type:"checkbox",id:"sd"})],-1)));function k(t,e,a,i,m,k){return(0,r.wg)(),(0,r.iD)("div",null,["main"===a.type?((0,r.wg)(),(0,r.iD)("header",o,[(0,r._)("div",l,[(0,r._)("div",c,[d,(0,r._)("h1",null,(0,n.zw)(a.title),1)]),h])])):"sub"===a.type?((0,r.wg)(),(0,r.iD)("header",f,[(0,r._)("div",u,[(0,r._)("div",p,[(0,r._)("a",{class:"m-header__btn m-header__brand m-header__brand--visual-fill",href:"#",onClick:e[0]||(e[0]=(0,s.iM)((t=>this.$router.push({name:"Drinks"})),["prevent"]))},g),(0,r._)("h1",null,(0,n.zw)(a.title),1)]),v])])):(0,r.kq)("",!0)])}var w={name:"Header",props:{type:{type:String,default:"main"},title:{type:String,default:"Hello World!"}},mounted(){$(".f8-switch-daylight").f8switchdaylight()},beforeUnmount(){$(".f8-switch-daylight").f8switchdaylight("destroy",!0)}},y=a(89);const b=(0,y.Z)(w,[["render",k],["__scopeId","data-v-57aaae68"]]);var _=b}},e={};function a(r){var n=e[r];if(void 0!==n)return n.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,r,n,s){if(!r){var i=1/0;for(d=0;d<t.length;d++){r=t[d][0],n=t[d][1],s=t[d][2];for(var o=!0,l=0;l<r.length;l++)(!1&s||i>=s)&&Object.keys(a.O).every((function(t){return a.O[t](r[l])}))?r.splice(l--,1):(o=!1,s<i&&(i=s));if(o){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[r,n,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,r){return a.f[r](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{605:"3425758f",956:"8004610a"}[t]+".js"}}(),function(){a.miniCssF=function(t){return"css/"+t+"."+{605:"21fd961c",956:"5b892873"}[t]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="drinks-app:";a.l=function(r,n,s,i){if(t[r])t[r].push(n);else{var o,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var h=c[d];if(h.getAttribute("src")==r||h.getAttribute("data-webpack")==e+s){o=h;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",e+s),o.src=r),t[r]=[n];var f=function(e,a){o.onerror=o.onload=null,clearTimeout(u);var n=t[r];if(delete t[r],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((function(t){return t(a)})),e)return e(a)},u=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){if("undefined"!==typeof document){var t=function(t,e,a,r,n){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var i=function(a){if(s.onerror=s.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=o,s.parentNode&&s.parentNode.removeChild(s),n(l)}};return s.onerror=s.onload=i,s.href=e,a?a.parentNode.insertBefore(s,a.nextSibling):document.head.appendChild(s),s},e=function(t,e){for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var n=a[r],s=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(s===t||s===e))return n}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){n=i[r],s=n.getAttribute("data-href");if(s===t||s===e)return n}},r=function(r){return new Promise((function(n,s){var i=a.miniCssF(r),o=a.p+i;if(e(i,o))return n();t(r,o,null,n,s)}))},n={143:0};a.f.miniCss=function(t,e){var a={605:1,956:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=r(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}}(),function(){var t={143:0};a.f.j=function(e,r){var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var s=new Promise((function(a,r){n=t[e]=[a,r]}));r.push(n[2]=s);var i=a.p+a.u(e),o=new Error,l=function(r){if(a.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var s=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;o.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",o.name="ChunkLoadError",o.type=s,o.request=i,n[1](o)}};a.l(i,l,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,s,i=r[0],o=r[1],l=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(l)var d=l(a)}for(e&&e(r);c<i.length;c++)s=i[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(d)},r=self["webpackChunkdrinks_app"]=self["webpackChunkdrinks_app"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(5529)}));r=a.O(r)})();
//# sourceMappingURL=app.5fd9bd7d.js.map