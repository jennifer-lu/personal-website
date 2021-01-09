$(".button").click(function(e) {
  e.preventDefault();
  var href = $(this).attr("href");
  var location = $(href).offset().top - $(".frame").offset().top + $(".frame").scrollTop() + 1;
  $(".frame").animate({scrollTop: location}, "swing");
});

$(".frame").scroll(function(e) {
  let scrollY = $(".frame").scrollTop();
  if (scrollY < $("#about").offset().top - $(".frame").offset().top + $(".frame").scrollTop()) {
    if ($("#home-button").attr("class") != "button current") {
      $(".current").removeClass("current");
      $("#home-button").addClass("current");
    }
  } else if (scrollY < $("#projects").offset().top - $(".frame").offset().top + $(".frame").scrollTop()) {
    if ($("#about-button").attr("class") != "button current") {
      $(".current").removeClass("current");
      $("#about-button").addClass("current");
    }
  } else if (scrollY < $("#contact").offset().top + $(".frame").scrollTop() - $(window).height()) {
    if ($("#projects-button").attr("class") != "button current") {
      $(".current").removeClass("current");
      $("#projects-button").addClass("current");
    }
  } else {
    if ($("#contact-button").attr("class") != "button current") {
      $(".current").removeClass("current");
      $("#contact-button").addClass("current");
    }
  }
});

var titles = ["SOFTWARE ENGINEER", "GRAPHIC DESIGNER", "UNDERGRADUATE STUDENT"];
var currentTitle = 0;

function changeText() {
  $("#title").text(titles[currentTitle]);
  $("#title").attr("text", titles[currentTitle]);
  $("#title-main").text(titles[currentTitle]);
  $("#title").attr("class", "glitch");
  $("#title-main").attr("class", "glitch-main");
  setTimeout(function() {$("#title").attr("class", ""); $("#title-main").attr("class", "");}, 200);
  setTimeout(function() {$("#title").attr("class", "glitch"); $("#title-main").attr("class", "glitch-main");}, 1800);
  if (currentTitle === 2)
  {
    currentTitle = 0;
  } else {
    currentTitle++;
  }
}
changeText();
setInterval(changeText, 2000);

$(".hoverplay").on("mouseover", function(event) {
  this.play();
}).on('mouseout', function(event) {
  this.pause();
});
