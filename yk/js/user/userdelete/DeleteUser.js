function DeleteUserButton(){
	/* =========================
	 ��й�ȣ�� �Է��ߴ��� Ȯ���ϰ� submit ���ִ� �Լ�
	========================= */
	<!--
	let userpw = document.getElementById('UserPW');
	if(userpw.value !== ''){
		document.getElementById('DeleteUserForm').submit();
	}
	else {
		alert('��й�ȣ�� �Է����ּ���');
		userpw.focus();
	}
	-->
}