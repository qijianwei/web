﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="PersonalSettings.aspx.cs" Inherits="LuoKeSite.PersonalSettings" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>个人设置</title>
    <link href="WebUI/css/base.css" rel="stylesheet" />
    <link href="WebUI/css/UserCenter.css" rel="stylesheet" />
    <!--字体图标-->
    <link href="WebUI/font/iconfont.css" rel="stylesheet" />
    <link href="WebUI/css/bootstarp.units.css" rel="stylesheet" />
    <link href="WebUI/css/PersonalSettings.css" rel="stylesheet" />
</head>
<body>
    <div class="top">
        <div class="top_right">
            <a href="javascript://">机构平台</a>
            <span>|</span>
            <a href="javascript://"><i class="icon iconfont">&#xe600;</i>导航</a>
        </div>
        <div class="top_left">欢迎你，小芝麻<a href="javascript://">退出</a></div>
    </div>
    <div class="head_mid">
        <div class="head_main">
            <div class="logo">
                用户中心<a href="javascript://">返回平台首页</a>
            </div>
            <ul>
                <li><a href="UserCenter.html">首页</a></li>
                <li><a href="PersonalSettings.html">个人设置</a></li>
                <li><a href="javascript://">消息</a></li>
                <li><a href="javascript://">学习社区</a></li>
            </ul>
            <div class="search">
                <!--输入时候改变字体颜色给input加“fontColor”-->
                <input type="text" value="输入检索词" />
                <i class="icon iconfont">&#xe603;</i>
            </div>
            <div class="fclear"></div>
        </div>
    </div>
    <div class="content">
        <div class="left">
            <div class="user">
                <h1><img src="WebUI/images/user.gif" /></h1>
                <div>
                    <h2>小芝麻小芝麻小芝麻</h2>
                    <p>ID：23986</p>
                    <p>积分：12</p>
                </div>
            </div>
            <ul class="sideNav">
                <li class="e">个人中心</li>
                <li>我的报名</li>
                <li>我的关注</li>
                <li>我的评论</li>
                <li>我的收藏</li>
                <li>我的积分</li>
                <li>我的申请</li>
                <li>我的机构</li>
                <li>我的筹办</li>
            </ul>
        </div>
        <div class="right">
            <div class="personSetting">
                <div class="bm_swtich_all">
                    <ul class="bm_swtich">
                        <li class="e">基本信息</li>
                        <li>头像照片</li>
                        <li>安全</li>
                    </ul>
                    <i class="bm_swtich_line"></i>
                </div>
                <div class="setting" style="display:block">
                    <div class="form-horizontal">
                        <div class="form-group">
                            <label class="control-label"><i>*</i>用户名：</label>
                            <div class="controls">
                                <input type="text" class="form-control col-md-3" placeholder="请输入" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><i>*</i>昵称：</label>
                            <div class="controls">
                                <input type="text" class="form-control col-md-3" placeholder="请输入" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><i>*</i>性别：</label>
                            <div class="controls form-control-static">
                                <label class="radio-inline"> <input type="radio" value="option1" />男</label>
                                <label class="radio-inline"> <input type="radio" value="option1" />女</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">生日：</label>
                            <div class="controls">
                                <select class="form-control col-md-2">
                                    <option>请选择</option>
                                    <option>1990</option>
                                    <option>1991</option>
                                    <option>1992</option>
                                    <option>1993</option>
                                    <option>1994</option>
                                    <option>1994</option>
                                    <option>1996</option>
                                    <option>1997</option>
                                    <option>1998</option>
                                    <option>1999</option>
                                    <option>2000</option>
                                    <option>2001</option>
                                    <option>2002</option>
                                    <option>2003</option>
                                </select>
                                <span class="fleft" style="margin-left:5px;">年</span>
                                <select class="form-control col-md-2">
                                    <option>请选择</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </select>
                                <span class="fleft" style="margin-left:5px;">月</span>
                                <select class="form-control col-md-2">
                                    <option>请选择</option>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                    <option>05</option>
                                    <option>06</option>
                                    <option>07</option>
                                    <option>08</option>
                                    <option>09</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                </select>
                                <span class="fleft" style="margin-left:5px;">日</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">性别：</label>
                            <div class="controls">
                                <span>请选择您感兴趣的分类，给您最精准的推荐</span> 
                                <ul class="hobul">
                                    <li value="1" name="hobbyType" class="">文化活动<s></s></li>
                                    <li value="2" name="hobbyType" class="selected">文艺演出<s></s></li>
                                    <li value="3" name="hobbyType">百家讲坛<s></s></li>
                                    <li value="4" name="hobbyType">音乐剧<s></s></li>
                                </ul>  
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">真实姓名：</label>
                            <div class="controls">
                                <input type="text" class="form-control col-md-3" placeholder="请输入" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><i>*</i>手机绑定：</label>
                            <div class="controls">
                                <input type="text" class="form-control col-md-3" placeholder="请输入" />
                                <span style="float:left; margin-left:10px;"><a href="javascript://" style="color:#0094ff">立即验证</a></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label">身份证：</label>
                            <div class="controls">
                                <input type="text" class="form-control col-md-3" placeholder="请输入" />
                                <span style="float:left; margin-left:10px;">(只有是名人质用户才能进行场地文化资源的预约)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="setting" style="display:none">

                </div>
                <div class="setting" style="display:none">
                    <h2 class="xiugai">修改密码</h2>
                    <div class="form-horizontal">
                        <div class="form-horizontal">
                            <div class="form-group">
                                <label class="control-label"><i>*</i>原密码：</label>
                                <div class="controls">
                                    <input type="text" class="form-control col-md-3" placeholder="请输入" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label"><i>*</i>新密码：</label>
                                <div class="controls">
                                    <input type="text" class="form-control col-md-3" placeholder="请输入" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label"><i>*</i>重复密码：</label>
                                <div class="controls">
                                    <input type="text" class="form-control col-md-3" placeholder="请输入" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--js引用-->
    <script src="WebUI/js/jquery-1.9.1.min.js"></script>
    <script src="WebUI/js/animate.js"></script>

    <script src="WebUI/js/personalSettings.js"></script>
    <script>
        $(function () {
            personSetting();
            //侧导航
            $(".sideNav li").click(function () {
                $(this).addClass("e").siblings("li").removeClass("e");
                var indexs = $(this).index();
                $(".uc").eq(indexs).show().siblings(".uc").hide();
            })
            //我的报名处选项卡切换
            $(".bm_swtich_all").each(function () {
                var ths = $(this);
                var tli = ths.find("li");
                var tle = ths.find(".bm_swtich_line");
                var tli_width = $(".bm_swtich li:first").width();
                tle.width(tli_width);
                tli.click(function () {
                    var indexs = $(this).index();
                    $(".setting").eq(indexs).show().siblings(".setting").hide();
                    var tw = $(this).width();
                    tli.removeClass("e");
                    $(this).addClass("e");
                    tle.stop(true, true).animate({
                        width: tw,
                        left: $(this).position().left
                    })
                })
            })
        })
        shink();
    </script>
</body>
</html>