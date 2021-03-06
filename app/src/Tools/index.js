let dateDiff=function(hisTime){
    var now=new Date().getTime(),
        diffValue=now-hisTime,
        result='',
        minute=1000*60,
        hour=minute*60,
        day=hour*24,
        month=day*30,
        year=month*12,
        _year=diffValue/year,
        _month=diffValue/month,
        _week=diffValue/(7*day),
        _day=diffValue/day,
        _hour=diffValue/hour,
        _min=diffValue/minute;
    if(_year>=1) {
        result=parseInt(_year,10) + "年前";
    } else if(_month>=1) {
        result=parseInt(_month,10) + "个月前";
    }else if(_week>=1) {
        result=parseInt(_week,10) + "周前";
    }else if(_day>=1) {
        result=parseInt(_day,10) +"天前";
    }else if(_hour>=1) {
        result=parseInt(_hour,10) +"个小时前";
    }else if(_min>=1) {
        result=parseInt(_min,10) +"分钟前";
    }else result="刚刚";
    return result;
};

export {dateDiff};