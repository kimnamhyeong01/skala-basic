import { isEmpty } from "./common.js";

const loginButton = document.getElementById("loginButton");
const email = document.getElementById("email");
const password = document.getElementById("password"); 
const date = document.getElementById("date");

// 로그인 버튼 클릭 이벤트
loginButton.addEventListener("click", (event) => {
    // form 기본 submit 동작 방지
    event.preventDefault();

    // 이메일 빈 값 검사
    if (isEmpty(email.value)) {
        alert("이메일을 입력해주세요.");
        return;
    }

    // 비밀번호 빈 값 검사
    if (isEmpty(password.value)) {
        alert("비밀번호를 입력해주세요.");
        return;
    }

    // 입력값 검증이 모두 통과되면 google.com으로 이동
    window.location.href = "https://www.google.com";
}); 

date.addEventListener("change", (e) =>{
    const selectedDate = new Date(e.target.value);
    console.log("선택된 날짜:", selectedDate, e.target.value, typeof e.target.value);
});
