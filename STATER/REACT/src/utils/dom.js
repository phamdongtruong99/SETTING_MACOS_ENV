export const hide = (...el) =>
  [...el].forEach((e) => (e.style.display = 'none'));

// hide(document.querySelectorAll('img')); Hides all <img> elements on the page

export const hasClass = (el, className) => el.classList.contains(className);

// hasClass(document.querySelector('p.special'), 'special'); // true

export const toggleClass = (el, className) => el.classList.toggle(className);

// toggleClass(document.querySelector('p.special'), 'special');

export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
});

// getScrollPosition(); // {x: 0, y: 200}

export const getTargetElement = (
  target,
  defaultElement,
) => {
  if (!target) {
    return defaultElement;
  }

  let targetElement;

  if (typeof target === 'function') {
    targetElement = target();
  } else if ('current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }

  return targetElement;
}



export const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

// elementIsVisibleInViewport(el); // (not fully visible)
// elementIsVisibleInViewport(el, true); // (partially visible)

export const getImages = (el, includeDuplicates = false) => {
  const images = [...el.getElementsByTagName('img')].map((img) =>
    img.getAttribute('src'),
  );
  return includeDuplicates ? images : [...new Set(images)];
};

// getImages(document, true); // ['image1.jpg', 'image2.png', 'image1.png', '...']
// getImages(document, false); // ['image1.jpg', 'image2.png', '...']

export const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
    ? 'Mobile'
    : 'Desktop';

// detectDeviceType(); // "Mobile" or "Desktop"

export const triggerEvent = (el, eventType, detail) =>
  el.dispatchEvent(new CustomEvent(eventType, { detail }));

// triggerEvent(document.getElementById('myId'), 'click');
