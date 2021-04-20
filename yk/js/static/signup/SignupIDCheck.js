function init(){
	/* =================================
	 Type에 따라 페이지의 input 태그들의 상태를 세팅해주는 메서드
	 1. Type === "AvailableUserID" 일 때 => 아이디가 사용가능할 때
	  - 아이디 사용할 지 confirm 창을 띄우고, 확인을 누르면
	 	중복확인 버튼은 사라진다.
	  - settingInputBox 함수가 실행된다.
	 2. Type === "UnavailableUserID" 일 때 => 아이디를 사용할 수 없을 때
	  - alert로 사용할 수 없음을 안내하고, 아이디 입력란에 포커스를 준다.
	================================= */
	<!--
	
	console.log('test');
	
	let param=getParameter();
	let type = param["Type"];
	let userIDInput = document.getElementById('UserID');
	
	if(type==="AvailableUserID"){
		let userID = param["UserID"];
		if(confirm("'" + userID + "'는 사용 가능한 아이디 입니다. 사용하시겠습니까?")){
			settingInputBox(userID);
			userIDInput.parentNode.removeChild(document.getElementById('checkButton'));
		}
	}
	else if(type==="UnavailableUserID"){
		alert("사용할 수 없는 아이디 입니다. 다른 아이디를 입력해주세요");
		userIDInput.focus();
	}
	
	
	-->
}
function settingInputBox(userID){
	/* =================================
	 활성화 되어있던 UserID는 수정할 수 없게 만들고, 비활성화 되어있던 나머지 입력란들은 모두 활성화 시켜준다.
	 나머지 입력란 : UserPW,UserPWConfirm,UserName,UserPhoneNum,UserClassNum
	 			비밀번호,	비밀번호 확인,		이름,		휴대폰번호,		학번
	================================= */
	<!--
	
	
	let inputBoxs = document.querySelectorAll('.signUp_input input');
	let userIDInput = inputBoxs[0];
	
	userIDInput.setAttribute('readonly','readonly');
	userIDInput.setAttribute("class","Readonly");
	userIDInput.value=userID;
	
	for(let i = 1; i < inputBoxs.length; i++){
		let input = inputBoxs[i];
		input.removeAttribute('readonly');
		input.removeAttribute('class');
	}
	
	
	-->
}
function checkUserID(){
	/* =================================
	 아이디 입력 후 중복확인 버튼을 누르면 실행되는 함수
	 빈 값인지 체크하고 빈값이 아니면, 중복확인을 위해 SignUpPrss.csp 로 이동한다.
	================================= */
	<!--
	
	
	let userid = document.getElementById('UserID').value;
	if(userid!=='')
		location.href='SignUpPrss.csp?Type=checkID&UserID='+userid;
	else
		alert('아이디를 입력해주세요.');
		
		
	-->
}

/* ==============================
 함수 호출 부분
============================== */
init();