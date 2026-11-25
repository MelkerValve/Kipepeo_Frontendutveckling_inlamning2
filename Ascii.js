function asciiShift(/* text */) {
  var text = document.passwordform.password.value;
  const slumpTal = Math.floor(Math.random() * 21);

  const resultat = text
    .split('')
    .map(tecken => {
      const nyKod = tecken.charCodeAt(0) + slumpTal;
      return String.fromCharCode(nyKod);
    })
    .join('');

  alert(resultat);

  /*return {
    original: text,
    forsjutning: slumpTal,
    resultat: resultat
  }; */
}