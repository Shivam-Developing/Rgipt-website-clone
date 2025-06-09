
$(document).ready(function(){
	
 $('#scrollToTop').bind("click", function () {
                $('html, body').animate({ scrollTop: 0 }, 1500);
                return false;
            });	
$(".sidebarbutton,.sidebarhide").click(function() {
	$(".sidebarmenu").toggleClass("sidebaropen")
	})	
 
$( ".sopen a").click(function() {
$( ".srchtoggle").fadeToggle("slow");
});	
$(".news .toggle").click(function(){
$(".vticker ul").toggleClass("scroll");
});

$(".award .toggle2").click(function(){
$(".vticker2 ul").toggleClass("scroll2");
});		
$('.inrightbar').height($('.inleftbar').height()+80);
$('table').wrap('<div class="table-responsive">');	
$('.events .eventboxen .content a').wrap('<span>');	
$(".events .eventboxen .content").addClass("Btnhover")

$('.events li.enlipressrls a, .events li.enlipressrls p.ndate, .events li.enlipressrls p.pdf-img').wrap('<div class="newswrap">');
$("table").addClass("table table-bordered table-striped")
$(".removetblclass table").removeClass("table table-bordered table-striped")	
$("ul.entender").addClass("newsscroll")
$(".sitemap ul").removeClass("nav navbar-nav")
$(".sitemap li").removeClass("dropdown")
$(".sitemap li").removeClass("dropdown-submenu")
$(".sitemap li a").removeClass("dropdown-toggle")
$(".sitemap ul ul").removeClass("dropdown-menu")
$(".sitemap ul").removeAttr("id","inmenu")
$(".inmenu ul").removeClass("nav navbar-nav")
$(".inmenu > ul").addClass("righ-menu")
//$(".inmenu li").removeClass("dropdown")
$(".inmenu li a").removeClass("dropdown-toggle has-submenu")
$(".inmenu li a").removeAttr("id")
$(".inmenu li a").removeAttr("aria-haspopup")
$(".inmenu li a").removeAttr("aria-expanded")
$(".inmenu li a").removeAttr("aria-controls")
$(".inmenu ul").removeAttr("id")
$(".inmenu ul").removeAttr("data-smartmenus-id")
$(".inmenu ul").removeAttr("aria-labelledby")
$(".inmenu ul").removeAttr("aria-expanded")
$(".inmenu ul ul").removeClass("dropdown-menu")
$(".inmenu ul ul").removeAttr("role","group")
$(".inmenu ul ul").removeAttr("aria-hidden","true")
$("#wowslider-container1 a").attr("href","javascript:void(0)");
$(".inmenu ul li a").removeClass("dropdown-toggle has-submenu") 

$('.inmenu ul a').each(function(){
if(location.href === this.href){
$(this).addClass('selected');
$('.inmenu-item--active-trail a').not(this).addClass('none');
return false;
}
});
 
if ($.cookie("css")) {
  $("#theme").attr("href", $.cookie("css"));
}
$(".defTheme").click(function () {
  $("#theme").attr("href", $(this).attr('href'));
  $.cookie("css", $(this).attr('href'));
  return false;
});	


$(".hi-btn").click(function () {
        var cfrm = confirm("आपको राजीव गाँधी पेट्रोलियम प्रौद्योगिकी संस्थान, उत्तर प्रदेश, भारत की वेबसाइट के हिंदी संस्करण पर हस्तानांतरित किया जा रहा है");
        if (cfrm == true) {
            window.location(this.window.url + "/hi");
            return true;
        }
        else if (cfrm == false) {
            return false;
        }
        //alert(crm);
    });

    var comp = new RegExp(location.host);
    $('a').each(function () {
        if (comp.test($(this).attr('href'))) {
            // a link that contains the current host 
            $(this).addClass('local');
        }
        else {
            // a link that does not contain the current host
            $(this).addClass('external');
        }
    });

    $('.externallink a').filter(function () {
        return this.hostname && this.hostname !== location.hostname;
    })
    .click(function () {
        $(this).attr('target', '_blank');
        var x = window.confirm('You are about to leave the website of   Rajiv Gandhi Institute of Petroleum Technology , Uttar Pradesh, India and view the content of an external website.');
        var val = false;
        if (x)
            val = true;
        else
            val = false;
        return val;
    });



});
    var cmsResponsiveImages = function() {
		var $content = $(".inner-body");
		$content.find("img").addClass("img-responsive");
	};
