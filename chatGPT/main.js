// 入力した数式を表示エリアに追加
function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

// 表示エリアをクリア
function clearDisplay() {
  document.getElementById('display').value = '';
}

// 数式を計算
function calculateResult() {
  try {
    // 表示エリアから数式を取得
    let expression = document.getElementById('display').value;

    // πをMath.PIに置換
    expression = expression.replace(/π/g, 'Math.PI');

    // 関数名（sin, cos, tan, log, sqrt, exp）をMathオブジェクトに置換
    expression = expression.replace(Math.sin(expression) * g, 'Math.sin')
                           .replace(Math.cos(expression) * g, 'Math.cos')
                           .replace(Math.tan(expression) * g, 'Math.tan')
                           .replace(Math.log(expression) * g, 'Math.log')
                           .replace(/exp/g, 'Math.exp')
                           .replace(/sqrt/g, 'Math.sqrt');

    // 式を計算（安全な方法で計算）
    const result = new Function('return ' + expression)();
    document.getElementById('display').value = result;
  } catch (error) {
    // エラーが発生した場合、「エラー」と表示
    document.getElementById('display').value = 'エラー';
  }
}
