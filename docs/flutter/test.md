## android

android 沉浸式布局 最上导航条高度22px；

## ios

ios 屏幕适配问题

  1.IPhoneX以下的标准屏幕

  2.IPhoneX以上的留海屏幕

ios设备问题

  1.ios设备中，网页滚动卡顿问题。并且点击按钮出现高亮效果。

  2.在IphoneX中展示，navBar 紧贴留海位置展示。

  3.在IphoneX中展示，toolbar占据底部操作区的位置。

ios设备解决方案：

  1.需要指定滑动的元素使用ios原生的滑动方式

  /**IOS下的滑动卡顿问题**/

  -webkit-overflow-scrolling:touch;

  \2. /**IOS下取消默认高亮**/

  -webkit-tap-highlight-color:rgba(0,0,0,0);

  3.1判断当前设备是否为Iponex

  3.2让项目的内容区避开IphoneX中的危险区域，让内容在安全区展示

````scss
// 手机中 stateBar 高度
$stateBarHeight: px2rem(22);
// IphoneX 底部操作位置高度
$iphoneXBottomHeight: px2rem(34);
//IphoneX顶部危险区
.iphonex-top{
    padding-top: 44px;
}
//IphoneX顶部危险区
.iphonex-bottom{
    padding-bottom:34px;
}

````

## reset.css

````css
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: #333333;
    /* 不指定为0图片之间会有默认间距 */
    font-size: 0;
    /* 不允许选中 */
	user-select: none;
	 /*IOS下的滑动卡顿问题*/
	-webkit-overflow-scrolling:touch;
	 /*IOS下取消默认高亮*/
	-webkit-tap-highlight-color:rgba(0,0,0,0);
}

````