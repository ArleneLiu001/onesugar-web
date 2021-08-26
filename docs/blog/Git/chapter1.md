### git基本操作
#### 版本回滚
1. git log-->获取修改信息
2. git reset --hard 版本号：获取想要的文件
3. 注意：误删的文件需从代码库下载时：git checkout --文件名

#### 配置邮箱和用户名
git config --global

#### 第一次创建仓库：
git init --git add .---git commit -m ----git remote add origin ---git push -u origin master

#### 暂存分支:git stash
```
  正在A分支上开发，这个时候需修改个紧急bug 。
1.在A分支上：git stash  把工作区暂时存储下来。  
2，切换到dev分支，从dev分支拉取代码，创建C分支：git checkout dev -->git checkout -b C  
3.修改为以后:git add-->git commit -->git push ---》  
git push --set-upstream origin 本地分支名(将本地的分支推送到远程分支)  
4.回到A分支：git checkout A   
5.恢复stash的数据：方法1：git stash list (先查看)------》git stash   appy(恢复，但此时stash内容并没有删除)------》git stash drop.   方法2：git stash pop(恢复的同时也罢stash内容删除了)。
```

#### 找回已删除的分支
1. git reflog :查看所有引用变动的日志。
2. 找到被删除分支最后一个reflog id.也即是前面出现的那一串。
3. 切回到删除分支之前的那个id:git checkout 6c4axxx
4. 在这个基础上新建一个分支：git checkout -b newName