fullscreen-js
=============

Description
=============
This framework is an abstract way of implementing the Fullscreen API into your project or website. Forget all the hassle of having to detect the browser, and error management, make one simple call to this framework and save yourself an hour or two on how to use the ever-changing fullscreen api.

Usage
=============

#### Entering Fullscreen
    $( '#fullscreenMe' ).enterFullscreen();
 
#### Example:  
    $( document ).on( 'click', '#button', function() {
      $( '#fullscreenMeToo' ).enterFullscreen();
    });

### Exiting Fullscreen
    $( '#fullscreenMe' ).exitFullscreen();

#### Example:   
    $( document ).on( 'click', '#button', function() {
      $( '#fullscreenMeToo' ).exitFullscreen();
    });
    
### Toggling Fullscreen
    $( '#fullscreenMe' ).toggleFullscreen();
    
#### Example:  
    $( document ).on( 'click', '#button', function() {
      $( '#toggleMe' ).toggleFullscreen();
    });
    
Bugs
=============
See any bugs? Feel free to report them in the issue tracker, and someone should be able to get to them.

Contributing
=============
Install our dependencies  
    
    npm install
    
It would be nice to install gulp and bower globally
    
    npm install -g gulp
    npm install -g bower
    
Download front end deps

    bower install
    
Build dependencies  

    gulp


LICENSE
=============
    The MIT License (MIT)
    
    Copyright (c) 2014 Cayce
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
