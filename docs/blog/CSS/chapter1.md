### Grid 布局
Grid 布局即网格布局,在布局响应式，瀑布流等方面，非常简单。比flex布局更强大。
 #### 属性：
 * display：grid 或者 display：inline-grid（创建行内元素）。创建一个网格容器。一旦我们这样做，这个元素的所有直系子元素将成为网格项目。
 * grid-template-columns 属性和 grid-template-rows 属性
  grid-template-columns：属性设置列宽。取值：
  grid-template-rows 属性设置行高。
  ```JS
  .wrapper {
  display: grid;
  /*  声明了三列，宽度分别为 200px 100px 200px */
  grid-template-columns: 200px 100px 200px;
  grid-gap: 5px;
  /*  声明了两行，行高分别为 50px 50px  */
  grid-template-rows: 50px 50px;
}
  ```
repeat() 函数 :可以简化重复的值。该函数接受两个参数：
  第一个参数是重复的次数，可以取值为auto-fill，表示自动填充，让一行（或者一列）中尽可能的容纳更多的单元格。  
  第二个参数是所要重复的值。
  如同：
  ```JS
   /*  2行，而且行高都为 50px  */
  grid-template-rows: repeat(2, 50px);
    //fr 关键字:类似于flex：1。fr 单位代表网格容器中可用空间的一等份。
  grid-template-columns: 200px 1fr 2fr;//表示200固定，剩下的元素占用1/3,2/3。
  ```
  minmax() 函数：
  ```JS
   grid-template-columns: 1fr 1fr minmax(300px, 2fr);//表示：第三个元素最小宽度是300 ，最大不能大于第一第二列宽的两倍。
   //auto 关键字
   grid-template-columns: 100px auto 100px; //左右各100px，中间是自动宽度。
  ```
  * grid-row-gap 属性、grid-column-gap 属性以及 grid-gap 属性
  grid-row-gap：设置行间距  
  grid-column-gap：设置列间距  
  grid-gap 属性是两者的简写形式。

  * grid-auto-flow：指定在网格中被自动布局的元素怎样排列。默认是row。
  ```JS
  grid-auto-flow: row dense //类似于瀑布流的实现。
  ```
  * justify-items 属性、align-items 属性以及 place-items 属性：设置元素的对齐方式。类似于flex的此属性。