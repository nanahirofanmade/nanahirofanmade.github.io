const mainelement = document.querySelector('main');

const feedin = {
  translate: ['0 160px', 0],
};
const easeout = {
  duration: 200,
  easing: 'cubic-bezier(0,.8,.2,1)',
};

mainelement.animate({
  opacity: [0, 1],
}, 200);
mainelement.animate(feedin, easeout);

const fanmadetype = document.querySelector('[name="type"]');
const fanmadenotfound = document.querySelector('#notfound');
const fanmadevideos = document.querySelectorAll('.fanmadevideo');
const fanmadeimages = document.querySelectorAll('.fanmadeimage');
const fanmadeother = document.querySelectorAll('.fanmadeanother');

fanmadenotfound.style.display = "none";

fanmadetype.addEventListener('change', () => {
  fanmadevideos.forEach((fanmadevideo) => {
    if (fanmadetype.selectedIndex === 0 || fanmadetype.selectedIndex === 1) {
      fanmadevideo.style.display = "inline";
    } else {
      fanmadevideo.style.display = "none";
    }
  });
  fanmadeimages.forEach((fanmadeimage) => {
    if (fanmadetype.selectedIndex === 0 || fanmadetype.selectedIndex === 2) {
      fanmadeimage.style.display = "inline";
    } else {
      fanmadeimage.style.display = "none";
    }
  });
  fanmadeother.forEach((fanmadeanother) => {
    if (fanmadetype.selectedIndex === 0 || fanmadetype.selectedIndex === 3) {
      fanmadeanother.style.display = "inline";
    } else {
      fanmadeanother.style.display = "none";
    }
  });
  if (fanmadetype.selectedIndex === 2 || fanmadetype.selectedIndex === 3) {
    fanmadenotfound.style.display = "inline";
  } else {
    fanmadenotfound.style.display = "none";
  }
});
