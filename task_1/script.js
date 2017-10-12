const relocation = () => {
  let location = window.location.href;
  window.location.replace(location.replace('index.html', `public/index.html`));
}

window.onload = () => setTimeout(relocation.bind(this) , 5000);
