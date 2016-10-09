import DateTimePicker from './DateTimePicker';

export default class DateTime
{

	picker;

	constructor()
	{
		this.picker = new DateTimePicker();
	}

	/**
	 * Get date string from timestamp or use current
	 * @param {string} e PHP date format
	 * @param {int} [g] Timestamp
	 * @returns {string}
	 */
	date(e, g) {
		var h=this;var k,f;var l=['Sun','Mon','Tues','Wednes','Thurs','Fri','Satur','January','February','March','April','May','June','July','August','September','October','November','December'];var m=/\\?(.?)/gi;var o=function(t,s){return f[t]?f[t]():s};var p=function(n,c){n=String(n);while(n.length<c){n='0'+n}return n};f={d:function(){return p(f.j(),2)},D:function(){return f.l().slice(0,3)},j:function(){return k.getDate()},l:function(){return l[f.w()]+'day'},N:function(){return f.w()||7},S:function(){var j=f.j();var i=j%10;if(i<=3&&parseInt((j%100)/10,10)==1){i=0}return['st','nd','rd'][i-1]||'th'},w:function(){return k.getDay()},z:function(){var a=new Date(f.Y(),f.n()-1,f.j());var b=new Date(f.Y(),0,1);return Math.round((a-b)/864e5)},W:function(){var a=new Date(f.Y(),f.n()-1,f.j()-f.N()+3);var b=new Date(a.getFullYear(),0,4);return p(1+Math.round((a-b)/864e5/7),2)},F:function(){return l[6+f.n()]},m:function(){return p(f.n(),2)},M:function(){return f.F().slice(0,3)},n:function(){return k.getMonth()+1},t:function(){return(new Date(f.Y(),f.n(),0)).getDate()},L:function(){var j=f.Y();return j%4===0&j%100!==0|j%400===0},o:function(){var n=f.n();var W=f.W();var Y=f.Y();return Y+(n===12&&W<9?1:n===1&&W>9?-1:0)},Y:function(){return k.getFullYear()},y:function(){return f.Y().toString().slice(-2)},a:function(){return k.getHours()>11?'pm':'am'},A:function(){return f.a().toUpperCase()},B:function(){var H=k.getUTCHours()*36e2;var i=k.getUTCMinutes()*60;var s=k.getUTCSeconds();return p(Math.floor((H+i+s+36e2)/86.4)%1e3,3)},g:function(){return f.G()%12||12},G:function(){return k.getHours()},h:function(){return p(f.g(),2)},H:function(){return p(f.G(),2)},i:function(){return p(k.getMinutes(),2)},s:function(){return p(k.getSeconds(),2)},u:function(){return p(k.getMilliseconds()*1000,6)},e:function(){throw'Not supported (see source code of date() for timezone on how to add support)';},I:function(){var a=new Date(f.Y(),0);var c=Date.UTC(f.Y(),0);var b=new Date(f.Y(),6);var d=Date.UTC(f.Y(),6);return((a-c)!==(b-d))?1:0},O:function(){var b=k.getTimezoneOffset();var a=Math.abs(b);return(b>0?'-':'+')+p(Math.floor(a/60)*100+a%60,4)},P:function(){var O=f.O();return(O.substr(0,3)+':'+O.substr(3,2))},T:function(){return'UTC'},Z:function(){return-k.getTimezoneOffset()*60},c:function(){return'Y-m-d\\TH:i:sP'.replace(m,o)},r:function(){return'D, d M Y H:i:s O'.replace(m,o)},U:function(){return k/1000|0}};this.date=function(a,b){h=this;k=(b===undefined?new Date():(b instanceof Date)?new Date(b):new Date(b*1000));return a.replace(m,o)};return this.date(e,g)
	};

