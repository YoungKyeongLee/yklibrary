function moveSelectBook(loginType){
	/* =======================
	 관리자일때와 아닐 때 링크를 달리한다.
	======================= */
	if(loginType === 'Admin') {
		location.href='/yk/src/admin/bookmanage/ManageBook.csp';
	}
	else {
		location.href='/yk/src/static/bookselect/SelectBook.csp';
	}
}