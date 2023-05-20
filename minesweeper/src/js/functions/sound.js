export default function blockOnClick() {
  const audio = new Audio();
  audio.src = '/files/click.mp3';
  audio.volume = 0.4;
  audio.autoplay = true;
}

export function flagClick(set) {
  const audio = new Audio();
  audio.src = set ? '/files/flag.mp3' : '/files/flag-off.mp3';
  audio.volume = 0.3;
  audio.autoplay = true;
}

export function bombClick() {
  const audio = new Audio();
  audio.src = '/files/bomb.mp3';
  audio.volume = 0.3;
  audio.autoplay = true;
}

export function gameOverSound(isWin) {
  const audio = new Audio();
  audio.src = isWin ? '/files/win.mp3' : '/files/game-over.mp3';
  audio.volume = 0.2;
  audio.autoplay = true;
}