	/**
	 * Convert date string to timestamp
	 * @param {string} e date string
	 * @param {int} [f] Timestamp
	 * @returns {string}
	 */
	strtotime(e, f) {
		var g,match,today,year,date,days,ranges,len,times,regex,i,fail=false;if(!e){return fail}e=e.replace(/^\s+|\s+$/g,'').replace(/\s{2,}/g,' ').replace(/[\t\r\n]/g,'').toLowerCase();match=e.match(/^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/);if(match&&match[2]===match[4]){if(match[1]>1901){switch(match[2]){case'-':{if(match[3]>12||match[5]>31){return fail}return new Date(match[1],parseInt(match[3],10)-1,match[5],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000}case'.':{return fail}case'/':{if(match[3]>12||match[5]>31){return fail}return new Date(match[1],parseInt(match[3],10)-1,match[5],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000}}}else if(match[5]>1901){switch(match[2]){case'-':{if(match[3]>12||match[1]>31){return fail}return new Date(match[5],parseInt(match[3],10)-1,match[1],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000}case'.':{if(match[3]>12||match[1]>31){return fail}return new Date(match[5],parseInt(match[3],10)-1,match[1],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000}case'/':{if(match[1]>12||match[3]>31){return fail}return new Date(match[5],parseInt(match[1],10)-1,match[3],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000}}}else{switch(match[2]){case'-':{if(match[3]>12||match[5]>31||(match[1]<70&&match[1]>38)){return fail}year=match[1]>=0&&match[1]<=38?+match[1]+2000:match[1];return new Date(year,parseInt(match[3],10)-1,match[5],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000}case'.':{if(match[5]>=70){if(match[3]>12||match[1]>31){return fail}return new Date(match[5],parseInt(match[3],10)-1,match[1],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000}if(match[5]<60&&!match[6]){if(match[1]>23||match[3]>59){return fail}today=new Date();return new Date(today.getFullYear(),today.getMonth(),today.getDate(),match[1]||0,match[3]||0,match[5]||0,match[9]||0)/1000}return fail}case'/':{if(match[1]>12||match[3]>31||(match[5]<70&&match[5]>38)){return fail}year=match[5]>=0&&match[5]<=38?+match[5]+2000:match[5];return new Date(year,parseInt(match[1],10)-1,match[3],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000}case':':{if(match[1]>23||match[3]>59||match[5]>59){return fail}today=new Date();return new Date(today.getFullYear(),today.getMonth(),today.getDate(),match[1]||0,match[3]||0,match[5]||0)/1000}}}}if(e==='now'){return f===null||isNaN(f)?new Date().getTime()/1000|0:f|0}if(!isNaN(g=Date.parse(e))){return g/1000|0}date=f?new Date(f*1000):new Date();days={'sun':0,'mon':1,'tue':2,'wed':3,'thu':4,'fri':5,'sat':6};ranges={'yea':'FullYear','mon':'Month','day':'Date','hou':'Hours','min':'Minutes','sec':'Seconds'};function lastNext(a,b,c){var d,day=days[b];if(typeof day!=='undefined'){d=day-date.getDay();if(d===0){d=7*c}else if(d>0&&a==='last'){d-=7}else if(d<0&&a==='next'){d+=7}date.setDate(date.getDate()+d)}}function process(a){var b=a.split(' '),type=b[0],range=b[1].substring(0,3),typeIsNumber=/\d+/.test(type),ago=b[2]==='ago',num=(type==='last'?-1:1)*(ago?-1:1);if(typeIsNumber){num*=parseInt(type,10)}if(ranges.hasOwnProperty(range)&&!b[1].match(/^mon(day|\.)?$/i)){return date['set'+ranges[range]](date['get'+ranges[range]]()+num)}if(range==='wee'){return date.setDate(date.getDate()+(num*7))}if(type==='next'||type==='last'){lastNext(type,range,num)}else if(!typeIsNumber){return false}return true}times='(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec'+'|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?'+'|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)';regex='([+-]?\\d+\\s'+times+'|'+'(last|next)\\s'+times+')(\\sago)?';match=e.match(new RegExp(regex,'gi'));if(!match){return fail}for(i=0,len=match.length;i<len;i++){if(!process(match[i])){return fail}}return(date.getTime()/1000)
	};

	/**
	 * Get current timestamp
	 * @returns {number}
	 */
	time() {
		return Math.floor(new Date().getTime() / 1000)
	};

}