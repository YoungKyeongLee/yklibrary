/* =========================
 ��ȸ�� �������� ���� ��� �������ִ� �޼���
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