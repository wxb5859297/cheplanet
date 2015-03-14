/**
 * self.js
 */
$(function () {

    var ths_bg = $('#part3 .ths-bg'),
        btn1 = $('#part3 .btn-1'),
        btn2 = $('#part3 .btn-2'),
        wen_bg = $('#part4 .ths-bg'),
        wen_btn1 = $('#part4 .btn-1'),
        wen_btn2 = $('#part4 .btn-2'),
        ths_pc = 'http://www.10jqka.com.cn/ad_mar/ad_free/130401/',
        ths_app = 'http://mobile.10jqka.com.cn/',
        wen_app = 'https://itunes.apple.com/cn/app/xuan-gu-zhu-shou-mian-fei/id581439853?mt=8',
        wen_url = 'http://www.iwencai.com/';

    btn1.mouseenter(function () {
        ths_bg.attr('src', 'style/image/self/ths_b1.png');
    }).mouseleave(function () {
        ths_bg.attr('src', 'style/image/self/ths_b2.png');
    }).click(function () {
        window.open(ths_app);
    });
    btn2.mouseenter(function () {
        ths_bg.attr('src', 'style/image/self/ths_b3.png');
    }).mouseleave(function () {
        ths_bg.attr('src', 'style/image/self/ths_b2.png');
    }).click(function () {
        window.open(ths_pc);
    });

    wen_btn1.mouseenter(function () {
        wen_bg.attr('src', 'style/image/self/wen_b3.png');
    }).mouseleave(function () {
        wen_bg.attr('src', 'style/image/self/wen_b2.png');
    }).click(function () {
        window.open(wen_url);
    });
    wen_btn2.mouseenter(function () {
        wen_bg.attr('src', 'style/image/self/wen_b1.png');
    }).mouseleave(function () {
        wen_bg.attr('src', 'style/image/self/wen_b2.png');
    }).click(function () {
        window.open(wen_app);
    });

    (function () {
        var index = 0,
            last_index = -1,
            ul = $('#part5 ul'),
            images = $('#part5 .big-img li'),
            images_length = images.length,
            btn_prev = $('#part5 .big-img .previous'),
            btn_next = $('#part5 .big-img .next'),
            small_btn = $('#part5 .small-img-btn img'),
            show = function () {
                if (index >= 0) {
                    if (last_index !== -1 && last_index >= 0) {
                        ul.animate({'left':-index*680});
                    }
                    small_btn.removeClass('check');
                    small_btn.eq(index).addClass('check');
                }
            },
            change_index = function (num) {
                if (num == 1 || num == -1) {
                    if (num > 0 && (index + num) < images_length) {
                        last_index = index;
                        index += num;
                        return true;
                    }
                    if (num > 0 && (index + num) == images_length) {
                        last_index = index;
                        index = 0;
                        return;
                    }
                    if (num < 0 && (index + num) >= 0) {
                        last_index = index;
                        index += num;
                        return;
                    }
                    if (num < 0 && (index + num) == -1) {
                        last_index = index;
                        index = images_length - 1;
                        return;
                    }
                }
                return;
            };

        btn_next.click(function () {
            change_index(1);
            show();
        });

        btn_prev.click(function () {
            change_index(-1);
            show();
        });

        small_btn.click(function () {
            var id = $(this).attr('data-id');
            id = parseInt(id);
            if (id !== undefined) {
                last_index = index;
                index = id;
                show();
            }
        });
    })();

    (function () {
        var index = 0,
            last_index = -1,
            ul = $('#part6 ul'),
            images = $('#part6 .big-img li'),
            images_length = images.length,
            btn_prev = $('#part6 .big-img .previous'),
            btn_next = $('#part6 .big-img .next'),
            small_btn = $('#part6 .small-img-btn img'),
            show = function () {
                if (index >= 0) {
                    if (last_index !== -1 && last_index >= 0) {
                        ul.animate({'left':-index*680});
                    }
                    small_btn.removeClass('check');
                    small_btn.eq(index).addClass('check');
                }
            },
            change_index = function (num) {
                if (num == 1 || num == -1) {
                    if (num > 0 && (index + num) < images_length) {
                        last_index = index;
                        index += num;
                        return true;
                    }
                    if (num > 0 && (index + num) == images_length) {
                        last_index = index;
                        index = 0;
                        return;
                    }
                    if (num < 0 && (index + num) >= 0) {
                        last_index = index;
                        index += num;
                        return;
                    }
                    if (num < 0 && (index + num) == -1) {
                        last_index = index;
                        index = images_length - 1;
                        return;
                    }
                }
                return;
            };

        btn_next.click(function () {
            change_index(1);
            show();
        });

        btn_prev.click(function () {
            change_index(-1);
            show();
        });

        small_btn.click(function () {
            var id = $(this).attr('data-id');
            id = parseInt(id);
            if (id !== undefined) {
                last_index = index;
                index = id;
                show();
            }
        });
    })();

    (function () {
        var index = 0,
            last_index = -1,
            ul = $('#part7 ul'),
            images = $('#part7 .big-img li'),
            images_length = images.length,
            btn_prev = $('#part7 .big-img .previous'),
            btn_next = $('#part7 .big-img .next'),
            small_btn = $('#part7 .small-img-btn img'),
            show = function () {
                if (index >= 0) {
                    if (last_index !== -1 && last_index >= 0) {
                        ul.animate({'left':-index*680});
                    }
                    small_btn.removeClass('check');
                    small_btn.eq(index).addClass('check');
                }
            },
            change_index = function (num) {
                if (num == 1 || num == -1) {
                    if (num > 0 && (index + num) < images_length) {
                        last_index = index;
                        index += num;
                        return true;
                    }
                    if (num > 0 && (index + num) == images_length) {
                        last_index = index;
                        index = 0;
                        return;
                    }
                    if (num < 0 && (index + num) >= 0) {
                        last_index = index;
                        index += num;
                        return;
                    }
                    if (num < 0 && (index + num) == -1) {
                        last_index = index;
                        index = images_length - 1;
                        return;
                    }
                }
                return;
            };

        btn_next.click(function () {
            change_index(1);
            show();
        });

        btn_prev.click(function () {
            change_index(-1);
            show();
        });

        small_btn.click(function () {
            var id = $(this).attr('data-id');
            id = parseInt(id);
            if (id !== undefined) {
                last_index = index;
                index = id;
                show();
            }
        });
    })();

    (function () {
        var index = 0,
            last_index = -1,
            ul = $('#part8 ul'),
            images = $('#part8 .big-img li'),
            images_length = images.length,
            btn_prev = $('#part8 .big-img .previous'),
            btn_next = $('#part8 .big-img .next'),
            small_btn = $('#part8 .small-img-btn img'),
            show = function () {
                if (index >= 0) {
                    if (last_index !== -1 && last_index >= 0) {
                        ul.animate({'left':-index*680});
                    }
                    small_btn.removeClass('check');
                    small_btn.eq(index).addClass('check');
                }
            },
            change_index = function (num) {
                if (num == 1 || num == -1) {
                    if (num > 0 && (index + num) < images_length) {
                        last_index = index;
                        index += num;
                        return true;
                    }
                    if (num > 0 && (index + num) == images_length) {
                        last_index = index;
                        index = 0;
                        return;
                    }
                    if (num < 0 && (index + num) >= 0) {
                        last_index = index;
                        index += num;
                        return;
                    }
                    if (num < 0 && (index + num) == -1) {
                        last_index = index;
                        index = images_length - 1;
                        return;
                    }
                }
                return;
            };

        btn_next.click(function () {
            change_index(1);
            show();
        });

        btn_prev.click(function () {
            change_index(-1);
            show();
        });

        small_btn.click(function () {
            var id = $(this).attr('data-id');
            id = parseInt(id);
            if (id !== undefined) {
                last_index = index;
                index = id;
                show();
            }
        });
    })();
});