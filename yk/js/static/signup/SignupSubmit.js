function signUpSubmit(){
	/* ===================================
	 회원가입 입력이 잘 진행되었는지 확인하고 모두 정상 입력되었다면, submit을 실행해주는 함수
	=================================== */
	<!--
	
	
	let inputList = document.querySelectorAll(".signUp_input input");
	let firstNullInput = "";
	let inputNullCheck, equalsPWCehck;
	let inputPW = inputList[1];
	let inputPWconfirm = inputList[2];
	
	// input이 null 값이면 빨간선으로 바꾸어주는 부분
	for(let i = 0; i < inputList.length; i++){
		let inputBox = inputList[i];
			if(inputBox.value === ""){
				if(firstNullInput === ""){
					// 첫번째 빈 값 input으로 focus를 이동시켜주기 위해 첫번째 빈값을 변수에 담는다.
					firstNullInput = inputBox;
				}
				
				inputBox.style.border="1px solid red"
				
				// 빨간선 박스가 된 input은 포커스가 이동하면 다시 검은색 선으로 바꾸어준다.
				inputBox.addEventListener('focus',(event) => {
					event.target.style.border="1px solid black";
				});
		}
	}
	
	inputNullCheck = firstNullInput === "";
	equalsPWCehck = inputPW.value === inputPWconfirm.value;
	
	// 1. input들 중 빈 값이 있다면
	// - 첫 번째 빈 값에 focus를 주고 submit 하지 않는다.
	// 2. 비밀번호와 비밀번호 확인이 일치하지 않는다면
	// - 비밀번호와 비밀번호확인 란을 비워주고, 비밀번호 입력 란에 focus를 준 후 submit은 하지 않는다.
	// 3. 정상적으로 입력되어있다면 
	// - 회원가입을 계속 진행할 지 확인 후 submit 한다.
	if(!inputNullCheck){
		alert('모든 항목을 입력해주세요.');
		firstNullInput.focus();
		return false;
	} else if(!equalsPWCehck){
		alert('비밀번호가 일치하지 않습니다.');
		inputPW.value="";
		inputPWconfirm.value="";
		inputPW.focus();
		return false;
	} else {
		confirm('모두 입력하셨습니다. 회원가입을 진행할까요?');
		let signUpForm = document.getElementById("signUp_Form");
		signUpForm.submit();
	}
	
	
	-->
}