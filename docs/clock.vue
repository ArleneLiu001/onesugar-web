<template>
  <div>
     <!--钟表-->
    <div class="clock" id="clock">
      <!--圆心-->
      <div class="origin"></div>
      <!--时分秒针-->
      <div class="clock-line hour-line" id="hour-line"></div>
      <div class="clock-line minute-line" id="minute-line"></div>
      <div class="clock-line second-line" id="second-line"></div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      hour_line:{},
      minute_line:{},
      second_line:{},
    }
  },
  mounted(){
    this.loadTime()
  },
  methods:{
    loadTime(){
       this.initNumXY(51.5, 35, 20, 20)
       this.hour_line = document.getElementById('hour-line')
      this.minute_line = document.getElementById('minute-line')
      this.second_line = document.getElementById('second-line')
          this.setTime() //设置时间，不加这句开始会有一下停顿
      setInterval(this.setTime, 1000)
    },
    initNumXY(R, r, w, h) {
        var numXY = [
          {
            left: R + 0.5 * r - 0.5 * w,
            top: R - 0.5 * r * 1.73205 - 0.5 * h
          },
          {
            left: R + 0.5 * r * 1.73205 - 0.5 * w,
            top: R - 0.5 * r - 0.5 * h
          },
          {
            left: R + r - 0.5 * w,
            top: R - 0.5 * h
          },
          {
            left: R + 0.5 * r * 1.73205 - 0.5 * w,
            top: R + 0.5 * r - 0.5 * h
          },
          {
            left: R + 0.5 * r - 0.5 * w,
            top: R + 0.5 * r * 1.73205 - 0.5 * h
          },
          {
            left: R - 0.5 * w,
            top: R + r - 0.5 * h
          },
          {
            left: R - 0.5 * r - 0.5 * w,
            top: R + 0.5 * r * 1.73205 - 0.5 * h
          },
          {
            left: R - 0.5 * r * 1.73205 - 0.5 * w,
            top: R + 0.5 * r - 0.5 * h
          },
          {
            left: R - r - 0.5 * w,
            top: R - 0.5 * h
          },
          {
            left: R - 0.5 * r * 1.73205 - 0.5 * w,
            top: R - 0.5 * r - 0.5 * h
          },
          {
            left: R - 0.5 * r - 0.5 * w,
            top: R - 0.5 * r * 1.73205 - 0.5 * h
          },
          {
            left: R - 0.5 * w,
            top: R - r - 0.5 * h
          }
        ]

        var clock = document.getElementById('clock')
        //钟表上添加数字
        for (var i = 1; i <= 12; i++) {
          if (i % 3 == 0) {
            clock.innerHTML += "<div class='clock-num em_num'>" + i + '</div>'
          } else {
            clock.innerHTML += "<div class='clock-num'>" + i + '<div>'
          }
        }

        var clock_num = document.getElementsByClassName('clock-num')
        //定位
        for (var i = 0; i < clock_num.length; i++) {
          clock_num[i].style.left = numXY[i].left + 'px'
          clock_num[i].style.top = numXY[i].top + 'px'
        }

        //钟表上添加刻度
        var ul = document.createElement('ul')
        ul.setAttribute('id', 'list')
        clock.appendChild(ul)
        for (var i = 0; i < 60; i++) {
          var li = document.createElement('li')
          li.style.transform = 'rotate( ' + i * 6 + 'deg )'
          ul.appendChild(li)
        }
      },
      setTime() {
        var date = new Date()
        var s = date.getSeconds()
        var m = date.getMinutes() + s / 60
        var h = date.getHours() + m / 60

        this.hour_line.style.transform = ' rotate( ' + (h * 30 - 90) + 'deg ) '
        this.minute_line.style.transform = ' rotate( ' + (m * 6 - 90) + 'deg ) '
        this.second_line.style.transform = ' rotate( ' + (s * 6 - 90) + 'deg ) '
      }
  }
}
</script>
<style lang="stylus">
   .clock {
        width: 100px;
        height: 100px;
        border: 5px solid #45a2a7;
        box-shadow: 0px 0px 5px 3px #45a2a7 inset;
        border-radius: 50%;
        position: relative;
        margin: 5px auto;
        z-index: 10;
        background-color: #f6f6f6;
      }
      /* 钟表上的数字 */
      .clock-num {
        width: 18px;
        height: 18px;
        font-size: 8px;
        text-align: center;
        line-height: 20px;
        position: absolute;
        z-index: 8;
        color: #555;
        // font-family: fantasy; /* 字体 */
      }
      .em_num {
        font-size: 8px;
      }
      .clock-line {
        position: absolute;
        z-index: 20;
      }
      .hour-line {
        width: 25px;
        height: 2px;
        top: 49.5px;
        left: 50px;
        background-color: #000;
        border-radius: 2px;
        transform-origin: 0 50%;
        box-shadow: 1px -3px 5px 1px #aaa;
      }
      .minute-line {
        width: 32.5px;
        height: 2px;
        top: 49.5px;
        left: 47.5px;
        background-color: #000;
        transform-origin: 7.692% 50%;
        box-shadow: 1px -3px 5px 1px #aaa;
      }
      .second-line {
        width: 37.5px;
        height: 1px;
        top: 49.5px;
        left: 45px;
        background-color: #f60;
        transform-origin: 11.765% 50%;
        box-shadow: 1px -3px 3px 1px #bbb;
      }
      .origin {
        width: 5px;
        height: 5px;
        border-radius: 5px;
        background-color: #14a9bd;
        position: absolute;
        top: 47.5px;
        left: 47.5px;
        z-index: 14;
      }
      /* 刻度 */
      #list {
        list-style: none;
        position: relative;
        height: 100%;
        margin: 0;
        padding: 0;
      }
      #list li {
        list-style: none;
        width: 1px;
        height: 6px;
        position: absolute;
        left: 49.6px;
        top: 2px;
        transform-origin: center 49px; /* 相对元素左上角的位置 */
        background-color: #555;
      }

      #list li:nth-child(5n + 1) {
        width: 2px;
        height: 7.5px;
      }
</style>