$("li.about").click(function () {
  $("div.info").show();
});

$("img#show1").click(function () {
  $("div.info").slideUp(300).delay(1200).fadeIn(1200);
  $("h3#show2").slideUp(300).fadeIn(1000);
});

$("div.info").hide();
$("h3#show2").hide();


$("[href$='form']").hover(function () {
    $("fieldset").show(1000);
    });

$("[href$='form']").click(function () {
  $("fieldset").slideToggle().end();
});

$("p#pictext").hover(function () {
    $("p#click").toggleClass("active").slideToggle();
    $("p#click").show();
  }
);

$("p#pictext").click(function () {
    $("div.photo").fadeIn(4000);
});

$("p#whois").hover(function () {
    $("p#click").toggleClass("active").slideToggle();
    $("p#click").show();
  }
);

$("div.story").click(function () {
    $("div#big").slideDown(2000);
    $("div.vvideo").slideDown(2000);
});

$("p#reada").hover(function () {
    $(this).toggleClass("active")
      .next().stop(true, true).slideToggle();
  }
);
 $("p#reada").click(function() {
  $(this).toggleClass("active").fadeOut(1000);
  $("div.mainarticle").slideDown(2000);
  });
$("p#mainart").hover(function () {
    $(this).toggleClass("active");});

$("p#lit").hover(function () {
    $("p#click").toggleClass("active").slideToggle();
    $("p#click").show();
  }
);

 $("div.story").click(function () {
  $("div.table1").slideDown(2000);
});

$("button#showfav").click(function () {
    $("td#fade").fadeOut(2000);
    $("tr#bigrow").animate( { width: "100%" }, { queue: false, duration: 3000 })
    .animate({ fontSize: "25px" }, 1500 );
    $("tr#bigrow").css({"font-weight":"bold","background-color":"#f6f6f6"});
});

$("button#recall").click(function () {
    $("td#fade").fadeIn(1000);
    $("tr#bigrow").css({ "width":"","font-size":"","font-weight":"","background-color":""});
});

$("p#ken").hover(function () {
    $("p#click").toggleClass("active").slideToggle();
    $("p#click").show();
  }
);

$("div.story").click(function () {
    $("div#klmain").fadeIn(2000);
    $("div.u").fadeIn(2000);
});



var audio = document.getElementById("u");
function playu() {
    audio.play();
}

function pauseu() {
    audio.pause();
}

$("p.lyrics").click(function () {
    $("div.pic").fadeIn(2000);
    playu();
});

$("img#play").click(function () {
    playu();
});

$("img#pause").click(function () {
    pauseu();
});

$("div.pic").click(function () {
        $("p.m1").fadeIn(3000);
    $("div.pic").fadeOut(1000);
});

$("p.m1").click(function () {
    $("p.m2").fadeIn(1000);
    $("p.m1").hide();
});

$("p.m2").click(function () {
    $("p.m3").fadeIn(1000);
       $("p.m2").hide();
});
$("p.m3").click(function () {
    $("img#pic2").fadeIn(1000);
    $("p.m3").fadeOut(1000);
});
$("div.pic").click(function () {
        $("div.mainly").fadeIn(3000);
});

function popup() {
    alert("Thanks for your patience!")
}
