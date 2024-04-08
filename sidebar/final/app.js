// sidebar-toggle 클래스를 가진 요소를 DOM에서 선택하여 변수에 할당합니다.
const toggleBtn = document.querySelector('.sidebar-toggle');

// close-btn 클래스를 가진 요소를 DOM에서 선택하여 변수에 할당합니다.
const closeBtn = document.querySelector('.close-btn');

// sidebar 클래스를 가진 요소를 DOM에서 선택하여 변수에 할당합니다.
const sidebar = document.querySelector('.sidebar');

// toggleBtn 요소에 대한 클릭 이벤트 리스너를 추가합니다.
toggleBtn.addEventListener("click",function(){
    // sidebar 요소의 클래스 목록에 show-sidebar 클래스가 있으면 제거하고, 없으면 추가합니다.
    sidebar.classList.toggle("show-sidebar");
});

// closeBtn 요소에 대한 클릭 이벤트 리스너를 추가합니다.
closeBtn.addEventListener("click",function(){
    // sidebar 요소의 클래스 목록에서 "show-sidebar" 클래스를 제거합니다.
    sidebar.classList.remove("show-sidebar");
})


