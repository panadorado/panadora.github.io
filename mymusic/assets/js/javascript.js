"use strict";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let playlistSong = [];
let playerYTB;

const KEY_API = [
    "AIzaSyCalP5rGMaASB1flY_co9w78wkTysGgk8o", 
    "AIzaSyAKkNJJh2kbSgl31RObQuuEaS_6oRzT30Q", 
	"AIzaSyAvPUsjjqCxjx9ZlIZh-EcdiBAFbJOeoO0", 
	"AIzaSyB56E3cgBh0TMpNi5WQJT9AMFtChFIeEIo"
];

const KEY_PLAYLIST = [
    "PLWZvGxtWFBkiJqnBJHNWU9_7HwKrH8soL",
    "PLWZvGxtWFBkj9pQvGYgx8ihPSJ1xmLLWo",
    "PLWZvGxtWFBkjsCuGrSiRRl8_lkd5RNcOy",
    "PLWZvGxtWFBkgx1yH3KmVmqdDqjk1mJ95t"
];

const PLAYER_STORAGE_KEY = 'MUSIC_PLAYER'; 

const playlist = $('.playlist');
const player = $('.player');
const cd = $('.cd');
const heading = $('.titleMusic');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const dashboard = $('.dashboard');

const playBtn = $('.btn-toggle-play');
const prevBtn = $('.btn-prev');
const nextBtn = $('.btn-next');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');

const timeCurrent = $('.currentTime');
const timeDuration = $('.durationTime');
const progress = $('#progress');

const keyAPI = KEY_API[Math.floor(Math.random()*KEY_API.length)];
const keyPlayList = KEY_PLAYLIST[Math.floor(Math.random()*KEY_PLAYLIST.length)];

// Lấy dữ DS Video từ API của Youtube
const getPlayListItems = async function (keyAPI, keyPlayList) {
    let token;
    let resultArr = [];

    const result = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
        params: {
            part: 'id,snippet',
            maxResults: 50,
            playlistId: keyPlayList,
            key: keyAPI
        }
    });

    token = result.data.nextPageToken;
    resultArr.push(result.data);

    while (token) {
        let result = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
            params: {
                part: 'id,snippet',
                maxResults: 50,
                playlistId: keyPlayList,
                key: keyAPI,
                pageToken: token
            }
        })

        token = result.data.nextPageToken;
        resultArr.push(result.data);
    }	
    
    return resultArr;
}

// Load DS Video từ API của Youtube đẩy vào 1 mảng playListSong
const loadDataPlayList = function() {
    getPlayListItems(keyAPI, keyPlayList)
    .then(data => {
        data.forEach(dataItem => {
            dataItem.items.forEach(item => playlistSong.push({
                name: item.snippet.title,
                singer: item.snippet.videoOwnerChannelTitle,
                path: item.snippet.resourceId.videoId,
                image: item.snippet.thumbnails.high.url,
            }));

            console.log(dataItem.items);
        });
    })
    .catch(error => changeAPIKey(keyAPI, error))
}

const changeAPIKey = function (keyAPI, err) {
	if (err.response.data.error.errors[0].reason == "dailyLimitExceeded") {
		getPlayListItems(keyAPI, keyPlayList)
		.then(data => {
            data.forEach(dataItem => {
                dataItem.items.forEach(item => playlistSong.push({
                    name: item.snippet.title,
                    singer: item.snippet.videoOwnerChannelTitle,
                    path: item.snippet.resourceId.videoId,
                    image: item.snippet.thumbnails.high.url,
                }));
            });
        })
		.catch(err => changeAPIKey(keyAPI, err));
	}
}

loadDataPlayList();

