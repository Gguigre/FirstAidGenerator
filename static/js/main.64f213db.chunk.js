(this["webpackJsonpfirst-aid-generator"]=this["webpackJsonpfirst-aid-generator"]||[]).push([[0],[,,,,,,function(a,t,e){a.exports=e(14)},,,,,function(a,t,e){},function(a,t){},function(a,t,e){},function(a,t,e){"use strict";e.r(t);var r=e(2),n=e.n(r),i=e(4),s=e.n(i),o=(e(11),e(5)),u=(e(12),function(a){return a[Math.floor(Math.random()*a.length)]}),c=e(0),h=e(1),m=function(){function a(){var t=this;Object(c.a)(this,a),this.params={},this.drawExternal=function(){t.params={type:"externe",location:u(["bras","jambe","aisselle"])}},this.drawMemberCut=function(){t.params={type:"section de membre",location:u(["doigt","bras","jambe"])}},this.drawInternal=function(){t.params={type:"interne externalis\xe9e ",location:u(["nez","bouche","oreille","vagin","anus"])}},this.draw()}return Object(h.a)(a,[{key:"getName",value:function(){return a.NAME}},{key:"getParams",value:function(){return this.params}},{key:"draw",value:function(){u([this.drawExternal,this.drawInternal,this.drawMemberCut])()}}]),a}();m.NAME="H\xe9morragie";var l=function(){function a(){var t=this;Object(c.a)(this,a),this.params={},this.drawHematoma=function(){t.params={type:"h\xe9matome",location:u(["bras","jambe","avant-bras"])}},this.drawFracture=function(){t.params={type:"fracture",location:u(["bras","jambe","avant-bras","rachis"])}},this.drawSprain=function(){t.params={type:"entorse",location:u(["poignet","cheville","\xe9paule"])}},this.draw()}return Object(h.a)(a,[{key:"getName",value:function(){return a.NAME}},{key:"getParams",value:function(){return this.params}},{key:"draw",value:function(){u([this.drawHematoma,this.drawFracture,this.drawSprain])()}}]),a}();l.NAME="Trauma";var d=function(){function a(){var t=this;Object(c.a)(this,a),this.params={},this.drawPartial=function(){t.params={type:"partiel",due_to:t.drawLocation()}},this.drawWhole=function(){t.params={type:"totale",due_to:t.drawLocation()}},this.drawLocation=function(){return u(["corps \xe9tranger","\u0153d\xe8me"])},this.draw()}return Object(h.a)(a,[{key:"getName",value:function(){return a.NAME}},{key:"getParams",value:function(){return this.params}},{key:"draw",value:function(){u([this.drawPartial,this.drawWhole])()}}]),a}();d.NAME="Obstruction des voies a\xe9riennes";var f=function(){function a(){Object(c.a)(this,a),this.params={},this.draw()}return Object(h.a)(a,[{key:"getName",value:function(){return a.NAME}},{key:"getParams",value:function(){return this.params}},{key:"draw",value:function(){this.params={type:u(["AVC","choc anaphylactique","d\xe9tresse respiratoire","hypoglyc\xe9mie","autre"])}}}]),a}();f.NAME="Malaise";var p=function(){function a(){var t=this;Object(c.a)(this,a),this.params={},this.draw=function(){t.params={localisation:t.drawLocalisation(),mean:t.drawMean(),with:t.drawWith()}},this.drawLocalisation=function(){return u(["bras","jambe","thorax","abdomen","t\xeate"])},this.drawMean=function(){return u(["couteau","tournevis","morsure de chien"])},this.drawWith=function(){return u(["avec un gros objet","avec un petit objet","avec rien"])},this.draw()}return Object(h.a)(a,[{key:"getName",value:function(){return a.NAME}},{key:"getParams",value:function(){return this.params}}]),a}();p.NAME="Plaie";var w=function(){function a(){var t=this;Object(c.a)(this,a),this.params={},this.draw=function(){var a=["chimique","thermique","radiation","\xe9lectrique"],e=u([].concat(a,["par ingestion","par inhalation"]));t.params={localisation:a.includes(e)?t.drawLocalisation():void 0,type:e}},this.drawLocalisation=function(){return u(["jambe","bras","visage","thorax","abdomen"])},this.draw()}return Object(h.a)(a,[{key:"getName",value:function(){return a.NAME}},{key:"getParams",value:function(){return this.params}}]),a}();w.NAME="Br\xfblure";var v=function(){function a(){var t=this;Object(c.a)(this,a),this.params={},this.draw=function(){t.params={team:t.drawTeam()}},this.drawTeam=function(){return u(["en \xe9quipe","sauveteur isol\xe9"])},this.draw()}return Object(h.a)(a,[{key:"getName",value:function(){return a.NAME}},{key:"getParams",value:function(){return this.params}}]),a}();v.NAME="Perte de conscience";var b=function(){function a(){var t=this;Object(c.a)(this,a),this.params={},this.draw=function(){t.params={person:t.drawPerson(),team:t.drawTeam()}},this.drawPerson=function(){return u(["adulte","enfant","nourrisson"])},this.drawTeam=function(){return u(["en \xe9quipe","sauveteur isol\xe9"])},this.draw()}return Object(h.a)(a,[{key:"getName",value:function(){return a.NAME}},{key:"getParams",value:function(){return this.params}}]),a}();b.NAME="Arr\xeat cardiaque";var y=function(){function a(){var t=this;Object(c.a)(this,a),this.params={},this.draw=function(){t.params={person:t.drawPerson(),team:t.drawTeam()}},this.drawPerson=function(){return u(["adulte","enfant","nourrisson"])},this.drawTeam=function(){return u(["en \xe9quipe","sauveteur isol\xe9"])},this.draw()}return Object(h.a)(a,[{key:"getName",value:function(){return a.NAME}},{key:"getParams",value:function(){return this.params}}]),a}();y.NAME="Noyade";e(13);var g=function(){var a=Object(r.useState)(),t=Object(o.a)(a,2),e=t[0],i=t[1];Object(r.useEffect)((function(){i(new(u([m,l,d,f,p,w,v,b,y])))}),[]);var s=e&&e.getParams();return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",null,e&&e.getName()),n.a.createElement("h2",null,"Params"),s&&Object.keys(s).map((function(a){return n.a.createElement("span",null,a," : ",s[a])}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.64f213db.chunk.js.map