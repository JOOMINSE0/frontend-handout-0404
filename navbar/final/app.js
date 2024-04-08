// navToggle 클래스를 가진 요소를 DOM에서 선택하여 변수에 할당합니다.
const toggle = document.querySelector(".nav-toggle");

// links 클래스를 가진 요소를 DOM에서 선택하여 변수에 할당합니다.
const links = document.querySelector(".links");

// navToggle 요소에 대한 클릭 이벤트 리스너를 추가합니다.
toggle.addEventListener("click", function() {
    // links 요소의 클래스 목록에 show-links 클래스가 있으면 제거하고, 없으면 추가합니다.
    links.classList.toggle("show-links");
});

