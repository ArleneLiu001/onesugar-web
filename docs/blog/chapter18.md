### 常用方法代码库
#### 返回上月第一天与最后一天
```js
const _getPreDate = time => {
    let year = new Date(time).getFullYear()
    let month = new Date(time).getMonth()
    if (month === 0) {
        month = 12
        year -= 1
    }
    if (month < 10) {
        month = '0' + month
    }
    return {
        firstDate: `${year}-${month}-01`,
        lastDate: `${year}-${month}-${new Date(year, month, 0).getDate()}`
    }
}
```

#### 返回下月第一天与最后一天
```js
  const _getNextDate = time => {
    let year = new Date(time).getFullYear()
    let month = new Date(time).getMonth()
    month += 2
    if (month === 13) {
        month = 1
        year += 1
    }
    if (month < 10) {
        month = '0' + month
    }
    return {
        firstDate: `${year}-${month}-01`,
        lastDate: `${year}-${month}-${new Date(year, month, 0).getDate()}`
    }
}
```
#### 前端计算
```js
// 加法
const _accAdd = (arg1, arg2) => {
    let r1, r2, m
    try {
        r1 = arg1.toString().split('.')[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split('.')[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
}
// 乘法
const _accMul = (arg1, arg2) => {
  let m = 0, s1 = arg1.toString(), s2 = arg2.toString()
  try {
    m += s1.split('.')[1].length
  } catch (e) {}
  try {
    m += s2.split('.')[1].length
  } catch (e) {}
  return (Number(s1.replace('.', ''))) * (Number(s2.replace('.', ''))) / Math.pow(10, m)
}
//减法函数，用来得到精确的减法结果
const _subtract = (arg1, arg2) => {
    let r1, r2, m, n
    try {
        r1 = arg1.toString().split('.')[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split('.')[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    n = r1 >= r2 ? r1 : r2
    return parseFloat(((arg1 * m - arg2 * m) / m).toFixed(n))
}

```
#### 千分位处理
```js
const _formatThousands = (num, cent = 2, isThousand = 1) => {
    let sign, cents
    let reg = /(\$|,)/g

    // 检查传入数值为数值类型
    if (isNaN(num) || num === 0) {
        num = '0'
    }

    num = num.toString().replace(reg, '')

    // 获取符号(正/负数)
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * Math.pow(10, cent) + 0.50000000001) // 把指定的小数位先转换成整数.多余的小数位四舍五入
    cents = num % Math.pow(10, cent) // 求出小数位数值
    num = Math.floor(num / Math.pow(10, cent)).toString() // 求出整数位数值
    cents = cents.toString() // 把小数位转换成字符串,以便求小数位长度

    // 补足小数位到指定的位数
    while (cents.length < cent) {
        cents = '0' + cents
    }
    if (isThousand) {
        // 对整数部分进行千分位格式化.
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
            num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
        }
    }
    return cent > 0 ? (((sign) ? '' : '-') + num + '.' + cents) : (((sign) ? '' : '-') + num)
}

```
##### 实现倒计时

```js
 // 计时器:1小时倒计时
    CountDown() {
      //  var maxtime = 60 * 60; //一个小时，按秒计算
      if (this.maxtime >= 0) {
        var minutes = Math.floor(this.maxtime / 60);
        var seconds = Math.floor(this.maxtime % 60);
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        var msg = "00" + ":" + minutes + ":" + seconds;
        this.countTime = msg;
        --this.maxtime;
      } else {
        this.canAdd = true;
        clearInterval(this.timer);
      }
    }

 //距离结束还有多少天时分秒
	var endtime = '2020-05-01 00:00:00'; 
	endtime = endtime.replace(/-/g,"/"); 
	endtime = new Date(endtime);
	setInterval(function () {
      	    var currenttime = new Date(); 
      	    // 倒计时时间 = 结束时间 - 开始时间
      	    var result = endtime.getTime() - currenttime.getTime(); 
	    // 定义变量 d,h,m,s保存倒计时的时间  
            var d,h,m,s;  
            if (result > 0) {  
                d = Math.floor(result/1000/60/60/24);  
                h = Math.floor(result/1000/60/60%24);  
                m = Math.floor(result/1000/60%60);  
                s = Math.floor(result/1000%60);                     
            } else { 
	        $(".countTime").text(""); // 置空
	        return;
	    }
	    // 倒计时赋值  
      	    $(".countTime").text(d+"天"+h+"时"+m+"分"+s+"秒");
	},1000);
```

