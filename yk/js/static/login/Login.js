function loginCheck(){
	/* ====================================
	 �α��� �޼���
	 ���̵�� ��й�ȣ �Է��� Ȯ���ϰ�
	 ��� �Է� �� submit ���ش�.
	==================================== */
	<!--
	let inputs = document.querySelectorAll(".login_input input");
	
	for(let i = 0; i < inputs.length; i++){
		let input = inputs[i];
		if(input.value===""){
			alert(i===0 ? "���̵� �Է��ϼ���" : "��й�ȣ�� �Է��ϼ���");
			input.focus();
			return false;
		}
	}
	document.getElementsByClassName('login_input')[0].submit();
	-->
}