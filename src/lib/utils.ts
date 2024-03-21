import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// this code is from https://stackoverflow.com/questions/45576748/how-can-i-detect-rendering-support-for-emoji-in-javascript
// don't know how it works under the hood, but it gets the job done
// please don't mindlessly copy
export function supportsEmojiIcons() {
  const canvas = document.createElement('canvas');
  canvas.height = 10;
  canvas.width = canvas.height * 2;

  const ctx = canvas.getContext('2d')!;
  ctx.font = canvas.height + 'px Arial';
  ctx.fillText('🇬🇧', 0, canvas.height);

  const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  let i = 0;
  while (i < data.length) {
    if (data[i] !== data[i + 1] || data[i] !== data[i + 2]) return true;
    i += 4;
  }

  return false;
}
