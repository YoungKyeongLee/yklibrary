function moveSelectBook(loginType){
	/* =======================
	 �������϶��� �ƴ� �� ��ũ�� �޸��Ѵ�.
	======================= */
	if(loginType === 'Admin') {
		location.href='/yk/src/admin/bookmanage/ManageBook.csp';
	}
	else {
		location.href='/yk/src/static/bookselect/SelectBook.csp';
	}
}