function TimeSpan(params)
{
	this.years = null;
	this.days =null;
	this.hours = null;
	this.minutes =null;
	this.seconds =null;
	
	this.Parse = Parse;
	this.Initialize = Initialize;
	this.ToDotNetString = ToDotNetTimeSpanString;
	//this.prototype.ToString = ToString;
	var __construct = function(that)
	{
		if(params)
		{
			that.Parse(params);
		}
		else
		{
			that.Initialize();
		}
		
	}(this)

}
TimeSpan.prototype.toString = ToString;
function ToString()
	{
		return this.years + "y " + this.days + "d " + this.hours + "h " + this.minutes + "m " + this.seconds + "s ";
	}

function ToDotNetTimeSpanString()
	{
		return (this.years*365+this.days) + ":" + this.hours + ":" + this.minutes + ":" + this.seconds;
	}
function MatchOrDefault(regexp,text,defaultValue)
{	
	var matches = text.match(regexp);
	if(matches && matches[1])
		{
			return parseInt(matches[1])
		}
		else
		{
			return defaultValue|0;
		}
}
function Parse(text)
	{			
		this.years = MatchOrDefault( /([\d]+)y/,text);
		this.days = MatchOrDefault( /([\d]+)d/,text);
		this.hours = MatchOrDefault( /([\d]+)h/,text);
		this.minutes = MatchOrDefault( /([\d]+)m(?!s)/,text);
		this.seconds = MatchOrDefault( /([\d]+)s/,text);
		
		console.log(this);
		//this.Initialize();	
	}
function Initialize(years,days,hours,minutes,seconds)
{
	this.years = years|0;
	this.days = days|0;
	this.hours = hours|0;
	this.minutes = minutes|0;
	this.seconds = seconds|0;	
}

