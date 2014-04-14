(function( $ ) {
  "use strict";

  var isFullscreen = false;
  
  function fullscreen( leaveOrExitFullscreen, element )
  {
    if ( leaveOrExitFullscreen ) {
      if (
        document.fullscreenEnabled ||
        document.msFullscreenEnabled ||
        document.mozFullscreenEnabled ||
        document.webkitFullscreenEnabled
      ) {
        if ( element.requestFullscreen ) {
          element.requestFullscreen();
          isFullscreen = true;
        } else if ( element.msRequestFullscreen ) {
          element.msRequestFullscreen();
          isFullscreen = true;
        } else if ( element.mozRequestFullScreen ) {
          element.mozRequestFullscreen();
          isFullscreen = true;
        } else if ( element.webkitRequestFullScreen ) {
          element.webkitRequestFullScreen();
          isFullscreen = true;
        } else {
          console.log( 'Error going Fullscreen.' );
        }
      } else {
        console.log( 'Fullscreen API not supported.' );
      }
    } else {
      if ( document.exitFullscreen ) {
          document.exitFullscreen();
          isFullscreen = false;
      } else if ( document.webkitExitFullscreen ) {
          document.webkitExitFullscreen();
          isFullscreen = false;
      } else if ( document.mozCancelFullScreen ) {
          document.mozCancelFullScreen();
          isFullscreen = false;
      } else if ( document.msExitFullscreen ) {
          document.msExitFullscreen();
          isFullscreen = false;
      } else {
          console.log( 'Error exiting fullscreen, please report this.' );
      }
    }
  }

  $.fn.goFullscreen = function() {
    var element = this[0];
    fullscreen( true, element );
  };
  
  $.fn.exitFullscreen = function() {
    fullscreen( false );
  };
  
  $.fn.toggleFullscreen = function() {
    var element = this[0];
    
    if ( isFullscreen ) {
      fullscreen( false, element );
      isFullscreen = false;
    } else {
      fullscreen( true, element );
      isFullscreen = true;
    }
  }
  
}( jQuery ));