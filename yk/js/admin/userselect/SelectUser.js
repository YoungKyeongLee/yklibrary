function searchUser(){
	// �̿��� �˻�
	let userWord = document.getElementById('searchUserInput').value;
	location.href="/yk/src/admin/userselect/SelectUser.csp?Page=1&UserWord=" + userWord;
}
function UserfilterClickEvent(eventID){
	// ����
	let word = document.getElementById('searchUserInput').value;
	changeButtonColor(eventID);
		
	location.href="/yk/src/admin/userselect/SelectUser.csp?Page=1&UserWord="+word+"&UserStatus="+eventID;
}
function changeButtonColor(eventID){
	/* ==========================
	 Ŭ���� ��ư�� Ŭ������ ���� ��ư�� ������ �������ִ� �޼���
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
	if(confirm("'" + userid + "'���� �����Ͻðڽ��ϱ�?")){
		if (userStatus==="-"){
			location.href="/yk/src/admin/userselect/SelectUserPrss.csp?UserID="+userid;
		}
		else {
			alert('�������� �̿����Դϴ�.');
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
			+ "������";
	if(list==='-'){
		msg+="\n����";
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