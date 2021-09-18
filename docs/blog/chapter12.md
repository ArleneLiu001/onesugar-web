### web端视频播放（直播）
#### 协议：HLS
HLS 是苹果公司为满足在线点播需求而推出的流媒体播放协议。因为这个协议基于 HTTP 协议，所以可以充分利用现存的针对 HTTP 协议的技术内容和优化措施。
#### HLS优势：
1. 自适应码率⑥播：根据客户端网络状态，切换高低码率。实现方法：服务端提供多码率视频流，并且在列表文件中注明，播放器根据播放进度和下载进度进行自动调整。
2. 为什么要用TS 而不是mp4？TS可以实现无缝拼接。TS是一种音视频封装格式。用于实时传送的节目，比如实时广播的电视节目。
3. 可以使用FFmpeg转mp4为hls(m3u8)

#### M3U8 视频文件
M3U是一种保存音视频文件播放所需信息的文件格式，m3u8 则是该格式在使用 UTF8 进行编码时的缩写。
说明:M3U 和M3U8 文件以http live streaming（HLS：实时流传输）协议为基础，可以在iphone 和mac等设备播放。

#### 注意
IOS只能支持m3u8的流，直接放入 video 的 src
Android可支持flv、m3u8的流、需要(flv.js/hls.js)转换,并且注意流地址和 需要和网页地址保持一致(例如 http =>http,https=>https)



#### 实时网络直播
技术栈：
利用Docker挂载Nginx-rtmp(服务器直播流分发)+FFmpeg(推流)+Vue.js结合Video.js(播放器流播放)来实现实时网络直播

#### 流程
视频直播的流程：
采集---处理--编码和封装--推流到服务器--服务器流分发--播放器流播放。具体可以概括为：
1. 采集端：摄像头设备等。
2. 流媒体服务器：用来接收从采集端推送的视频流，然后将该视频流推送到播放端。
3. 播放端：就是各种app，以及网页中的播放器。拉去视频流，再进行转码播放。
4. 推流：把采集阶段收集的数据封装好传输到服务器的过程。
5. 拉流：服务器已有播放内容，用指定地址进行拉取的过程。


#### 流媒体传输协议：
##### RTMP (可用于推流端和拉流端)。
Real Time Messaging Protocol，实时消息传输协议。RTMP协议中，视频必须是H264编码，音频必须是AAC或MP3编码，且多以flv格式封包。因为RTMP协议传输的基本是FLV格式的流文件，必须使用flash播放器才能播放
##### RTSP (用于推流端)
Real-Time Stream   Protocol，RTSP实时效果非常好，适合视频聊天、视频监控等方向。ffmpeg用于推流
##### HLS (用于拉流端)
Http Live Streaming，由Apple公司定义的基于HTTP的流媒体实时传输协议。传输内容包括两部分：1.M3U8描述文件；2.TS媒体文件。TS媒体文件中的视频必须是H264编码，音频必须是AAC或MP3编码。数据通过HTTP协议传输。目前video.js库支持该格式文件的播放。

##### HTTP-FLV (用于拉流端)
本协议就是http+flv，将音视频数据封装成FLV格式，然后通过http协议传输到客户端，这个协议大大方便了浏览器客户端播放直播视频流。目前flv.js库支持该格式的文件播放。
 



参考链接： 前后端实现连接：https://juejin.im/post/6844904132340531213




#### 前端播放插件
#### Video.js：
Video.js是一款web视频播放器，支持html5和flash两种播放方式。
1. 插件下载地址：https://github.com/videojs/video.js/releases
2. 文档中心：https://docs.videojs.com/index.html

#### video.js
支持格式：支持h5标签video 所支持的mp4，webM,ogg格式。还支持视频直播格式m3u8。
即videojs配合videojs-contrib-hls.js可以实现调用flash播放器播放hls。

videojs兼容flv等格式视频：安装videojs-flash 插件。

