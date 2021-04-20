function filterClickEvent(loginType,eventID){
	/* =============================
	 필터 클릭 시 검색어와 필터를 parameter로 SelectBookPrss.csp로 넘겨준다.
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
	 클릭한 버튼과 클릭하지 않은 버튼의 색상을 변경해주는 메서드
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