function signUpSubmit(){
	/* ===================================
	 ȸ������ �Է��� �� ����Ǿ����� Ȯ���ϰ� ��� ���� �ԷµǾ��ٸ�, submit�� �������ִ� �Լ�
	=================================== */
	<!--
	
	
	let inputList = document.querySelectorAll(".signUp_input input");
	let firstNullInput = "";
	let inputNullCheck, equalsPWCehck;
	let inputPW = inputList[1];
	let inputPWconfirm = inputList[2];
	
	// input�� null ���̸� ���������� �ٲپ��ִ� �κ�
	for(let i = 0; i < inputList.length; i++){
		let inputBox = inputList[i];
			if(inputBox.value === ""){
				if(firstNullInput === ""){
					// ù��° �� �� input���� focus�� �̵������ֱ� ���� ù��° ���� ������ ��´�.
					firstNullInput = inputBox;
				}
				
				inputBox.style.border="1px solid red"
				
				// ������ �ڽ��� �� input�� ��Ŀ���� �̵��ϸ� �ٽ� ������ ������ �ٲپ��ش�.
				inputBox.addEventListener('focus',(event) => {
					event.target.style.border="1px solid black";
				});
		}
	}
	
	inputNullCheck = firstNullInput === "";
	equalsPWCehck = inputPW.value === inputPWconfirm.value;
	
	// 1. input�� �� �� ���� �ִٸ�
	// - ù ��° �� ���� focus�� �ְ� submit ���� �ʴ´�.
	// 2. ��й�ȣ�� ��й�ȣ Ȯ���� ��ġ���� �ʴ´ٸ�
	// - ��й�ȣ�� ��й�ȣȮ�� ���� ����ְ�, ��й�ȣ �Է� ���� focus�� �� �� submit�� ���� �ʴ´�.
	// 3. ���������� �ԷµǾ��ִٸ� 
	// - ȸ�������� ��� ������ �� Ȯ�� �� submit �Ѵ�.
	if(!inputNullCheck){
		alert('��� �׸��� �Է����ּ���.');
		firstNullInput.focus();
		return false;
	} else if(!equalsPWCehck){
		alert('��й�ȣ�� ��ġ���� �ʽ��ϴ�.');
		inputPW.value="";
		inputPWconfirm.value="";
		inputPW.focus();
		return false;
	} else {
		confirm('��� �Է��ϼ̽��ϴ�. ȸ�������� �����ұ��?');
		let signUpForm = document.getElementById("signUp_Form");
		signUpForm.submit();
	}
	
	
	-->
}