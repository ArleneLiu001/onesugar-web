### 拖拽表格
### 需求
需要对采购订单的明细表格进行打印，不同的公司明细项目不同，需要显示的先后顺序也不一样（拖拽排序）。
#### 思路：
1.表格title各项放置选择按钮，来自定义可配置是否选择。2.使用拖拽列的方式进行排序。将顺序以一定的标准传给后台。
  
  

#### 元素拖拽实现：
```
原理：获取当前鼠标点击位置，使用onmousemove监听鼠标移动事件，再获取到鼠标停留位置。设置元素当前位置为鼠标最终停留位置减去开始位置。

表格拖拽：拖拽表格title，其实改变的是表格title的顺序，调用拖拽完整后的方法，改变表格列的数据顺序。
```
4. 插件:  vuedraggable
5. 代码片段
```js
<table class="print-table-info pur-table-info"
               v-if="orderDetail.orderProduct && orderDetail.orderProduct.length">
          <thead class="print-tbody-tr text-center"
                 :class="{'allfont18 specialW':fromPage==='real'}">
            <draggable v-model="headers"
                       tag="tr"
                       filter=".undraggable"
                       :move="onMove"
                       @end="dealEnd"
                       ghost-class="ghost"
                       ghostClass="ghostClass">
              <th id="trLine"
                  v-for="(header,index) in headers"
                  class="theader"
                  ref="theader"
                  :class="header.ifDrag ? 'undraggable' : ''"
                  :key="index"
                  scope="col">
                <Checkbox v-if="isChecked(header)"
                          v-model="header.isShow"
                          @on-change="onCheckCol(header)">{{ header.val }}</Checkbox>
                <span v-else>{{header.val}}</span>
              </th>
            </draggable>
          </thead>
          <tbody>
            <template>
              <tr class="print-tbody-tr text-center"
                  :class="{'allfont18 specialW':fromPage==='real'}"
                  v-for="(item, index) in orderDetail.orderProduct"
                  :key="index">
                <td :ref="`curTd${hkey}`"
                    v-for="(header,hkey) in headers"
                    class="tdInfo"
                    :key="header.code">{{ hkey ===0?index+1:item[header.code] }}</td>
              </tr>
            </template>
          </tbody>
        </table>
        
        
     onMove ({ relatedContext, draggedContext }) {
      if (!relatedContext.index) {
        return false
      }
      // all td
      let tdinfo = document.getElementsByClassName('tdInfo')
      tdinfo.forEach(item => {
        item.style.border = '1px solid #8C8C8C'
      })
      let ele = this.$refs["curTd" + draggedContext.futureIndex]
      ele.forEach(item => {
        item.style.border = '2px solid #3597D5'
      })
    },
    dealEnd () {
      this.$emit('changeDrag', JSON.stringify(this.headers))
      let ele = document.getElementsByClassName('tdInfo')
      ele.forEach(item => {
        item.style.border = '1px solid #8C8C8C'
      })
    }    

```

