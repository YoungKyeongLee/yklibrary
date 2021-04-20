/* =========================
 조회한 데이터의 값이 길면 정리해주는 메서드
========================= */
<!--
document.querySelectorAll(".list_books li.case").forEach(li => {
	let text = li.innerHTML;
	if(text.length>6){
		li.innerHTML=text.substring(0,6)+"...";
		li.title=text;
	}
});
-->