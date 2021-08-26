### 上传图片或者文件
以下是对上传图片或者文件的简单封装：
可配置内容：
1. 上传1张或多张图片（文件）。
2. 是否预览图片，以及预览图片
3. 上传类型
4. 图片区域大小设置宽高。
5. 上传路径。
6. 替换，删除图片。


form表单上传文件：
```
1.通过change事件获取到上传文件的信息：$event
2.通过e.target.files[]可以获取到上传文件的信息：文件名，大小，type。
3.将这些信息通过FormData()的形式读取。设置入参。
4.设置头已经进度条。
5.通过axios.post()传入图片。

```


```js
<template>
    <div class="upload-files">
        <div class="img-modal" v-if="showImg">
            <div class="img-modal-wrap">
                <i class="iconfont icon-close" @click="showImg = false"></i>
                <img :src="imgUrl" alt="">
            </div>
        </div>
        <template v-for="file in fileLength">
            <div v-if="file === 1 || fileList[file - 1] || fileList.length === file - 1" class="img-upload"
                 :class="{borderSolid: file.url}" :style="{ width: `${width}px`, height: `${height}px` }">
                <template v-if="fileList[file - 1] && fileList[file - 1].url">
                    <img class="preview img" :src="fileList[file - 1].url" v-if="isPicture(fileList[file - 1].url)"
                         alt="">
                    <img class="preview img" src="./img/file.png" v-if="!isPicture(fileList[file - 1].url)" alt="">
                </template>
                <template v-else>
                    <div v-show="progress > -1" class="upload-progress" :style="{ 'line-height': `${height}px` }">{{
                        progress }}%
                    </div>
                    <slot>
                        <div class="upload-preview">
                            <i class="iconfont icon-jiahao"></i>
                            <p>上传文件</p>
                        </div>
                    </slot>
                </template>
                <input type="file" :style="{ width: `${width}px`, height: `${height}px` }" :ref="file - 1"
                       :accept="accept" @change="upload($event, file - 1)">
                <div class="hover-show" :title="fileList[file - 1] && fileList[file - 1].name"
                     :style="{ width: `${width}px`, height: `${height}px` }">
                    <i class="iconfont icon-search" @click="showPreviewImg(fileList[file - 1])" v-if="preview"></i>
                    <div class="option" v-if="!readonly"
                         :style="{ height: `${24 / 125 * height}px`, lineHeight: `${24 / 125 * height}px` }">
                        <a class="inline-block option-btn" @click="reUpload(file - 1)">替换</a>
                        <a class="inline-block option-btn" @click="deleteImg(file - 1)">删除</a>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
    import axios from './axios';

    export default {
        name: 'UUpload',
        data() {
            return {
                fileList: [],
                imgUrl: '',
                showImg: false,
                // 上传进度 -1表示未上传
                progress: -1,
                fileName: '',
                // 最多可以上传展示数量
                fileLength: 1
            };
        },
        props: {
            // 预览图片的url
            urlList: {
                type: Array,
                default: () => []
            },
            // 最大尺寸（MB）
            maxSize: {
                type: Number,
                default: 100
            },
            // 是否多文件上传
            multiple: {
                type: Boolean,
                default: false
            },
            // 最多上传文件
            fileCount: {
                type: Number,
                default: 5
            },
            // 上传类型
            accept: {
                type: String,
//        default: 'image/jpeg,image/jpg,image/gif,image/bmp,image/png,.pdf'
                default: '*'
            },
            // 是否显示预览
            showPreview: {
                type: Boolean,
                default: true
            },
            // 需要传递给父组件的参数
            params: {
                default: null
            },
            readonly: {
                default: false,
                type: Boolean
            },
            preview: {
                default: true,
                type: Boolean
            },
            // 图片上传区域整体宽度
            width: {
                default: 125,
                type: Number
            },
            // 图片上传区域整体高度
            height: {
                default: 125,
                type: Number
            },
            // 文件上传的url
            uploadFileUrl: {
                type: String,
                default: 'https://filerest.uuzcc.cn/file/upload'
            },
            // 图片上传的url
            uploadImgUrl: {
                type: String,
                default: 'https://filerest.uuzcc.cn/image/upload'
            },
            postParams: {
                default: null,
                type: Object
            }
        },
        mounted() {
            this.fileLength = this.multiple ? this.fileCount : 1;
            this.fileList = JSON.parse(JSON.stringify(this.urlList));
        },
        methods: {
            upload(e, count) {
                let filesArr = Array.from(e.target.files || []);
                e.target.value = '';
                if (filesArr.length && !filesArr.find(item => this.isInvalidFileSize(item))) {
                    if (this.accept === '*' || this.accept.indexOf(filesArr[0].type.toLowerCase()) > -1) {
                        let param = new FormData();
                        param.append('stream', filesArr[0]);
                        param.append('name', filesArr[0].name);
                        param.append('contentType', filesArr[0].type);
                        if (this.postParams) {
                            for (let key in this.postParams) {
                                param.append(key, this.postParams[key]);
                            }
                        }
                        let config = {
                            headers: {'Content-Type': 'multipart/form-data'},
                            onUploadProgress: progressEvent => {
                                this.progress = progressEvent.loaded / progressEvent.total * 100 | 0;
                            }
                        };
                        if (this.isPicture(filesArr[0].name)) {
                            this.uploadImg(filesArr[0], param, config, count);
                        } else {
                            this.uploadFile(filesArr[0], param, config, count);
                        }
                    } else {
                        this.$message.error('请上传正确的格式');
                        this.emptyFileInput();
                    }
                } else {
                    if (!filesArr.length) {
                        this.$message.info('请选择文件');
                    } else {
                        this.$message.error(`上传文件请勿超过${this.maxSize}M`);
                        this.emptyFileInput();
                    }
                }
            },
            uploadImg(file, param, config, count) {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                let _this = this;
                reader.onloadend = function (e) {
                    let image = new Image();
                    image.setAttribute('src', e.target.result);
                    image.onload = function () {
                        param.append('width', this.width);
                        param.append('height', this.height);
                        _this.doUpload(file, param, config, _this.uploadImgUrl, count);
                    };
                };
            },
            uploadFile(file, param, config, count) {
                this.doUpload(file, param, config, this.uploadFileUrl, count);
            },
            doUpload(file, param, config, uploadUrl, count) {
                axios.post(uploadUrl, param, config)
                    .then(response => {
                        this.$set(this.fileList, count, response.data.image);
                        // this.fileList[count] = response.data.image
                        this.emitAction('change', this.fileList);
                        this.emptyFileInput();
                    }, err => {
                        this.$message.error('上传失败');
                        this.emptyFileInput();
                        console.log(err);
                    });
            },
            // 非法尺寸
            isInvalidFileSize(file) {
                return file.size > this.maxSize * 1024 * 1024;
            },
            // 清空file列表
            emptyFileInput() {
                this.$refs.fileUpload && (this.$refs.fileUpload.value = '');
                this.progress = -1;
            },
            // 移除图片
            deleteImg(count) {
                this.fileList.splice(count, 1);
                this.emptyFileInput();
                this.emitAction('change', this.fileList);
            },
            // 重新上传
            reUpload(count) {
                this.$refs[count][0].click();
            },
            // 提交事件
            emitAction(action, data = null) {
                this.$emit(action, {
                    params: this.params,
                    data: data
                });
            },
            showPreviewImg(obj) {
                if (this.isPicture(obj.url)) {
                    this.imgUrl = obj.url;
                    this.showImg = true;
                } else {
                    window.open(obj.url);
                }
            },
            endWith(str, s) {
                let reg = new RegExp(s + '$');
                return reg.test(str);
            },
            isPicture(url) {
                url = url.toLowerCase();
                return this.endWith(url, '.jpg')
                    || this.endWith(url, '.jpeg')
                    || this.endWith(url, '.png')
                    || this.endWith(url, '.gif')
                    || this.endWith(url, '.bmp');
            }
        }
    };
</script>

```

