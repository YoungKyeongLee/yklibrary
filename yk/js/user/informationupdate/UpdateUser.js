/* ==============================
 ��й�ȣ ���� üũ�ڽ��� Ŭ������ ��
 �� ��й�ȣ���� display�� 'block' �Ǵ� 'none' ó���Ǵ� �Լ�
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
 �Է°��� ������� ������,
 ��й�ȣ ���� �� �� ��й�ȣ�� �� ��й�ȣ Ȯ���� ��ġ�ϴ���
 �˻��� �� submit ���ִ� �Լ�
============================== */
function UpdateSubmit(){
	<!--
	let requireBox = document.querySelectorAll("#UpdateUserForm .require input");
	let optionBox = document.querySelectorAll("#UpdateUserForm .option input");
	for(let i = 0; i < requireBox.length; i++){
		rb=requireBox[i]
		if(rb.value===""){
			alert('��� �Է����ּ���');
			rb.focus();
			return;
		}
	}
	
	console.log(optionBox);

	if(optionBox[0].checked){
		if(optionBox[1].value === '' || optionBox[2].value === ''){
			alert('��й�ȣ �Է��� Ȯ�����ּ���');
			optionBox[1].focus();
			return;
		}
		else if(optionBox[1].value !== optionBox[2].value){
			alert('�� ��й�ȣ�� ��ġ���� �ʽ��ϴ�. �ٽ� �Է����ּ���');
			optionBox[2].value="";
			optionBox[2].focus();
			return;
		}
	}
	document.getElementById("UpdateUserForm").submit();
	-->
}
