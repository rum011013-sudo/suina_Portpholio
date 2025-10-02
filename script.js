// ウェブページが完全に読み込まれた後に実行される関数
document.addEventListener('DOMContentLoaded', function() {
    console.log("ポートフォリオサイトが正常に読み込まれました。");

    // 例: 作品セクションのh2要素の色をマウオーバーで変更する機能
    const worksTitle = document.querySelector('#works h2');

    if (worksTitle) {
        worksTitle.addEventListener('mouseover', function() {
            worksTitle.style.color = '#e74c3c'; // ホバーで赤色に
        });

        worksTitle.addEventListener('mouseout', function() {
            worksTitle.style.color = '#333'; // 元の色に戻す
        });
    }

    // ここにハンバーガーメニュー、スムーススクロールなどの処理を記述します。
});
