
const exitLink = document.querySelector('.footer a');
if (exitLink) {
  exitLink.addEventListener('click', function(event) {
    

    const userConfirmed = confirm("정말 페이지를 나가시겠습니까?");


    if (!userConfirmed) {  
      event.preventDefault();
    }
  });
}