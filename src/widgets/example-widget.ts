const toggleActiveClass = (element: HTMLElement): void => {
  element.classList.toggle('is-active');
};

export const initExampleWidget = (): void => {
  if (typeof document === 'undefined') {
    return;
  }

  const targets = document.querySelectorAll<HTMLElement>('[data-example-widget]');

  targets.forEach((el) => {
    el.addEventListener('click', () => toggleActiveClass(el));
  });
};
