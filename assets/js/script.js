const fanmadetype = document.querySelector('[name="type"]');
const fanmadevideos = document.querySelectorAll('.fanmadevideo');
const fanmadeimages = document.querySelectorAll('.fanmadeimage');
const fanmadeother = document.querySelectorAll('.fanmadeanother');

fanmadetype.addEventListener('change', () => {
  fanmadevideos.forEach((fanmadevideo) => {
    console.log(fanmadevideo);
    if (fanmadetype.selectedIndex === 0 || fanmadetype.selectedIndex === 1) {
      fanmadevideo.style.display = "inline";
    } else {
      fanmadevideo.style.display = "none";
    }
  });
  fanmadeimages.forEach((fanmadeimage) => {
    console.log(fanmadeimage);
    if (fanmadetype.selectedIndex === 0 || fanmadetype.selectedIndex === 2) {
      fanmadeimage.style.display = "inline";
    } else {
      fanmadeimage.style.display = "none";
    }
  });
  fanmadeother.forEach((fanmadeanother) => {
    console.log(fanmadeanother);
    if (fanmadetype.selectedIndex === 0 || fanmadetype.selectedIndex === 3) {
      fanmadeanother.style.display = "inline";
    } else {
      fanmadeanother.style.display = "none";
    }
  });
});
