import{j as e,m as _,r as h,L as M,p as ne,v as re}from"./index-d9b39f5e.js";import{u as w,I as ie,d as le}from"./Debounce-e5a44aba.js";import{P as oe}from"./PageContainer-fd42dc94.js";import{B as ce,H as de}from"./Breadcrumb-9f189444.js";import{a as xe}from"./axios-dd1c8fc2.js";import{s as f}from"./styled-e4592642.js";import{T as v,a as W,b as R,c as V,d as L}from"./TableRow-e58b57f4.js";import{B as C,s as G,T as he}from"./Box-1e7caa39.js";import{T as O}from"./TableContainer-ce814af9.js";import{c as me,P as E,G as c}from"./List-dbd24109.js";import{I as P}from"./IconButton-3028779c.js";import{V as q}from"./Visibility-c0612dd7.js";import{T as F}from"./TablePagination-fcb1d356.js";import{r as ue}from"./createSvgIcon-3fcd50f6.js";import{B as pe}from"./Button-8a3881c4.js";import{T}from"./TextField-0fb86b85.js";import{a as ge,T as I}from"./Tabs-1f4e69a7.js";import{I as je}from"./IconFileArrowRight-104f6a98.js";import"./Select-be6fca1e.js";import"./createReactComponent-feeb99fb.js";import"./IconLayoutDashboard-da03b59e.js";import"./KeyboardArrowRight-42f90c73.js";import"./Toolbar-9ec034b0.js";import"./MenuItem-36939c25.js";import"./dividerClasses-7b989fe2.js";import"./FormControl-91b0f058.js";import"./InputLabel-648a476c.js";const B=me(e.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),m=f(v)(({theme:t})=>({border:"1px solid #ddd",padding:"8px",color:"black"})),u=f(v)(({theme:t})=>({border:"1px solid #ddd",backgroundColor:"#285a9e",color:"white",fontWeight:"bold",padding:"8px"})),be=f(W)(({theme:t})=>({"&:nth-of-type(even)":{backgroundColor:"#f0f5ff"},"&:nth-of-type(odd)":{backgroundColor:"white"}})),fe=_.memo(({searchValue:t})=>{const[a,r]=h.useState({page:0,rowsPerPage:15,rows:[]});h.useEffect(()=>{(async()=>{try{const l=sessionStorage.getItem("token"),{data:s}=await xe.get("http://16.170.22.123:8082/manageAccess/getActiveMarketPlaceDetails",{headers:{Authorization:`Bearer ${l}`}}),x=s.data.map((o,y)=>({serial:y+1,col1:o.marketPlace||"-",col2:o.OrganizationName||"-",col3:o.compnayName||"-",col4:o.poc||"-",col5:o.PL||"-",col6:o.ExcessCoop||"-",col7:o.pl||"-",col8:o.missedInvoice||"-",col9:o.isRerun||"-"}));r(o=>({...o,rows:x}))}catch(l){console.error("Error fetching data:",l)}})()},[]);const i=(n,l)=>{r(s=>({...s,page:l}))},p=n=>{r(l=>({...l,rowsPerPage:parseInt(n.target.value,10),page:0}))},g=h.useMemo(()=>a.rows.filter(n=>Object.values(n).some(l=>String(l).toLowerCase().includes(t.toLowerCase()))),[a.rows,t]);return e.jsxs(C,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(O,{component:E,sx:{maxWidth:"100%",overflowX:"auto"},children:e.jsxs(R,{"aria-label":"simple table",children:[e.jsx(V,{children:e.jsxs(W,{children:[e.jsx(u,{sx:{minWidth:80},children:"SL No."}),e.jsx(u,{sx:{minWidth:110},children:"Market Place"}),e.jsx(u,{sx:{minWidth:150},children:"Organization Name"}),e.jsx(u,{sx:{minWidth:150},children:"Amazon VC Account"}),e.jsx(u,{sx:{minWidth:150},children:"Point of Contact"}),e.jsx(u,{sx:{minWidth:100},children:"P&L Monthly Cron Job"}),e.jsx(u,{sx:{minWidth:100},children:"Excess CoOp"}),e.jsx(u,{sx:{minWidth:100},children:"P&L Analysis"}),e.jsx(u,{sx:{minWidth:100},children:"Missed Invoicing"}),e.jsx(u,{sx:{minWidth:100},children:"Quarterly Audits"}),e.jsx(u,{sx:{minWidth:120},children:"Action"})]})}),e.jsx(L,{children:g.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(n=>e.jsxs(be,{children:[e.jsx(m,{sx:{minWidth:80},children:n.serial}),e.jsx(m,{sx:{minWidth:110},children:n.col1}),e.jsx(m,{sx:{minWidth:150},children:n.col2}),e.jsx(m,{sx:{minWidth:150},children:n.col3}),e.jsx(m,{sx:{minWidth:150},children:n.col4}),e.jsx(m,{sx:{minWidth:100},children:n.col5}),e.jsx(m,{sx:{minWidth:100},children:n.col6}),e.jsx(m,{sx:{minWidth:100},children:n.col7}),e.jsx(m,{sx:{minWidth:100},children:n.col8}),e.jsx(m,{sx:{minWidth:100},children:n.col9}),e.jsxs(m,{sx:{minWidth:120},children:[e.jsx(P,{"aria-label":"view",children:e.jsx(q,{})}),e.jsx(P,{"aria-label":"edit",children:e.jsx(M,{to:"/client-access",style:{textDecoration:"none"},children:e.jsx(B,{sx:{color:"grey",mt:"5px"}})})})]})]},n.serial))})]})}),e.jsx(C,{sx:{p:2,display:"flex",justifyContent:"flex-end",width:"100%"},children:e.jsx(F,{rowsPerPageOptions:[15,30,50],component:"div",count:g.length,rowsPerPage:a.rowsPerPage,page:a.page,onPageChange:i,onRowsPerPageChange:p})})]})}),Ce=(t,a,r,i,p,g,n,l)=>({serial:t,col1:a,col2:r,col3:i,col4:p,col5:g,col6:n,col7:l}),Pe=Array.from({length:50},(t,a)=>Ce(a+1,"Data1","Data2","Data3","Data4","Data5","Data6","Data7")),j=f(v)(({theme:t})=>({border:"1px solid #ddd",padding:"8px",color:"black"})),b=f(v)(({theme:t})=>({border:"1px solid #ddd",backgroundColor:"#285a9e",color:"white",fontWeight:"bold",padding:"8px"})),ye=f(W)(({theme:t})=>({"&:nth-of-type(even)":{backgroundColor:"#f0f5ff"},"&:nth-of-type(odd)":{backgroundColor:"white"}})),ve=({searchValue:t})=>{const[a,r]=h.useState(0),[i,p]=h.useState(15),g=(s,x)=>{r(x)},n=s=>{p(parseInt(s.target.value,10)),r(0)},l=Pe.filter(s=>Object.values(s).some(x=>String(x).toLowerCase().includes(t.toLowerCase())));return e.jsxs(C,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(O,{component:E,sx:{maxWidth:"100%",overflowX:"auto"},children:e.jsxs(R,{"aria-label":"simple table",children:[e.jsx(V,{children:e.jsxs(W,{children:[e.jsx(b,{sx:{minWidth:80},children:"SL No."}),e.jsx(b,{sx:{minWidth:120},children:"User Creation Date"}),e.jsx(b,{sx:{minWidth:110},children:"User Name"}),e.jsx(b,{sx:{minWidth:130},children:"User Email Address"}),e.jsx(b,{sx:{minWidth:130},children:"Organization Name"}),e.jsx(b,{sx:{minWidth:130},children:"Group Name "}),e.jsx(b,{sx:{minWidth:130},children:"Admin Access"}),e.jsx(b,{sx:{minWidth:150},children:"External/Internal"}),e.jsx(b,{sx:{minWidth:120},children:"Action"})]})}),e.jsx(L,{children:l.slice(a*i,a*i+i).map((s,x)=>e.jsxs(ye,{children:[e.jsx(j,{sx:{minWidth:80},children:s.serial}),e.jsx(j,{sx:{minWidth:130},children:s.col1}),e.jsx(j,{sx:{minWidth:110},children:s.col2}),e.jsx(j,{sx:{minWidth:130},children:s.col3}),e.jsx(j,{sx:{minWidth:130},children:s.col4}),e.jsx(j,{sx:{minWidth:130},children:s.col5}),e.jsx(j,{sx:{minWidth:150},children:s.col6}),e.jsx(j,{sx:{minWidth:150},children:s.col7}),e.jsxs(j,{sx:{minWidth:120},children:[e.jsx(P,{"aria-label":"view",children:e.jsx(q,{})}),e.jsx(P,{"aria-label":"edit",children:e.jsx(M,{to:"/user-access",style:{textDecoration:"none"},children:e.jsx(B,{sx:{color:"grey",mt:"5px"}})})})]})]},s.serial))})]})}),e.jsx(C,{sx:{p:2,display:"flex",justifyContent:"flex-end",width:"100%"},children:e.jsx(F,{rowsPerPageOptions:[15,30,50],component:"div",count:l.length,rowsPerPage:i,page:a,onPageChange:g,onRowsPerPageChange:n})})]})};var N={},We=ne;Object.defineProperty(N,"__esModule",{value:!0});var X=N.default=void 0,Se=We(ue()),ke=e;X=N.default=(0,Se.default)((0,ke.jsx)("path",{d:"M14.12 10.47 12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8z"}),"DeleteForeverOutlined");const we=(t,a,r,i)=>({serial:t,col1:a,col2:r,col3:i}),Te=Array.from({length:50},(t,a)=>we(a+1,"Data1","Data2","Data3")),D=f(v)(({theme:t})=>({border:"1px solid #ddd",padding:"8px",color:"black"})),A=f(v)(({theme:t})=>({border:"1px solid #ddd",backgroundColor:"#285a9e",color:"white",fontWeight:"bold",padding:"8px"})),De=f(W)(({theme:t})=>({"&:nth-of-type(even)":{backgroundColor:"#f0f5ff"},"&:nth-of-type(odd)":{backgroundColor:"white"}})),Ae=({searchValue:t})=>{const[a,r]=h.useState(0),[i,p]=h.useState(15),g=(s,x)=>{r(x)},n=s=>{p(parseInt(s.target.value,10)),r(0)},l=Te.filter(s=>Object.values(s).some(x=>String(x).toLowerCase().includes(t.toLowerCase())));return e.jsxs(C,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(O,{component:E,sx:{maxWidth:"100%",overflowX:"auto"},children:e.jsxs(R,{"aria-label":"simple table",children:[e.jsx(V,{children:e.jsxs(W,{children:[e.jsx(A,{sx:{maxWidth:30},children:"SL No."}),e.jsx(A,{sx:{minWidth:150},children:"Group Name"}),e.jsx(A,{sx:{minWidth:130},children:"Group Type"}),e.jsx(A,{sx:{minWidth:120},children:"Action"})]})}),e.jsx(L,{children:l.slice(a*i,a*i+i).map((s,x)=>e.jsxs(De,{children:[e.jsx(D,{sx:{maxWidth:30},children:s.serial}),e.jsx(D,{sx:{minWidth:150},children:s.col1}),e.jsx(D,{sx:{minWidth:130},children:s.col2}),e.jsxs(D,{sx:{minWidth:120},children:[e.jsx(P,{"aria-label":"edit",children:e.jsx(M,{to:"/group-access",style:{textDecoration:"none"},children:e.jsx(B,{sx:{color:"grey",mt:"5px"}})})}),e.jsx(P,{"aria-label":"view",children:e.jsx(X,{})})]})]},s.serial))})]})}),e.jsx(C,{sx:{p:2,display:"flex",justifyContent:"flex-end",width:"100%"},children:e.jsx(F,{rowsPerPageOptions:[15,30,50],component:"div",count:l.length,rowsPerPage:i,page:a,onPageChange:g,onRowsPerPageChange:n})})]})},$=G(pe)(({theme:t})=>({backgroundColor:t.palette.primary.contrast,border:"1px solid",borderColor:t.palette.primary.contrast,color:t.palette.primary.contrastText,fontSize:"15px",padding:"8px 16px",fontWeight:"600",transition:"all ease 0.3s",margin:"0 8px",display:"flex",alignItems:"center","&:hover":{backgroundColor:t.palette.primary.main,color:t.palette.primary.contrastText,borderColor:t.palette.primary.main},"& .btn-indicator":{width:"1px",backgroundColor:t.palette.primary.main,alignSelf:"stretch",marginLeft:"4px"}})),H=G(C)(({theme:t})=>({display:"flex",alignItems:"center",marginRight:"8px"})),z=_.memo(({children:t,value:a,index:r,...i})=>e.jsx("div",{role:"tabpanel",hidden:a!==r,id:`simple-tabpanel-${r}`,"aria-labelledby":`simple-tab-${r}`,...i,children:a===r&&e.jsx(C,{sx:{p:1},children:t})})),nt=()=>{const[t,a]=h.useState(0),[r,i]=h.useState(""),[p,g]=h.useState(""),[n,l]=h.useState(""),[s,x]=h.useState(""),o=w(r,500),y=w(p,500),S=w(n,500),k=w(s,500),J=re(),Q=(d,ae)=>{a(ae)},K=d=>{i(d.target.value)},Y=d=>{g(d.target.value)},Z=d=>{l(d.target.value)},ee=d=>{x(d.target.value)},te=()=>{console.log("Search submitted with values:",{debouncedSearchValue:o,debouncedBusinessUnitValue:y,debouncedOrganizationValue:S,debouncedMarketPlaceValue:k})},se=()=>{let d="";switch(t){case 0:d="/client-access";break;case 1:d="/user-access";break;case 2:d="/group-access";break;default:d="/";break}J(d)},U=()=>{switch(t){case 0:return"Manage Clients";case 1:return"Manage Users";case 2:return"Manage Groups";default:return"Manage"}};return e.jsx(oe,{title:"Manage Access",children:e.jsxs(c,{container:!0,spacing:3,children:[e.jsx(c,{item:!0,xs:12,children:e.jsx(ce,{titles:["Manage Access"]})}),e.jsx(c,{item:!0,xs:12,children:e.jsx(de,{title:"Manage Access"})}),e.jsxs(c,{container:!0,item:!0,xs:12,alignItems:"center",justifyContent:"space-between",children:[e.jsx(c,{item:!0,xs:6,children:e.jsx(he,{variant:"h3",children:U()})}),e.jsxs(c,{item:!0,container:!0,xs:6,alignItems:"center",justifyContent:"flex-start",spacing:1,children:[e.jsx(c,{item:!0,children:e.jsx(T,{placeholder:"Search Business Unit",value:p,onChange:Y,variant:"outlined",size:"small",sx:{backgroundColor:"#ECF2FF"}})}),e.jsx(c,{item:!0,children:e.jsx(T,{placeholder:"Search Org Name",value:n,onChange:Z,variant:"outlined",size:"small",sx:{backgroundColor:"#ECF2FF"}})}),e.jsx(c,{item:!0,children:e.jsx(T,{placeholder:"Search Market Place",value:s,onChange:ee,variant:"outlined",size:"small",sx:{backgroundColor:"#ECF2FF"}})}),e.jsx(c,{item:!0,ml:-100,mt:-2.5,children:e.jsx(T,{placeholder:"Search...",value:r,onChange:K,variant:"outlined",size:"small",sx:{width:"200px",mt:2.5,backgroundColor:"#ECF2FF"},InputProps:{endAdornment:e.jsx(ie,{position:"end",children:e.jsx(P,{onClick:te,edge:"end",children:e.jsx(le,{})})})}})})]})]}),e.jsxs(c,{container:!0,item:!0,xs:12,justifyContent:"space-between",alignItems:"center",spacing:1,sx:{mt:2},children:[e.jsx(c,{item:!0,xs:6,children:e.jsxs(ge,{value:t,onChange:Q,"aria-label":"simple tabs example",children:[e.jsx(I,{label:"Clients"}),e.jsx(I,{label:"Users"}),e.jsx(I,{label:"Groups"})]})}),e.jsxs(c,{item:!0,container:!0,xs:6,justifyContent:"flex-end",spacing:1,children:[e.jsx(c,{item:!0,children:e.jsxs($,{onClick:()=>console.log("Export clicked"),children:[e.jsx(H,{children:"Export"}),e.jsx("span",{className:"btn-indicator"}),e.jsx(H,{children:e.jsx(je,{size:"19",style:{margin:"auto",verticalAlign:"middle",marginLeft:"5px"}})})]})}),e.jsx(c,{item:!0,children:e.jsxs($,{onClick:se,children:["Add ",U().split(" ")[1]]})})]})]}),e.jsxs(c,{item:!0,xs:12,children:[e.jsx(z,{value:t,index:0,children:e.jsx(fe,{searchValue:o,businessUnit:y,organization:S,marketPlace:k})}),e.jsx(z,{value:t,index:1,children:e.jsx(ve,{searchValue:o,businessUnit:y,organization:S,marketPlace:k})}),e.jsx(z,{value:t,index:2,children:e.jsx(Ae,{searchValue:o,businessUnit:y,organization:S,marketPlace:k})})]})]})})};export{nt as default};
