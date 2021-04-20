function updateAdminSubmit(){
	/* =======================
	 비밀번호를 정상적으로 입력했는지 확인하고 submit 해주는 함수
	======================= */
	<!--
	let inputBox = document.querySelectorAll('#UpdateAdminForm input[type="password"]');
	
	for(let i = 0; i < inputBox.length; i++){
		if(inputBox[i].value === ''){
			alert('모두 입력해주세요');
			inputBox[i].focus();
			return;
		}
	}
	
	if(inputBox[1].value !== inputBox[2].value){
		alert('새 비밀번호와 새 비밀번호 확인이 일치하지 않습니다.');
		inputBox[2].value='';
		inputBox[2].focus();
		return;
	}
	
	document.getElementById('UpdateAdminForm').submit();
	-->
}