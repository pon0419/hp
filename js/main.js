jQuery(document).ready(function($) {
    "use strict";

    // メニューセクションのカルーセル初期化
    $('#menu-carousel').owlCarousel({
        loop: true,         // ループ再生
        center: true,       // 現在のアイテムを中央に配置
        items: 3,           // 一度に表示するアイテム数
        margin: 20,         // アイテム間の余白
        autoplay: true,     // 自動再生
        dots: true,         // ドットナビゲーションの表示
        autoplayTimeout: 2500, // 自動再生の間隔（ミリ秒）
        smartSpeed: 800,    // アニメーション速度
        responsive: {
            0: {
                items: 1,
                margin: 0 // モバイルでは余白をなくす
            },
            768: {
                items: 2,
                margin: 10 // タブレットでは少し余白
            },
            1170: {
                items: 3,
                margin: 20 // PCではデフォルトの余白
            }
        }
    });
});

