
### mysql 基础知识
#### 下载mysql
https://dev.mysql.com/downloads/mysql/
#### 下载workbench
mysql的客户端，可视化操作
https://dev.mysql.com/downloads/workbench/
#### models：
password:lql...

#### 操作数据库
 启动mysql：打开cmd --net start mysql
 关闭：net stop mysql 
 遇到的问题：
  1.安装时，找不到VCRUNTIME140_1.dll。
 ```
 原因分析：因为vc++的运行库的问题。
 解决：
 方法如下，安装“微软常用运行库合集_2019.07.20_X64.exe”【不用该安装路径】，之后在输入mysqld -install。

附上链接：
https://zhangdezheng.lanzous.com/b015ckbrc
密码:csai

 ```
 2.启动mysql时，提示无法启动。
原因：
```js
MySQL 服务正在启动 MySQL 服务无法启动解决途径
解决方案：

1.删除自己手动创建的data文件夹；

2.管理员权限CMD的bin目录下，移除已错误安装的mysqld服务；

mysqld -remove MySQL
出现删除成功！

3.在CMD的bin目录下执行mysqld --initialize-insecure

会发现程序在mysql的根目录下自动创建了data文件夹以及相关的文件

4.bin目录下执行mysqld -install

出现Service successfully installed.

5.bin目录下执行mysql服务启动net start mysql
MySQL 服务正在启动 ..
MySQL 服务已经启动成功。
```
#### 建表时常用的数据类型：
int
bigint
varchar
longtext
#### sql语句
```js
use user;
show tables;//显示表格 
：注释表格：--show tables;
插入：
insert into userTable(username,password,realname) values ('zhangsan','123','张三')
查询：
select * from userTable;
查询特定
select id,username from userTable;
加条件：
select * from userTable where username="zhangshan" and 'password'="123"
或者
select * from userTable where username="zhangshan" or 'password'="123"
模糊查询
select * from userTable where username like "%zhangshan%"
根据id排序正序
select * from userTable where password like '%1%' order by id;
根据id排序倒序
select * from userTable where password like '%1%' order by id desc;
更新：
update usertable set realname ="lii" where username="lisi"
注意：更新的时候报safe错，则可以执行：
SET SQL_SAFE_UPDATES =0;然后再执行更新操作就可。

删除：
delete from usertable where username="lisi"
正常删除，是改变状态。不会真正删除。
查询不等于某个值：
select * from usertable where status <>"0"

```

#### 使用node连接数据库
```js
1、在项目中执行：npm i mysql
2.在js中引用：
const mysql = require('mysql');
//创建连接对象
const con = mysql.createConnect({
    host:"localhost",
    user:"root",
    password:"lql001",
    port:"3306",
    database:"user"//数据库名称
})
//开始连接
con.connect()
//执行sql语句
const sql ="select * from usertable";
con.query(sql,(err,result)=>{
  if(err){
      console.error(err)
      return
  }
  console.log(result)
    
})
//关闭连接
con.end()
```
#### 安装完mysql后，在bin文件夹下打开cmd
出现问题：提示mysql不是本地指令。
此时需要去配置系统环境变量。--重启电脑

#### 在nodejs引入mysql，创建本地连接
出现问题：
```js
报错信息：
Client does not support authentication protocol requested by server; consider upgrading MySQL client

解决：1.登录进去mysql命令：mysql -uroot -p 
      2.ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '自己设置的密码';
      3.FLUSH PRIVILEGES;刷新；
    
    参考文档：https://www.cnblogs.com/Liqian-Front-End-Engineer/p/11571646.html
```
