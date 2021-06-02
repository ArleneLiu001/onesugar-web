### background属性
```css
background: #fff url(img.png) no-repeat 10px 10px fixed;
              ①     ②             ③       ④   ⑤     ⑥
```
属性解析：
* 位置① .设置背景颜色（不设置则背景为透明）
* 位置②：background-image设置背景图片（url）
* 位置③：background-repeat设置背景平铺方式，不设置该属性，默认为repeat，背景图像将在垂直方向和水平方向重复。可能的值有（repeat-x, repeat-y, no-repeat）
* 位置④：设置背景图距左边的距离（默认为0），可能的值（数值表示，%表示，top，left，bottom，center，right表示法），注意center占用两个位置（④⑤）；
* 位置⑤：background-position 设置背景图距上边的距离（默认为0），可能的值（数值表示，%表示，top，left，bottom，center，right表示法），注意center占用两个位置（④⑤）；
* 位置⑥：background-attachment:设置图片的滚动方式（默认scroll，背景图像会随着页面其余部分的滚动而移动），可能的值为（scroll，fixed

#### background-size属性:
用于设置背景图的尺寸大小,默认值auto，其他选项值（数值法，百分比法，cover，contain）
详解如下：
* 数值法，如（10px，10px），含义即（宽，高），当设置第一值时候，第二个值默认auto
* 百分比法，如（10%，10%），含义即（宽，高），当设置第一值时候，第二个值默认auto
* cover:把背景图片扩展至足够大，以使背景图片完全覆盖背景区域。优点：图片不失真（不拉伸变形），整个背景区域不会出现背景色（默认白色），
缺点：图片变得不完整，会隐藏一部分，
* contain:将背景图片等比缩放至某一边紧贴容器边缘为止。优点：背景图不失真（不拉伸变形），且全部出现在背景区域里面
缺点：背景区域会出现背景色（默认白色）
#### background-clip:
规定背景的绘制区域，包括背景颜色和背景图片的绘制方法
可选的值：（padding-box，content-box，border-box）
#### 优点总结：
background 相比于img标签来讲，可以使图片在不压缩不变形的情况下完全覆盖容器，实现图片自适应宽高。

  



