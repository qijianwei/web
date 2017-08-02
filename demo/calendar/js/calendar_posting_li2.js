window.onload=function(){
				var oShadowbox=document.querySelector("#shadowbox");
				var oBgimg=document.querySelector("#bgimg");
				var oCal_wrap=document.querySelector("#cal_wrap");
				var oTimerDetail=document.querySelector(".time_detail");
				var oDateDetail=document.querySelector(".date_detail");
				var oYearandMonth=document.querySelector(".YearandMonth");
				var oRightmune=document.querySelector("#rightmune");
				var oPrev=document.querySelector(".prev");
				var oNext=document.querySelector(".next");
				var oUl2=document.querySelector('.ul2');
				var oAddicon=document.querySelector(".addicon");
				var oNote_box=document.querySelector("#note_box");
				var oNotedetail=document.querySelector("#notedetail");
				var oSure=document.querySelector("#sure");
				var oCancel=document.querySelector("#cancel");
				var oEventText=document.querySelector("#eventText");
				var oAlertText=document.querySelector("#alertText");
				var oEventDetail=document.querySelectorAll(".eventDetail");
				var oList_ul=document.querySelector(".list_ul");
				var nowY=Number(getTime().iYear);//当前年份，用于计数
				var nowMonth=Number(getTime().iMonth);//真是的月份，3月就是3，用于计数
				var selectedNum=-1;//记录点击的li的下标
				var noteDate={
					iYear:getTime().iYear,
					iMonth:getTime().iMonth,//2月这里就是2
					iDate:getTime().iDate
				}
				var oNoteamend=document.querySelector("#noteamend");
				var oEventText1=document.querySelector("#eventText1");
				var oAlertText1=document.querySelector("#alertText1");
				var oAmend=document.querySelector("#amend");
				var oCancel1=document.querySelector("#cancel1");
				var oRightmunel1=document.querySelector("#rightmunel1");
				var isRight=false;
				var isRight2=true;
				var rightclicknum=0;
				var YearandMonthclicknum=-1;
				var oSelect_Month=document.querySelector("#select_month");
				var oCal_content=document.querySelector(".cal_content");
				var aS_li=document.querySelectorAll("#select_month .month_list li")
				//初始化
				oYearandMonth.innerHTML=getTime().iYear+'年'+getTime().iMonth+'月';
				//初始化时分秒
				oTimerDetail.innerHTML=getTime().iHour+':'+getTime().iMinute+':'+getTime().iSecond;
				//初始化年月日
				oDateDetail.innerHTML=getTime().iYear+'年'+getTime().iMonth+'月'+getTime().iDate+'日';
				//初始化当月所有日期，并将所有行的都填满，前面填上个月月末日期，后面填下个月月初日期
				showDays(getTime().iYear,getTime().iMonth-1);
				//初始化，获取当月第一天的星期,这个变量是给右键菜单使用的
				nowFirstDayWeek=new Date(Number(oYearandMonth.innerHTML.substring(0,4)),Number(oYearandMonth.innerHTML.substring(5,7)-1),1,1,1,1).getDay();
				//初始化shadowbox的高度，跟整个wrap一样高
				oShadowbox.style.height=oCal_wrap.offsetHeight+'px';
				//初始化oSelect_Month中对当前月进行添加背景色
				if (oYearandMonth.innerHTML.substr(0,4)==getTime().iYear) {
//					console.log()
					oSelect_Month.children[0].children[Number(getTime().iMonth-1)].style.borderColor='#0078d7';
					oSelect_Month.children[0].children[Number(getTime().iMonth-1)].style.background='#0078d7';
				}
				
				
				
				/*------------天气模块快----------------*/
				var oCity_sinformation=document.querySelector(".city_sinformation");
				var oAddspan=document.querySelector(".addspan");
				var oBk=document.querySelector("#bk");
				var oToday=document.querySelector(".today");
				var oTomorrow=document.querySelector(".tomorrow");
				var oTheDayAfterTomrrow=document.querySelector(".theDayAfterTomrrow");
				var oWeather=document.querySelector("#weather");
				var oSearch=document.querySelector("#search");
				var oOKset=document.querySelector("#OKset");
				var oInp=document.querySelector("#inp");
				var oTip=document.querySelector("#tip")
				var oCity='临高';
				var oDay=0;
				var Wtimer;
				
				//初始化天气模块位置
				oWeather.style.left=oCal_wrap.offsetLeft+oCal_wrap.offsetWidth+'px';
				oWeather.style.top=oCal_wrap.offsetTop+'px';
				oBk.style.left=oCal_wrap.offsetLeft+oCal_wrap.offsetWidth+'px';
				oBk.style.top=oCal_wrap.offsetTop+'px';
				
				window.onresize=function(){
					oWeather.style.left=oCal_wrap.offsetLeft+oCal_wrap.offsetWidth+'px';
					oWeather.style.top=oCal_wrap.offsetTop+'px';
					oBk.style.left=oCal_wrap.offsetLeft+oCal_wrap.offsetWidth+'px';
					oBk.style.top=oCal_wrap.offsetTop+'px';
				}
				
				oBgimg.num=0;
				oBgimg.onclick=function(){
					oBgimg.num++;
					if (oBgimg.num%2==1) {
						oWeather.style.display='block';
						oBk.style.display='block';
					} else{
						oWeather.style.display='none';
						oBk.style.display='none';
						oWeather.style.WebkitTransform='rotateY(0deg)';
					oWeather.style.MozTransform='rotateY(0deg)';
					oWeather.style.OTransform='rotateY(0deg)';
					oWeather.style.transform='rotateY(0deg)';
					oBk.style.WebkitTransform='rotateY(-180deg)';
					oBk.style.MozTransform='rotateY(-180deg)';
					oBk.style.OTransform='rotateY(-180deg)';
					oBk.style.transform='rotateY(-180deg)';
					}
					
				}
				
				
				
				setWeather(0,'上海');
				function setWeather(init,oCity){
					oDay=init||0;
					oCity=oCity||'上海';
					$.getScript("http://php.weather.sina.com.cn/js.php?" + $.param({ 
					   city :  oCity, //城市 
					   day : oDay, 
					   password : "DJOYnieT8234jlsK" 
					}) , function(json){ 
					   //document.body.innerHTML=( '地址：' + city + '\n天气：' + status1 + '\n温度' + temperature1 + '°C' + direction1); 
					    if (getTime().iHour<18&&getTime().iHour>6) {
					    	oCity_sinformation.children[0].innerHTML=temperature1 + '℃';
					    }else{
					    	oCity_sinformation.children[0].innerHTML=temperature2 + '℃';
					    }
					    
					    oCity_sinformation.children[1].children[0].innerHTML=city;
					    oCity_sinformation.children[2].innerHTML='风向:'+direction1;
					    
					    oToday.children[1].innerHTML='白:'+temperature1+'夜:'+temperature2;
					    oToday.children[2].innerHTML=status1;
					    
					}); 
					
					oDay=1;
					$.getScript("http://php.weather.sina.com.cn/js.php?" + $.param({ 
					   city :  oCity, //城市 
					   day : oDay, 
					   password : "DJOYnieT8234jlsK" 
					}) , function(json){ 
					    
					    oTomorrow.children[1].innerHTML='白:'+temperature1+'夜:'+temperature2;
					    oTomorrow.children[2].innerHTML=status1;
					    
					}); 
					
					oDay=2;
					$.getScript("http://php.weather.sina.com.cn/js.php?" + $.param({ 
					   city :  oCity, //城市 
					   day : oDay, 
					   password : "DJOYnieT8234jlsK" 
					}) , function(json){ 
					    
					    oTheDayAfterTomrrow.children[1].innerHTML='白:'+temperature1+'夜:'+temperature2;
					    oTheDayAfterTomrrow.children[2].innerHTML=status1;
					    
					}); 
				}
				
				console.log(oAddspan);
				oAddspan.onclick=function(){
//				document.onclick=function(){	
					oWeather.style.WebkitTransform='rotateY(180deg)';
					oWeather.style.MozTransform='rotateY(180deg)';
					oWeather.style.OTransform='rotateY(180deg)';
					oWeather.style.transform='rotateY(180deg)';
					oBk.style.WebkitTransform='rotateY(0deg)';
					oBk.style.MozTransform='rotateY(0deg)';
					oBk.style.OTransform='rotateY(0deg)';
					oBk.style.transform='rotateY(0deg)';
				}
				var isGet=0;
				oSearch.onclick=function(){
					oTip.innerHTML='点击按钮进行搜索';
					if (oInp.value=='') {
						alert('请输入内容');
						return;
					} 
					oTip.innerHTML='正在搜索，请稍等...';
					cities.forEach(function(ele){
						if (ele.name==oInp.value) {
							setWeather(0,ele.name);
							isGet++;
							oTip.innerHTML='搜索成功，点击完成';
						}
					})
					if (isGet==0) {
						oTip.innerHTML='搜索无结果，请重新输入...';
						oInp.value='';
					}
					
				}
				
				oOKset.onclick=function(){
					oWeather.style.WebkitTransform='rotateY(0deg)';
					oWeather.style.MozTransform='rotateY(0deg)';
					oWeather.style.OTransform='rotateY(0deg)';
					oWeather.style.transform='rotateY(0deg)';
					oBk.style.WebkitTransform='rotateY(-180deg)';
					oBk.style.MozTransform='rotateY(-180deg)';
					oBk.style.OTransform='rotateY(-180deg)';
					oBk.style.transform='rotateY(-180deg)';
					
					setTimeout(function(){
						oTip.innerHTML='点击按钮进行搜索';
					},500)
					
				}
				
				/*----------------------------*/
				
				
				
				//点击年月的开关；
				var oYearandMonthonOff=true;
				var haveclick=0;//表示是从月份那里点击进来的
				var getYear=getTime().iYear;//点击年后记录年份
				//点击年月
				oYearandMonth.onclick=function(){
					YearandMonthclicknum++;
					if (YearandMonthclicknum==2) {
						YearandMonthclicknum=1;
						return;
					}
					if (YearandMonthclicknum==0/*&&oYearandMonthonOff*/) {
//						oYearandMonthonOff=false;
						//第一次点击的时候，更改月份
						animation(oCal_content,{
							opacity:0
						},200,fx='linear',function(){
							animation(oSelect_Month,{
								opacity:1
							},500,'linear',function(){
								oSelect_Month.style.zIndex=999;
							});
							
						});
						animation(oYearandMonth,{
							opacity:0
						},200,'linear',function(){
							
							oYearandMonth.innerHTML=getYear+'年';//要改！！！！！！！！！！！！！！！！！！！！不一定是getTime()
							animation(oYearandMonth,{
								opacity:1
							},500,'linear');
						})
					}else if(YearandMonthclicknum==1){
							//再次点击的时候， 更改年份
							//清除当月的那个li的背景，恢复borderColor
						
							aS_li[Number(getTime().iMonth-1)].style.borderColor='(255,255,255,0.7)';
							aS_li[Number(getTime().iMonth-1)].style.background='none';
							
							
							animation(oSelect_Month,{
								opacity:0
							},200,'linear',function(){
								oSelect_Month.style.zIndex=-999;
								//设置每个li里面的年份
								aS_li.forEach(function(ele,index){
									ele.innerHTML=getTime().iYear-Number(String(getTime().iYear).substring(3))+index;
									if(Number(ele.innerHTML)==getTime().iYear){
										ele.style.borderColor='#0078d7';
										ele.style.background='#0078d7';
									}
								})
								
								animation(oSelect_Month,{
									opacity:1
								},500,'linear',function(){
									oSelect_Month.style.zIndex=999;
								});
							});
							
							animation(oYearandMonth,{
								opacity:0
							},200,'linear',function(){
								oYearandMonth.innerHTML=(getTime().iYear-Number(String(getTime().iYear).substring(3)))+'-'+(getTime().iYear-Number(String(getTime().iYear).substring(3))+11);               
								animation(oYearandMonth,{
									opacity:1
								},500,'linear');
							})
						
					}
					
					
					aS_li.forEach(function(ele3,index_3){
							ele3.onclick=function(){
								if(YearandMonthclicknum==0){//所有li出现的是月份
									
									oYearandMonth.innerHTML=getYear+'年'+toTwo(index_3+1)+'月';
									
									//oYearandMonth.innerHTML=getTime().iYear+'年'+toTwo(index_3+1)+'月';
									//让oSelect_Month消失
									animation(oSelect_Month,{
										opacity:0
									},200,'linear',function(){
										oSelect_Month.style.zIndex=-999;
										//重现渲染oCal_content
										oUl2.innerHTML='';//清空ul2的所有li，因为我下面要重新设置li和日期
										nowMonth=index_3+1;//每次点击，当前月份减1
										
										showDays(Number(oYearandMonth.innerHTML.substr(0,4)),nowMonth-1);//显示点击后的这个月份的日期，在这里会加载所有li
									
										showClickDate(Number(oYearandMonth.innerHTML.substr(0,4)),nowMonth-1);//显示点击后的日期
										
										//获取当月第一天的星期,这个变量是给右键菜单使用的
										
										nowFirstDayWeek=new Date(Number(oYearandMonth.innerHTML.substring(0,4)),Number(oYearandMonth.innerHTML.substring(5,7)-1),1,1,1,1).getDay();
										
										
										//让渲染后的oCal_content出现
										animation(oCal_content,{
											opacity:1
										},500,'linear',function(){
//											getYear=Number(oYearandMonth.innerHTML.substr(0,4));
											rightmune();
											YearandMonthclicknum=-1;
										})
									})
								}else if(YearandMonthclicknum==1){
									//显示月份，并要设置YearandMonthclicknum，调到可以设置月的YearandMonthclicknum
									//设置每个li里面的月份
									animation(oSelect_Month,{
										opacity:0
									},200,'linear',function(){
										//设置oYearandMonth的值
										
										oYearandMonth.innerHTML=ele3.innerHTML+'年';
										
										aS_li.forEach(function(ele4,index4){
											ele4.innerHTML=index4+1+'月';
											if(Number(ele4.innerHTML)==getTime().iMonth-1){
												ele4.style.borderColor='#0078d7';
												ele4.style.background='#0078d7';
											}
										})
										animation(oSelect_Month,{
											opacity:1
										},500,'linear',function(){
											getYear=Number(oYearandMonth.innerHTML.substr(0,4));
											YearandMonthclicknum=0;
											
										})
									})
								}
								
							}
						})
					
				}
				
				
				
				
				
				
				oCal_wrap.oncontextmenu=function(){
					return false;
				}
				
				//时间获取
				setInterval(function(){
					oTimerDetail.innerHTML=getTime().iHour+':'+getTime().iMinute+':'+getTime().iSecond;
					oDateDetail.innerHTML=getTime().iYear+'年'+getTime().iMonth+'月'+getTime().iDate+'日';
				},500);
				
				
			
//				里面的渲染页面可以封装成函数
				oPrev.onclick=function(){
					oUl2.innerHTML='';//清空ul2的所有li，因为我下面要重新设置li和日期
					nowMonth--;//每次点击，当前月份减1
					showDays(getTime().iYear,nowMonth-1);//显示点击后的这个月份的日期，在这里会加载所有li
					
					showClickDate(getTime().iYear,nowMonth-1);//显示点击后的日期
					
					//获取当月第一天的星期,这个变量是给右键菜单使用的
					nowFirstDayWeek=new Date(Number(oYearandMonth.innerHTML.substring(0,4)),Number(oYearandMonth.innerHTML.substring(5,7)-1),1,1,1,1).getDay();
					rightmune();
					moveMouse();
				}
				
				
				oNext.onclick=function(){
					oUl2.innerHTML='';//清空ul2的所有li，因为我下面要重新设置li和日期
					nowMonth++;//每次点击，当前月份减1
					showDays(getTime().iYear,nowMonth-1);//显示点击后的这个月份的日期，在这里会加载所有li
				
					showClickDate(getTime().iYear,nowMonth-1);//显示点击后的日期
					
					//获取当月第一天的星期,这个变量是给右键菜单使用的
					
					nowFirstDayWeek=new Date(Number(oYearandMonth.innerHTML.substring(0,4)),Number(oYearandMonth.innerHTML.substring(5,7)-1),1,1,1,1).getDay();
					rightmune();
					moveMouse();
				}
				
				//点击备忘录右上角的加号，新建内容
				oAddicon.onclick=function(){
					
					showOrhidden('none','block','block','none',true,false);
					
				}
				
				
				
				//点击取消，隐藏遮罩和备忘窗口，除了第一个img作为背景意外的所有oCal_wrap的子元素都隐藏
				oCancel.onclick=function(){
					
					showOrhidden('block','none','none','none',false,false);
				}
				
				oCancel1.onclick=function(){
				
					showOrhidden('block','none','none','none',false,false)
				}
				
				//点击确认，隐藏这招和备忘，将窗口缩小，运动到备忘录列表左上角，并在列表中增加一行
				oSure.onclick=function(){
					var noteTitle=oEventText.value;
					var noteTime=oAlertText.value;
					var textdetail=oEventDetail[0].value;
					
					
//					
					if (noteTitle==''||noteTime==''||textdetail=='') {
						alert('您尚有未填内容，请补充！');
						//输入的内容置空还原
						oEventText.value=noteTitle;
						oAlertText.value=noteTime;
						oEventDetail[0].value=textdetail;
					} else{
						
						
						timeEarly(true);
						if(isRight2==false){
							//输入的内容置空还原
							oEventText.value=noteTitle;
							oAlertText.value=noteTime;
							oEventDetail[0].value=textdetail;
							isRight2=true; 
							return;
						}
						
						
//						alert(2);
						
						
						showOrhidden('block','none','none','none',false,false);
						
						addLi(noteTime,textdetail);
						
						deleteli();//点击可以删除li
						
						//输入的内容置空还原
						oEventText.value='';
						oAlertText.value='';
						oEventDetail[0].value='';
						
						for (var i=0;i<oList_ul.children.length;i++) {
					
							oList_ul.children[i].index=i;
							oList_ul.children[i].onclick=function(){
								
								
								//输入的内容还原
								oAlertText1.value=this.children[0].innerHTML;
								oEventDetail[1].value=this.children[1].innerHTML;
								
								
								
								
								showOrhidden('none','block','none','block',false,true);
								
								var _this=this;
								oAmend.onclick=function(){
									var noteTitle1=oEventText1.value;
									var noteTime1=oAlertText1.value;
									var textdetail1=oEventDetail[1].value;
									
									
									
										
									if (noteTitle1==''||noteTime1==''||textdetail1=='') {
										alert('您尚有未填内容，请补充2！');
									} else{
										
										
										
										timeEarly(false);
										if(isRight2==false){
											//输入的内容置空还原
											oEventText.value=noteTitle;
											oAlertText.value=noteTime;
											oEventDetail[0].value=textdetail;
											isRight2=true;
											return;
										}
										
										
										_this.children[0].innerHTML=noteTime1;
										_this.children[1].innerHTML=textdetail1;
										
										
										//输入的内容置空还原
										oEventText1.value='';
										oAlertText1.value='';
										oEventDetail[1].value='';
										
										showOrhidden('block','none','none','none',false,false)
									}
								}
							}
						}
					}
				}
				
				
				
				
				
				
				moveMouse();
				function moveMouse(){
//					var oUl2=document.querySelector('.ul2');
//					for (var i=0;i<oUl2.children.length;i++) {
//					
//						firstDay = new Date(getTime().iYear,getTime().iMonth-1,1).getDay();
//						
//						oUl2.children[i].index1=i;
//						oUl2.children[i].onmouseover=function(){
//							if ((this.index-(firstDay-2))!=getTime().iDate||getTime().iMonth!=Number(oYearandMonth.innerHTML.substring(5,7))||getTime().iYear!=Number(oYearandMonth.innerHTML.substr(0,4))) {
//									this.className='active';
//							} 
//						}
//						
//						oUl2.children[i].index2=i;
//						oUl2.children[i].onmouseout=function(){
//							if ((this.index2-(firstDay-2))!=getTime().iDate&&getTime().iMonth!=Number(oYearandMonth.innerHTML.substring(5,7))&&getTime().iYear!=Number(oYearandMonth.innerHTML.substr(0,4))) {
//								this.className='';
//							}
//						}
//						
//						oUl2.children[i].index=i;
//						oUl2.children[i].onclick=function(){
							
//							for (var j=0;j<oUl2.children.length;j++) {
//								if ((j-(firstDay-2))!=getTime().iDate) {
//									oUl2.children[j].className='';
//								} 
//							}
//							if ((this.index-(firstDay-2))!=getTime().iDate) {
//									this.className='active';
//									this.style.borderColor='#0078d7';
//									selectedNum=this.index;
//							} 
//							if ((this.index-(firstDay-2))==getTime().iDate) {
//								
//							}
//						}
//						
//						
//					}
				}
				
				rightmune();//显示右键菜单
				
				
				document.body.onclick=function(){
					oRightmune.style.display='none';
					oRightmunel1.style.display='none';
				}
				oRightmune.onclick=function(){
					isRight=true;
					showOrhidden('none','block','block','none',true,false);
					
					oAlertText.value=noteDate.iYear+"-"+noteDate.iMonth+"-"+noteDate.iDate+"T"+getTime().iHour+":"+getTime().iMinute;
				}
				
				oRightmunel1.onclick=function(){
					oList_ul.removeChild(oList_ul.children[rightclicknum]);
				}
				//右键删除备忘中的li
				function deleteli(){
					//右键记事本中的li，显示右键菜单
					for (var l=0;l<oList_ul.children.length;l++) {
						oList_ul.children[l].indexs=l;
						oList_ul.children[l].oncontextmenu=function(ev){
							var ev=ev||event;
							oRightmunel1.style.left=ev.clientX-oCal_wrap.offsetLeft+document.body.scrollLeft+'px';
							oRightmunel1.style.top=ev.clientY-oCal_wrap.offsetTop+document.body.scrollTop+'px';
							oRightmunel1.style.display='block';
							rightclicknum=this.indexs;
							return false;
						}
					}
				}
				
				
				
				
				
				/*-----------------以下是函数封装---------------------*/
				
				//如果提醒时间小于当前时间，会警告
				//amendORsure：修改的时候，为false，确定的时候为true
				function timeEarly(amendORsure){
					
					if(amendORsure==true){
						var alertTime=new Date(Number(oAlertText.value.substring(0,4)),Number(oAlertText.value.substring(5,7))-1,Number(oAlertText.value.substring(8,10)),Number(oAlertText.value.substring(11,13)),Number(oAlertText.value.substring(14)),0);
						if (alertTime<new Date()) {
							alert('您的提醒时间需大于当前时间！');
							isRight2=false;
						}
					}else if(amendORsure==false){
						var alertTime1=new Date(Number(oAlertText1.value.substring(0,4)),Number(oAlertText1.value.substring(5,7)),Number(oAlertText1.value.substring(8,10)),Number(oAlertText1.value.substring(11,13)),Number(oAlertText1.value.substring(14)),0);
						if (alertTime1<new Date()) {
							alert('您的提醒时间需大于当前时间！');
							isRight2=false;
						}
					}
					
					
				}
				
				
				//新增li添加到ul 
				function addLi(addtime,addcontent){
					oList_ul.innerHTML+="<li><h3>"+addtime+"</h3><div class='content_note'>"+addcontent+"</div></li>"
				}
				
				//返回年月日时分秒
				function getTime(){
					var iNow=new Date();
					var iYear=iNow.getFullYear();
					var iMonth=iNow.getMonth()+1;
					var iDate=iNow.getDate();
					var iWeek=iNow.getDay();
					var iHour=iNow.getHours();
					var iMinute=iNow.getMinutes();
					var iSecond=iNow.getSeconds();
					
					return {
						iYear:iYear,
						iMonth:toTwo(iMonth),
						iDate:toTwo(iDate),
						iWeek:toTwo(iWeek),
						iHour:toTwo(iHour),
						iMinute:toTwo(iMinute),
						iSecond:toTwo(iSecond)
					}
				}
				
				//把数字变成两位数
				function toTwo(num){
					return num<10?'0'+num:''+num;
				}
				
				
				//获取m月（实际是m+1月）总共有几天
				function getCountDays(y,m){
					//先得到y年m+1月的第一天
					var iTargetTime=new Date(y,m+1,1,0,0,0);
					//然后在y年m+1月的第一天减去1，就是y年m月最后一天的日期，也就是m月总天数，注意不需要赋值
					iTargetTime.setDate(iTargetTime.getDate()-1);
					return iTargetTime.getDate();
				}
				
				
				//获取上个月应该显示的最后几天（根据本月1号的星期来获取）
				function lastMonthDays(y,m,i){//y为年，m为月（实际是m+1月）,比如要获取2月的，m就写1
					var nowWeek=new Date(y,m+1,1).getDay();
					if(nowWeek==0){
						nowWeek=7;
					}
					return getCountDays(y,m)-(nowWeek)+2+i;
				}
				
				
				//显示y年m月的日期（如果是2017年3月，那y就是2017，m就是2）
				function showDays(y,m){
					/*---------------填写li里面的值------------------*/
				
					//这个月1号的星期
					var firstDay = new Date(y,m,1).getDay();
					if (firstDay==0) {
						firstDay=7;
					}
					var nowMonthDays=getCountDays(y,m);//这个月的天数
					for(var i=0;i<42;i++){
						if ((i-(firstDay-2))<=0) {
							oUl2.innerHTML+="<li style='color:#ccc;'>"+lastMonthDays(y,m-1,i)+"</li>";
						} else if((i-(firstDay-2))>nowMonthDays){
							oUl2.innerHTML+="<li style='color:#ccc;'>"+(i-(firstDay-2)-nowMonthDays)+"</li>";
						}else{
							console.log(getTime().iMonth);
							if((i-(firstDay-2))==getTime().iDate&&y==getTime().iYear&&getTime().iMonth==m+1){
								oUl2.innerHTML+='<li style="line-height:40px;" class="selectedDay"><div style="width:36px;height:40px;border:2px solid black">'+(i-(firstDay-2))+'</div></li>';
							}else{
								oUl2.innerHTML+='<li>'+(i-(firstDay-2))+'</li>';
							}
						}
					}
				}
				
				function showClickDate(y,m){//显示点击后的年月
					
					var iNewYear = new Date(y,m).getFullYear();//点击后的这个月所在的年份
					var iNewMonth = new Date(y,m).getMonth()+1;//点击后的这个月的月份
					
					oYearandMonth.innerHTML=iNewYear+'年'+toTwo(iNewMonth)+'月';//将点击后的年月显示在class='YearandMonth'的这个span里面
					
				}
				
				//日历右键显示菜单
				function rightmune(){
					//右键显示菜单，并返回点击的这个li代表的年月日
					if(nowFirstDayWeek-1<0){
						nowFirstDayWeek=nowFirstDayWeek-1+7;
					}else{
						nowFirstDayWeek=nowFirstDayWeek-1
						
					}
					for (var i=0;i<nowFirstDayWeek;i++) {
						oUl2.children[i].oncontextmenu=function(ev){
							return false;
						};
					}
					for (var i=getCountDays(Number(oYearandMonth.innerHTML.substring(0,4)),Number(oYearandMonth.innerHTML.substring(5,7)-1))+nowFirstDayWeek;i<42;i++) {
						oUl2.children[i].oncontextmenu=function(ev){
							return false;
						};
					}
					
					//console.log(nowFirstDayWeek,getCountDays(Number(oYearandMonth.innerHTML.substring(0,4)),Number(oYearandMonth.innerHTML.substring(5,7)-1))+nowFirstDayWeek-2)
					for (var i=nowFirstDayWeek;i<=getCountDays(Number(oYearandMonth.innerHTML.substring(0,4)),Number(oYearandMonth.innerHTML.substring(5,7)-1))+nowFirstDayWeek-1;i++) {
						
						//console.log(oUl2.children.length);
						oUl2.children[i].index3=i;
						oUl2.children[i].oncontextmenu=function(ev){
							var ev=ev||event;
							oRightmune.style.left=ev.clientX-oCal_wrap.offsetLeft+document.body.scrollLeft+'px';
							oRightmune.style.top=ev.clientY-oCal_wrap.offsetTop+document.body.scrollTop+'px';
							oRightmune.style.display='block';
							
							noteDate.iYear=oYearandMonth.innerHTML.substring(0,4);
							noteDate.iMonth=oYearandMonth.innerHTML.substring(5,7);
							
							
							if ((this.index3-(firstDay-2))!=getTime().iDate) {
								noteDate.iDate=this.innerHTML;
							}else{
								noteDate.iDate=this.children[0].innerHTML;
							}
							
							return false;
						}
					}
				}
				
				//ul_ele：ul里面的所有li是显示还是隐藏，可写none或block
				//shadowbox：遮罩是显示还是隐藏，可写none或block
				//notedetail：新建备忘窗口是显示还是隐藏，可写none或block
				//noteamend:修改新建备忘窗口是显示还是隐藏，可写none或block
				//notedetailpos：新建窗口是否居中，写true居中，false不居中
				//noteamendpos:修改窗口是否居中，写true居中，false不居中
				function showOrhidden(ul_ele,shadowbox,notedetail,noteamend,notedetailpos,noteamendpos){
					//除了第一个img作为背景意外的所有oCal_wrap的子元素都隐藏，要显示遮罩和新建备忘的窗口
					for (var i=1;i<oCal_wrap.children.length;i++) {
						oCal_wrap.children[i].style.display=ul_ele;
					}
					//遮罩显示
					oShadowbox.style.display=shadowbox;
					
					//新建备忘窗口显示
					oNotedetail.style.display=notedetail;
					
					//修改窗口也关掉
					oNoteamend.style.display=noteamend;
					
					if(noteamendpos){
						//修改备忘窗口居中显示
						oNoteamend.style.bottom=oCal_wrap.offsetHeight/2-oNoteamend.offsetHeight/2+'px';
					}
					if (notedetailpos) {
						//新建备忘窗口居中显示
						oNotedetail.style.bottom=oCal_wrap.offsetHeight/2-oNotedetail.offsetHeight/2+'px';
					}
				}
			}