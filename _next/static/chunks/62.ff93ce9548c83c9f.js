(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62],{4712:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),i=(t(7294),t(6886)),o=t(8456);function c(){return(0,r.jsx)(i.ZP,{container:!0,alignItems:"center",justifyContent:"center",style:{marginTop:24,marginBottom:24},children:(0,r.jsx)(o.Z,{size:64,thickness:5})})}},6687:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893);t(7294);function i(e){var n=e.children;return(0,r.jsx)("main",{style:{maxWidth:1e3,margin:"0 auto",padding:24},children:n})}},4515:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return X}});var r=t(5893),i=t(7294),o=t(5152),c=t(6886),a=t(5861),u=t(3321),s=t(3946),d=t(7095),l=t(8520),h=t.n(l),f=t(2804),p=t(2681),v=t(2141),y=t(9090),x=t(8764).Buffer;function w(e,n,t,r,i,o,c){try{var a=e[o](c),u=a.value}catch(s){return void t(s)}a.done?n(u):Promise.resolve(u).then(r,i)}function g(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function c(e){w(o,r,i,c,a,"next",e)}function a(e){w(o,r,i,c,a,"throw",e)}c(void 0)}))}}function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(u){i=!0,o=u}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var b="NZCP:";function j(){return(j=g(h().mark((function e(n,t,r){var i,o,c,a,u,s,d,l,f,v;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&n){e.next=2;break}return e.abrupt("return",null);case 2:if(i=m(String(n).split("/"),3),o=i[0],c=i[1],a=i[2],u="1"===c,o===b&&u){e.next=7;break}return e.abrupt("return",{error:"Invalid token prefix",code:n});case 7:return e.prev=7,s=x.from(y.decode.asBytes(a)),e.next=11,p.sign.verify(s,{key:r});case 11:return d=e.sent,e.next=14,Z(d);case 14:if(l=e.sent,f=S(l),v=Date.now(),f.iss===t){e.next=19;break}return e.abrupt("return",{error:"Invalid Issuer",decoded:f});case 19:if(!(1e3*f.nbf>v)){e.next=21;break}return e.abrupt("return",{error:"NBF Invalid",decoded:f});case 21:if(!(1e3*f.exp<v)){e.next=23;break}return e.abrupt("return",{error:"Expired",decoded:f});case 23:return console.log("Decoded",f),e.abrupt("return",f);case 27:return e.prev=27,e.t0=e.catch(7),console.error("Error verifying token",e.t0),e.abrupt("return",{error:e.t0.message,code:n});case 31:case"end":return e.stop()}}),e,null,[[7,27]])})))).apply(this,arguments)}function k(e,n,t){return j.apply(this,arguments)}function z(){return(z=g(h().mark((function e(n){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){return v.decodeFirst(n,(function(n,r){return n?t(n):e(r)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){return z.apply(this,arguments)}function S(e){return{iss:e.get(1),nbf:e.get(5),exp:e.get(4),jti:["urn:uuid",e.get(7).toString("hex")].join(""),vc:e.get("vc")}}var P=t(933);function C(e,n,t,r,i,o,c){try{var a=e[o](c),u=a.value}catch(s){return void t(s)}a.done?n(u):Promise.resolve(u).then(r,i)}var J,K=(0,f.cn)({key:"codeState",default:null}),I=(0,f.nZ)({key:"tokenSelector",get:(J=h().mark((function e(n){var t,r,i,o;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.get,r=t(K),i=t(P.uZ),o=t(P.i2),e.abrupt("return",k(r,i,o).catch((function(e){return console.error("Error verifying token",e),null})));case 5:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(t,r){var i=J.apply(e,n);function o(e){C(i,t,r,o,c,"next",e)}function c(e){C(i,t,r,o,c,"throw",e)}o(void 0)}))})}),M=t(6687),G=t(4712),O=(0,f.cn)({key:"cameraAllowedState",default:function(){0;return"true"===window.localStorage.cameraAllowedSelector}()}),T=(0,f.nZ)({key:"cameraAllowedSelector",get:function(e){var n=(0,e.get)(O);return window.localStorage.cameraAllowedSelector=!0,n}}),U=(0,f.cn)({key:"cameraFacingState",default:function(){0;return window.innerHeight<window.innerWidth?"user":"environment"}()});var D=t(7560),E=t(7357),W=t(6754),F=t(6628),N={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:800,height:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function _(e){var n=e.open,t=e.onClose,i=e.children;return(0,r.jsx)(W.Z,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:n,onClose:t,closeAfterTransition:!0,BackdropComponent:D.Z,BackdropProps:{timeout:500},children:(0,r.jsx)(F.Z,{in:n,children:(0,r.jsxs)(E.Z,{sx:N,children:[i,(0,r.jsx)(u.Z,{style:{marginTop:24},fullWidth:!0,color:"primary",variant:"contained",onClick:t,children:"Close"})]})})})}var Q=t(888);function V(e){var n,t=e.token,i=((0,P.xz)(),null===t||void 0===t||null===(n=t.vc)||void 0===n?void 0:n.credentialSubject);return(0,r.jsxs)(c.ZP,{container:!0,justifyContent:"center",style:{padding:24},children:[(0,r.jsx)(c.ZP,{item:!0,children:(0,r.jsx)(Q.Z,{style:{fontSize:100,marginBottom:24}})}),(0,r.jsxs)(c.ZP,{container:!0,children:[(0,r.jsx)(a.Z,{color:"textSecondary",variant:"h5",children:"Given Name:"}),(0,r.jsx)(c.ZP,{item:!0,style:{flexGrow:1}}),(0,r.jsx)(a.Z,{variant:"h5",children:(0,r.jsx)("strong",{children:i.givenName})})]}),(0,r.jsxs)(c.ZP,{container:!0,children:[(0,r.jsx)(a.Z,{color:"textSecondary",variant:"h5",children:"Family Name:"}),(0,r.jsx)(c.ZP,{item:!0,style:{flexGrow:1}}),(0,r.jsx)(a.Z,{variant:"h5",children:(0,r.jsx)("strong",{children:i.familyName})})]}),(0,r.jsxs)(c.ZP,{container:!0,children:[(0,r.jsx)(a.Z,{color:"textSecondary",variant:"h5",children:"DOB:"}),(0,r.jsx)(c.ZP,{item:!0,style:{flexGrow:1}}),(0,r.jsx)(a.Z,{variant:"h5",children:(0,r.jsx)("strong",{children:i.dob})})]})]})}var q=t(4510),A=t(265);function B(e){var n=e.token;return(0,r.jsxs)(c.ZP,{container:!0,justifyContent:"center",style:{padding:24},children:[(0,r.jsx)(c.ZP,{item:!0,children:(0,r.jsx)(q.Z,{style:{fontSize:100,color:A.Z[500],marginBottom:24}})}),(0,r.jsx)(c.ZP,{container:!0,children:(0,r.jsxs)(a.Z,{variant:"h5",color:"error",children:["Error: ",(0,r.jsx)("strong",{children:n.error})]})})]})}var H=(0,o.default)((function(){return t.e(164).then(t.t.bind(t,7164,23))}),{loadableGenerated:{webpack:function(){return[7164]},modules:["../src/components/pages/IndexPage.js -> react-qr-reader"]},loading:function(){return null},ssr:!1});function X(){return(0,r.jsx)(i.Suspense,{fallback:(0,r.jsx)(G.Z,{}),children:(0,r.jsx)(R,{})})}function R(){var e=(0,f.sJ)(T);return(0,r.jsxs)(r.Fragment,{children:[e&&(0,r.jsx)(Y,{}),!e&&(0,r.jsx)(L,{})]})}function L(){var e=(0,f.Zl)(O);return(0,r.jsxs)(M.Z,{children:[(0,r.jsx)(a.Z,{variant:"h4",children:"COVID NZ Scanner"}),(0,r.jsx)(a.Z,{children:"This app works entirely on your device and does not upload your data anywhere."}),(0,r.jsx)(u.Z,{onClick:function(){return e(!0)},children:"Start Scanning"})]})}function Y(){var e=(0,f.Zl)(K),n=(0,f.sJ)(I),t=(0,f.sJ)(U),o=(0,f.Zl)(U),a=(0,i.useState)(!1),u=a[0],l=a[1];return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(c.ZP,{container:!0,direction:"column",alignItems:"center",justify:"center",children:[(0,r.jsxs)(c.ZP,{item:!0,style:{width:"100%",position:"relative"},children:[(0,r.jsx)(s.Z,{style:{position:"absolute",backgroundColor:"rgba(0, 0, 0, 0.2)",right:8,top:8,zIndex:100},onClick:function(){return o("user"===t?"environment":"user")},children:(0,r.jsx)(d.Z,{style:{fontSize:12,color:"#fff"}})}),(0,r.jsx)(H,{facingMode:t,delay:100,onError:function(e){console.error("Scanning error",e),navigator.permissions.query({name:"camera"}).then((function(e){"denied"===e.state&&navigator.mediaDevices.getUserMedia({audio:!1,video:!0}).then((function(){return window.location.reload()}))})).catch((function(e){console.log("Permissions error",e)}))},onScan:function(n){n&&(e(n),l(!0))},style:{maxHeight:"calc(100vw)",maxWidth:"calc(100vh - 112px)",margin:"0 auto"}})]}),(0,r.jsxs)(_,{open:u,onClose:function(){return l(!1)},children:[n&&n.error&&(0,r.jsx)(B,{token:n}),n&&!n.error&&(0,r.jsx)(V,{token:n})]})]})})}},933:function(e,n,t){"use strict";t.d(n,{uZ:function(){return u},i2:function(){return s},Yh:function(){return d},_5:function(){return l},zt:function(){return h},xz:function(){return f},EC:function(){return v},Y_:function(){return y}});var r=t(2804),i=t(8764).Buffer,o=(0,r.cn)({key:"didState",default:{"@context":["https://w3.org/ns/did/v1","https://w3id.org/security/suites/jws-2020/v1"],id:"did:web:nzcp.identity.health.nz",verificationMethod:[{id:"did:web:nzcp.identity.health.nz#z12Kf7UQ",controller:"did:web:nzcp.identity.health.nz",type:"JsonWebKey2020",publicKeyJwk:{kty:"EC",crv:"P-256",x:"DQCKJusqMsT0u7CjpmhjVGkHln3A3fS-ayeH4Nu52tc",y:"lxgWzsLtVI8fqZmTPPo9nZ-kzGs7w7XO8-rUU68OxmI"}}],assertionMethod:["did:web:nzcp.identity.health.nz#z12Kf7UQ"]}}),c=(0,r.nZ)({key:"verificationSelector",get:function(e){return p((0,e.get)(o))}}),a=(0,r.nZ)({key:"verificationIdSelector",get:function(e){return(0,e.get)(c).id}}),u=(0,r.nZ)({key:"verificationControllerSelector",get:function(e){return(0,e.get)(c).controller}}),s=(0,r.nZ)({key:"jwkSelector",get:function(e){var n=(0,e.get)(c).publicKeyJwk,t=n.kty,r=n.crv,o=n.x,a=n.y;return{kty:t,crv:r,x:i.from(o,"base64"),y:i.from(a,"base64")}}}),d=function(){return(0,r.Zl)(o)},l=function(){return p({"@context":"https://w3.org/ns/did/v1",id:"did:web:nzcp.covid19.health.nz",verificationMethod:[{id:"did:web:nzcp.covid19.health.nz#key-1",controller:"did:web:nzcp.covid19.health.nz",type:"JsonWebKey2020",publicKeyJwk:{kty:"EC",crv:"P-256",x:"zRR-XGsCp12Vvbgui4DD6O6cqmhfPuXMhi1OxPl8760",y:"Iv5SU6FuW-TRYh5_GOrJlcV_gpF_GpFQhCOD8LSk3T0"}}],assertionMethod:["did:web:nzcp.covid19.health.nz#key-1"]}).id},h=function(){return p({"@context":["https://w3.org/ns/did/v1","https://w3id.org/security/suites/jws-2020/v1"],id:"did:web:nzcp.identity.health.nz",verificationMethod:[{id:"did:web:nzcp.identity.health.nz#z12Kf7UQ",controller:"did:web:nzcp.identity.health.nz",type:"JsonWebKey2020",publicKeyJwk:{kty:"EC",crv:"P-256",x:"DQCKJusqMsT0u7CjpmhjVGkHln3A3fS-ayeH4Nu52tc",y:"lxgWzsLtVI8fqZmTPPo9nZ-kzGs7w7XO8-rUU68OxmI"}}],assertionMethod:["did:web:nzcp.identity.health.nz#z12Kf7UQ"]}).id},f=function(){return(0,r.sJ)(a)};function p(e){return e.verificationMethod[0]}function v(){return{"@context":"https://w3.org/ns/did/v1",id:"did:web:nzcp.covid19.health.nz",verificationMethod:[{id:"did:web:nzcp.covid19.health.nz#key-1",controller:"did:web:nzcp.covid19.health.nz",type:"JsonWebKey2020",publicKeyJwk:{kty:"EC",crv:"P-256",x:"zRR-XGsCp12Vvbgui4DD6O6cqmhfPuXMhi1OxPl8760",y:"Iv5SU6FuW-TRYh5_GOrJlcV_gpF_GpFQhCOD8LSk3T0"}}],assertionMethod:["did:web:nzcp.covid19.health.nz#key-1"]}}function y(){return{"@context":["https://w3.org/ns/did/v1","https://w3id.org/security/suites/jws-2020/v1"],id:"did:web:nzcp.identity.health.nz",verificationMethod:[{id:"did:web:nzcp.identity.health.nz#z12Kf7UQ",controller:"did:web:nzcp.identity.health.nz",type:"JsonWebKey2020",publicKeyJwk:{kty:"EC",crv:"P-256",x:"DQCKJusqMsT0u7CjpmhjVGkHln3A3fS-ayeH4Nu52tc",y:"lxgWzsLtVI8fqZmTPPo9nZ-kzGs7w7XO8-rUU68OxmI"}}],assertionMethod:["did:web:nzcp.identity.health.nz#z12Kf7UQ"]}}},6601:function(){},9214:function(){},1922:function(){},2363:function(){},2361:function(){},4616:function(){}}]);