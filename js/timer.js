function get_timer_text(s,txt)
{
         if (s==0) return " ";
    else if (s==1) return s+" "+txt+" ";
    else           return s+" "+txt+"s ";
}

function start_promo_timer(promoText,endDateText)
{
  // Set the date we're counting down to
  var countDownDate = new Date(endDateText).getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("promo_counter").innerHTML = get_timer_text(days,"day") + get_timer_text(hours,"hour") 
    + get_timer_text(minutes,"minute") + get_timer_text(seconds,"second") +" left ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("promo_counter").innerHTML = "OFFER EXPIRED";
      document.getElementById("ctapromo").style.display = 'none';
    }
    else
    {
      document.getElementById("promo_text").innerHTML = promoText;
    }
  }, 1000);

  
}

let promoText = 
"<strong>Use<\/strong> CYBER <strong>coupon code<br \/>\
during purchase <br \/>\
for 20% off<\/strong>";


document.getElementById("promo_text").innerHTML = promoText;


start_promo_timer(promoText,"Dec 5, 2020 8:59:59");


