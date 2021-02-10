# jquery.skeleton.loader (lo scheletrone)


> A jQuery plugin to make screen skeleton loader.<br>
> <b>Attention: skeleton is not a tool to automatically create wireframe ... at least not yet :)</b>
<br>

[![](https://data.jsdelivr.com/v1/package/npm/jquery.skeleton.loader/badge)](https://www.jsdelivr.com/package/npm/jquery.skeleton.loader)
<br>
<br>
<em>In 2013, <a href="http://www.lukew.com/ff/entry.asp?1797" target="_new">Luke Wroblewski</a> first discussed the drawbacks of using loading spinners in on-screen experiences, and spoke in favour of what he called “skeleton screens.”
The concept behind skeleton screens is the use of empty pages that are progressively populated with content as it becomes available — immutable regions of a page are rendered instantly on load, appearing as neutral color blocks, and are gradually replaced with content such as images, headings, and interface labels. (from <a href="https://medium.com/mobify-design-team/designing-for-the-appearance-of-speed-aaabc7f568c2" target="_new">this</a> very good article)</em><br><br>
The goal of "lo scheletrone" is to help those who want to include skeleton screens on their site, existing or new.

## Contents
- [Browser Support](#browser-Support)
- [Getting started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
  - [Options](#options)
- [When using lo scheletrone](#when-using-lo-scheletrone)


### Browser Support

We do care about it.

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | --- |
IE 8+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |



### Getting started

See jquery.skeleton.loader plugin in action [DEMO](https://enbifa.github.io/jquery.skeleton.loader/example/index.html) or here in in this pen [CODEPEN](https://goo.gl/iT696Y):

Two quick start options are available:

* [Download latest release](https://github.com/enbifa/jquery.skeleton.loader/releases)
* Clone the repo: `git@github.com:jquery.skeleton.loader.git`

### Installation

Include the script (unless you are packaging scripts somehow else):

```html
<link href="/path/to/jquery.skeleton.css" rel="stylesheet">
<script src="/path/to/jquery.scheletrone.js"></script>
```

**Do not include the script directly from GitHub (http://raw.github.com/...).** The file is being served as text/plain and as such being blocked
in Internet Explorer on Windows 7 for instance (because of the wrong MIME type). Bottom line: GitHub is not a CDN.

### Usage

<p><img src="skeleton.gif" alt="skeleton gif" style="max-width:100%;"></p>

The easiest way to use the plugin is to create a structure of element like this

```html
<div id="myDIV">
        <div class="mySpan" >
          <h2>Title 1</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        </div>
</div>
```
Lo scheletrone makes the skeleton of all the elements that have no childrens.
If you want to create a simple skeleton of your DOM elements:

```html
var instance = $('#myDIV').scheletrone();
```

Lo scheletrone is ready to make for you the ajax call and replace the template: 

```javascript
var instance = $('#myDIV').scheletrone({
  url   : "path/to/url.html",
  ajaxData  : { idp: 1, id: 2 }   //if you have to pass data on querystring, otherwise omit it
});
```

Magic happens when you do not have the template on your home page. Lo scheletrone can make the call for you, recover the div and save it to local storage. Subsequently, the template will be retrieved from the local storage and maked like a skeleton before making the ajax call.
To do this, however, you must enter the data-attributes on the div that you want to save in cache:

```html
<div id="myDIV">
        <div class="mySpan" data-scheletrone="true">
          <h2>Title 1</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        </div>
        <div class="mySpan" >
          <h2>Title 2</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        </div>
</div>
```
and you have to set the options ``` incache: true ```:

```javascript
var instance = $('#myDIV').scheletrone({
  url   : "path/to/url.html",
  ajaxData  : { idp: 1, id: 2 }   //if you have to pass data on querystring, otherwise omit it
  incache: true
});
```

It is possible to instantiate several times the plugin [DEMO](https://rawgit.com/enbifa/jquery.skeleton.loader/master/example/index.html):

```html

<div id="myDIV">

            <img class="avatar" src="http://picsum.photos/id/237/255/200/">
            <div class="content">
                <h1 class="firstName">
                    <span>UP</span>
                </h1>
                <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur metus in nibh porttitor ultricies. Vestibulum placerat blandit interdum.
                </div>
            </div>
        
</div>

<div id="myDIVcached">
        <div class="mySpan" data-scheletrone="true">
          <h2>Title 1</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        </div>
        <div class="mySpan" >
          <h2>Title 2</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        </div>
</div>
```

```javascript
var instance = $('#myDIV').scheletrone({
  url   : "path/to/url.html"
});

var instancecached = $('#myDIVcached').scheletrone({
  url   : "path/to/url.html",
  incache: true
});
```
to stop the loader use the public method stopLoader in this way:

```javascript
var instance = $('#myDIV').scheletrone('stopLoader');
```

### Options

Currently this plugin supports the following options:

#### url

 - Default: ``  
 - Acceptable-Values: String  
 - Function: The website address of the site that the plugin will call asynchronously

 #### ajaxData

 - Default: {}  
 - Acceptable-Values: Json Object  
 - Function: Data to send to the ajax call

  #### debug.log

 - Default: false 
 - Acceptable-Values: Boolean
 - Function: If you want to debug the plugin

  #### debug.latency

 - Default: 0 
 - Acceptable-Values: Integer
 - Function: The timeout that the plugin will have before injecting the data returned from the ajax call (in milliseconds)

  #### removeIframe

 - Default: '' 
 - Acceptable-Values: Boolean
 - Function: Exclude the iframes of the page to be scanned (to avoid security issues)

  #### selector

 - Default: false 
 - Acceptable-Values: String
 - Function: If you want to retrieve only a specific content from a loaded page use this option with a selector expression. Please refer (https://api.jquery.com/filter/).


  #### backgroundImage

 - Default: true 
 - Acceptable-Values: Boolean
 - Function: To make a skeleton also the elements that contain background images

  #### replaceImageWith

  - Default: '' 
  - Acceptable-Values: String
  - Function: To apply a css class to the images maked skeleton, typically to apply a placeholder. In the attached css file a class, named ".bg-image" is already available where you can add the placeholder in a base64 format

  #### incache

  - Default: false
  - Acceptable-Values: Boolean
  - Function: To cache the received asynchronous data

  #### onComplete

  - Default: null
  - Acceptable-Values: Javascript Function
  - Function: If you want a callback when the skeleton is complete

  #### maskText

  - Default: true 
  - Acceptable-Values: Boolean
  - Function: If you need to mask an element's text, especially when incache is true

  #### skelParentText

  - Default: false 
  - Acceptable-Values: Boolean
  - Function: By default the main element of all text type nodes (nodetype = 3) is sketched (with background = #ccc). If you want to avoid it, and in some cases it is necessary, just make the valure to false.


Example with options:

```javascript
var instance = $('#myDIV').scheletrone({
            url         : 'http://url/to/file',
            ajaxData    : {},
            debug        : {
                log: false,
                latency: 2000
            },
            removeIframe: true,
            maskText: true,
            skelParentText: false,
            backgroundImage: true,
            replaceImageWith: 'bg-image',
            selector: '#containerSingle',
            incache : false,
            onComplete     : function() {
                console.log('default onComplete() event');
            }
});
```
### When using lo scheletrone

There are several cases where it is useful to use this plugin. The first is when you have a div populated asynchronous and the data waiting is very slow. The effect you have is an empty block awaiting the data like this. 

<p><img src="withoutdata.gif" alt="skeleton gif" style="max-width:100%;"></p>


in this case you can use this code:

```javascript
var instance = $('#myDIV').scheletrone({
                    incache: true,
                    onComplete: function() {
                        //here you can insert the code to populate the div
                        
                    }
            });
```

The important thing to do is to include an attribute "data-scheletrone" on the items to be cached like this:

```html
<div class="container2" data-scheletrone="true">
    <img class="avatar" src="http://picsum.photos/id/237/255/200/">
    <div class="content">
        <h1 class="firstName">
            <span>Up</span>
        </h1>
        <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur metus in nibh porttitor ultricies. Vestibulum placerat blandit interdum.
        </div>
    </div>
</div>
```

If you are creating a new page and want to give the skeleton screen effects, you have just create the template on the page and leave the work dirty to the Scheletrone.

```html
<div class="container" id="myDIV">
    <img class="avatar" src="http://picsum.photos/id/237/255/200/">
    <div class="content">
        <h1 class="firstName">
            <span>Up</span>
        </h1>
        <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur metus in nibh porttitor ultricies. Vestibulum placerat blandit interdum.
        </div>
    </div>
</div>
```
and

```javascript
var instance = $('#myDIV').scheletrone({
            url         : 'http://url/to/file',
            ajaxData    : {},
});
```

if you want to manipulate the data received via ajax or simply make the call use the onComplete callback function.

```javascript
var instance = $('#myDIV').scheletrone({
                    incache: true,
                    onComplete: function() {
                        //here you can insert the code to populate the div
                        
                    }
            });
```

if you want to retrieve only a specific content from the loaded page you can pass the selector on the options.

```javascript
var instance = $('#skeletone3').scheletrone({
                    url   : "index3.html",
                    incache: true,
                    selector: '#containerSingle'
            });
```