# jquery.skeleton.loader (lo scheletrone)

> A jQuery plugin to make screen skeleton loader.
> <b>Attention: skeleton is not a tool to automatically create wireframe ... at least not yet :)
> It is still in development and is currently valid for simple scenarios.</b>

## Browser Support

We do care about it.

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | --- |
IE 8+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Getting started

Two quick start options are available:

* [Download latest release](https://github.com/enbifa/jquery.skeleton.loader/releases)
* Clone the repo: `git@github.com:jquery.skeleton.loader.git`

## Installation

Include the script (unless you are packaging scripts somehow else):

```html
<link href="/path/to/jquery.skeleton.css" rel="stylesheet">
<script src="/path/to/jquery.scheletrone.js"></script>
```

**Do not include the script directly from GitHub (http://raw.github.com/...).** The file is being served as text/plain and as such being blocked
in Internet Explorer on Windows 7 for instance (because of the wrong MIME type). Bottom line: GitHub is not a CDN.

## Usage

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
  data  : { idp: 1, id: 2 }   //if you have to pass data on querystring, otherwise omit it
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

            <img class="avatar" src="http://lorempicsum.com/up/255/200/2">
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
