var e=Object.assign;import{defineComponent as t,inject as o,computed as a,watch as r,onMounted as i,onBeforeUnmount as d}from"vue";import{getMaps as n}from"./x5-gmaps.es.js";import{d as s}from"./debounce.js";var l=t({name:"gmapsPolyline",props:{clickable:{type:Boolean,default:!0},draggable:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},geodesic:{type:Boolean,default:!1},icons:{type:Array,default:void 0},options:{type:Object,default:()=>({})},path:{type:Array,default:void 0},strokeColor:{type:String,default:"black"},strokeOpacity:{type:[String,Number],default:1},strokePosition:{type:[String,Number],default:0},strokeWeight:{type:[String,Number],default:3},visible:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:0},delay:{type:[Number,String],default:15}},emits:["click","contextmenu","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick","path_changed"],setup(t,{emit:l}){let p=null;const g=[],c=o("$getmap"),u=o("$gmapHandleError"),m=e=>u(e,"Polyline"),v=a((()=>{const o=e({},t.options);return void 0!==t.clickable&&(o.clickable=t.clickable),void 0!==t.draggable&&(o.draggable=t.draggable),void 0!==t.editable&&(o.editable=t.editable),void 0!==t.geodesic&&(o.geodesic=t.geodesic),void 0!==t.icons&&(o.icons=t.icons),void 0!==t.path&&(o.path=t.path),void 0!==t.strokeColor&&(o.strokeColor=t.strokeColor),void 0!==t.strokeOpacity&&(o.strokeOpacity=+t.strokeOpacity),void 0!==t.strokeWeight&&(o.strokeWeight=+t.strokeWeight),void 0!==t.visible&&(o.visible=t.visible),void 0!==t.zIndex&&(o.zIndex=+t.zIndex),o}));r((()=>t),(()=>{p&&p.setOptions(v.value)}),{deep:!0});return i((()=>{if(!v.value.path)return m(new Error("A path property is required by every polyline. Set this as either a position prop, or a position property of the options prop."));n().then((o=>{const a=c();p=new o.Polyline(e({map:a},v.value)),p?(e=>{const o=google.maps.event,a=()=>l("path_changed",e.getPath().getArray().map((e=>e.toJSON())));g.push(o.addListener(e,"drag",s((e=>l("drag",e.latLng.toJSON(),+t.delay)))),o.addListener(e,"mousemove",s((e=>l("mousemove",e)),+t.delay)),o.addListener(e,"click",(e=>l("click",e.latLng.toJSON()))),o.addListener(e,"contextmenu",(e=>l("contextmenu",e.latLng.toJSON()))),o.addListener(e,"dblclick",(e=>l("dblclick",e.latLng.toJSON()))),o.addListener(e,"dragend",(e=>l("dragend",e.latLng.toJSON()))),o.addListener(e,"dragstart",(e=>l("dragstart",e.latLng.toJSON()))),o.addListener(e,"mousedown",(e=>l("mousedown",e.latLng.toJSON()))),o.addListener(e,"mouseout",(e=>l("mouseout",e.latLng.toJSON()))),o.addListener(e,"mouseover",(e=>l("mouseover",e.latLng.toJSON()))),o.addListener(e,"mouseup",(e=>{l("mouseup",e.latLng.toJSON()),a()})),o.addListener(e,"rightclick",(e=>l("rightclick",e.latLng.toJSON()))),e.getPath().addListener("remove_at",(()=>a())),e.getPath().addListener("insert_at",(()=>a())),e.getPath().addListener("set_at",(()=>a())))})(p):m(new Error("There was a problem creating the shape."))})).catch((e=>m(e)))})),d((()=>{g.forEach((e=>e.remove())),n().then((e=>{p&&p.setMap(null),e.event.clearInstanceListeners(p)})).catch((e=>m(e)))})),()=>{}}});export default l;
