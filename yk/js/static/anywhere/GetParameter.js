function getParameter(){
	/* ===================================
	 �ش� �ּ��� �Ķ���� ���� �� �������� �����Ͽ� ��ȯ
	 EX) http://localhost/yk/src/static/signup/SignUp.csp?Type=AvailableUserID&UserID=yklee
	 ��ȯ�� : [Type: "AvailableUserID", UserID: "yklee"]
	=================================== */
	<!--
	// ����ǥ�� ���ְ�, '&'�� �������� �������ش�.
	let paramList = location.search.substr(1).split("&")
	let param = [];
	
	// "="�� �������� key ���� value ���� ������ param�� �־��ش�.
	for(let i = 0; i < paramList.length; i++){
		let piece = paramList[i].split("=")
		param[piece[0]]=piece[1];
	}
	
	return param;
	-->
}