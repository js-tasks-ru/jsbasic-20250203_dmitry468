function hideSelf() {
  const button = document.querySelector('.hide-self-button');
    if (!button) {
      return;
    }

    button.addEventListener(
      'click',
      () => {button.setAttribute('hidden', 'true');},
      {once: true}
    )
}
