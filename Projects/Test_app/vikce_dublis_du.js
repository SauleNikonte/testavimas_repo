function getResults() {
    let score = 0;
    const correctAnswers = ['C', 'B', 'A', 'B', 'B'];

    for (let i = 1; i <= 5; i++) {
      const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);

      if (selectedAnswer) {
        if (selectedAnswer.value === correctAnswers[i - 1]) {
          score++;
          document.getElementById('correct-answers').innerHTML += `<li>Klausimas ${i}: Teisingas atsakymas</li>`;
        } else {
          document.getElementById('correct-answers').innerHTML += `<li>Klausimas ${i}: Neteisingas atsakymas</li>`;
        }
      } else {
        document.getElementById('correct-answers').innerHTML += `<li>Klausimas ${i}: Neatsakyta</li>`;
      }
    }


    

    // Rodyti rezultatus
    document.getElementById('results').style.display = 'block';
    document.getElementById('score').innerHTML = `Jūsų rezultatas: ${score} / 5`;
  }