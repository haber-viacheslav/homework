parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"diDQ":[function(require,module,exports) {
const e={dateDay:document.querySelector(".date-day"),date:document.querySelector(".date"),dateMonth:document.querySelector(".date-month"),dateYear:document.querySelector(".date-year"),clock:document.querySelector(".digital-clock"),hours:document.querySelector(".clock-hours__arrow"),minutes:document.querySelector(".clock-minutes__arrow"),seconds:document.querySelector(".clock-seconds__arrow")},t=["Неділя","Понеділок","Вівторок","Середа","Четвер","Пятниця","Субота"],o=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"];setInterval(()=>{const r=new Date,n=t[r.getDay()],c=o[r.getMonth()],a=r.getFullYear(),d=r.getDate().toString().padStart(2,"0");e.dateDay.textContent=n,e.date.textContent=d,e.dateMonth.textContent=c,e.dateYear.textContent=a;const s=r.getHours(),u=r.getMinutes(),l=r.getSeconds();e.clock.textContent=`Current time: ${s}: ${u}: ${l}`;const m=6*l,y=6*u,g=30*s+.5*u;e.seconds.style.transform=`rotate(${m}deg)`,e.minutes.style.transform=`rotate(${y}deg)`,e.hours.style.transform=`rotate(${g}deg)`},1e3);
},{}]},{},["diDQ"], null)
//# sourceMappingURL=/homework/9-module-online.5efd4938.js.map