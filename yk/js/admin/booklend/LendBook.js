function clickButton(type){
	/* ======================
 	 ��ư Ŭ�� �� ��ư ���� ����,
 	 hidden �� ����(����� �ݳ��� ���н����ִ� ��),
 	 ����=>�ݳ����� �ٲ� �� ���̵�� ��Ȱ��ȭ �� value �����
	====================== */
	<!--
	let buttonList = document.querySelectorAll(".button_List div");
	let hiddenInput = document.getElementById("Type");
	let userIDInput = document.getElementById("UserID");
	
	//1. ��ư ���� �ٲٱ�
	buttonList.forEach(bt => {
		if(bt.id.indexOf(type) === 0){
			bt.className="Button_blue";
		}
		else {
			bt.className="Button_grey";
		}
	});

	//2, hidden �� �ٲٱ�
	hiddenInput.value=type;
	
	//3. ������ ���̵� �� value="",display:none ����
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
	�� �� üũ �� submit
	====================== */
	<!--
	let result = true;
	
	// display�� Ȱ��ȭ �Ǿ��ִ� input�� ���� �Է��ߴ��� üũ�ϰ� ����ִٸ� return false ���ش�.
	document.querySelectorAll(".lendBookForm input[type='text']").forEach(input => {
		if(input.parentNode.style.display !== "none" && input.value === ""){
			result = false;
		}
	});
	
	// 1. ���� ��� �ԷµǾ��ִٸ�
	if(result){
		document.getElementsByClassName('lendBookForm')[0].submit();
	}
	// 2. ���� �ԷµǾ����� �ʴٸ�
	else {
		alert('��� �Է����ּ���');
	}
	-->
}