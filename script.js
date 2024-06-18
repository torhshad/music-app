document.addEventListener('DOMContentLoaded', () => {
  const songs = [
    { title: 'Jzyno-Yakunay', src: 'assests/music/Jzyno-Yakunay.mp3' },
    {
      title: 'Majeeed-Ft-Lojay-Shayo',
      src: 'assests/music/Majeeed-Ft-Lojay-Shayo-(TrendyBeatz.com).mp3',
    },
    {
      title: 'Prinx Emmanuel- Bigger',
      src: 'assests/music/Prinx Emmanuel- Bigger (odogwu) (official video).mp3',
    },
    {
      title: 'Cheque-Zoom',
      src: 'assests/music/Cheque-Zoom-(JustNaija.com).mp3',
    },
    {
      title: 'Cheque-Fireboy-DML-History',
      src: 'assests/music/Cheque-Fireboy-DML-History-file-1-(JustNaija.com).mp3',
    },
  ];

  const songList = document.getElementById('song-list');
  const audioPlayer = document.getElementById('audio-player');
  const repeatButton = document.getElementById('repeat');

  let currentSongIndex = 0;
  let isRepeating = false;

  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = song.title;
    li.addEventListener('click', () => {
      playSong(index);
    });
    songList.appendChild(li);
  });

  audioPlayer.addEventListener('ended', () => {
    if (isRepeating) {
      playSong(currentSongIndex);
    } else {
      playNextSong();
    }
  });

  repeatButton.addEventListener('click', () => {
    isRepeating = !isRepeating;
    repeatButton.textContent = isRepeating ? 'Stop Repeat' : 'Repeat';
  });

  function playSong(index) {
    currentSongIndex = index;
    audioPlayer.src = songs[index].src;
    audioPlayer.play();
  }

  function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
  }
});
