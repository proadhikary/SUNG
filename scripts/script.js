new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Amar Hath Bandhibi",
          artist: "Sahana Bajpaie",
          cover: "https://raw.githubusercontent.com/human71/SUNG/main/img/sahana.jpeg",
          source: "https://raw.githubusercontent.com/human71/SUNG/main/mp3/1.mp3",
          url: "https://youtu.be/PA7DKlXCYdU",
          favorited: false
        },
        {
          name: "Amar Pran Dhoriya Maro Tan",
          artist: "Emon Chowdhory",
          cover: "https://raw.githubusercontent.com/human71/SUNG/main/img/amar.jpg",
          source: "https://raw.githubusercontent.com/human71/SUNG/main/mp3/2.mp3",
          url: "https://youtu.be/t1dVen8SQSY",
          favorited: true
        },
        {
          name: "Baje Shobhab",
          artist: "Prithwi Raj",
          cover: "https://raw.githubusercontent.com/human71/SUNG/main/img/baje.jpg",
          source: "https://raw.githubusercontent.com/human71/SUNG/main/mp3/3.mp3",
          url: "https://youtu.be/o61DHzy-5Js",
          favorited: false
        },
        {
          name: "Dekhecho ki Take",
          artist: "Subhomita Banerjee",
          cover: "https://raw.githubusercontent.com/human71/SUNG/main/img/dekhecho.jpeg",
          source: "https://raw.githubusercontent.com/human71/SUNG/main/mp3/4.mp3",
          url: "https://youtu.be/YqUl8Z0Kj1s",
          favorited: false
        },
        {
          name: "Jao Pakhi Bolo",
          artist: "Shreya Ghoshal",
          cover: "https://raw.githubusercontent.com/human71/SUNG/main/img/jao.jpg",
          source: "https://raw.githubusercontent.com/human71/SUNG/main/mp3/5.mp3",
          url: "https://youtu.be/b09HPjMsFT8",
          favorited: true
        },
        {
          name: "Konna Re",
          artist: "Shan Shaik",
          cover: "https://raw.githubusercontent.com/human71/SUNG/main/img/koinna.jpg",
          source: "https://raw.githubusercontent.com/human71/SUNG/main/mp3/6.mp3",
          url: "https://youtu.be/5f47oSORx8Q",
          favorited: false
        },
        {
          name: "Kotobaro Bhebechinu",
          artist: "Rezwana Choudhury",
          cover: "https://raw.githubusercontent.com/human71/SUNG/main/img/koto.jpg",
          source: "https://raw.githubusercontent.com/human71/SUNG/main/mp3/7.mp3",
          url: "https://youtu.be/0EF6gwixrSg",
          favorited: true
        },
        {
          name: "Mayabono Biharini",
          artist: "Somlata",
          cover: "https://raw.githubusercontent.com/human71/SUNG/main/img/maya.png",
          source: "https://raw.githubusercontent.com/human71/SUNG/main/mp3/8.mp3",
          url: "https://youtu.be/mbpi6o4cktk",
          favorited: false
        },
        {
          name: "Moloyo Batashe",
          artist: "Sahana Bajpaie",
          cover: "https://raw.githubusercontent.com/human71/SUNG/main/img/moloyo.jpg",
          source: "https://raw.githubusercontent.com/human71/SUNG/main/mp3/9.mp3",
          url: "https://youtu.be/1sl7LuZokxU",
          favorited: false
        },
        {
          name: "O Je Mane Na Mana",
          artist: "Sunidhi Nayak",
          cover: "https://raw.githubusercontent.com/human71/SUNG/main/img/oje.jpg",
          source: "https://raw.githubusercontent.com/human71/SUNG/main/mp3/10.mp3",
          url: "https://youtu.be/TpLOTXd7djw",
          favorited: false
        },
        {
          name: "Preme Pora Baron",
          artist: "Lagnajita",
          cover: "https://raw.githubusercontent.com/human71/SUNG/main/img/preme.jpg",
          source: "https://raw.githubusercontent.com/human71/SUNG/main/mp3/11.mp3",
          url: "https://youtu.be/1DAgBjXj96k",
          favorited: false
        },
        {
          name: "Shunya Khatar Gaan",
          artist: "Sahana Bajpaie",
          cover: "https://raw.githubusercontent.com/human71/SUNG/main/img/shunno.jpg",
          source: "https://raw.githubusercontent.com/human71/SUNG/main/mp3/12.mp3",
          url: "https://youtu.be/Ttbnd_4Uc8o",
          favorited: false
        },
        {
          name: "Tomake Bujhina Priyo",
          artist: "Chandrani Banerjee",
          cover: "https://raw.githubusercontent.com/human71/SUNG/main/img/bujhina.jpg",
          source: "https://raw.githubusercontent.com/human71/SUNG/main/mp3/13.mp3",
          url: "https://youtu.be/Idwjj2p6LMc",
          favorited: false
        },
        {
          name: "Ami Shunechi Sedin",
          artist: "Moushumi Bhoumik",
          cover: "https://raw.githubusercontent.com/human71/SUNG/main/img/shunechi.jpg",
          source: "https://raw.githubusercontent.com/human71/SUNG/main/mp3/14.mp3",
          url: "https://youtu.be/aiMtb5g6970",
          favorited: false
        },
       {
          name: "Chal Rastay Saaji Tram Line",
          artist: "Shreya Ghoshal",
          cover: "https://raw.githubusercontent.com/human71/SUNG/main/img/chalo.jpg",
          source: "https://raw.githubusercontent.com/human71/SUNG/main/mp3/15.mp3",
          url: "https://youtu.be/X-flIvUqKrg",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
