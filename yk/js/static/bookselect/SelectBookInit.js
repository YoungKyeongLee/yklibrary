/* =========================================
 � ���μ����� ��ģ �� �ٽ� �������� ���ƿ��� �� ���� ����(��ü��ȸ �Ǵ� ������ ��ȸ)�� ����
 ��ư ������ �˸°� �־��ִ� �κ�
 SelectBook.js�� ����Ǿ� �ִ�.
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
 ���ڼ��� �� ��� title �Ӽ��� Ǯ������ �ְ�,
 8���ڱ��� �ڸ� �� '...'�� �ٿ��ش�.
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