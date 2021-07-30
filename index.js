//問題、選択肢、回答の
const quiz = [
  {
    question: '嵐のメンバーである松本潤の、エアコンの設定温度は？',
    answers: [
      '25',
      '26', 
      '27', 
      '28', 
    ],
    correct: '28',
  },
  {
    question: '嵐の中で唯一東京都出身じゃ無い相葉雅紀の出身地は、千葉県のどこ？',
    answers: [
      '美浜区', 
      '中央区', 
      '千葉市', 
      '市原市',
    ],
    correct: '千葉市',
  },
  {
    question: 'ファイナルファンタジーⅣの主人公の名前は？',
    answers: [
      'フリオニール', 
      'クラウド', 
      'ティーダ', 
      'セシル',
    ],
    correct: 'セシル',
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;


//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
    
  let buttonIndex = 0;
  while(buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();



//ボタンをクリックしたら正誤を判定
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    if (window.confirm('最初の問題に戻りますか？') === true) {
      location.reload();
    }
  }
};


let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}