// Bank soal (ditambah soal tabel & gambar)
const QUESTIONS = [
  {
    id: 'q1',
    type: 'mcq',
    question: 'Hitung mean dari data: 6, 7, 8, 9, 10',
    choices: ['7', '8', '8.5', '9'],
    answerIndex: 1,
    hint: 'Jumlahkan semua nilai dan bagi banyaknya data.',
    explanation: 'Mean = (6+7+8+9+10) / 5 = 8'
  },
  {
    id: 'q2',
    type: 'mcq',
    question: 'Modus dari data: 6, 7, 8, 8, 9, 10 adalah...',
    choices: ['7', '8', '9', 'Tidak ada'],
    answerIndex: 1,
    hint: 'Modus adalah nilai yang paling sering muncul.',
    explanation: 'Angka 8 muncul dua kali, paling sering.'
  },
  {
    id: 'q3',
    type: 'mcq',
    question: 'Jangkauan dari data: 5, 7, 9, 12, 15 adalah...',
    choices: ['8', '9', '10', '12'],
    answerIndex: 2,
    hint: 'Jangkauan = nilai terbesar − nilai terkecil.',
    explanation: '15 − 5 = 10'
  },
  {
    id: 'q4',
    type: 'tf',
    question: 'Median selalu sama dengan mean.',
    choices: ['Benar', 'Salah'],
    answerIndex: 1,
    hint: 'Coba pikirkan data yang tidak simetris.',
    explanation: 'Tidak selalu. Pada distribusi miring, mean dan median berbeda.'
  },
  {
    id: 'q5',
    type: 'mcq',
    question: 'Kelas dengan frekuensi tertinggi (modus kelas) adalah...',
    choices: ['30–39', '40–49', '50–59', '60–69 (fi tertinggi)'],
    answerIndex: 3,
    hint: 'Modus kelas = kelas dengan fi terbesar.',
    explanation: 'Kelas 60–69 memiliki frekuensi terbesar.'
  },
  {
    id: 'q6',
    type: 'mcq',
    question: 'Median dari data berurutan: 4, 6, 7, 8, 10, 12, 15 adalah...',
    choices: ['7', '8', '9', '10'],
    answerIndex: 1,
    hint: 'Ambil nilai tengah (indeks ke-(n+1)/2).',
    explanation: 'n=7, median data ke-4 yaitu 8.'
  },
  {
    id: 'q7',
    type: 'mcq',
    question: 'Varians (ragam) adalah...',
    choices: [
      'Rata-rata kuadrat selisih setiap data terhadap mean',
      'Nilai tengah data',
      'Selisih data terbesar dan terkecil',
      'Nilai yang paling sering muncul'
    ],
    answerIndex: 0,
    hint: 'Ingat simbol Σ (xi − x̄)² / n.',
    explanation: 'Definisi varians populasi: Σ(xi − x̄)² / n.'
  },
  {
    id: 'q8',
    type: 'mcq',
    question: 'Nilai tengah kelas (xi) untuk kelas 30–39 adalah...',
    choices: ['34.5', '35', '35.5', '36'],
    answerIndex: 0,
    hint: 'Xi = (batas bawah + batas atas) / 2.',
    explanation: 'Xi = (30 + 39)/2 = 34.5.'
  },
  // Soal berbasis tabel frekuensi (table-based)
  {
    id: 'q_table_1',
    type: 'mcq',
    questionHtml:
      "Pilih kategori dengan frekuensi tertinggi dari tabel berikut:" +
      "<div class=\"table-container\" style=\"margin-top:8px;\">" +
      "<table style=\"margin:0 auto; border-collapse:collapse; min-width:260px; background:#181511; color:#fff;\">" +
      "<tr style=\"background:#f7ede2; color:#a97c50;\"><th style=\"padding:6px 12px; border:2px solid #a97c50;\">Kategori</th><th style=\"padding:6px 12px; border:2px solid #a97c50;\">Frekuensi</th></tr>" +
      "<tr><td style=\"border:2px solid #a97c50; padding:4px 10px;\">A</td><td style=\"border:2px solid #a97c50; padding:4px 10px;\">4</td></tr>" +
      "<tr><td style=\"border:2px solid #a97c50; padding:4px 10px;\">B</td><td style=\"border:2px solid #a97c50; padding:4px 10px;\">7</td></tr>" +
      "<tr><td style=\"border:2px solid #a97c50; padding:4px 10px;\">C</td><td style=\"border:2px solid #a97c50; padding:4px 10px;\">11</td></tr>" +
      "<tr><td style=\"border:2px solid #a97c50; padding:4px 10px;\">D</td><td style=\"border:2px solid #a97c50; padding:4px 10px;\">6</td></tr>" +
      "</table></div>",
    question: '',
    choices: ['A', 'B', 'C', 'D'],
    answerIndex: 2,
    hint: 'Lihat baris dengan angka frekuensi paling besar.',
    explanation: 'Kategori C memiliki frekuensi 11 (tertinggi).'
  },
  // Soal berbasis grafik (SVG sederhana)
  {
    id: 'q_chart_1',
    type: 'mcq',
    questionHtml:
      "Dari diagram batang berikut, kategori mana yang tertinggi?" +
      "<div style=\"background:#fff; padding:10px; border-radius:10px; margin-top:8px;\">" +
      "<svg viewBox=\"0 0 220 140\" width=\"100%\" height=\"140\">" +
      "<rect x=\"0\" y=\"0\" width=\"220\" height=\"140\" fill=\"#ffffff\"/>" +
      "<g transform=\"translate(30,10)\">" +
      "<rect x=\"0\"   y=\"60\" width=\"30\" height=\"70\" fill=\"#a97c50\"/>" +
      "<text x=\"15\" y=\"135\" text-anchor=\"middle\" fill=\"#23201c\">A</text>" +
      "<rect x=\"50\"  y=\"40\" width=\"30\" height=\"90\" fill=\"#a97c50\"/>" +
      "<text x=\"65\" y=\"135\" text-anchor=\"middle\" fill=\"#23201c\">B</text>" +
      "<rect x=\"100\" y=\"20\" width=\"30\" height=\"110\" fill=\"#a97c50\"/>" +
      "<text x=\"115\" y=\"135\" text-anchor=\"middle\" fill=\"#23201c\">C</text>" +
      "<rect x=\"150\" y=\"50\" width=\"30\" height=\"80\" fill=\"#a97c50\"/>" +
      "<text x=\"165\" y=\"135\" text-anchor=\"middle\" fill=\"#23201c\">D</text>" +
      "</g></svg></div>",
    question: '',
    choices: ['A', 'B', 'C', 'D'],
    answerIndex: 2,
    hint: 'Pilih batang yang paling tinggi.',
    explanation: 'Batang C paling tinggi dibanding A, B, dan D.'
  },
  {
    id: 'q9',
    type: 'mcq',
    question: 'Dari tabel frekuensi, kategori dengan batang tertinggi adalah...',
    choices: ['A', 'B', 'C', 'D'],
    answerIndex: 2,
    hint: 'Pilih kategori dengan frekuensi paling besar.',
    explanation: 'Contoh placeholder: C memiliki batang tertinggi.'
  },
  {
    id: 'q10',
    type: 'mcq',
    question: 'Varians populasi untuk data 5, 7, 9 adalah...',
    choices: ['2', '2.67', '3', '4'],
    answerIndex: 1,
    hint: 'Hitung mean lalu Σ(xi−x̄)² / n.',
    explanation: 'x̄=7; ((5−7)²+(7−7)²+(9−7)²)/3 = 8/3 = 2.67.'
  }
];