// Đợi DS Video được đưa vào mảng 1 playListSong trong 1s
// Bắt đầu khởi động
setTimeout(() => {

    const app = {

        timeInterval: 3000,

        currentIndex: 0,

        isPlaying: false,

        isRandom: false,

        isRepeat: false,

        config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},

        setConfig: function(key, value) {
            this.config[key] = value;
            localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
        },

        formatTime: function(time) {
            time = Math.round(time);
            let minutes = Math.floor(time / 60);
            let seconds = time - minutes * 60;

            seconds = seconds < 10 ? '0' + seconds : seconds;

            return minutes + ":" + seconds;
        },

        render: function() {
            const htmls = playlistSong.map((song, index) => {
                return `
                <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="thumb" style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                `;
            });

            playlist.innerHTML = htmls.join('');
        },

        defineProperties: function () {
            Object.defineProperty(this, 'currentSong', {
                get: function() {
                    return playlistSong[this.currentIndex];
                }
            });
        },

        onYouTubeIframeAPIReady: function() {
            playerYTB = new YT.Player('audio', {
                height: '0',
                width: '0',
                videoId: playlistSong[this.currentIndex].path,
                playerVars: {
                    'playsinline': 1,
                },
            });
        },

        handleEvent: function() {

            const _this = this;

            const cdWidth = cd.offsetWidth;

            // Xử lý Spin CD
            const cdThumbAnimate = cdThumb.animate([{ 
                transform: 'rotate(360deg)'
            }], {
                duration: 10000, // 10 second
                iterations: Infinity,
            });

            cdThumbAnimate.pause();

            // xử lý phóng to / thu nhỏ CD Thumb
            document.onscroll = function() {
                const scroll = window.screenY || document.documentElement.scrollTop;
                const newCdWidth = cdWidth - scroll;

                cd.style.width = newCdWidth > 0 ? `${newCdWidth}px` : 0;
                cd.style.opacity = newCdWidth / cdWidth;
            }

            playBtn.onclick = function() {
                _this.isPlaying ? playerYTB.pause() : playerYTB.play();
            }
            
            // Xử lý khi tua nhạc
            progress.onchange = function(e) {
                let newTime = playerYTB.getDuration() * (e.target.value / 100);
                playerYTB.seekTo(newTime)
            }

            // Khi bài hát được play
            playerYTB.play = function () {

                _this.isPlaying = true;
                player.classList.add('playing');
                cdThumbAnimate.play();

                playerYTB.playVideo();
            }
            
            // khi bài hát được pause
            playerYTB.pause = function () {

                _this.isPlaying = false;
                player.classList.remove('playing');
                cdThumbAnimate.pause();

                playerYTB.pauseVideo();
            }     

            // Next bài hát
            nextBtn.onclick = function(e) {
                
                _this.isRandom ?  _this.playRandomSong() : _this.nextSong()

                playerYTB.loadVideoById({videoId:playlistSong[_this.currentIndex].path})
                playerYTB.play();

                _this.render();
                _this.scrollToActiveSong();
            }

            // Prev bài hát
            prevBtn.onclick = function(e) {

                _this.isRandom ? _this.playRandomSong() : _this.prevSong();

                playerYTB.loadVideoById({videoId:playlistSong[_this.currentIndex].path})
                playerYTB.play();

                _this.render();
                _this.scrollToActiveSong();
            }

            // lắng nghe hành vi click vào playlist
            playlist.onclick = function(e) {
            
                const songNode = e.target.closest('.song:not(.active)')
                const songOption = e.target.closest('.option');
            
                if(songNode || songOption) {
                    
                    // Xử lý khi click vào 1 bài hát trong playlist
                    if(songNode && !songOption) {
                        _this.currentIndex = Number(songNode.dataset.index);
                        _this.loadCurrentSong();
                        _this.render();

                        playerYTB.loadVideoById({videoId:playlistSong[_this.currentIndex].path})
                        playerYTB.play();
                    }
            
                    // Xử lý khi click vào song Option
                    if(songOption) {
            
                    }
                }
            }

            // Bât/Tắt phát nghẫu nhiên
            randomBtn.onclick = function(e) {

                _this.isRandom = !_this.isRandom;
                _this.setConfig('isRandom', _this.isRandom);

                randomBtn.classList.toggle('active', _this.isRandom);
            }

            // Bât/Tắt phát lập lại bài hát
            repeatBtn.onclick = function(e) {

                _this.isRepeat = !_this.isRepeat;
                _this.setConfig('isRepeat', _this.isRepeat);

                repeatBtn.classList.toggle('active', _this.isRepeat);
            }

            // xử lý chuyển nhạc khi trình phát nhạc kết thúc bài nhạc trước đó
            setInterval(() => {
                if(playerYTB.getPlayerState() == 0) {
                    _this.isRepeat ? playerYTB.play() : nextBtn.click();
                    progress.value = 0;
                }
            }, this.timeInterval);
        },

        scrollToActiveSong: function(){
            setTimeout(() => {
                $('.song.active').scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                });
            })
        },

        loadCurrentSong: function(){
            heading.textContent = this.currentSong.name;
            heading.style.color = '#fff';

            dashboard.style.backgroundImage = `url(${this.currentSong.image})`;
            dashboard.style.color = '#fff';

            cdThumb.style.backgroundImage = `url(${this.currentSong.image})`;
            audio.src = this.currentSong.path; 
            progress.value = 0;
        },

        loadProgressBar: function() {
            setInterval(() => {
                progress.value  = (playerYTB.getCurrentTime() / playerYTB.getDuration()) * 100;
            }, this.timeInterval);
        },

        loadCurrentTime: function() {
            setInterval(() => {
                timeCurrent.innerHTML = this.formatTime(playerYTB.getCurrentTime());
                timeDuration.innerHTML = this.formatTime(playerYTB.getDuration()); 
            }, 1000);
        },

        loadConfig: function() {
            this.isRandom = this.config.isRandom || this.isRandom;
            this.isRepeat = this.config.isRepeat || this.isRepeat;
        },

        nextSong: function() {

            this.currentIndex++

            if(this.currentIndex >= playlistSong.length) {
                this.currentIndex = 0;
            }

            this.loadCurrentSong();
        },

        prevSong: function() {

            this.currentIndex--
            if(this.currentIndex < 0) {
                this.currentIndex = playlistSong.length - 1;
            }

            this.loadCurrentSong();
        },

        playRandomSong: function() {
            let newIndex;

            do {
                newIndex = Math.floor(Math.random() * playlistSong.length);
            }
            while (newIndex === this.currentIndex);

            this.currentIndex = newIndex;
            this.loadCurrentSong();
        },

        start: function() {
        
            // gán cấu hình config từ localStorage vào ứng dụng
            this.loadConfig();
            
            // đĩnh nghĩa các thuộc tính
            this.defineProperties();
            
            // Tạo frame để trình phát YTB
            this.onYouTubeIframeAPIReady();

            // xử lý các sự kiện
            this.handleEvent();

            // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
            this.loadCurrentSong();

            setTimeout(() => {
                this.loadCurrentTime();
                this.loadProgressBar();
            }, 100);

            this.render();

            // Hiển thị trạng thái ban đầu của btn repeat vs btn random
            randomBtn.classList.toggle('active', this.isRandom);
            repeatBtn.classList.toggle('active', this.isRepeat);
        }
    }

    app.start();

}, 2000);
