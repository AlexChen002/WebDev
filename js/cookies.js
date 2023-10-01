const getJSONString = function(obj){return JSON.stringify(obj, null, 2);}

let setCookie=null;
let getCookie=null;
let delCookie=null;

if (navigator.userAgent.indexOf("Firefox") != -1 ) 
{
    //alert("Mozilla Firefox");
    setCookie=function(name,value,days)
	{
			var d=new Date();
			d.setTime(d.getTime()+(24*60*60*1000*days));
			var expires="expires="+d.toUTCString();
			document.cookie=name+"="+value+"; "+expires+"; path=/";
			//alert(document.cookie);
	}
	getCookie=function(name)
	{
			var x=document.cookie.split("; ");
			for(var i=0;i<x.length;i++)
			{
				var y=x[i].split("=");
				if(y[0]==name) return y[1];
			}
			return null;
	}
	delCookie=function(name)
	{
			setCookie(name,"",-1);
	}
}
else
{
	setCookie=function(name,value,days)
	{
		if(days<=0) window.localStorage.removeItem(name);
		else window.localStorage.setItem(name,value);
	}
	getCookie=function(name)
	{
		return window.localStorage.getItem(name);
	}	
	delCookie=function(name)
	{
		window.localStorage.removeItem(name);
	}
}

 
