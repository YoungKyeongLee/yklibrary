function filterClickEvent(loginType,eventID){
	/* =============================
	 ���� Ŭ�� �� �˻���� ���͸� parameter�� SelectBookPrss.csp�� �Ѱ��ش�.
	============================= */
	<!--
	let word = document.getElementById('header_search_input').value;
	changeButtonColor(eventID);
	
	if(loginType === "Admin"){
		location.href="/yk/src/admin/bookmanage/ManageBook.csp?Page=1&BookStatus=" + eventID + "&Word="+word;
	}
	else {
		location.href="/yk/src/static/bookselect/SelectBook.csp?Page=1&BookStatus=" + eventID + "&Word="+word;
	}
	-->
}


function changeButtonColor(eventID){
	/* ==========================
	 Ŭ���� ��ư�� Ŭ������ ���� ��ư�� ������ �������ִ� �޼���
	========================== */
	<!--
	document.querySelectorAll(".title_side_filter div").forEach(li => {
		if(li.id === eventID){
			li.className = "Button_blue";
		} else {
			li.className = "Button_grey";
		}
	});
	-->
}