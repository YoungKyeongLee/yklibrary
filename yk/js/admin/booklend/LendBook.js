function clickButton(type){
	/* ======================
 	 버튼 클릭 시 버튼 색상 변경,
 	 hidden 값 변경(대출과 반납을 구분시켜주는 값),
 	 대출=>반납으로 바뀔 때 아이디란 비활성화 및 value 지우기
	====================== */
	<!--
	let buttonList = document.querySelectorAll(".button_List div");
	let hiddenInput = document.getElementById("Type");
	let userIDInput = document.getElementById("UserID");
	
	//1. 버튼 색상 바꾸기
	buttonList.forEach(bt => {
		if(bt.id.indexOf(type) === 0){
			bt.className="Button_blue";
		}
		else {
			bt.className="Button_grey";
		}
	});

	//2, hidden 값 바꾸기
	hiddenInput.value=type;
	
	//3. 대출자 아이디 란 value="",display:none 유무
	if(type==="InsertLendBook"){
		userIDInput.parentNode.style.display="";
	}
	else {
		userIDInput.value="";
		userIDInput.parentNode.style.display="none";
	}
	-->
}
function lendBookSubmit(){
	/* ======================
	빈 값 체크 후 submit
	====================== */
	<!--
	let result = true;
	
	// display가 활성화 되어있는 input만 값을 입력했는지 체크하고 비어있다면 return false 해준다.
	document.querySelectorAll(".lendBookForm input[type='text']").forEach(input => {
		if(input.parentNode.style.display !== "none" && input.value === ""){
			result = false;
		}
	});
	
	// 1. 값이 모두 입력되어있다면
	if(result){
		document.getElementsByClassName('lendBookForm')[0].submit();
	}
	// 2. 값이 입력되어있지 않다면
	else {
		alert('모두 입력해주세요');
	}
	-->
}