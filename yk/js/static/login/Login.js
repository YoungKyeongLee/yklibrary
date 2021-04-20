function loginCheck(){
	/* ====================================
	 로그인 메서드
	 아이디와 비밀번호 입력을 확인하고
	 모두 입력 시 submit 해준다.
	==================================== */
	<!--
	let inputs = document.querySelectorAll(".login_input input");
	
	for(let i = 0; i < inputs.length; i++){
		let input = inputs[i];
		if(input.value===""){
			alert(i===0 ? "아이디를 입력하세요" : "비밀번호를 입력하세요");
			input.focus();
			return false;
		}
	}
	document.getElementsByClassName('login_input')[0].submit();
	-->
}