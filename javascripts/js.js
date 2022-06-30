$(function(){
  $(".txt1").hover(function(){
    $(".main1bg").css("opacity","1");
  }, function(){
    $(".main1bg").css("opacity","0");
  });
});
$(function(){
  $(".txt2").hover(function(){
    $(".main2bg").css("opacity","1");
  }, function(){
    $(".main2bg").css("opacity","0");
  });
});
$(function(){
  $(".txt3").hover(function(){
    $(".main3bg").css("opacity","1");
  }, function(){
    $(".main3bg").css("opacity","0");
  });
});
$(function(){
  $(".txt4").hover(function(){
    $(".main4bg").css("opacity","1");
  }, function(){
    $(".main4bg").css("opacity","0");
  });
});
$(function(){
  $(".txt5").hover(function(){
    $(".main5bg").css("opacity","1");
  }, function(){
    $(".main5bg").css("opacity","0");
  });
});
$(function(){
  $(".txt6").hover(function(){
    $(".main6bg").css("opacity","1");
  }, function(){
    $(".main6bg").css("opacity","0");
  });
});
$(function(){
  $(".txt7").hover(function(){
    $(".main7bg").css("opacity","1");
  }, function(){
    $(".main7bg").css("opacity","0");
  });
});
$(function(){
  $(".logo").hover(function(){
    $(".main1bg,.main2bg,.main3bg,.main4bg,.main5bg,.main6bg,.main7bg").css("opacity","1");
  }, function(){
    $(".main1bg,.main2bg,.main3bg,.main4bg,.main5bg,.main6bg,.main7bg").css("opacity","0");
  });
});
$(function() {
	$('.kek').draggable();
});
$(function() {
	$('.kek2').draggable();
});
$(function(){
  $(".merch1").hover(function(){
    $(".box1").removeClass("glitch2");
  }, function(){
    $(".box1").addClass("glitch2");
  });
});
$(function(){
  $(".merch2").hover(function(){
    $(".box2").removeClass("glitch2");
  }, function(){
    $(".box2").addClass("glitch2");
  });
});
$(function(){
  $(".merch3").hover(function(){
    $(".box3").removeClass("glitch2");
  }, function(){
    $(".box3").addClass("glitch2");
  });
});$(function(){
  $(".merch4").hover(function(){
    $(".box4").removeClass("glitch2");
  }, function(){
    $(".box4").addClass("glitch2");
  });
});$(function(){
  $(".merch5").hover(function(){
    $(".box5").removeClass("glitch2");
  }, function(){
    $(".box5").addClass("glitch2");
  });
});
$(function(){
  $(".merch6").hover(function(){
    $(".box6").removeClass("glitch2");
  }, function(){
    $(".box6").addClass("glitch2");
  });
});
$(function(){
  $(".merch7").hover(function(){
    $(".box7").removeClass("glitch2");
  }, function(){
    $(".box7").addClass("glitch2");
  });
});
$(function(){
  $(".merch8").hover(function(){
    $(".box8").removeClass("glitch2");
  }, function(){
    $(".box8").addClass("glitch2");
  });
});
$(function(){
  $(".merch9").hover(function(){
    $(".box9").removeClass("glitch2");
  }, function(){
    $(".box9").addClass("glitch2");
  });
});
$(function(){
  $(".submit").click(function(){
    $( ".name" ).val("");
    $( ".name2" ).val("");
    $( ".email" ).val("");
    $( ".memories" ).val("");
});
});
$(function(){
  $(".submit").click(function(){
    $( ".zapislast" ).css("display","block");
});
});
$(function(){
  $(".h1").click(function(){
    $( ".acc1" ).toggleClass ("open1");
    $( ".accarrow1" ).toggleClass("down");
});
});
$(function(){
  $(".h2").click(function(){
    $( ".acc2" ).toggleClass ("open2");
    $( ".accarrow2" ).toggleClass("down");
});
});
