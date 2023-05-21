const clickAudio = new Audio();
const endAudio = new Audio();

export function audioOff() {
  endAudio.volume = 0.0;
  endAudio.autoplay = false;
  clickAudio.volume = 0.0;
  clickAudio.autoplay = false;
}

export default function blockOnClick() {
  clickAudio.src = '/files/click.mp3';
}

export function flagClick(set) {
  clickAudio.src = set ? '/files/flag.mp3' : '/files/flag-off.mp3';
}

export function bombClick() {
  clickAudio.src = '/files/bomb.mp3';
}

export function gameOverSound(isWin) {
  endAudio.src = isWin ? '/files/win.mp3' : '/files/game-over.mp3';
}

export function setAudio() {
  endAudio.volume = 0.3;
  endAudio.autoplay = true;
  clickAudio.volume = 0.3;
  clickAudio.autoplay = true;
}
