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


const moreBtn = document.getElementById('more-btn');
const postText = document.getElementById('post-text');

const shortText = "아기 고양이가 냐.......";
const fullText = `아기 고양이가 냐....... 


                  옹`;

moreBtn.addEventListener('click',function() {
    const isExpanded = moreBtn.classList.toggle('is-expanded');

    if(isExpanded) {
        postText.innerText = fullText;
        moreBtn.innerText = "접기";
    }  else{
        postText.innerText = shortText;
        moreBtn.innerText = "더보기";
    }
});

const scrapBtn = document.getElementById('scrap-btn');
const scrapImg = scrapBtn.querySelector('img');

scrapBtn.addEventListener('click',function() {
    const isScrapped = scrapBtn.classList.toggle('scrap-active');

    if (isScrapped) {
        scrapImg.src = 'images/fullscrap.png';
    } else {scrapImg.src = 'images/scrap.png'};
});