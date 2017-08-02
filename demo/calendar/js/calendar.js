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
				
				//时间获取
				setInterval(function(){
					oTimerDetail.innerHTML=getTime().iHour+':'+getTime().iMinute+':'+getTime().iSecond;
					oDateDetail.innerHTML=getTime().iYear+'年'+getTime().iMonth+'月'+getTime().iDate+'日';
				},500);
				
				
			
				
				oPrev.onclick=function(){
					oUl2.innerHTML='';//清空ul2的所有li，因为我下面要重新设置li和日期
					nowMonth--;//每次点击，当前月份减1
					showDays(getTime().iYear,nowMonth-1);//显示点击后的这个月份的日期，在这里会加载所有li
					
					showClickDate(getTime().iYear,nowMonth-1);//显示点击后的日期
					
					//获取当月第一天的星期,这个变量是给右键菜单使用的
					nowFirstDayWeek=new Date(Number(oYearandMonth.innerHTML.substring(0,4)),Number(oYearandMonth.innerHTML.substring(5,7)-1),1,1,1,1).getDay();
					rightmune();
				}
				
				
				oNext.onclick=function(){
					oUl2.innerHTML='';//清空ul2的所有li，因为我下面要重新设置li和日期
					nowMonth++;//每次点击，当前月份减1
					showDays(getTime().iYear,nowMonth-1);//显示点击后的这个月份的日期，在这里会加载所有li
				
					showClickDate(getTime().iYear,nowMonth-1);//显示点击后的日期
					
					//获取当月第一天的星期,这个变量是给右键菜单使用的
					
					nowFirstDayWeek=new Date(Number(oYearandMonth.innerHTML.substring(0,4)),Number(oYearandMonth.innerHTML.substring(5,7)-1),1,1,1,1).getDay();
					rightmune();
				}
				
				//点击备忘录右上角的加号，新建内容
				oAddicon.onclick=function(){
					
					//除了第一个img作为背景意外的所有oCal_wrap的子元素都隐藏，要显示遮罩和新建备忘的窗口
					for (var i=1;i<oCal_wrap.children.length;i++) {
						oCal_wrap.children[i].style.display='none';
					}
					//遮罩显示
					oShadowbox.style.display='block';
					
					//新建备忘窗口显示
					oNotedetail.style.display='block';
					//新建备忘窗口居中显示
					oNotedetail.style.bottom=oCal_wrap.offsetHeight/2-oNotedetail.offsetHeight/2+'px';
					
				}
				
				//点击取消，隐藏遮罩和备忘窗口，除了第一个img作为背景意外的所有oCal_wrap的子元素都隐藏
				oCancel.onclick=function(){
					//除了第一个img作为背景意外的所有oCal_wrap的子元素都显示，要以藏遮罩和新建备忘的窗口
					for (var i=1;i<oCal_wrap.children.length;i++) {
						oCal_wrap.children[i].style.display='block';
					}
					//遮罩隐藏
					oShadowbox.style.display='none';
					
					//新建备忘窗口隐藏
					oNotedetail.style.display='none';
					
					//修改窗口也关掉
					oNoteamend.style.display='none';
				}
				
				oCancel1.onclick=function(){
					//除了第一个img作为背景意外的所有oCal_wrap的子元素都显示，要以藏遮罩和新建备忘的窗口
					for (var i=1;i<oCal_wrap.children.length;i++) {
						oCal_wrap.children[i].style.display='block';
					}
					//遮罩隐藏
					oShadowbox.style.display='none';
					
					//新建备忘窗口隐藏
					oNoteamend.style.display='none';
					
					//新建备忘窗口隐藏
					oNotedetail.style.display='none';
					
				}
				
				//点击确认，隐藏这招和备忘，将窗口缩小，运动到备忘录列表左上角，并在列表中增加一行
				oSure.onclick=function(){
					var noteTitle=oEventText.value;
					var noteTime=oAlertText.value;
					var textdetail=oEventDetail[0].value;
					
					//输入的内容置空还原
					oEventText.value='';
					oAlertText.value='';
					oEventDetail[0].value='';
//					
					if (noteTitle==''||noteTime==''||textdetail=='') {
						alert('您尚有未填内容，请补充！');
					} else{
						
						//除了第一个img作为背景意外的所有oCal_wrap的子元素都显示，要以藏遮罩和新建备忘的窗口
						for (var i=1;i<oCal_wrap.children.length;i++) {
							oCal_wrap.children[i].style.display='block';
						}
						
						//新建备忘窗口隐藏
						oNotedetail.style.display='none';
						
						//遮罩隐藏
						oShadowbox.style.display='none';
						
						//修改窗口隐藏
						oNoteamend.style.display='none';
						
						
						
						addLi(noteTime,textdetail);
						
						for (var i=0;i<oList_ul.children.length;i++) {
					
							oList_ul.children[i].index=i;
							oList_ul.children[i].onclick=function(){
								
								//输入的内容还原
								oEventText1.value=noteTitle;
								oAlertText1.value=noteTime;
								oEventDetail[1].value=textdetail;
								
								//除了第一个img作为背景意外的所有oCal_wrap的子元素都显示，要以藏遮罩和新建备忘的窗口
								for (var j=1;j<oCal_wrap.children.length;j++) {
									oCal_wrap.children[j].style.display='none';
								}
								//遮罩隐藏
								oShadowbox.style.display='block';
								
								//修改备忘窗口隐藏
								oNoteamend.style.display='block';
								
								//修改备忘窗口居中显示
								oNoteamend.style.bottom=oCal_wrap.offsetHeight/2-oNoteamend.offsetHeight/2+'px';
								
								var _this=this;
								oAmend.onclick=function(){
									var noteTitle1=oEventText1.value;
									var noteTime1=oAlertText1.value;
									var textdetail1=oEventDetail[1].value;
									
									//输入的内容置空还原
									oEventText1.value='';
									oAlertText1.value='';
									oEventDetail[1].value='';
										
									if (noteTitle1==''||noteTime1==''||textdetail1=='') {
										alert('您尚有未填内容，请补充2！');
									} else{
										_this.children[0].innerHTML=noteTime1;
										_this.children[1].innerHTML=textdetail1;
										
										//除了第一个img作为背景意外的所有oCal_wrap的子元素都显示，要以藏遮罩和新建备忘的窗口
										for (var i=1;i<oCal_wrap.children.length;i++) {
											oCal_wrap.children[i].style.display='block';
										}
										//遮罩隐藏
										oShadowbox.style.display='none';
										
										//修改备忘窗口隐藏
										oNoteamend.style.display='none';
										
										//新建备忘窗口隐藏
										oNotedetail.style.display='none';
									}
								}
							}
						}
					}
				}
				
				
				
				
				
				//新增li添加到ul
				function addLi(addtime,addcontent){
					oList_ul.innerHTML+="<li><h3>"+addtime+"</h3><div class='content_note'>"+addcontent+"</div></li>"
				}
				
				for (var i=0;i<oUl2.children.length;i++) {
					
					firstDay = new Date(getTime().iYear,getTime().iMonth-1,1).getDay();
					
					oUl2.children[i].index1=i;
					oUl2.children[i].onmouseover=function(){
						if ((this.index-(firstDay-2))!=getTime().iDate) {
								this.className='active';
						} 
					}
					
					oUl2.children[i].index2=i;
					oUl2.children[i].onmouseout=function(){
						if (this.index1!=selectedNum&&(this.index2-(firstDay-2))!=getTime().iDate) {
							this.className='';
						}
					}
					
					oUl2.children[i].index=i;
					oUl2.children[i].onclick=function(){
						
						for (var j=0;j<oUl2.children.length;j++) {
							if ((j-(firstDay-2))!=getTime().iDate) {
								oUl2.children[j].className='';
							} 
						}
						if ((this.index-(firstDay-2))!=getTime().iDate) {
								this.className='active';
								this.style.borderColor='#0078d7';
								selectedNum=this.index;
						} 
					}
					
					
				}
				
				rightmune();//显示右键菜单
				
				
				document.body.onclick=function(){
					oRightmune.style.display='none';
				}
				oRightmune.onclick=function(){
					//除了第一个img作为背景意外的所有oCal_wrap的子元素都显示，要以藏遮罩和新建备忘的窗口
					for (var i=1;i<oCal_wrap.children.length;i++) {
						oCal_wrap.children[i].style.display='none';
					}
					//遮罩隐藏
					oShadowbox.style.display='block';
					
//					//修改备忘窗口隐藏
//					oNoteamend.style.display='none';
					
					//新建备忘窗口隐藏
					oNotedetail.style.display='block';
					
					//新建备忘窗口居中显示
					oNotedetail.style.bottom=oCal_wrap.offsetHeight/2-oNotedetail.offsetHeight/2+'px';
					
					oAlertText.value=noteDate.iYear+"-"+noteDate.iMonth+"-"+noteDate.iDate+"T"+getTime().iHour+":"+getTime().iMinute;
				}
				/*-----------------以下是函数封装---------------------*/
				
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
							
							if((i-(firstDay-2))==getTime().iDate){
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
				
				//右键显示菜单
				function rightmune(){
					//右键显示菜单，并返回点击的这个li代表的年月日
					for (var i=0;i<nowFirstDayWeek-1;i++) {
						oUl2.children[i].oncontextmenu=function(ev){
							return false;
						};
					}
					for (var i=getCountDays(Number(oYearandMonth.innerHTML.substring(0,4)),Number(oYearandMonth.innerHTML.substring(5,7)-1))+nowFirstDayWeek-1;i<42;i++) {
						oUl2.children[i].oncontextmenu=function(ev){
							return false;
						};
					}
					for (var i=nowFirstDayWeek-1;i<=getCountDays(Number(oYearandMonth.innerHTML.substring(0,4)),Number(oYearandMonth.innerHTML.substring(5,7)-1))+nowFirstDayWeek-2;i++) {
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
			}