// Elemen UI
const elQuestion = document.getElementById('quiz-question');
const elChoices = document.getElementById('quiz-choices');
const elExplanation = document.getElementById('quiz-explanation');
const elStep = document.getElementById('quiz-step');
const elTotal = document.getElementById('quiz-total');
const elTimer = document.getElementById('quiz-timer');
const btnNext = document.getElementById('btnNext');
const btnHint = document.getElementById('btnHint');

// State
let current = 0;
let score = 0;
let revealed = false;
let order = [];
let timerId = null;
let timeLeft = 0;
let finished = false;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startQuiz() {
  order = shuffle([...Array(QUESTIONS.length).keys()]);
  elTotal.textContent = QUESTIONS.length;
  current = 0;
  score = 0;
  finished = false;
  btnNext.textContent = 'Jawab & Lanjut';
  loadQuestion();
  startTimer(0); // mode tanpa timer total, gunakan 0 untuk nonaktif
}

function startTimer(seconds) {
  clearInterval(timerId);
  if (!seconds || seconds <= 0) {
    elTimer.textContent = '';
    return;
  }
  timeLeft = seconds;
  elTimer.textContent = `${timeLeft}s`;
  timerId = setInterval(() => {
    timeLeft -= 1;
    elTimer.textContent = `${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      revealAnswer();
    }
  }, 1000);
}

function loadQuestion() {
  revealed = false;
  elExplanation.hidden = true;
  elExplanation.textContent = '';
  elChoices.innerHTML = '';
  const q = QUESTIONS[order[current]];
  elStep.textContent = String(current + 1);
  // Render pertanyaan: dukung plain text (question) atau HTML (questionHtml)
  if (q.questionHtml && q.questionHtml.length) {
    elQuestion.innerHTML = q.questionHtml;
  } else {
    elQuestion.textContent = q.question;
  }

  q.choices.forEach((choice, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'quiz-choice';
    btn.textContent = choice;
    btn.onclick = () => selectChoice(idx);
    elChoices.appendChild(btn);
  });
}

let selectedIndex = null;
function selectChoice(idx) {
  if (revealed) return;
  selectedIndex = idx;
  [...elChoices.children].forEach((c, i) => {
    c.classList.toggle('selected', i === idx);
  });
}

function revealAnswer() {
  const q = QUESTIONS[order[current]];
  revealed = true;
  [...elChoices.children].forEach((c, i) => {
    c.classList.remove('selected');
    if (i === q.answerIndex) c.classList.add('correct');
    else if (i === selectedIndex) c.classList.add('wrong');
  });
  if (selectedIndex === q.answerIndex) score += 1;
  elExplanation.hidden = false;
  elExplanation.innerHTML = `<b>Penjelasan:</b> ${q.explanation}`;
}

btnNext.addEventListener('click', function () {
  if (finished) {
    // Mulai ulang quiz
    selectedIndex = null;
    startQuiz();
    return;
  }
  const q = QUESTIONS[order[current]];
  if (!revealed) {
    // Jika belum di-reveal, reveal dulu
    revealAnswer();
    this.textContent = (current === QUESTIONS.length - 1) ? 'Lihat Hasil' : 'Lanjut';
  } else {
    // Lanjut ke soal berikutnya
    current += 1;
    if (current >= QUESTIONS.length) {
      showResult();
      return;
    }
    this.textContent = 'Jawab & Lanjut';
    selectedIndex = null;
    loadQuestion();
  }
});

btnHint.addEventListener('click', function () {
  const q = QUESTIONS[order[current]];
  if (q.hint) {
    elExplanation.hidden = false;
    elExplanation.innerHTML = `<b>Hint:</b> ${q.hint}`;
  }
});

function showResult() {
  elQuestion.textContent = 'Hasil Quiz';
  elChoices.innerHTML = '';
  elExplanation.hidden = false;
  const percent = Math.round((score / QUESTIONS.length) * 100);
  const best = Number(localStorage.getItem('quiz_best') || 0);
  const newBest = Math.max(best, percent);
  localStorage.setItem('quiz_best', String(newBest));
  elExplanation.innerHTML = `
    Skor kamu: <b>${score}</b> dari ${QUESTIONS.length} (${percent}%)<br>
    Skor terbaik: <b>${newBest}%</b>
  `;
  btnNext.textContent = 'Main Lagi';
  finished = true;
}

// Mulai
startQuiz();


