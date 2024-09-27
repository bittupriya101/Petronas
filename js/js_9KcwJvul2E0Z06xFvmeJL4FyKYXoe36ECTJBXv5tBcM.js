/*!
 * imagesLoaded PACKAGED v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(t,e){"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,(function(){function t(){}let e=t.prototype;return e.on=function(t,e){if(!t||!e)return this;let i=this._events=this._events||{},s=i[t]=i[t]||[];return s.includes(e)||s.push(e),this},e.once=function(t,e){if(!t||!e)return this;this.on(t,e);let i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this},e.off=function(t,e){let i=this._events&&this._events[t];if(!i||!i.length)return this;let s=i.indexOf(e);return-1!=s&&i.splice(s,1),this},e.emitEvent=function(t,e){let i=this._events&&this._events[t];if(!i||!i.length)return this;i=i.slice(0),e=e||[];let s=this._onceEvents&&this._onceEvents[t];for(let n of i){s&&s[n]&&(this.off(t,n),delete s[n]),n.apply(this,e)}return this},e.allOff=function(){return delete this._events,delete this._onceEvents,this},t})),
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function(t,e){"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}("undefined"!=typeof window?window:this,(function(t,e){let i=t.jQuery,s=t.console;function n(t,e,o){if(!(this instanceof n))return new n(t,e,o);let r=t;var h;("string"==typeof t&&(r=document.querySelectorAll(t)),r)?(this.elements=(h=r,Array.isArray(h)?h:"object"==typeof h&&"number"==typeof h.length?[...h]:[h]),this.options={},"function"==typeof e?o=e:Object.assign(this.options,e),o&&this.on("always",o),this.getImages(),i&&(this.jqDeferred=new i.Deferred),setTimeout(this.check.bind(this))):s.error(`Bad element for imagesLoaded ${r||t}`)}n.prototype=Object.create(e.prototype),n.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)};const o=[1,9,11];n.prototype.addElementImages=function(t){"IMG"===t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);let{nodeType:e}=t;if(!e||!o.includes(e))return;let i=t.querySelectorAll("img");for(let t of i)this.addImage(t);if("string"==typeof this.options.background){let e=t.querySelectorAll(this.options.background);for(let t of e)this.addElementBackgroundImages(t)}};const r=/url\((['"])?(.*?)\1\)/gi;function h(t){this.img=t}function d(t,e){this.url=t,this.element=e,this.img=new Image}return n.prototype.addElementBackgroundImages=function(t){let e=getComputedStyle(t);if(!e)return;let i=r.exec(e.backgroundImage);for(;null!==i;){let s=i&&i[2];s&&this.addBackground(s,t),i=r.exec(e.backgroundImage)}},n.prototype.addImage=function(t){let e=new h(t);this.images.push(e)},n.prototype.addBackground=function(t,e){let i=new d(t,e);this.images.push(i)},n.prototype.check=function(){if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length)return void this.complete();let t=(t,e,i)=>{setTimeout((()=>{this.progress(t,e,i)}))};this.images.forEach((function(e){e.once("progress",t),e.check()}))},n.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount===this.images.length&&this.complete(),this.options.debug&&s&&s.log(`progress: ${i}`,t,e)},n.prototype.complete=function(){let t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){let t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},h.prototype=Object.create(e.prototype),h.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.img.crossOrigin&&(this.proxyImage.crossOrigin=this.img.crossOrigin),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.currentSrc||this.img.src)},h.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},h.prototype.confirm=function(t,e){this.isLoaded=t;let{parentNode:i}=this.img,s="PICTURE"===i.nodeName?i:this.img;this.emitEvent("progress",[this,s,e])},h.prototype.handleEvent=function(t){let e="on"+t.type;this[e]&&this[e](t)},h.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},h.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},h.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},d.prototype=Object.create(h.prototype),d.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},d.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},d.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},n.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&(i=e,i.fn.imagesLoaded=function(t,e){return new n(this,t,e).jqDeferred.promise(i(this))})},n.makeJQueryPlugin(),n}));;
(function($, Drupal) {

    'use strict';
 
    $(function() {
    
        var isDesktop = false;
        var isMobile = false;
        var isInitDesktop = false;
        var isInitMobile = false;
    
        if($(window).width() > 1024){
        // if($(window).width() > 1180){
        // if($(window).width() > 1194){
    
            isInitDesktop = true;
            isInitMobile = false;
    
            $('.JindexNaviContainer').unbind( "mouseenter" );
            $('.JindexNaviContainer').unbind( "mouseleave" );
            $('.JindexNaviContainer').bind('mouseenter', function() {
                $(this).addClass('active')
            })
            .bind('mouseleave', function(){
                $(this).removeClass('active')
            });
    
            if(isInitDesktop == true){
                $('.JhasSub > a').bind('mouseenter', function() {
                    $(this).addClass('activeNavi');
                    $(this).siblings('div.JhasSubInner').show();
                    $('.JindexNaviContainer').addClass('show');
                }).bind('mouseleave', function(){
                    $(this).removeClass('activeNavi');
                    $(this).siblings('div.JhasSubInner').hide();
                    $('.JindexNaviContainer').removeClass('show');
                });

                $('.JhasSub > a').click(function(e){
                    e.preventDefault();
                })
    
                $('.JhasSubInner').bind('mouseenter', function() {
                    $(this).siblings('a').addClass('activeNavi');
                    $(this).show();
                    $('.JindexNaviContainer').addClass('show');
                }).bind('mouseleave', function(){
                    $(this).siblings('a').removeClass('activeNavi');
                    $(this).hide();
                    $('.JindexNaviContainer').removeClass('show');
                });

                $('.JhasSubInner > a').click(function(e){
                    e.preventDefault();
                })
            }  
    
        } else {
    
            isInitDesktop = false;
            isInitMobile = true;
    
            $('.JindexNaviContainer').unbind( "mouseenter" );
            $('.JindexNaviContainer').unbind( "mouseleave" );
            $('.JindexNaviContainer').bind('mouseenter', function() {
                $(this).addClass('active')
            })
            .bind('mouseleave', function(){
                $(this).removeClass('active')
            });
    
            if(isInitMobile == true){
                $('.JhasSub > a').click(function(e){
                    e.preventDefault();
                    if(!$(this).hasClass('activeNavi')){
                        $(this).addClass('activeNavi');
                        $(this).siblings('div.JhasSubInner').slideDown(300);
                        //$('.JindexNaviContainer').addClass('show');
                    } else {
                        $(this).removeClass('activeNavi');
                        $(this).siblings('div.JhasSubInner').slideUp(300);
                        //$('.JindexNaviContainer').removeClass('show');
                    }
                });
    
                $('.burgerMenuIconM').click(function(){
                    if(!$(this).parent('.JindexNaviRightTopSub').parent('.JindexNaviRightTop').siblings('.JindexNaviRightBtm').hasClass('show')){
                        $(this).parent().addClass('active');
                        $(this).parent('.JindexNaviRightTopSub').parent('.JindexNaviRightTop').siblings('.JindexNaviRightBtm').addClass('show');
                        $(this).parent('.JindexNaviRightTopSub').parent('.JindexNaviRightTop').siblings('.JindexNaviRightBtm').slideDown(300);
                        $('body').addClass('noScrollbar');

                        $('.JindexNaviContainer').addClass('show');
                    } else {
                        $(this).parent().removeClass('active');
                        $(this).parent('.JindexNaviRightTopSub').parent('.JindexNaviRightTop').siblings('.JindexNaviRightBtm').removeClass('show');
                        $(this).parent('.JindexNaviRightTopSub').parent('.JindexNaviRightTop').siblings('.JindexNaviRightBtm').slideUp(300);
                        $('body').removeClass('noScrollbar');

                        $('.JindexNaviContainer').removeClass('show');
                    }
                })
            }
    
        }
    
        $( window ).resize(function() {
            if($(window).width() > 1024){
            // if($(window).width() > 1180){
            // if($(window).width() > 1194){
    
                isDesktop = true;
                isMobile = false;
    
                // trigger close mobile navi
                if($('.burgerMenuIconM').parent().hasClass('active')){
                    $('.burgerMenuIconM').click();
                }
                if($('.JhasSub a').hasClass('activeNavi')){
                    $('.JhasSub a.activeNavi').click();
                }
    
                
                if(isInitDesktop == true && isDesktop == true){

                } else if(isInitDesktop == false && isDesktop == true){
                    isInitMobile = false;
                    isInitDesktop = true;
    
                    $('.JindexNaviContainer').unbind( "mouseenter" );
                    $('.JindexNaviContainer').unbind( "mouseleave" );
    
                    $('.JindexNaviContainer').bind('mouseenter', function() {
                        $(this).addClass('active')
                    })
                    .bind('mouseleave', function(){
                        $(this).removeClass('active')
                    });
    
                    $('.JhasSub > a').bind('mouseenter', function() {
                        $(this).addClass('activeNavi');
                        $(this).siblings('div.JhasSubInner').show();

                        $('.JindexNaviContainer').addClass('show');
                    }).bind('mouseleave', function(){
                        $(this).removeClass('activeNavi');
                        $(this).siblings('div.JhasSubInner').hide();

                        $('.JindexNaviContainer').removeClass('show');
                    });

                    $('.JhasSub > a').click(function(e){
                        e.preventDefault();
                    })
    
                    $('.JhasSubInner').bind('mouseenter', function() {
                        $(this).siblings('a').addClass('activeNavi');
                        $(this).show();

                        $('.JindexNaviContainer').addClass('show');
                    }).bind('mouseleave', function(){
                        $(this).siblings('a').removeClass('activeNavi');
                        $(this).hide();

                        $('.JindexNaviContainer').removeClass('show');
                    });

                    $('.JhasSubInner > a').click(function(e){
                        e.preventDefault();
                    })
                    
                }
                
    
            } else {
    
                isDesktop = false;
                isMobile = true;
    
                
                if(isInitMobile == true && isMobile == true){

                } else if(isInitMobile == false && isMobile == true){
                    isInitMobile = true;
                    isInitDesktop = false;
    
                    $('.JhasSub > a').unbind( "mouseenter" );
                    $('.JhasSub > a').unbind( "mouseleave" );
                    $('.JhasSubInner').unbind( "mouseenter" );
                    $('.JhasSubInner').unbind( "mouseleave" );
                    $( ".burgerMenuIconM" ).unbind();
                    $('.JhasSub > a').unbind();
    
                    $('.JindexNaviContainer').unbind( "mouseenter" );
                    $('.JindexNaviContainer').unbind( "mouseleave" );
                    $('.JindexNaviContainer').bind('mouseenter', function() {
                        $(this).addClass('active')
                    })
                    .bind('mouseleave', function(){
                        $(this).removeClass('active')
                    });
    
    
                    $('.JhasSub > a').click(function(e){
                        e.preventDefault();
                        if(!$(this).hasClass('activeNavi')){
                            $(this).addClass('activeNavi');
                            $(this).siblings('div.JhasSubInner').slideDown(300);
                        } else {
                            $(this).removeClass('activeNavi');
                            $(this).siblings('div.JhasSubInner').slideUp(300);
                        }
                    });
    
                    $('.burgerMenuIconM').click(function(){
                        if(!$(this).parent('.JindexNaviRightTopSub').parent('.JindexNaviRightTop').siblings('.JindexNaviRightBtm').hasClass('show')){
                            $(this).parent().addClass('active');
                            $(this).parent('.JindexNaviRightTopSub').parent('.JindexNaviRightTop').siblings('.JindexNaviRightBtm').addClass('show');
                            $(this).parent('.JindexNaviRightTopSub').parent('.JindexNaviRightTop').siblings('.JindexNaviRightBtm').slideDown(300);
                            $('body').addClass('noScrollbar');

                            $('.JindexNaviContainer').addClass('show');
                        } else {
                            $(this).parent().removeClass('active');
                            $(this).parent('.JindexNaviRightTopSub').parent('.JindexNaviRightTop').siblings('.JindexNaviRightBtm').removeClass('show');
                            $(this).parent('.JindexNaviRightTopSub').parent('.JindexNaviRightTop').siblings('.JindexNaviRightBtm').slideUp(300);
                            $('body').removeClass('noScrollbar');

                            $('.JindexNaviContainer').removeClass('show');
                        }
                    })
                }
                
            }
        });
        
    
        // var prevScrollpos = window.pageYOffset;
        // window.onscroll = function() {
        //     var currentScrollPos = window.pageYOffset;
        //     if (prevScrollpos > currentScrollPos) {
        //         var naviContainerTopPx = "0px";
        //         if ($('body').hasClass('toolbar-fixed')) {
        //           if ($('body').hasClass('toolbar-horizontal')) {
        //             naviContainerTopPx = "78px";
        //           }

        //           if ($('body').hasClass('toolbar-vertical')) {
        //             naviContainerTopPx = "38px";
        //           }
        //         }

        //         $(".JindexNaviContainer").addClass("active");
        //         $('.JindexNaviContainer').unbind( "mouseleave" );
        //     } 
        //     else {
        //         $('.JindexNaviContainer').unbind( "mouseleave" );
        //     }
    
        //     if (currentScrollPos == 0) {
        //         $(".JindexNaviContainer").removeClass("active");
        //         $('.JindexNaviContainer').bind('mouseleave', function(){
        //             $(this).removeClass('active');
        //         });
        //     }
        //     else {
        //         $(".JindexNaviContainer").addClass("active");
        //     }
        //     prevScrollpos = currentScrollPos;
        // }

        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            // console.log(prevScrollpos, currentScrollPos);
            if (prevScrollpos > currentScrollPos) {
                // document.getElementById("navbar").style.top = "0";
                var naviTop = '0px';
                if ($('body').hasClass('toolbar-horizontal')) {
                  naviTop = '78px';
                }

                $(".JindexNaviContainer").css("top", naviTop);
                $(".JindexNaviContainer").addClass("active");
                $('.JindexNaviContainer').unbind( "mouseleave" );
            } 
            // else if (currentScrollPos <= 10) {
            //     // document.getElementById("navbar").style.top = "0";
            //     $(".JindexNaviContainer").css("top", "0px");
            //     $(".JindexNaviContainer").addClass("active");
            //     $('.JindexNaviContainer').unbind( "mouseleave" );
            // }
            else {
                // document.getElementById("navbar").style.top = "-109px";
                $(".JindexNaviContainer").css("top", "-109px");
                $(".JindexNaviContainer").removeClass("active");
                $('.JindexNaviContainer').unbind( "mouseleave" );
            }

            if (currentScrollPos == 0 || currentScrollPos <= 10) {
                $(".JindexNaviContainer").removeClass("active");
                console.log('top');
                $(".JindexNaviContainer").css("top", "0px");
                $('.JindexNaviContainer').bind('mouseleave', function(){
                    $(this).removeClass('active');
                    console.log('top mouseleave');
                });
            }
            prevScrollpos = currentScrollPos;
        }

        $('.JsocialLink')
            .mouseenter(function() {
                $(this).parent().addClass('active');
                $(this).children('.JsocialLinkInner').slideDown(0);
            })
            .mouseleave(function() {
                $(this).parent().removeClass('active');
                $(this).children('.JsocialLinkInner').slideUp(0);
            });
    
    });

})(jQuery, Drupal);;
(function($, Drupal) {

  'use strict';

  $(function() {
      var initial = new TimelineMax();
      if ($(".JindexImg01Inner").length > 0) {
        initial.fromTo(".JindexImg01Inner", 0.75, {clipPath: 'circle(0% at 50% 50%)', opacity: 0}, {clipPath: 'circle(90% at 50% 50%)', opacity: 1, ease:Linear.easeNone}, 0);
      }
      if ($(".JindexImg01 .JgeneralBannerBG").length > 0) {
        initial.fromTo(".JindexImg01 .JgeneralBannerBG", 1, {background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 60%, rgba(0,0,0,0) 100%)'}, {background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%)'}, 0);
      }

      setTimeout(function(){
          var naviTop = '0px';
          if ($('body').hasClass('toolbar-horizontal')) {
            naviTop = '78px';
          }

          $('.JindexNaviContainer').css({top:'-99px', opacity: 0}).animate({"top":naviTop, "opacity": 1}, 500, function(){
              $('.JindexNaviContainer').css({
                  '-webkit-transition': 'all 300ms ease',
                  '-moz-transition': 'all 300ms ease',
                  '-ms-transition': 'all 300ms ease',
                  '-o-transition': 'all 300ms ease',
                  'transition': 'all 300ms ease'
              })
          });
          var initial2 = new TimelineMax();
          if ($(".JsideNaviContainer").length > 0) {
            initial2.fromTo(".JsideNaviContainer", 0.5, {right: '-60px', opacity: 0},{right: '0px', opacity: 1, ease:Linear.easeNone},0);
          }
          if ($(".JsideNaviFooter").length > 0) {
            initial2.fromTo(".JsideNaviFooter", 0.5, {bottom: '-75px', opacity: 0},{bottom: '25px', opacity: 1, ease:Linear.easeNone},0);
          }
          $('.JindexImgContent p').css({left:'50px', opacity: 0}).animate({"left":"0px", "opacity": 1}, 500);
          $('.JindexImgContent h2').css({left:'50px', opacity: 0}).animate({"left":"0px", "opacity": 1}, 500);
          $('.JindexImgContent h1').css({left:'50px', opacity: 0}).animate({"left":"0px", "opacity": 1}, 500)
      }, 500);
  
  });

})(jQuery, Drupal);


;
