function init(){
	/* =================================
	 Type�� ���� �������� input �±׵��� ���¸� �������ִ� �޼���
	 1. Type === "AvailableUserID" �� �� => ���̵� ��밡���� ��
	  - ���̵� ����� �� confirm â�� ����, Ȯ���� ������
	 	�ߺ�Ȯ�� ��ư�� �������.
	  - settingInputBox �Լ��� ����ȴ�.
	 2. Type === "UnavailableUserID" �� �� => ���̵� ����� �� ���� ��
	  - alert�� ����� �� ������ �ȳ��ϰ�, ���̵� �Է¶��� ��Ŀ���� �ش�.
	================================= */
	<!--
	
	console.log('test');
	
	let param=getParameter();
	let type = param["Type"];
	let userIDInput = document.getElementById('UserID');
	
	if(type==="AvailableUserID"){
		let userID = param["UserID"];
		if(confirm("'" + userID + "'�� ��� ������ ���̵� �Դϴ�. ����Ͻðڽ��ϱ�?")){
			settingInputBox(userID);
			userIDInput.parentNode.removeChild(document.getElementById('checkButton'));
		}
	}
	else if(type==="UnavailableUserID"){
		alert("����� �� ���� ���̵� �Դϴ�. �ٸ� ���̵� �Է����ּ���");
		userIDInput.focus();
	}
	
	
	-->
}
function settingInputBox(userID){
	/* =================================
	 Ȱ��ȭ �Ǿ��ִ� UserID�� ������ �� ���� �����, ��Ȱ��ȭ �Ǿ��ִ� ������ �Է¶����� ��� Ȱ��ȭ �����ش�.
	 ������ �Է¶� : UserPW,UserPWConfirm,UserName,UserPhoneNum,UserClassNum
	 			��й�ȣ,	��й�ȣ Ȯ��,		�̸�,		�޴�����ȣ,		�й�
	================================= */
	<!--
	
	
	let inputBoxs = document.querySelectorAll('.signUp_input input');
	let userIDInput = inputBoxs[0];
	
	userIDInput.setAttribute('readonly','readonly');
	userIDInput.setAttribute("class","Readonly");
	userIDInput.value=userID;
	
	for(let i = 1; i < inputBoxs.length; i++){
		let input = inputBoxs[i];
		input.removeAttribute('readonly');
		input.removeAttribute('class');
	}
	
	
	-->
}
function checkUserID(){
	/* =================================
	 ���̵� �Է� �� �ߺ�Ȯ�� ��ư�� ������ ����Ǵ� �Լ�
	 �� ������ üũ�ϰ� ���� �ƴϸ�, �ߺ�Ȯ���� ���� SignUpPrss.csp �� �̵��Ѵ�.
	================================= */
	<!--
	
	
	let userid = document.getElementById('UserID').value;
	if(userid!=='')
		location.href='SignUpPrss.csp?Type=checkID&UserID='+userid;
	else
		alert('���̵� �Է����ּ���.');
		
		
	-->
}

/* ==============================
 �Լ� ȣ�� �κ�
============================== */
init();