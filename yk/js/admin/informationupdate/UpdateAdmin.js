function updateAdminSubmit(){
	/* =======================
	 ��й�ȣ�� ���������� �Է��ߴ��� Ȯ���ϰ� submit ���ִ� �Լ�
	======================= */
	<!--
	let inputBox = document.querySelectorAll('#UpdateAdminForm input[type="password"]');
	
	for(let i = 0; i < inputBox.length; i++){
		if(inputBox[i].value === ''){
			alert('��� �Է����ּ���');
			inputBox[i].focus();
			return;
		}
	}
	
	if(inputBox[1].value !== inputBox[2].value){
		alert('�� ��й�ȣ�� �� ��й�ȣ Ȯ���� ��ġ���� �ʽ��ϴ�.');
		inputBox[2].value='';
		inputBox[2].focus();
		return;
	}
	
	document.getElementById('UpdateAdminForm').submit();
	-->
}