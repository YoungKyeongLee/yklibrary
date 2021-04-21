function searchUser(){
	// 이용자 검색
	let userWord = document.getElementById('searchUserInput').value;
	location.href="/yk/src/admin/userselect/SelectUser.csp?Page=1&UserWord=" + userWord;
}
function UserfilterClickEvent(eventID){
	// 필터
	let word = document.getElementById('searchUserInput').value;
	changeButtonColor(eventID);
		
	location.href="/yk/src/admin/userselect/SelectUser.csp?Page=1&UserWord="+word+"&UserStatus="+eventID;
}
function changeButtonColor(eventID){
	/* ==========================
	 클릭한 버튼과 클릭하지 않은 버튼의 색상을 변경해주는 메서드
	========================== */
	<!--
	document.querySelectorAll(".title_side_filter div").forEach(li => {
		if(li.id === eventID){
			li.className = "Button_blue";
		} else {
			li.className = "Button_grey";
		}
	});
	-->
}
function deleteUser(userid,userStatus){
	if(confirm("'" + userid + "'님을 삭제하시겠습니까?")){
		if (userStatus==="-"){
			location.href="/yk/src/admin/userselect/SelectUserPrss.csp?UserID="+userid;
		}
		else {
			alert('대출중인 이용자입니다.');
		}
	}
}
function aboutUser(event){
	let parent=event.target.parentNode.parentNode;
	let userid=event.target.innerHTML;
	let userName=parent.children[1].innerHTML;
	let userPhoneNum=parent.children[2].innerHTML;
	let list=parent.children[3].title;
	let msg=userid + "(" + userName + ")\n"
			+ "T : " + userPhoneNum + "\n\n"
			+ "대출목록";
	if(list==='-'){
		msg+="\n없음";
	}
	else {
		let arrList = list.split("\\n");
		for(let i = 1; i < arrList.length; i++) {
			msg += "\n" + arrList[i];
		}
	}
	alert(msg);
}

if(getParameter()["UserStatus"] === "selectUnloanable"){
	changeButtonColor('selectUnloanable');
}
else {
	changeButtonColor('selectAll');
}

let viewList = document.querySelectorAll('.view .list_books');

for(let i = 0; i < viewList.length; i++){
	let li = viewList[i].children[3].innerHTML;
	if(li.length>8){
		console.log(li, li.length);
		viewList[i].children[3].innerHTML = li.substring(0,8) + "...";
	}
}