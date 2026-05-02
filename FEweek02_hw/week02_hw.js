const likeBtn = document.getElementById('like-btn');
const likeImg = likeBtn.querySelector('img');
const likeCountSpan = document.getElementById('like-count-icon');
let likeCount = 437;

likeBtn.addEventListener('click', function() {
    const isActive = likeBtn.classList.toggle('like-active');

    if(isActive) {
        likeCount++;
        likeImg.src='images/full.png';
    } else {
        likeCount--;
        likeImg.src= 'images/heart.png';
    }
    likeCountSpan.innerText = likeCount;
});