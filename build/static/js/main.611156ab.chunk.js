(this["webpackJsonpworkout-duration"]=this["webpackJsonpworkout-duration"]||[]).push([[0],{17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(4),o=a(8),c=(a(14),a(15),a(16),a(17),a(2)),s=a(9),i=a(3),l=a(1),u=function(e){var t=e.sdk.field.getValue(),a=Object(n.useState)(t||[]),r=Object(s.a)(a,2),o=r[0],u=r[1],d=function(e){var t=0;return e.forEach((function(e){var a=e.split(":"),n=60*+a[0]*60+60*+a[1]+ +a[2];t+=n})),new Date(1e3*t).toISOString().substr(11,8)};Object(n.useEffect)((function(){e.sdk.window.startAutoResizer()}));var f=function(e){u(e)};Object(n.useEffect)((function(){return e.sdk.field.onValueChanged(f)}));var b=function(t){var a=t.currentTarget.value;u(a),a?e.sdk.field.setValue(a):e.sdk.field.removeValue()};return Object(l.jsxs)("div",{children:[Object(l.jsxs)(i.b,{className:"container",style:{marginBottom:5},children:[Object(l.jsx)(i.f,{width:"small",type:"text",id:"total-duration",testId:"total-duration",value:o,onChange:b,disabled:!0,className:"input-total-duration",style:{marginRight:10}}),Object(l.jsx)(i.a,{className:"action-button",buttonType:"primary",onClick:function(){var t=e.sdk.entry.fields.warmUp.getValue(),a=e.sdk.entry.fields.powerSet1.getValue(),n=e.sdk.entry.fields.powerSet2.getValue(),r=e.sdk.entry.fields.powerSet3.getValue(),o=e.sdk.entry.fields.powerSet4.getValue(),s=e.sdk.entry.fields.powerSet5.getValue(),i=e.sdk.entry.fields.powerSet6.getValue(),l=e.sdk.entry.fields.powerSet7.getValue(),u=e.sdk.entry.fields.powerSet8.getValue(),f=e.sdk.entry.fields.powerSet9.getValue(),j=e.sdk.entry.fields.powerSet10.getValue(),O=e.sdk.entry.fields.coolDown.getValue(),k=[].concat(Object(c.a)(t),Object(c.a)(a),Object(c.a)(n),Object(c.a)(r),Object(c.a)(o),Object(c.a)(s),Object(c.a)(i),Object(c.a)(l),Object(c.a)(u),Object(c.a)(f),Object(c.a)(j),Object(c.a)(O)).map((function(e){return e.totalExerciseDuration}));b({currentTarget:{value:d(k)}})},children:"Calculate"})]}),Object(l.jsx)(i.c,{children:"Calculate the Total Duration for the workout."})]})};Object(o.init)((function(e){var t=document.getElementById("root");[{location:o.locations.LOCATION_ENTRY_FIELD,component:Object(l.jsx)(u,{sdk:e})}].forEach((function(a){e.location.is(a.location)&&Object(r.render)(a.component,t)}))}))}},[[20,1,2]]]);
//# sourceMappingURL=main.611156ab.chunk.js.map