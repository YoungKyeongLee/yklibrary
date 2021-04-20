/* ==============================
 비밀번호 변경 체크박스를 클릭했을 때
 새 비밀번호란의 display가 'block' 또는 'none' 처리되는 함수
============================== */
<!--
function clickNewPWChekcBox(event){
	let divBox = document.getElementById('changeNewPassword');
	
	divBox.style.display=event.target.checked ? 'block' : 'none';
	divBox.children[0].children[1].value="";
	divBox.children[1].children[1].value="";
}
-->

/* ==============================
 입력값이 비어있지 않은지,
 비밀번호 변경 시 새 비밀번호와 새 비밀번호 확인이 일치하는지
 검사한 후 submit 해주는 함수
============================== */
function UpdateSubmit(){
	<!--
	let requireBox = document.querySelectorAll("#UpdateUserForm .require input");
	let optionBox = document.querySelectorAll("#UpdateUserForm .option input");
	for(let i = 0; i < requireBox.length; i++){
		rb=requireBox[i]
		if(rb.value===""){
			alert('모두 입력해주세요');
			rb.focus();
			return;
		}
	}
	
	console.log(optionBox);

	if(optionBox[0].checked){
		if(optionBox[1].value === '' || optionBox[2].value === ''){
			alert('비밀번호 입력을 확인해주세요');
			optionBox[1].focus();
			return;
		}
		else if(optionBox[1].value !== optionBox[2].value){
			alert('새 비밀번호가 일치하지 않습니다. 다시 입력해주세요');
			optionBox[2].value="";
			optionBox[2].focus();
			return;
		}
	}
	document.getElementById("UpdateUserForm").submit();
	-->
}
