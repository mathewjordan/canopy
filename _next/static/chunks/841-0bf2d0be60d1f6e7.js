(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[841],{3235:function(e,t,i){"use strict";i.d(t,{Z:function(){return O}});var r=i(7178),n=i(3245),o=i(9499),a=i(2854),c=(0,a.zo)("div",{padding:"$gr3 0 0"}),s=(0,a.zo)("div",{backgroundColor:"var(--gray-3)",width:"100%",height:"100%",overflowY:"hidden",borderRadius:"3px",transition:"$canopyAll"}),l=(0,a.zo)("div",{display:"flex",width:"100%",position:"relative",flexGrow:1,flexShrink:0,maxWidth:"275px",img:{width:"100%",height:"100%",objectFit:"cover"},a:(0,o.Z)({display:"flex",flexDirection:"column",width:"100%",color:"var(--gray-12)",textDecoration:"none !important",transition:"$canopyAll"},"&:hover, &:focus",(0,o.Z)({color:"var(--accent-11)"},"".concat(s),{transform:"scale3d(1.03, 1.03, 1.03)"}))}),d=i(3093),u=i(8522),p=i(6225),f=i(3817),g=(0,a.zo)("img",(0,o.Z)({position:"relative",zIndex:"1",width:"100%",height:"100%",objectFit:"contain",transition:"$canopyAll",opacity:0,color:"transparent"},"&.loaded",{opacity:1})),v=(0,a.zo)("figure",{backgroundColor:"var(--gray-3)",display:"flex",width:"100%",height:"100%",padding:"0",margin:"0",position:"relative",overflow:"hidden",zIndex:"0",borderRadius:"3px",transition:"$canopyAll"}),b=i(7294),h=i(6010),getResourceImage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"600,",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"full";if(Array.isArray(e)&&(e=e[0]),!e.service)return e.id;if(!Array.isArray(e.service)){if(e.service["@id"])return"".concat(e.service["@id"],"/").concat(i,"/").concat(t,"/0/default.jpg");if(e.service.id)return"".concat(e.service.id,"/").concat(i,"/").concat(t,"/0/default.jpg")}return e.service[0]["@id"]?"".concat(e.service[0]["@id"],"/").concat(i,"/").concat(t,"/0/default.jpg"):"".concat(e.service[0].id,"/").concat(i,"/").concat(t,"/0/default.jpg")},y=i(5893),Figure_Figure=function(e){var t=e.alt,i=e.resource,r=e.region,n=void 0===r?"full":r,o=e.size,a=void 0===o?"400,":o,c=e.isCover,s=(0,b.useState)(),l=s[0],d=s[1],u=(0,b.useState)(!1),p=u[0],f=u[1],j=(0,b.useRef)(null);return(0,b.useEffect)(function(){var e;d(getResourceImage(i,a,n)),null!=j&&j.current&&null!=j&&null!==(e=j.current)&&void 0!==e&&e.complete&&f(!0)},[]),(0,y.jsx)(v,{children:(0,y.jsx)(g,{alt:t,src:l,ref:j,style:void 0!==c&&c?{objectFit:"cover",objectPosition:"50% 50%",width:"100%",height:"100%"}:{},onLoad:function(){return f(!0)},className:(0,h.Z)("source",p&&"loaded")})})},j=i(1830),w=i(9769),m=i(8956),x=i(2708),O=b.memo(function(e){var t=e.resource,i=1,o=t.label,a=t.homepage,g=t.thumbnail,v=(0,m.J)(g),b=v.width,h=v.height;b&&h&&(i=b/h);var O=(0,x.YD)(),S=O.ref,D=O.inView,P=(0,w.i)(o);return(0,y.jsx)(l,{as:n.Box,ref:S,children:(0,y.jsx)(n.Card,{size:"2",style:{width:"100%"},variant:"classic",asChild:!0,children:(0,y.jsxs)(n.Link,{href:a&&a[0].id?a[0].id:"",children:[(0,y.jsx)(n.Inset,{clip:"padding-box",side:"top",children:(0,y.jsx)(r.f,{ratio:i,children:(0,y.jsx)(s,{children:(0,y.jsx)(d.A,{transition:{duration:1},children:D&&t&&(0,y.jsx)(u.X,{features:p.H,children:(0,y.jsx)(f.m.div,{style:{height:"100%"},initial:{opacity:0},animate:{opacity:1},children:(0,y.jsx)(Figure_Figure,{resource:g,alt:P})})})})})})}),(0,y.jsx)(n.Text,{size:"2",asChild:!0,children:(0,y.jsx)(c,{children:(0,y.jsx)(j.Label,{label:o})})})]})})})})},2929:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var r=i(9499),n=i(3235),o=i(827),a=i(2854),c=(0,a.zo)("div",{paddingBottom:"$gr4",zIndex:"1","@xxs":{paddingBottom:"$gr2"},"@xs":{paddingBottom:"$gr2"},"@sm":{paddingBottom:"$gr3"},"@md":{paddingBottom:"$gr3"}}),s=(0,a.zo)(o.Z,{display:"flex",width:"auto",position:"relative",padding:"$gr2 0",zIndex:"1",".canopy-grid-column":{marginLeft:"$gr4","@xxs":{marginLeft:"$gr2"},"@xs":{marginLeft:"$gr2"},"@sm":{marginLeft:"$gr3"},"@md":{marginLeft:"$gr3"},"&:first-child":{marginLeft:"0"}}});i(7294);var l=i(5893),d=i(7668),Grid=function(e){var t,i=e.children,n=(t={default:6},(0,r.Z)(t,d.b.xl,5),(0,r.Z)(t,d.b.lg,4),(0,r.Z)(t,d.b.md,4),(0,r.Z)(t,d.b.sm,3),(0,r.Z)(t,d.b.xs,2),t);return(0,l.jsx)(s,{breakpointCols:n,className:"canopy-grid",columnClassName:"canopy-grid-column",children:i})};Grid.Item=function(e){var t=e.item;return t?(0,l.jsx)(c,{children:(0,l.jsx)(n.Z,{resource:t},t.id)}):(0,l.jsx)(l.Fragment,{})};var u=Grid},4841:function(e,t,i){"use strict";i.d(t,{Z:function(){return MDX}});var r=i(9499),n=i(3245),o=i(5079),a=i(5407),c=i(9342),s=i(7294),l=i(5893);function ownKeys(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,r)}return i}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(i),!0).forEach(function(t){(0,r.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ownKeys(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var d=i(3235);i(6803),i(7058),i(3981);var u=i(633),MDX_Card=function(e){var t=e.iiifContent,i=(0,s.useState)(),r=i[0],n=i[1];return((0,s.useEffect)(function(){var e=u.find(function(e){return e.id===t});e&&n({id:t,type:"Manifest",label:e.label,thumbnail:e.thumbnail,homepage:[{id:"/works/".concat(e.slug),label:e.label,type:"Text"}]})},[t]),r)?(0,l.jsx)(d.Z,{resource:r}):null},p=i(2854),f=(0,p.zo)(n.ScrollArea,{backgroundColor:"var(--accent-2)",boxShadow:"inset var(--shadow-1)",position:"relative",maxHeight:"61.8vh",borderRadius:"max(var(--radius-1))",button:{position:"absolute",marginTop:"$gr3",right:"$gr3"}}),g=(0,p.zo)("pre",{color:"var(--accent-11)",fontSize:"$gr2",padding:"$gr2 $gr3 ",lineHeight:"1.382em",zIndex:"0"}),v=(0,p.zo)("code",{backgroundColor:"var(--accent-2)",color:"var(--accent-11)",padding:"3px $gr1",borderRadius:"max(var(--radius-1), var(--radius-full))",fontSize:"$gr2",boxShadow:"var(--shadow-2)"}),b=i(7087),h=i(2469),y=i(640),j=i.n(y),w={plain:{color:"var(--accent-12)",fontFamily:"Menlo, monospace"},styles:[{types:["boolean","string"],style:{color:"var(--accent-10)"}},{types:["operator"],style:{color:"var(--accent-11)"}},{types:["punctuation"],style:{color:"var(--accent-8)"}}]};function Code_ownKeys(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,r)}return i}function Code_objectSpread(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?Code_ownKeys(Object(i),!0).forEach(function(t){(0,r.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Code_ownKeys(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var Code_Code=function(e){var t=e.children,i=e.language;return(0,l.jsx)(b.ZP,Code_objectSpread(Code_objectSpread({},b.lG),{},{theme:w,code:t,language:i,children:function(e){var i=e.style,r=e.tokens,n=e.getLineProps,o=e.getTokenProps;return(0,l.jsxs)(f,{children:[(0,l.jsxs)(a.O,{size:"1","aria-label":"Copy Code",onClick:function(){j()(t)},children:["Copy ",(0,l.jsx)(h.TIy,{})]}),(0,l.jsx)(g,{style:i,children:r.map(function(e,t){return(0,l.jsx)("div",Code_objectSpread(Code_objectSpread({},n({line:e,key:t})),{},{children:e.map(function(e,i){return(0,l.jsx)("span",Code_objectSpread({},o({token:e,key:i})),t)})}),t)})})]})}}))},m=i(6873),x=i(7623),O=i(218),S=i(5152);function Image_ownKeys(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,r)}return i}var D=i.n(S)()(function(){return Promise.all([i.e(318),i.e(119),i.e(68),i.e(789)]).then(i.bind(i,1068)).then(function(e){return e.Image})},{ssr:!1,loadableGenerated:{webpack:function(){return[null]}}}),Viewer_Image=function(e){return(0,l.jsx)(D,function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?Image_ownKeys(Object(i),!0).forEach(function(t){(0,r.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Image_ownKeys(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}({},e))},P=i(1830),C=(0,p.zo)("div",{backgroundColor:"var(--gray-3)"}),I=(0,p.zo)("figure",{padding:"0",margin:"0","& figcaption":{padding:"$gr3 0",fontSize:"$gr3",fontWeight:"500"}}),_=i(3448),Z=i(2929),G=i(5159),z=i(7118),k=i(1522),A={showTitle:!0,showIIIFBadge:!1,informationPanel:{open:!1,renderToggle:!1}},$=i(859);function MDX_ownKeys(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,r)}return i}function MDX_objectSpread(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?MDX_ownKeys(Object(i),!0).forEach(function(t){(0,r.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):MDX_ownKeys(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var M={Button:function(e){return(0,l.jsx)(a.O,_objectSpread(_objectSpread({size:"3"},e),{},{asChild:!0,children:e.href&&(0,l.jsx)(c.Z,{href:e.href,target:e.target,children:e.children})}))},ButtonWrapper:a.W,Card:MDX_Card,Container:m.Z,Header:x.Z,Image:function(e){var t=e.src,i=e.height,r=e.isTiledImage,n=e.label;return(0,l.jsxs)(I,{children:[(0,l.jsx)(C,{css:{height:void 0===i?"400px":i},children:(0,l.jsx)(Viewer_Image,{src:t,isTiledImage:r,label:n})}),n&&(0,l.jsx)("figcaption",{children:(0,l.jsx)(P.Label,{label:n})})]})},ReferencedItems:function(){var e,t=(0,s.useContext)(_.Z);return(0,l.jsx)(Z.Z,{children:null===(e=t.referencedManifests)||void 0===e?void 0:e.map(function(e,t){return(0,l.jsx)(MDX_Card,{iiifContent:e},"card-".concat(e,"-").concat(t))})})},Scroll:function(e){var t=e.iiifContent;return(0,l.jsx)(G.Z,{iiifContent:t,options:{offset:90}})},Slider:function(e){var t=e.iiifContent;return(0,l.jsx)(z.Z,{iiifContent:t})},Viewer:function(e){var t=e.iiifContent,i=e.options;return(0,l.jsx)(k.Z,{iiifContent:t,options:void 0===i?A:i})}},N={h1:function(e){return(0,l.jsx)(O.Z,MDX_objectSpread({as:"h1"},e))},h2:function(e){return(0,l.jsx)(O.Z,MDX_objectSpread({as:"h2",id:(0,$.getSlug)(null==e?void 0:e.children)},e))},h3:function(e){return(0,l.jsx)(O.Z,MDX_objectSpread({as:"h3"},e))},h4:function(e){return(0,l.jsx)(O.Z,MDX_objectSpread({as:"h4"},e))},h5:function(e){return(0,l.jsx)(O.Z,MDX_objectSpread({as:"h5"},e))},code:function(e){return(0,l.jsx)(v,MDX_objectSpread({},e))},a:function(e){return(0,l.jsx)(n.Link,MDX_objectSpread({},e))},em:function(e){return(0,l.jsx)(n.Em,MDX_objectSpread({},e))},strong:function(e){return(0,l.jsx)(n.Strong,MDX_objectSpread({},e))},blockquote:function(e){return(0,l.jsx)(n.Blockquote,MDX_objectSpread({},e))},pre:function(e){var t,i,r,n,o,a=null==e?void 0:null===(t=e.children)||void 0===t?void 0:null===(i=t.props)||void 0===i?void 0:i.children,c=null==e?void 0:null===(r=e.children)||void 0===r?void 0:null===(n=r.props)||void 0===n?void 0:null===(o=n.className)||void 0===o?void 0:o.replace("language-","");return(0,l.jsx)(Code_Code,{language:c,children:null==a?void 0:a.trim()})}},MDX=function(e){var t=e.source,i=e.customComponents;return(0,l.jsx)(o.R,MDX_objectSpread(MDX_objectSpread({},t),{},{components:MDX_objectSpread(MDX_objectSpread(MDX_objectSpread(MDX_objectSpread({},n),N),M),i)}))}},218:function(e,t,i){"use strict";i.d(t,{Z:function(){return Heading_Heading}}),i(7294);var r=i(3245),n=(0,i(2854).zo)(r.Heading,{variants:{isHidden:{true:{position:"absolute",visibility:"hidden"}}},"&[data-level='h1']":{fontFamily:"$display",fontWeight:"700",letterSpacing:"-0.01em"},"&[data-level='h2']":{color:"var(--gray-10)",fontWeight:"300",letterSpacing:"-0.01em"}}),o=i(5893),Heading_Heading=function(e){var t=e.as,i=void 0===t?"h2":t,r=e.css,a=e.id,c=e.isHidden,s=e.children;return(0,o.jsx)(n,{as:i,isHidden:void 0!==c&&c,"data-level":i,css:void 0===r?{}:r,id:a,children:(0,o.jsx)(o.Fragment,{children:s})})}},5159:function(e,t,i){"use strict";var r=i(9499),n=i(5152),o=i.n(n),a=i(5893);function ownKeys(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,r)}return i}var c=o()(function(){return Promise.all([i.e(318),i.e(119),i.e(68),i.e(789)]).then(i.bind(i,1068)).then(function(e){return e.Scroll})},{ssr:!1,loadableGenerated:{webpack:function(){return[null]}}});t.Z=function(e){return(0,a.jsx)(c,function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(i),!0).forEach(function(t){(0,r.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ownKeys(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}({},e))}},7118:function(e,t,i){"use strict";i.d(t,{Z:function(){return Viewer_Slider}});var r,n,o=i(9499);i(4614);var a=i(9897);i(7294);var c=(0,i(2854).zo)("div",(r={marginBottom:"$gr5",button:{svg:{filter:"unset"}},"@xs":{"& > div > div":{alignItems:"center",textAlign:"center","& > div":{"&:last-child":{paddingTop:"$gr2"}}}}},(0,o.Z)(r,"& .clover-slider-header-label",{fontSize:"$gr4 !important",fontFamily:"$sans",letterSpacing:"-0.01em"}),(0,o.Z)(r,"& a.clover-slider-header-homepage",{color:"var(--accent-11)",textDecoration:"none"}),(0,o.Z)(r,"& .clover-slider-header-summary",{display:"block",fontSize:"$gr2 !important",fontWeight:"500 !important",color:"var(--gray-11)"}),(0,o.Z)(r,".swiper-slide",{a:{"> div":{borderRadius:"3px",overflow:"hidden"}}}),(0,o.Z)(r,"figure",{"> div":{borderRadius:"3px",overflow:"hidden",boxShadow:"var(--shadow-3)"}}),(0,o.Z)(r,"figcaption",{margin:"$gr1 0","> span":{textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"3",overflow:"hidden",whiteSpace:"normal",fontWeight:"400",fontSize:"$gr3",lineHeight:"1.38em",fontFamily:"$sans",textDecoration:"none !important"}}),(0,o.Z)(r,"& a figcaption, & a:visited figcaption",{color:"var(--gray-12)"}),(0,o.Z)(r,"& a:hover figcaption, & a:focus figcaption",{color:"var(--accent-11)"}),r)),s=i(4430),l=i(5049),d=i(7668),u=i(5893),spaceBetween=function(e){return l.hO*(0,s.gr)(e)},p=(n={},(0,o.Z)(n,d.b.xxs,{slidesPerView:2,slidesPerGroup:2,spaceBetween:spaceBetween(1)}),(0,o.Z)(n,d.b.xs,{slidesPerView:2,slidesPerGroup:2,spaceBetween:spaceBetween(1)}),(0,o.Z)(n,d.b.sm,{slidesPerView:3,slidesPerGroup:3,spaceBetween:spaceBetween(1)}),(0,o.Z)(n,d.b.md,{slidesPerView:3,slidesPerGroup:3,spaceBetween:spaceBetween(2)}),(0,o.Z)(n,d.b.lg,{slidesPerView:5,slidesPerGroup:5,spaceBetween:spaceBetween(2)}),(0,o.Z)(n,d.b.xl,{slidesPerView:5,slidesPerGroup:5,spaceBetween:spaceBetween(2)}),n),Viewer_Slider=function(e){var t=e.iiifContent;return(0,u.jsx)(c,{children:(0,u.jsx)(a.default,{iiifContent:t,options:{breakpoints:p}})})}},1522:function(e,t,i){"use strict";var r=i(9499);i(7294);var n=i(5152),o=i.n(n),a=i(2854),c=i(5893);function ownKeys(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,r)}return i}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(i),!0).forEach(function(t){(0,r.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ownKeys(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var s=o()(function(){return Promise.all([i.e(318),i.e(119),i.e(68),i.e(789)]).then(i.bind(i,1068)).then(function(e){return e.Viewer})},{ssr:!1,loadableGenerated:{webpack:function(){return[null]}}}),l={fonts:{sans:"var(--canopy-sans-font)",display:"var(--canopy-display-font)"}},d={canvasBackgroundColor:"var(--gray-3)",canvasHeight:"600px",openSeadragon:{gestureSettingsMouse:{scrollToZoom:!1}},informationPanel:{open:!1,renderAbout:!1,renderToggle:!1},showTitle:!1,showIIIFBadge:!1},u=(0,a.zo)("div",{".clover-viewer-header":{"span.label":{fontSize:"$gr4"},"& button":{backgroundColor:"var(--gray-1)","> span[data-testid=select-button-value]":{fontSize:"$gr4"}}}});t.Z=function(e){var t=e.iiifContent,i=e.options;return(0,c.jsx)(u,{children:(0,c.jsx)(s,{iiifContent:t,options:_objectSpread(_objectSpread({},d),i),customTheme:l})})}},3448:function(e,t,i){"use strict";var r=i(7294).createContext({referencedManifests:[]});t.Z=r},859:function(e,t,i){var r=i(930);function ownKeys(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,r)}return i}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(i),!0).forEach(function(t){r(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ownKeys(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var n=i(3984),o={lower:!0,strict:!0,trim:!0};function getSlug(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.substring(0,t)}(n(String(e),o),100)}e.exports={getSlug:getSlug,getUniqueSlug:function(e,t){var i,n=getSlug(e),o=(i=t[n])?i+1:1;return{slug:o>1?"".concat(n,"-").concat(o):n,allSlugs:_objectSpread(_objectSpread({},t),{},r({},n,o))}}}},7058:function(e){"use strict";e.exports=JSON.parse('[{"label":"Illuminator(s)","slug":"illuminators","values":[{"value":"Cypresses Group (Nicol\xe1s G\xf3mez)","slug":"cypresses-group-nicolas-gomez","doc_count":10,"docs":[1,2,6,7,8,9,10,11,12,13]},{"value":"Cypresses Group","slug":"cypresses-group","doc_count":4,"docs":[0,3,4,5]}]},{"label":"Title","slug":"title","values":[{"value":"Initial A","slug":"initial-a","doc_count":2,"docs":[0,6]},{"value":"Initial D","slug":"initial-d","doc_count":2,"docs":[3,5]},{"value":"Initial I with David","slug":"initial-i-with-david","doc_count":2,"docs":[8,9]},{"value":"Initial A with David in Prayer","slug":"initial-a-with-david-in-prayer","doc_count":1,"docs":[7]},{"value":"Initial C with David or Saul","slug":"initial-c-with-david-or-saul","doc_count":1,"docs":[10]},{"value":"Initial D with David","slug":"initial-d-with-david","doc_count":1,"docs":[12]},{"value":"Initial L","slug":"initial-l","doc_count":1,"docs":[4]},{"value":"Initial L with Isaiah","slug":"initial-l-with-isaiah","doc_count":1,"docs":[11]},{"value":"Initial S with David as Scribe","slug":"initial-s-with-david-as-scribe","doc_count":1,"docs":[1]},{"value":"Initial T with Jeronymite Monks at the Dedication of an Altar","slug":"initial-t-with-jeronymite-monks-at-the-dedication-of-an-altar","doc_count":1,"docs":[2]},{"value":"Initial V with Ascencion of Christ","slug":"initial-v-with-ascencion-of-christ","doc_count":1,"docs":[13]}]},{"label":"Date created","slug":"date-created","values":[{"value":"c. 1470-90","slug":"c-1470-90","doc_count":14,"docs":[0,1,2,3,4,5,6,7,8,9,10,11,12,13]}]},{"label":"Initial type","slug":"initial-type","values":[{"value":"Historiated initial","slug":"historiated-initial","doc_count":9,"docs":[1,2,7,8,9,10,11,12,13]},{"value":"Decorative initial","slug":"decorative-initial","doc_count":5,"docs":[0,3,4,5,6]}]}]')},3981:function(e){"use strict";e.exports=JSON.parse('[{"id":0,"label":"Initial A – NGA 1964.8.1220","metadata":"Cypresses Group Initial A c. 1470-90 Decorative initial"},{"id":1,"label":"Initial S with David as Scribe – NGA 1964.8.1218","metadata":"Cypresses Group (Nicol\xe1s G\xf3mez) Initial S with David as Scribe c. 1470-90 Historiated initial"},{"id":2,"label":"Initial T with Jeronymite Monks at the Dedication of an Altar – NGA 1964.8.1219","metadata":"Cypresses Group (Nicol\xe1s G\xf3mez) Initial T with Jeronymite Monks at the Dedication of an Altar c. 1470-90 Historiated initial"},{"id":3,"label":"Initial D – NGA 1964.8.1221","metadata":"Cypresses Group Initial D c. 1470-90 Decorative initial"},{"id":4,"label":"Initial L - NGA 1964.8.1222","metadata":"Cypresses Group Initial L c. 1470-90 Decorative initial"},{"id":5,"label":"Initial D – NGA 1964.8.1223","metadata":"Cypresses Group Initial D c. 1470-90 Decorative initial"},{"id":6,"label":"Initial A – NGA 1964.8.1224","metadata":"Cypresses Group (Nicol\xe1s G\xf3mez) Initial A c. 1470-90 Decorative initial"},{"id":7,"label":"Initial A with David in Prayer – NGA 1964.8.1225","metadata":"Cypresses Group (Nicol\xe1s G\xf3mez) Initial A with David in Prayer c. 1470-90 Historiated initial"},{"id":8,"label":"Initial I with David – NGA 1964.8.1226","metadata":"Cypresses Group (Nicol\xe1s G\xf3mez) Initial I with David c. 1470-90 Historiated initial"},{"id":9,"label":"Initial I with David – NGA 1964.8.1227","metadata":"Cypresses Group (Nicol\xe1s G\xf3mez) Initial I with David c. 1470-90 Historiated initial"},{"id":10,"label":"Initial C with David or Saul – NGA 1964.8.1228","metadata":"Cypresses Group (Nicol\xe1s G\xf3mez) Initial C with David or Saul c. 1470-90 Historiated initial"},{"id":11,"label":"Initial L with Isaiah – NGA 1964.8.1229","metadata":"Cypresses Group (Nicol\xe1s G\xf3mez) Initial L with Isaiah c. 1470-90 Historiated initial"},{"id":12,"label":"Initial D with David – NGA 1964.8.1230","metadata":"Cypresses Group (Nicol\xe1s G\xf3mez) Initial D with David c. 1470-90 Historiated initial"},{"id":13,"label":"Initial V with Ascencion of Christ – Fitzwilliam MS 291","metadata":"Cypresses Group (Nicol\xe1s G\xf3mez) Initial V with Ascencion of Christ c. 1470-90 Historiated initial"}]')}}]);