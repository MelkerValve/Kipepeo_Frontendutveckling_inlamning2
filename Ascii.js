function ascii(/* text */) {
  var text = document.passwordform.password.value;
  const slumpTal = Math.floor(Math.random() * 94) + 32;

  const shifted = text
    .split('')
    .map(tecken => {
      const nyKod = 32 + ((tecken.charCodeAt(0) - 32 + slumpTal) % 95);
      return String.fromCharCode(nyKod);
    })
    .join('');

  const result = String.fromCharCode(slumpTal) + shifted;

  return result;
}