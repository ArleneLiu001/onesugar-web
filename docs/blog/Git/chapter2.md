### 一个电脑同时配置gitlab和github
#### 需求：公司的项目通过gitlab托管，而我自己的代码则在github上，两个账号和邮箱是不一样的。那么此时，就需要配置两套ssh。
#### 实现思路
1. 首先将gitlab的账号设置为全局名字和邮箱。生成秘钥。在config文件中配置设置这些基础信息：
```
例如：
Host b2b.b2bvue
        ProxyCommand ssh -W %h:%p b2b.jumphost 2> /dev/null
        Hostname 172.21.0.95
        Port 22
        User liuql
        IdentityFile ~/.ssh/id_rsa

```
2. 把github账号的名字和邮箱设置为当前项目的名字和邮箱。生成与gitlab不同名字的秘钥:如：id_rsa.github。
SSH私钥位置，指定方式：
```
git config core.sshCommand "ssh -i /c/Users/xiao/.ssh/id_rsa.github"
```
#### 具体实现配置gitlab：
1. 首先：由于公司的项目较多，则把公司的账号名字和邮箱设置为全局：
```
git config --global user.name 'liuql'
git config --global user.email 'liu@usoftchina.com'
```
2. 其次：生成ssh秘钥
```
//生成默认名字秘钥
ssh-keygen -t rsa -C "xxx@qq.com"
```
3. 将生成的公钥配置到gitlab的ssh里面。
#### 具体实现配置github账号：
1. 
```
git config --local user.name 'arlene'
git config --local user.email 'arlene@163.com'

```
2. 其次：生成ssh秘钥
```
//生成自定义名字秘钥
ssh-keygen -t rsa -C "xxx@qq.com"
```