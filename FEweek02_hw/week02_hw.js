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

const reposetBtnSet = document.getElementById('repost-btn-set');
const repostImg = reposetBtnSet.querySelector('img');
const repostCountSpan = document.getElementById('repost-count');

let repostCount = 11;

reposetBtnSet.addEventListener('click', function() {
    const isRepostActive = reposetBtnSet.classList.toggle('repost-active');

    if(isRepostActive) {
        repostCount++;
        repostImg.src= 'images/check.png';
        } else {
            repostCount--;
            repostImg.src = 'images/repost.png';
        }

        repostCountSpan.innerText = repostCount;
}) ;