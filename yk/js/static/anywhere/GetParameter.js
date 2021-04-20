function getParameter(){
	/* ===================================
	 해당 주소의 파라미터 값을 맵 형식으로 정리하여 반환
	 EX) http://localhost/yk/src/static/signup/SignUp.csp?Type=AvailableUserID&UserID=yklee
	 반환값 : [Type: "AvailableUserID", UserID: "yklee"]
	=================================== */
	<!--
	// 물음표를 없애고, '&'를 기준으로 나누어준다.
	let paramList = location.search.substr(1).split("&")
	let param = [];
	
	// "="을 기준으로 key 값과 value 값을 나누어 param에 넣어준다.
	for(let i = 0; i < paramList.length; i++){
		let piece = paramList[i].split("=")
		param[piece[0]]=piece[1];
	}
	
	return param;
	-->
}