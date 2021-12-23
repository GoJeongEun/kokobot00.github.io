$(document).ready(function () {
    //우측테이블 더보기 동작
    var info_stat = 0;
    $(".right-side").click(function () {
    if (info_stat == 0) {
      $(this).find('.inner-box').height('calc(92px + (24px * 6))');
      $(this).find('.tablerow').height('calc(48px + (24px * 6))');
      $(this).find('form').css('margin-top', '0px');
      $(this).addClass('open');
      info_stat = 1;
    } else if(info_stat == 1){
      $(this).find('.inner-box').height('58px !important');
      $(this).find('form').css('margin-top', '-27px');
      $(this).find('.tablerow').height('48px');
      $(this).removeClass('open');
      info_stat = 0;
    }
  });
  $(".right-side>.row").click(function (event) {
    event.stopPropagation();
  });

  //상단 메인메뉴 동작
  $("#under-navbar>ul>li").click(function () {
    var num = $(this).index();
    $(".after_tri").removeClass("active").parent("li").removeClass("active");
    $(this).find(".after_tri").addClass("active").parent("li").addClass("active");
    $("#sub-navbar>ul").removeClass("active");
    $("#sub-navbar>ul").eq(num).addClass("active");
  });

  //서서브>프로그레스바1 동작
  $(".nav-second-level>li").click(function () {
    var num = $(this).index();
    $('.prog1-active').removeClass('prog1-active');
    $(this).children('a').addClass('prog1-active');
    $(".prog1").removeClass("active").eq(num).addClass("active");

    // $(this).children('ul').children('li:first-of-type').addClass('prog2-active');
    // $(".nav-third-level>li:fitst-of-type").addClass('prog2-active');
    // $(".nav-third-level").children('li:first-of-type').addClass('prog2-active');
  });

  //프로그레스바2 동작
  $(".nav-third-level>li").click(function () {
    // alert(num+'/'+num2);
    $(this).parent().children('li').removeClass('prog2-active');
    $(this).addClass('prog2-active');
    var num = $(this).parent().parent().index();
    var num2 = $(this).index();
    $(".prog1").eq(num).children(".prog2").removeClass("active");
    $(".prog1").eq(num).children(".prog2").eq(num2).addClass("active");
  });
  
  
  
  
});


//하단테이블 행추가 onclick 구조개선 필수 혹은 타뷸레이터 내장 기능으로 대체
function rowAdd(btn) {
  var target = $(btn).parents('thead').next('tbody');
  var clone = $(target).children('tr:last-of-type').clone();
  clone.find('input').val("");
  clone.appendTo(target);
}
// 하단테이블 한줄삭제
function rowDelete(btn) {
  var num = $(btn).parents('tbody').children('tr').length;
  if (num > 1) {
    $(btn).closest('tr').remove();
  }
}

// 달력

$('.datetime').daterangepicker({
  "locale": {
    "format": "YYYY-MM-DD hh:mm A",
    "separator": " ~ ",
    "applyLabel": "확인",
    "cancelLabel": "취소",
    "fromLabel": "From",
    "toLabel": "To",
    "customRangeLabel": "Custom",
    "weekLabel": "W",
    "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
    "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
  },
  "showDropdowns": true,
  "singleDatePicker": true,
  "timePicker": true,
  "drops": "auto"
});

$('.date').daterangepicker({
  "locale": {
    "format": "YYYY-MM-DD",
    "separator": " ~ ",
    "applyLabel": "확인",
    "cancelLabel": "취소",
    "fromLabel": "From",
    "toLabel": "To",
    "customRangeLabel": "Custom",
    "weekLabel": "W",
    "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
    "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
  },
  "showDropdowns": true,
  "singleDatePicker": true,
  "drops": "auto"
});


$('.time').daterangepicker({
  timePicker: true,
  // timePicker24Hour: true,
  timePickerIncrement: 1,
  // timePickerSeconds: true,
  singleDatePicker: true,
  locale: {
      format: 'HH:mm',
      applyLabel: "확인",
      cancelLabel: "취소",
  }
}).on('show.daterangepicker', function (ev, picker) {
  picker.container.find(".calendar-table").hide();
});

// 달력 기간용
$('.daterange').daterangepicker({
  "locale": {
    "format": "YYYY-MM-DD",
    "separator": " ~ ",
    "applyLabel": "확인",
    "cancelLabel": "취소",
    "fromLabel": "From",
    "toLabel": "To",
    "customRangeLabel": "Custom",
    "weekLabel": "W",
    "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
    "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
  },
  "showDropdowns": true,
  "drops": "auto"
});


//검색창 X버튼
$(function () {
  $("#search-word").on('input', function () {
    if ($("#search-word").val() != '') {
      $("#close-btn").show();
    }
  });
})
$(document).ready(function () {
  $("#close-btn").click(function () {
    $("#search-word").val('');
    $(this).hide();
  });
});



$(document).ready(function () {
  $(".area-table").hide();
  $("#flat-table").show();
  var clickBtn = $('.tabletop-btn button');
  clickBtn.click(function () {
    var indexNo = $(this).index();
    $(".area-table").hide();
    $('.area-table').eq(indexNo).show();
  })
});

$(document).ready(function () {
  $("#newbtn-system").click(function () {
    $("#newbtn-system-pop").show();
  });
  $("#newbtn-injeung").click(function () {
    $("#newbtn-injeung-pop").show();
  });
  $("#newbtn-car").click(function () {
    $("#newbtn-car-pop").show();
  });
  $("#newbtn-worker").click(function () {
    $("#newbtn-worker-pop").show();
  });

  $(".popup-close-btn").click(function () {
    $(".popup-window").hide();
  });

});

