"use strict";

function makeHeader() {
  let header = "";
  header += '<ul class="nav-bar">';
  header += '<li id="nav-bar-title-container">';
  header += '<a id="nav-bar-title-text" ';
  header += 'href="index.html">Stealth Solutions</a></li>';
  header += '<li><a href="products.html">Products</a></li>';
  header += '<li><a href="services.html">Services</a></li>';
  header += '<li><a href="news.html">News</a></li>';
  header += '<li><a href="about_us.html">About Us</a></li>';
  header += '<li><a href="contact_us.html">Contact Us</a></li>';
  header += '<li><a href="reviews.html">Reviews</a></li></ul>';
  return header;
}

function makeFooter() {
  let footer = "";
  footer += "<footer><ul><li>Contact Us</li>";
  footer +=
    '<li><a href="https://twitter.com" target="_blank" class="social-icon">';
  footer += '<img src="media/twitter-icon.png" alt="twitter icon" /></a></li>';
  footer +=
    '<li><a href="https://instagram.com" target="_blank" class="social-icon">';
  footer +=
    '<img src="media/instagram-icon.png" alt="instagram icon" /></a></li>';
  footer +=
    '<li><a href="https://facebook.com" target="_blank" class="social-icon">';
  footer +=
    '<img src="media/facebook-icon.png" alt="facebook icon" /></a></li>';
  footer += "</ul></footer>";
  return footer;
}

$("body").prepend(makeHeader());
$("body").append(makeFooter());
