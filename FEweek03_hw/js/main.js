const dateDisplay = document.getElementById('date-display');
const timeDisplay = document.getElementById('time-display');

function updateClock() {
  const now = new Date(); 

  const year = now.getFullYear(); 
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  dateDisplay.textContent = `${year}년 ${month}월 ${date}일`;
  timeDisplay.textContent = `${hours}:${minutes}`;
}

updateClock(); 
setInterval(updateClock, 1000); 


const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const songListContainer = document.getElementById('song-list-container');


function searchSongs() {
  const keyword = searchInput.value.trim(); 
  
  if (keyword === '') {
    alert('가수 이름을 입력해주세요!');
    return; 
  }

  const url = `https://api.manana.kr/karaoke/singer/${keyword}.json`;


  fetch(url)
    .then(response => response.json()) 
    .then(data => {
      
      if (data.length === 0) {
        songListContainer.innerHTML = '<p class="no-result">검색 결과가 없습니다.</p>';
        return;
      }

    
      const htmlTemplate = data.map(song => {
        
        return `
          <div class="song-card">
            <div class="heart-icon">
              <img src="./images/heart.png" alt="찜하기" class="heart-img">
            </div>
            <div class="song-title">${song.title}</div>
            <div class="song-singer">${song.singer}</div>
            <div class="song-info-grid">
              <div>번호 : ${song.no}</div>
              <div>발매일 : ${song.release || '정보없음'}</div>
              <div>작사 : ${song.lyricist || '정보없음'}</div>
              <div>작곡 : ${song.composer || '정보없음'}</div>
            </div>
          </div>
        `;
      }).join(''); 

      songListContainer.innerHTML = htmlTemplate;

      
      setupHeartEvents();
    });
}


searchBtn.addEventListener('click', () => {
  searchSongs();
});


searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchSongs();
  }
});


function setupHeartEvents() {
  
  const heartButtons = document.querySelectorAll('.heart-img');

  
  heartButtons.forEach(heart => {
    heart.addEventListener('click', (event) => {
      
      event.stopPropagation(); 
      
      
      console.log("찜 목록에 추가되었습니다!");
      alert("찜 목록에 추가되었습니다!");
    });
  });
}