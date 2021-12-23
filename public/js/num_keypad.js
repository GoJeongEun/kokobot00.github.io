var seStart=0, seEnd = 0;
var lastInput = null;

$(function () {
    var drop = '';
    var i = 1;
    for (i;i < 10;i++ ) {
        if (i === 4) {
            drop += '<button class="btn num-btn num-btn-clear">초기화</button>';
        }
        if (i === 7) {
            drop += '<button class="btn num-btn num-btn-phone">-</button>';
        }
        drop += '<button class="btn num-btn">' + i + '</button>';
        if (i === 9) {
            drop += '<button class="btn num-btn num-btn-delete">지우기</button>';
        }
    }
    drop = '<div class="numeric-keypad-box"><div class="number-box">' + drop +
                '<button class="btn num-btn">.</button>' +
                '<button class="btn num-btn">0</button>' +
                '<button class="btn num-btn">00</button>' +
                '<button class="btn num-btn num-btn-push">입력</button>' +
        '</div></div>';
    $('.input-box').append(drop);

    var ins = document.getElementsByClassName('num-input');
    for (i=0;i < ins.length;i++) {
        if (ins[i].type === 'text') {
            ins[i].onfocus = function () {
                input = this;
            }
        }
    }

    $('.num-input').click(function () {
        $(this).next().next().toggle();
    });

    $('.num-btn').click(function () {
        var input = $(this);
        var str = input.val();
        switch ($(this).text()) {
            case '초기화':
                input.val("");
                break;
            case '-':
                if (str.substring(0, 1) == '-') {
                    input.val(str.substring(1));
                } else {
                    input.val(str + "-");
                }
                break;
            case '.':
                var reg = /^\-?\d+$/;
                if (str == '') {
                    input.val("0.");
                } else if (str == '-') {
                    input.val("-0.");
                } else if (reg.test(str)) {
                    input.val(str + ".");
                } else {
                    console.log('not a valid number for point');
                }
                break;
            case '0':
                if (str == '0' || str == '-0') {
                    console.log('0 has exist at first');
                } else {
                    input.val(input.val() + "0");
                }
                break;
            case '지우기':
                if (str == '') {

                } else {
                    input.val(str.substring(0, str.length - 1));
                }
                break;
            case '입력':
                $(this).parent().parent().hide();
                $(input).focus();
                break;
            default:
                var newValue = input.val() + $(this).text();
                input.val(newValue);


        }
    });
});
