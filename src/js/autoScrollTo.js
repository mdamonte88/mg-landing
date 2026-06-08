let scrollY = 0;
const distance = 800;
const speed = 24;
let scrollRunning = false;
let currentY = 0;
let sectionScrolled = 0;
let $scrollTimeCalculated = 0;

export function autoScrollTo(element, callback) {
  const el = document.getElementById(element);
  const targetY = el && el.offsetTop;
  console.debug('auto');
  const $scrollTime = 800;
  debugger;

  /* const bodyHeight = document.body.offsetHeight;
  const yPos = currentY + window.innerHeight; */
  if (!scrollRunning) {
    scrollRunning = true;
    currentY = window.pageYOffset;
    console.debug(targetY);
    if (targetY >= currentY) {
      sectionScrolled = (targetY - currentY) / 600;
    } else {
      sectionScrolled = (currentY - targetY) / 600;
    }
    console.debug(sectionScrolled);

    /* var animator = setTimeout('autoScrollTo(\''+el+'\')',24); */
    $scrollTimeCalculated = $scrollTime * sectionScrolled;
    $('html, body').animate({
      scrollTop: targetY
    }, $scrollTimeCalculated, () => {
      scrollRunning = false;
      if (callback) {
        callback();
      }
    });
  }
}

export function resetScroller(element) {
  const currentY = window.pageYOffset;
  const el = document.getElementById(element);
  const targetY = el && el.offsetTop;
  const animator = setTimeout(() => {
    resetScroller(el);
    // `resetScroller('${el}')`
  }, speed);
  if (currentY > targetY) {
    scrollY = currentY - distance;
    window.scroll(0, scrollY);
  } else {
    clearTimeout(animator);
  }
}