$(window).scroll(function() {
var height = $(window).scrollTop();
if(height  > 132) {
$(".top-nav").addClass("menuFxd");
}
if(height  < 132) {
$(".top-nav").removeClass("menuFxd");
}

var height = $(window).scrollTop();
if(height  > 561) {
$(".profilemenu ").addClass("leftFxd");
}
if(height  < 561) {
$(".profilemenu").removeClass("leftFxd");
}
});

$(document).ready(function(){

$( ".back").click(function() {

window.history.go(-1);

return false;

});

});


 $(document).ready(function () {
$('.governorpic a .item a, footer a ').each(function(){
   $(this).attr('title',$(this).text());  //or use $.trim($(this).text()) to remove white spaces.
});
});

$(".thumbbtn").click(function(){
  $(".c-order").removeClass("univ-list");
  $(".c-order").addClass("univ-thumb");
});
$(".listbtn").click(function(){
  $(".c-order").removeClass("univ-thumb");
  $(".c-order").addClass("univ-list");
});
 
 //// Date Time Function
	
tday=new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
tmonth=new Array("January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

function GetClock(){
var d=new Date();
var nday=d.getDay(),ndate=d.getDate(),nmonth=d.getMonth(), nyear=d.getYear();
if(nyear<1000) nyear+=1900;
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

document.getElementById('datetime').innerHTML=""+tday[nday]+",  "+ndate+", "+tmonth[nmonth]+" "+nyear+" | "+nhour+":"+nmin+":"+nsec+ap+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}

/////////// END HERE




$(".grid-stack img").each(function() {
var imageCaption = $(this).attr("title");
if (imageCaption != '') {
var imgWidth = $(this).width();
var imgHeight = $(this).height();
var position = $(this).position();
var positionTop = (position.top + imgHeight - 26);
$("<span class='title-caption'><em class='italic-none'>"+imageCaption+"</em></span>")
.css({})
.insertAfter(this);
}
});

//$('.italic-none').wrap('<a data-fancybox-group="thumb" class="fancybox-thumbs"><i class="fa fa-search-plus" aria-hidden="true"></i></a>');	

//$(".title-caption em").each(function() {
//var num = $(this).html();
//var mnum = num.indexOf("/");
//var title = num.substr(mnum+1, num.length)
//$(this).html(title)
//});


$(".title-caption em").each(function() {
var num = $(this).html();
var mnum = num.indexOf("/");
var title = num.substr(0, mnum)
$(this).html(title)
});


$("a.link").click(function () {
        var cfrm = confirm("You are about to leave the website of   Rajiv Gandhi Institute of Petroleum Technology , Uttar Pradesh, India and view the content of an external website.");
		 
        if (cfrm == true) {
			window.open('https://india.gov.in/','newwindow', 'width=500,height=350');
			 return false;
        }
        else if (cfrm == false) {
            return false;
        }
        //alert(crm);
    });

/*
var coll = document.getElementsByClassName("collapsible-ps");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content-ps = this.nextElementSibling;
        if (content-ps.style.display === "block") {
            content-ps.style.display = "none";
        } else {
            content-ps.style.display = "block";
        }
    });
}
*/

$('.count').each(function () {

    $(this).prop('counter', 0).animate({

        counter: $(this).text()

    }, {

        duration: 4000,

        easing: 'swing',

        step: function (now) {

            $(this).text(Math.ceil(now));
        }
    });
});

// Tab-Pane change function
/*
function tabChange() {
    var tabs = $('.nav-tabs > li');
    var active = tabs.filter('.active');
    var next = active.next('li').length ? active.next('li').find('a') : tabs.filter(':first-child').find('a');
    next.tab('show');
}

$('.tab-pane').hover(function () {
    clearInterval(tabCycle);
}, function () {
    tabCycle = setInterval(tabChange, 1000);
});

// Tab Cycle function
var tabCycle = setInterval(tabChange, 1000)

// Tab click event handler
$(function () {
    $('.nav-tabs a').click(function (e) {
        e.preventDefault();
        clearInterval(tabCycle);
        $(this).tab('show')
        tabCycle = setInterval(tabChange, 1000);
    });
});

*/

$(document).ready(function () {

    $("ul#tabs li").click(function (e) {
        var tabIndex = $(this).index();
        if (!$(this).hasClass("active")) {
            var nthChild = tabIndex + 1;
            $("ul#tabs li.active").removeClass("active");
            $(this).addClass("active");
            $("#content-tab div.active").removeClass("active");
            $("#content-tab div:nth-child(" + nthChild + ")").addClass("active");
        } else {
            $(this).removeClass("active");
            $("#content-tab div.active").addClass("active");
        }
    });
});



