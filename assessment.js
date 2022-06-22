'use strict';
/*  ↑宣言後の記述ミスをエラーとして表示するよ */
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('reslt-area');
const tweetDivided = document.getElementById('tweet-area');


assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {
      // 名前が空の時は処理を終了する
      return;
    }

    // 診断結果表示エリアの作成
    resultDivided.innerText = "";
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);
  
    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

    // TODO ツイートエリアの作成
 tweetDivided.innerText = "";
 const anchor = document.createElement('a');
 const hrefValue =
 'https://twitter.com/intent/tweet?button_hashtag='
  + encodeURIComponent('あなたのいいところ') + '&ref_src=twsrc%5Etfw';

 anchor.setAttribute('href', hrefValue);
 anchor.className = 'twitter-hashtag-button';
 anchor.setAttribute('data-text', result);
 anchor.innerText = 'tweet #あなたのいいところ';
 tweetDivided.appendChild(anchor);

 const script = document.createElement('script');
 script.setAttribute('src', 'http://platform.twitter.com/widgets.js');
 tweetDivided.appendChild(script);
};
const answers= [
    /*constは定数。一度決めたら変えられない */
'{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
'{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
'{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
'{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
'{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
'{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
'{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
'{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
'{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
'{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
'{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
'{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
'{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
'{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
'{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
'{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。'
'{userName}のいいところは優しさです。{userName}の優しい雰囲気や立ち振る舞いに多くの人が癒やされています。'
];
/*名前の文字列を渡すと診断結果を返す関数
@param{string} ユーザネーム
@return{strig}診断結果 */
function assessment(userName){

    /*同じ名前なら同じ診断結果になるよう。
    →文字コードの番号を足す
    →診断結果のパターンの数で割った
        あまりを添え字として診断結果の文字列を取得*/
    //文字列を取得し、合計を出す
    let sumOfCharCode = 0;
    for(let i = 0; i < userName.length; i++){
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }
    //文字コードの番号の合計を解答の数で割って添え字の数字にする
   const index = sumOfCharCode % answers.length;
   let result = answers[index];
   
   result = result.replaceAll('{userName}',userName); 
   return result;
}

//テストコード
//console.log(assessment('太郎'));

console.assert(assessment('太郎')===  '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
'診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。');
//引数に指定した条件式がfalseの場合だけコンソールにログを出力

console.assert(
    assessment('太郎') === assessment('太郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  );
  //「入力が同じ名前なら、同じ診断結果を出力する」処理が正しいか

