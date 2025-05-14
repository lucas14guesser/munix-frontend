import{a as s,d as R}from"./Bar-qEzKOJUz.js";var M={},le;function Le(){if(le)return M;le=1,Object.defineProperty(M,"__esModule",{value:!0}),M.parse=u,M.serialize=l;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,n=Object.prototype.toString,o=(()=>{const m=function(){};return m.prototype=Object.create(null),m})();function u(m,y){const d=new o,x=m.length;if(x<2)return d;const g=(y==null?void 0:y.decode)||f;let h=0;do{const w=m.indexOf("=",h);if(w===-1)break;const v=m.indexOf(";",h),b=v===-1?x:v;if(w>b){h=m.lastIndexOf(";",w-1)+1;continue}const C=c(m,h,w),A=i(m,w,C),D=m.slice(C,A);if(d[D]===void 0){let B=c(m,w+1,b),S=i(m,b,B);const I=g(m.slice(B,S));d[D]=I}h=b+1}while(h<x);return d}function c(m,y,d){do{const x=m.charCodeAt(y);if(x!==32&&x!==9)return y}while(++y<d);return d}function i(m,y,d){for(;y>d;){const x=m.charCodeAt(--y);if(x!==32&&x!==9)return y+1}return d}function l(m,y,d){const x=(d==null?void 0:d.encode)||encodeURIComponent;if(!e.test(m))throw new TypeError(`argument name is invalid: ${m}`);const g=x(y);if(!t.test(g))throw new TypeError(`argument val is invalid: ${y}`);let h=m+"="+g;if(!d)return h;if(d.maxAge!==void 0){if(!Number.isInteger(d.maxAge))throw new TypeError(`option maxAge is invalid: ${d.maxAge}`);h+="; Max-Age="+d.maxAge}if(d.domain){if(!r.test(d.domain))throw new TypeError(`option domain is invalid: ${d.domain}`);h+="; Domain="+d.domain}if(d.path){if(!a.test(d.path))throw new TypeError(`option path is invalid: ${d.path}`);h+="; Path="+d.path}if(d.expires){if(!p(d.expires)||!Number.isFinite(d.expires.valueOf()))throw new TypeError(`option expires is invalid: ${d.expires}`);h+="; Expires="+d.expires.toUTCString()}if(d.httpOnly&&(h+="; HttpOnly"),d.secure&&(h+="; Secure"),d.partitioned&&(h+="; Partitioned"),d.priority)switch(typeof d.priority=="string"?d.priority.toLowerCase():void 0){case"low":h+="; Priority=Low";break;case"medium":h+="; Priority=Medium";break;case"high":h+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${d.priority}`)}if(d.sameSite)switch(typeof d.sameSite=="string"?d.sameSite.toLowerCase():d.sameSite){case!0:case"strict":h+="; SameSite=Strict";break;case"lax":h+="; SameSite=Lax";break;case"none":h+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${d.sameSite}`)}return h}function f(m){if(m.indexOf("%")===-1)return m;try{return decodeURIComponent(m)}catch{return m}}function p(m){return n.call(m)==="[object Date]"}return M}Le();var se="popstate";function $e(e={}){function t(a,n){let{pathname:o,search:u,hash:c}=a.location;return Q("",{pathname:o,search:u,hash:c},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function r(a,n){return typeof n=="string"?n:U(n)}return Ie(t,r,null,e)}function E(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function P(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function De(){return Math.random().toString(36).substring(2,10)}function ue(e,t){return{usr:e.state,key:e.key,idx:t}}function Q(e,t,r=null,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?N(t):t,state:r,key:t&&t.key||a||De()}}function U({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function N(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function Ie(e,t,r,a={}){let{window:n=document.defaultView,v5Compat:o=!1}=a,u=n.history,c="POP",i=null,l=f();l==null&&(l=0,u.replaceState({...u.state,idx:l},""));function f(){return(u.state||{idx:null}).idx}function p(){c="POP";let g=f(),h=g==null?null:g-l;l=g,i&&i({action:c,location:x.location,delta:h})}function m(g,h){c="PUSH";let w=Q(x.location,g,h);l=f()+1;let v=ue(w,l),b=x.createHref(w);try{u.pushState(v,"",b)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;n.location.assign(b)}o&&i&&i({action:c,location:x.location,delta:1})}function y(g,h){c="REPLACE";let w=Q(x.location,g,h);l=f();let v=ue(w,l),b=x.createHref(w);u.replaceState(v,"",b),o&&i&&i({action:c,location:x.location,delta:0})}function d(g){return Be(g)}let x={get action(){return c},get location(){return e(n,u)},listen(g){if(i)throw new Error("A history only accepts one active listener");return n.addEventListener(se,p),i=g,()=>{n.removeEventListener(se,p),i=null}},createHref(g){return t(n,g)},createURL:d,encodeLocation(g){let h=d(g);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:y,go(g){return u.go(g)}};return x}function Be(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),E(r,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:U(e);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=r+a),new URL(a,r)}function he(e,t,r="/"){return Te(e,t,r,!1)}function Te(e,t,r,a){let n=typeof t=="string"?N(t):t,o=L(n.pathname||"/",r);if(o==null)return null;let u=me(e);Ae(u);let c=null;for(let i=0;c==null&&i<u.length;++i){let l=qe(o);c=je(u[i],l,a)}return c}function me(e,t=[],r=[],a=""){let n=(o,u,c)=>{let i={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:u,route:o};i.relativePath.startsWith("/")&&(E(i.relativePath.startsWith(a),`Absolute route path "${i.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),i.relativePath=i.relativePath.slice(a.length));let l=F([a,i.relativePath]),f=r.concat(i);o.children&&o.children.length>0&&(E(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),me(o.children,t,f,l)),!(o.path==null&&!o.index)&&t.push({path:l,score:We(l,o.index),routesMeta:f})};return e.forEach((o,u)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))n(o,u);else for(let i of pe(o.path))n(o,u,i)}),t}function pe(e){let t=e.split("/");if(t.length===0)return[];let[r,...a]=t,n=r.endsWith("?"),o=r.replace(/\?$/,"");if(a.length===0)return n?[o,""]:[o];let u=pe(a.join("/")),c=[];return c.push(...u.map(i=>i===""?o:[o,i].join("/"))),n&&c.push(...u),c.map(i=>e.startsWith("/")&&i===""?"/":i)}function Ae(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:_e(t.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}var Ne=/^:[\w-]+$/,Oe=3,Me=2,ze=1,Ue=10,He=-2,ce=e=>e==="*";function We(e,t){let r=e.split("/"),a=r.length;return r.some(ce)&&(a+=He),t&&(a+=Me),r.filter(n=>!ce(n)).reduce((n,o)=>n+(Ne.test(o)?Oe:o===""?ze:Ue),a)}function _e(e,t){return e.length===t.length&&e.slice(0,-1).every((a,n)=>a===t[n])?e[e.length-1]-t[t.length-1]:0}function je(e,t,r=!1){let{routesMeta:a}=e,n={},o="/",u=[];for(let c=0;c<a.length;++c){let i=a[c],l=c===a.length-1,f=o==="/"?t:t.slice(o.length)||"/",p=K({path:i.relativePath,caseSensitive:i.caseSensitive,end:l},f),m=i.route;if(!p&&l&&r&&!a[a.length-1].route.index&&(p=K({path:i.relativePath,caseSensitive:i.caseSensitive,end:!1},f)),!p)return null;Object.assign(n,p.params),u.push({params:n,pathname:F([o,p.pathname]),pathnameBase:Ge(F([o,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(o=F([o,p.pathnameBase]))}return u}function K(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,a]=Ve(e.path,e.caseSensitive,e.end),n=t.match(r);if(!n)return null;let o=n[0],u=o.replace(/(.)\/+$/,"$1"),c=n.slice(1);return{params:a.reduce((l,{paramName:f,isOptional:p},m)=>{if(f==="*"){let d=c[m]||"";u=o.slice(0,o.length-d.length).replace(/(.)\/+$/,"$1")}const y=c[m];return p&&!y?l[f]=void 0:l[f]=(y||"").replace(/%2F/g,"/"),l},{}),pathname:o,pathnameBase:u,pattern:e}}function Ve(e,t=!1,r=!0){P(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,c,i)=>(a.push({paramName:c,isOptional:i!=null}),i?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),a]}function qe(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return P(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function L(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,a=e.charAt(r);return a&&a!=="/"?null:e.slice(r)||"/"}function Ke(e,t="/"){let{pathname:r,search:a="",hash:n=""}=typeof e=="string"?N(e):e;return{pathname:r?r.startsWith("/")?r:Je(r,t):t,search:Xe(a),hash:Qe(n)}}function Je(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?r.length>1&&r.pop():n!=="."&&r.push(n)}),r.length>1?r.join("/"):"/"}function G(e,t,r,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ye(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function ye(e){let t=Ye(e);return t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase)}function ge(e,t,r,a=!1){let n;typeof e=="string"?n=N(e):(n={...e},E(!n.pathname||!n.pathname.includes("?"),G("?","pathname","search",n)),E(!n.pathname||!n.pathname.includes("#"),G("#","pathname","hash",n)),E(!n.search||!n.search.includes("#"),G("#","search","hash",n)));let o=e===""||n.pathname==="",u=o?"/":n.pathname,c;if(u==null)c=r;else{let p=t.length-1;if(!a&&u.startsWith("..")){let m=u.split("/");for(;m[0]==="..";)m.shift(),p-=1;n.pathname=m.join("/")}c=p>=0?t[p]:"/"}let i=Ke(n,c),l=u&&u!=="/"&&u.endsWith("/"),f=(o||u===".")&&r.endsWith("/");return!i.pathname.endsWith("/")&&(l||f)&&(i.pathname+="/"),i}var F=e=>e.join("/").replace(/\/\/+/g,"/"),Ge=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Xe=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Qe=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ze(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var ve=["POST","PUT","PATCH","DELETE"];new Set(ve);var et=["GET",...ve];new Set(et);var O=s.createContext(null);O.displayName="DataRouter";var J=s.createContext(null);J.displayName="DataRouterState";var xe=s.createContext({isTransitioning:!1});xe.displayName="ViewTransition";var tt=s.createContext(new Map);tt.displayName="Fetchers";var rt=s.createContext(null);rt.displayName="Await";var k=s.createContext(null);k.displayName="Navigation";var H=s.createContext(null);H.displayName="Location";var $=s.createContext({outlet:null,matches:[],isDataRoute:!1});$.displayName="Route";var ee=s.createContext(null);ee.displayName="RouteError";function nt(e,{relative:t}={}){E(W(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=s.useContext(k),{hash:n,pathname:o,search:u}=_(e,{relative:t}),c=o;return r!=="/"&&(c=o==="/"?r:F([r,o])),a.createHref({pathname:c,search:u,hash:n})}function W(){return s.useContext(H)!=null}function T(){return E(W(),"useLocation() may be used only in the context of a <Router> component."),s.useContext(H).location}var we="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ee(e){s.useContext(k).static||s.useLayoutEffect(e)}function at(){let{isDataRoute:e}=s.useContext($);return e?gt():ot()}function ot(){E(W(),"useNavigate() may be used only in the context of a <Router> component.");let e=s.useContext(O),{basename:t,navigator:r}=s.useContext(k),{matches:a}=s.useContext($),{pathname:n}=T(),o=JSON.stringify(ye(a)),u=s.useRef(!1);return Ee(()=>{u.current=!0}),s.useCallback((i,l={})=>{if(P(u.current,we),!u.current)return;if(typeof i=="number"){r.go(i);return}let f=ge(i,JSON.parse(o),n,l.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:F([t,f.pathname])),(l.replace?r.replace:r.push)(f,l.state,l)},[t,r,o,n,e])}s.createContext(null);function _(e,{relative:t}={}){let{matches:r}=s.useContext($),{pathname:a}=T(),n=JSON.stringify(ye(r));return s.useMemo(()=>ge(e,JSON.parse(n),a,t==="path"),[e,n,a,t])}function it(e,t){return be(e,t)}function be(e,t,r,a){var w;E(W(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:n,static:o}=s.useContext(k),{matches:u}=s.useContext($),c=u[u.length-1],i=c?c.params:{},l=c?c.pathname:"/",f=c?c.pathnameBase:"/",p=c&&c.route;{let v=p&&p.path||"";Re(l,!p||v.endsWith("*")||v.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v==="/"?"*":`${v}/*`}">.`)}let m=T(),y;if(t){let v=typeof t=="string"?N(t):t;E(f==="/"||((w=v.pathname)==null?void 0:w.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${v.pathname}" was given in the \`location\` prop.`),y=v}else y=m;let d=y.pathname||"/",x=d;if(f!=="/"){let v=f.replace(/^\//,"").split("/");x="/"+d.replace(/^\//,"").split("/").slice(v.length).join("/")}let g=!o&&r&&r.matches&&r.matches.length>0?r.matches:he(e,{pathname:x});P(p||g!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),P(g==null||g[g.length-1].route.element!==void 0||g[g.length-1].route.Component!==void 0||g[g.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=dt(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},i,v.params),pathname:F([f,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?f:F([f,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),u,r,a);return t&&h?s.createElement(H.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},h):h}function lt(){let e=yt(),t=Ze(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",n={padding:"0.5rem",backgroundColor:a},o={padding:"2px 4px",backgroundColor:a},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=s.createElement(s.Fragment,null,s.createElement("p",null,"💿 Hey developer 👋"),s.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",s.createElement("code",{style:o},"ErrorBoundary")," or"," ",s.createElement("code",{style:o},"errorElement")," prop on your route.")),s.createElement(s.Fragment,null,s.createElement("h2",null,"Unexpected Application Error!"),s.createElement("h3",{style:{fontStyle:"italic"}},t),r?s.createElement("pre",{style:n},r):null,u)}var st=s.createElement(lt,null),ut=class extends s.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?s.createElement($.Provider,{value:this.props.routeContext},s.createElement(ee.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ct({routeContext:e,match:t,children:r}){let a=s.useContext(O);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),s.createElement($.Provider,{value:e},r)}function dt(e,t=[],r=null,a=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let n=e,o=r==null?void 0:r.errors;if(o!=null){let i=n.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id])!==void 0);E(i>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),n=n.slice(0,Math.min(n.length,i+1))}let u=!1,c=-1;if(r)for(let i=0;i<n.length;i++){let l=n[i];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(c=i),l.route.id){let{loaderData:f,errors:p}=r,m=l.route.loader&&!f.hasOwnProperty(l.route.id)&&(!p||p[l.route.id]===void 0);if(l.route.lazy||m){u=!0,c>=0?n=n.slice(0,c+1):n=[n[0]];break}}}return n.reduceRight((i,l,f)=>{let p,m=!1,y=null,d=null;r&&(p=o&&l.route.id?o[l.route.id]:void 0,y=l.route.errorElement||st,u&&(c<0&&f===0?(Re("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,d=null):c===f&&(m=!0,d=l.route.hydrateFallbackElement||null)));let x=t.concat(n.slice(0,f+1)),g=()=>{let h;return p?h=y:m?h=d:l.route.Component?h=s.createElement(l.route.Component,null):l.route.element?h=l.route.element:h=i,s.createElement(ct,{match:l,routeContext:{outlet:i,matches:x,isDataRoute:r!=null},children:h})};return r&&(l.route.ErrorBoundary||l.route.errorElement||f===0)?s.createElement(ut,{location:r.location,revalidation:r.revalidation,component:y,error:p,children:g(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):g()},null)}function te(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ft(e){let t=s.useContext(O);return E(t,te(e)),t}function ht(e){let t=s.useContext(J);return E(t,te(e)),t}function mt(e){let t=s.useContext($);return E(t,te(e)),t}function re(e){let t=mt(e),r=t.matches[t.matches.length-1];return E(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function pt(){return re("useRouteId")}function yt(){var a;let e=s.useContext(ee),t=ht("useRouteError"),r=re("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[r]}function gt(){let{router:e}=ft("useNavigate"),t=re("useNavigate"),r=s.useRef(!1);return Ee(()=>{r.current=!0}),s.useCallback(async(n,o={})=>{P(r.current,we),r.current&&(typeof n=="number"?e.navigate(n):await e.navigate(n,{fromRouteId:t,...o}))},[e,t])}var de={};function Re(e,t,r){!t&&!de[e]&&(de[e]=!0,P(!1,r))}s.memo(vt);function vt({routes:e,future:t,state:r}){return be(e,void 0,r,t)}function xt(e){E(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wt({basename:e="/",children:t=null,location:r,navigationType:a="POP",navigator:n,static:o=!1}){E(!W(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),c=s.useMemo(()=>({basename:u,navigator:n,static:o,future:{}}),[u,n,o]);typeof r=="string"&&(r=N(r));let{pathname:i="/",search:l="",hash:f="",state:p=null,key:m="default"}=r,y=s.useMemo(()=>{let d=L(i,u);return d==null?null:{location:{pathname:d,search:l,hash:f,state:p,key:m},navigationType:a}},[u,i,l,f,p,m,a]);return P(y!=null,`<Router basename="${u}"> is not able to match the URL "${i}${l}${f}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:s.createElement(k.Provider,{value:c},s.createElement(H.Provider,{children:t,value:y}))}function er({children:e,location:t}){return it(Z(e),t)}function Z(e,t=[]){let r=[];return s.Children.forEach(e,(a,n)=>{if(!s.isValidElement(a))return;let o=[...t,n];if(a.type===s.Fragment){r.push.apply(r,Z(a.props.children,o));return}E(a.type===xt,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),E(!a.props.index||!a.props.children,"An index route cannot have child routes.");let u={id:a.props.id||o.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(u.children=Z(a.props.children,o)),r.push(u)}),r}var V="get",q="application/x-www-form-urlencoded";function Y(e){return e!=null&&typeof e.tagName=="string"}function Et(e){return Y(e)&&e.tagName.toLowerCase()==="button"}function bt(e){return Y(e)&&e.tagName.toLowerCase()==="form"}function Rt(e){return Y(e)&&e.tagName.toLowerCase()==="input"}function Ct(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function St(e,t){return e.button===0&&(!t||t==="_self")&&!Ct(e)}var j=null;function Pt(){if(j===null)try{new FormData(document.createElement("form"),0),j=!1}catch{j=!0}return j}var kt=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function X(e){return e!=null&&!kt.has(e)?(P(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${q}"`),null):e}function Ft(e,t){let r,a,n,o,u;if(bt(e)){let c=e.getAttribute("action");a=c?L(c,t):null,r=e.getAttribute("method")||V,n=X(e.getAttribute("enctype"))||q,o=new FormData(e)}else if(Et(e)||Rt(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let i=e.getAttribute("formaction")||c.getAttribute("action");if(a=i?L(i,t):null,r=e.getAttribute("formmethod")||c.getAttribute("method")||V,n=X(e.getAttribute("formenctype"))||X(c.getAttribute("enctype"))||q,o=new FormData(c,e),!Pt()){let{name:l,type:f,value:p}=e;if(f==="image"){let m=l?`${l}.`:"";o.append(`${m}x`,"0"),o.append(`${m}y`,"0")}else l&&o.append(l,p)}}else{if(Y(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=V,a=null,n=q,u=e}return o&&n==="text/plain"&&(u=o,o=void 0),{action:a,method:r.toLowerCase(),encType:n,formData:o,body:u}}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function Lt(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $t(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Dt(e,t,r){let a=await Promise.all(e.map(async n=>{let o=t.routes[n.route.id];if(o){let u=await Lt(o,r);return u.links?u.links():[]}return[]}));return At(a.flat(1).filter($t).filter(n=>n.rel==="stylesheet"||n.rel==="preload").map(n=>n.rel==="stylesheet"?{...n,rel:"prefetch",as:"style"}:{...n,rel:"prefetch"}))}function fe(e,t,r,a,n,o){let u=(i,l)=>r[l]?i.route.id!==r[l].route.id:!0,c=(i,l)=>{var f;return r[l].pathname!==i.pathname||((f=r[l].route.path)==null?void 0:f.endsWith("*"))&&r[l].params["*"]!==i.params["*"]};return o==="assets"?t.filter((i,l)=>u(i,l)||c(i,l)):o==="data"?t.filter((i,l)=>{var p;let f=a.routes[i.route.id];if(!f||!f.hasLoader)return!1;if(u(i,l)||c(i,l))return!0;if(i.route.shouldRevalidate){let m=i.route.shouldRevalidate({currentUrl:new URL(n.pathname+n.search+n.hash,window.origin),currentParams:((p=r[0])==null?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:i.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function It(e,t,{includeHydrateFallback:r}={}){return Bt(e.map(a=>{let n=t.routes[a.route.id];if(!n)return[];let o=[n.module];return n.clientActionModule&&(o=o.concat(n.clientActionModule)),n.clientLoaderModule&&(o=o.concat(n.clientLoaderModule)),r&&n.hydrateFallbackModule&&(o=o.concat(n.hydrateFallbackModule)),n.imports&&(o=o.concat(n.imports)),o}).flat(1))}function Bt(e){return[...new Set(e)]}function Tt(e){let t={},r=Object.keys(e).sort();for(let a of r)t[a]=e[a];return t}function At(e,t){let r=new Set;return new Set(t),e.reduce((a,n)=>{let o=JSON.stringify(Tt(n));return r.has(o)||(r.add(o),a.push({key:o,link:n})),a},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Nt=new Set([100,101,204,205]);function Ot(e,t){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname="_root.data":t&&L(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function Ce(){let e=s.useContext(O);return ne(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Mt(){let e=s.useContext(J);return ne(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var ae=s.createContext(void 0);ae.displayName="FrameworkContext";function Se(){let e=s.useContext(ae);return ne(e,"You must render this element inside a <HydratedRouter> element"),e}function zt(e,t){let r=s.useContext(ae),[a,n]=s.useState(!1),[o,u]=s.useState(!1),{onFocus:c,onBlur:i,onMouseEnter:l,onMouseLeave:f,onTouchStart:p}=t,m=s.useRef(null);s.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let x=h=>{h.forEach(w=>{u(w.isIntersecting)})},g=new IntersectionObserver(x,{threshold:.5});return m.current&&g.observe(m.current),()=>{g.disconnect()}}},[e]),s.useEffect(()=>{if(a){let x=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(x)}}},[a]);let y=()=>{n(!0)},d=()=>{n(!1),u(!1)};return r?e!=="intent"?[o,m,{}]:[o,m,{onFocus:z(c,y),onBlur:z(i,d),onMouseEnter:z(l,y),onMouseLeave:z(f,d),onTouchStart:z(p,y)}]:[!1,m,{}]}function z(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Ut({page:e,...t}){let{router:r}=Ce(),a=s.useMemo(()=>he(r.routes,e,r.basename),[r.routes,e,r.basename]);return a?s.createElement(Wt,{page:e,matches:a,...t}):null}function Ht(e){let{manifest:t,routeModules:r}=Se(),[a,n]=s.useState([]);return s.useEffect(()=>{let o=!1;return Dt(e,t,r).then(u=>{o||n(u)}),()=>{o=!0}},[e,t,r]),a}function Wt({page:e,matches:t,...r}){let a=T(),{manifest:n,routeModules:o}=Se(),{basename:u}=Ce(),{loaderData:c,matches:i}=Mt(),l=s.useMemo(()=>fe(e,t,i,n,a,"data"),[e,t,i,n,a]),f=s.useMemo(()=>fe(e,t,i,n,a,"assets"),[e,t,i,n,a]),p=s.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let d=new Set,x=!1;if(t.forEach(h=>{var v;let w=n.routes[h.route.id];!w||!w.hasLoader||(!l.some(b=>b.route.id===h.route.id)&&h.route.id in c&&((v=o[h.route.id])!=null&&v.shouldRevalidate)||w.hasClientLoader?x=!0:d.add(h.route.id))}),d.size===0)return[];let g=Ot(e,u);return x&&d.size>0&&g.searchParams.set("_routes",t.filter(h=>d.has(h.route.id)).map(h=>h.route.id).join(",")),[g.pathname+g.search]},[u,c,a,n,l,t,e,o]),m=s.useMemo(()=>It(f,n),[f,n]),y=Ht(f);return s.createElement(s.Fragment,null,p.map(d=>s.createElement("link",{key:d,rel:"prefetch",as:"fetch",href:d,...r})),m.map(d=>s.createElement("link",{key:d,rel:"modulepreload",href:d,...r})),y.map(({key:d,link:x})=>s.createElement("link",{key:d,...x})))}function _t(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var Pe=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Pe&&(window.__reactRouterVersion="7.6.0")}catch{}function tr({basename:e,children:t,window:r}){let a=s.useRef();a.current==null&&(a.current=$e({window:r,v5Compat:!0}));let n=a.current,[o,u]=s.useState({action:n.action,location:n.location}),c=s.useCallback(i=>{s.startTransition(()=>u(i))},[u]);return s.useLayoutEffect(()=>n.listen(c),[n,c]),s.createElement(wt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:n})}var ke=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oe=s.forwardRef(function({onClick:t,discover:r="render",prefetch:a="none",relative:n,reloadDocument:o,replace:u,state:c,target:i,to:l,preventScrollReset:f,viewTransition:p,...m},y){let{basename:d}=s.useContext(k),x=typeof l=="string"&&ke.test(l),g,h=!1;if(typeof l=="string"&&x&&(g=l,Pe))try{let S=new URL(window.location.href),I=l.startsWith("//")?new URL(S.protocol+l):new URL(l),ie=L(I.pathname,d);I.origin===S.origin&&ie!=null?l=ie+I.search+I.hash:h=!0}catch{P(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let w=nt(l,{relative:n}),[v,b,C]=zt(a,m),A=Kt(l,{replace:u,state:c,target:i,preventScrollReset:f,relative:n,viewTransition:p});function D(S){t&&t(S),S.defaultPrevented||A(S)}let B=s.createElement("a",{...m,...C,href:g||w,onClick:h||o?t:D,ref:_t(y,b),target:i,"data-discover":!x&&r==="render"?"true":void 0});return v&&!x?s.createElement(s.Fragment,null,B,s.createElement(Ut,{page:w})):B});oe.displayName="Link";var jt=s.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:a="",end:n=!1,style:o,to:u,viewTransition:c,children:i,...l},f){let p=_(u,{relative:l.relative}),m=T(),y=s.useContext(J),{navigator:d,basename:x}=s.useContext(k),g=y!=null&&Qt(p)&&c===!0,h=d.encodeLocation?d.encodeLocation(p).pathname:p.pathname,w=m.pathname,v=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;r||(w=w.toLowerCase(),v=v?v.toLowerCase():null,h=h.toLowerCase()),v&&x&&(v=L(v,x)||v);const b=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let C=w===h||!n&&w.startsWith(h)&&w.charAt(b)==="/",A=v!=null&&(v===h||!n&&v.startsWith(h)&&v.charAt(h.length)==="/"),D={isActive:C,isPending:A,isTransitioning:g},B=C?t:void 0,S;typeof a=="function"?S=a(D):S=[a,C?"active":null,A?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let I=typeof o=="function"?o(D):o;return s.createElement(oe,{...l,"aria-current":B,className:S,ref:f,style:I,to:u,viewTransition:c},typeof i=="function"?i(D):i)});jt.displayName="NavLink";var Vt=s.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:a,replace:n,state:o,method:u=V,action:c,onSubmit:i,relative:l,preventScrollReset:f,viewTransition:p,...m},y)=>{let d=Gt(),x=Xt(c,{relative:l}),g=u.toLowerCase()==="get"?"get":"post",h=typeof c=="string"&&ke.test(c),w=v=>{if(i&&i(v),v.defaultPrevented)return;v.preventDefault();let b=v.nativeEvent.submitter,C=(b==null?void 0:b.getAttribute("formmethod"))||u;d(b||v.currentTarget,{fetcherKey:t,method:C,navigate:r,replace:n,state:o,relative:l,preventScrollReset:f,viewTransition:p})};return s.createElement("form",{ref:y,method:g,action:x,onSubmit:a?i:w,...m,"data-discover":!h&&e==="render"?"true":void 0})});Vt.displayName="Form";function qt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fe(e){let t=s.useContext(O);return E(t,qt(e)),t}function Kt(e,{target:t,replace:r,state:a,preventScrollReset:n,relative:o,viewTransition:u}={}){let c=at(),i=T(),l=_(e,{relative:o});return s.useCallback(f=>{if(St(f,t)){f.preventDefault();let p=r!==void 0?r:U(i)===U(l);c(e,{replace:p,state:a,preventScrollReset:n,relative:o,viewTransition:u})}},[i,c,l,r,a,t,e,n,o,u])}var Jt=0,Yt=()=>`__${String(++Jt)}__`;function Gt(){let{router:e}=Fe("useSubmit"),{basename:t}=s.useContext(k),r=pt();return s.useCallback(async(a,n={})=>{let{action:o,method:u,encType:c,formData:i,body:l}=Ft(a,t);if(n.navigate===!1){let f=n.fetcherKey||Yt();await e.fetch(f,r,n.action||o,{preventScrollReset:n.preventScrollReset,formData:i,body:l,formMethod:n.method||u,formEncType:n.encType||c,flushSync:n.flushSync})}else await e.navigate(n.action||o,{preventScrollReset:n.preventScrollReset,formData:i,body:l,formMethod:n.method||u,formEncType:n.encType||c,replace:n.replace,state:n.state,fromRouteId:r,flushSync:n.flushSync,viewTransition:n.viewTransition})},[e,t,r])}function Xt(e,{relative:t}={}){let{basename:r}=s.useContext(k),a=s.useContext($);E(a,"useFormAction must be used inside a RouteContext");let[n]=a.matches.slice(-1),o={..._(e||".",{relative:t})},u=T();if(e==null){o.search=u.search;let c=new URLSearchParams(o.search),i=c.getAll("index");if(i.some(f=>f==="")){c.delete("index"),i.filter(p=>p).forEach(p=>c.append("index",p));let f=c.toString();o.search=f?`?${f}`:""}}return(!e||e===".")&&n.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(o.pathname=o.pathname==="/"?r:F([r,o.pathname])),U(o)}function Qt(e,t={}){let r=s.useContext(xe);E(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Fe("useViewTransitionState"),n=_(e,{relative:t.relative});if(!r.isTransitioning)return!1;let o=L(r.currentLocation.pathname,a)||r.currentLocation.pathname,u=L(r.nextLocation.pathname,a)||r.nextLocation.pathname;return K(n.pathname,u)!=null||K(n.pathname,o)!=null}[...Nt];const rr=R.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    margin: 5rem 0 0 2rem;
`,nr=R(oe)`
    display: flex;
    background-color: #7E6DA3;
    color: #FFF;
    padding: 1.3rem;
    border: 1px solid #E6E6E6;
    border-radius: 12px;
    font-size: 1rem;
    transition: .3s ease-in;
    text-decoration: none;
    width: 10rem;
    justify-content: center;

    &:hover {
        background-color: #3C2A63;
    }
`,ar=R.div`
    display: flex;
    width: 98%;

    table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
        background-color: #FFFFFF;
        color: #895FE3;
    }

    thead {
        background: #895FE3;
        color: #FFFFFF;
    }

    th, td {
        padding: 12px 15px;
        text-align: center;
    }

    th {
        text-transform: uppercase;
        font-size: 1.2rem;
    }

    td {
        color: #5B5863;
        border: 1px solid #E6E6E6;
        font-size: 1rem;
    }
`,or=R.th`
    width: 5%;
`,ir=R.button`
    border: none;
    font-size: 1.3rem;
    background-color: #FFF;
    color: #7E6DA3;
    cursor: pointer;
    transition: .3s ease-in;

    &:hover {
        color: #895FE3;
    }
`,lr=R.button`
    width: 15rem;
    padding: 1rem;
    background-color: #7E6DA3;
    color: #FFF;
    border: 1px solid #895FE3;
    border-radius: 12px;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    margin: 2rem .5rem;
    cursor: pointer;
    transition: .3s ease-in;

    &:hover {
        background-color: #3C2A63;
    }
`,sr=R.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin: 2rem 0;
`,ur=R.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0 6rem;
`,cr=R.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`,dr=R.div`
    display: flex;
    width: 100%;
    gap: 1rem;
    flex-direction: row;
    align-items: center;
`,fr=R.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #E6E6E6;
    padding: 2rem;
    gap: 2rem;
    margin: 5rem 0 0 2rem;
`,hr=R.h4`
    font-size: 1.3rem;
    color: #5B5863;
`,mr=R.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`,pr=R.input`
    width: 30rem;
    padding: 1rem;
    border: 1px solid #E6E6E6;
    border-radius: 16px;
    outline: none;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    color: #5B5863;

    &::placeholder {
        color: #5B5863;
        font-size: 1rem;
        opacity: 75%;
        font-family: "Roboto", sans-serif;
    }
`,yr=R.select`
    width: 32rem;
    padding: 1rem;
    border: 1px solid #E6E6E6;
    border-radius: 16px;
    outline: none;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    color: #5B5863;

    &::placeholder {
        color: #5B5863;
        font-size: 1rem;
        opacity: 75%;
        font-family: "Roboto", sans-serif;
    }
`,gr=R.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`,vr=R.button`
    width: 15rem;
    padding: 1rem;
    background-color: #7E6DA3;
    color: #FFF;
    border: 1px solid #7E6DA3;
    border-radius: 12px;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: .3s ease-in;

    &:hover {
        background-color: #3C2A63;
    }
`,xr=R.div`
    display: flex;
    width: 60%;
    margin: 4rem 25rem;

    table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
        background-color: #FFFFFF;
        color: #895FE3;
    }

    thead {
        background: #895FE3;
        color: #FFFFFF;
    }

    th, td {
        padding: 12px 15px;
        text-align: center;
    }

    th {
        text-transform: uppercase;
        font-size: 1.2rem;
    }

    td {
        color: #5B5863;
        border: 1px solid #E6E6E6;
        font-size: 1rem;
    }
`;export{tr as B,rr as C,ar as D,fr as F,pr as I,oe as L,er as R,yr as S,or as T,xt as a,nr as b,ir as c,sr as d,lr as e,gr as f,vr as g,hr as h,ur as i,cr as j,dr as k,mr as l,xr as m};
