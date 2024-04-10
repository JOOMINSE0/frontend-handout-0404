// navToggle 클래스를 가진 요소를 DOM에서 선택하여 변수에 할당합니다.

/* const a로 상수 선언을 한 후, 
   docoument 객체의 querySelector를 이용해서 .navToggle 클래스를 가진 요소 선택
   상수 a에 할당
*/

const a = document.querySelector(".nav-toggle");



// links 클래스를 가진 요소를 DOM에서 선택하여 변수에 할당합니다.

/* const b로 상수 선언을 한 후, 
   docoument 객체의 ququerySelector를 이용해서 .links 클래스를 가진 요소 선택
   상수 b에 할당
*/

const b = document.querySelector(".links");



// navToggle 요소에 대한 클릭 이벤트 리스너를 추가합니다.


a.addEventListener("click", function(){
    b.classList.toggle("show-links");
});

// links 요소의 클래스 목록에 show-links 클래스가 있으면 제거하고, 없으면 추가합니다.
