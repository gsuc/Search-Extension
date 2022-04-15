// ==UserScript==
// @name         百度搜索扩展
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  搜索扩展（暂只支持百度页面）
// @author       Gsuc
// @match        *://www.baidu.com/s?*
// @match        *://www.google.com.hk/s?*
// @match        *://www.google.com/search?*
// @match        *://www.github.com/s?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById("form").style.width="705px";
    document.getElementsByClassName("s_btn_wr")[0].style.width = "80px";
    var baiduBtn = document.getElementById("su");//获取百度搜索按钮
    //baiduBtn.style.width = "80px";//将百度搜索的按钮设置为80px
    baiduBtn.value = "Baidu";//将按钮的文字设置为百度
    var googleBtn = document.createElement('span');//设置google搜索按钮
    var GithubBtn = document.createElement('span');//设置GithubBtn搜索按钮

    googleBtn.className = baiduBtn.parentNode.className;//两者class类相同
    googleBtn.style = "width:80px;margin:0px 0px 0px 0px;position: absolute";//google按钮的格式
    googleBtn.innerHTML = "<input type='button' id='google' value='Google' class='btn bg s_btn' style='width:80px;'>";
        googleBtn.addEventListener('click',function(){
        var input = document.getElementById("kw");//获得输入框
        var keyword = input.value.replace(/(^\s*)|(\s*$)/g,"");
        if (keyword != ""){
            return googleSearch(keyword);
        }
    })

    GithubBtn.className=baiduBtn.parentNode.className;
    GithubBtn.style = "width:80px;margin:0px 0px 0px 70px;position: absolute";//Github按钮的格式
    GithubBtn.innerHTML = "<input type='button' id='Github' value='Github' class='btn bg s_btn' style='width:80px;'>";
	GithubBtn.addEventListener('click',function(){
	var input = document.getElementById("kw");//获得输入框
	var keyword = input.value.replace(/(^\s*)|(\s*$)/g,"");
	if (keyword != ""){
		return GithubSearch(keyword);
	}
})

    var form = document.getElementsByClassName("fm")[0];//获取百度搜索的父元素
    form.appendChild(googleBtn);//将google添加到百度
    form.appendChild(GithubBtn);//将GitHub添加到百度
    function googleSearch(keyword){
        var link = "https://www.google.com/search?q=" + encodeURIComponent(keyword);
        window.open(link);
    }
    function GithubSearch(keyword){
        var link = "https://github.com/search?q=" + encodeURIComponent(keyword);
        window.open(link);
    }
})();
