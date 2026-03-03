const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const phrases = [
  "mau sampe kapan kmu cuekin aku kaya gini?",
  "aku gabisa di cuekin lama' ama kmu,aku kangen kmu.",
  "aku minta maaf klo kemaren bercandanya udah kelewatan.",
  "aku gabakal ngulangin kaya gitu lagi,bales dm dari aku,aku kangen kmu.",
];

const textDiv = document.getElementById("text");
let index = 0;

function typeSentence(sentence, i = 0) {
  if (i < sentence.length) {
    textDiv.innerHTML += sentence.charAt(i);
    setTimeout(() => typeSentence(sentence, i + 1), 40);
  }
}

function showNextPhrase() {
  textDiv.innerHTML = "";
  typeSentence(phrases[index]);
  index = (index + 1) % phrases.length;
}

// Initial typing
showNextPhrase();

// Change phrase on click
document.body.addEventListener("click", showNextPhrase);
