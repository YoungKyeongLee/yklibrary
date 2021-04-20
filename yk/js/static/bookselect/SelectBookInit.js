/* =========================================
 어떤 프로세스를 거친 후 다시 페이지로 돌아왔을 때 현재 상태(전체조회 또는 대출중 조회)에 따라
 버튼 색상을 알맞게 넣어주는 부분
 SelectBook.js에 선언되어 있다.
========================================= */
<!--
if(getParameter()["BookStatus"] === "selectLoanable"){
	changeButtonColor('selectLoanable');
}
else {
	changeButtonColor('selectAll');
}
-->


/* =========================================
 글자수가 긴 경우 title 속성에 풀네임을 넣고,
 8글자까지 자른 후 '...'을 붙여준다.
========================================= */
<!--
bookList = document.querySelectorAll(".view li.case");
for(let i = 0; i < bookList.length ; i++){
	let check = bookList[i].innerHTML;
	if(check.length>=8){
		bookList[i].title=check;
		bookList[i].innerHTML=check.substring(0,8) + "...";
	}
}
-->