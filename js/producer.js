/* This code is Copyright (c) 1996 Nick Heinle and Athenia Associates,
       * all rights reserved. In order to receive the right to license this
       * code for use on your site the original code must be copied from the
       * Web site webreference.com/javascript/. License is granted to user to
       * reuse this code on their own Web site if and only if this entire copyright
       * notice is included. Code written by Nick Heinle of webreference.com.
       */

// preload universal images:
zazenoff = new Image(58,335);
zazenoff.src = "images/zazen_off.gif";
zazenon = new Image(58,335);
zazenon.src = "images/zazen_on.gif";

function zazen_img_act(imgName) {
              imgOn = eval(imgName + "on.src");
              document [imgName].src = imgOn;
}

function zazen_img_inact(imgName) {
              imgOff = eval(imgName + "off.src");
              document [imgName].src = imgOff;
}
