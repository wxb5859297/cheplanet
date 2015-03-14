$(function () {
    var content = $('.content'),
        wencai_desc = $('.wencai_desc');
    $('.btn_1').mouseenter(function () {
        content.attr('src', 'style/image/desc_2.png');
    }).mouseleave(function () {
        content.attr('src', 'style/image/desc_1.png');
    }).click(function(){
        window.open('https://itunes.apple.com/cn/app/tong-hua-shun-chao-gu-gu-piao/id303191318?mt=8');
    });

    $('.btn_2').mouseenter(function () {
        content.attr('src', 'style/image/desc_3.png');
    }).mouseleave(function () {
        content.attr('src', 'style/image/desc_1.png');
    }).click(function(){
        window.open('http://www.10jqka.com.cn/ad_mar/ad_free/130401/');
    });

    $('.btn_3').mouseenter(function () {
        wencai_desc.attr('src', 'style/image/wencai-app2.png');
    }).mouseleave(function () {
        wencai_desc.attr('src', 'style/image/wencai-app1.png');
    }).click(function(){
        window.open('https://itunes.apple.com/cn/app/xuan-gu-zhu-shou-mian-fei/id581439853?mt=8');
    });
});