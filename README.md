# Lo Scheletrone -  jquery.skeleton.loader

> A jQuery plugin to make screen skeleton loader.

## Browser Support

We do care about it.

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | --- |
IE 8+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Getting started

Two quick start options are available:

* [Download latest release](https://github.com/Enzuccio/Lo-Scheletrone---jquery.skeleton.loader/releases)
* Clone the repo: `git@github.com:Enzuccio/Lo-Scheletrone---jquery.skeleton.loader.git`

## Installation

Include the script (unless you are packaging scripts somehow else):

```html
<script src="/path/to/jquery.scheletrone.js"></script>
```

**Do not include the script directly from GitHub (http://raw.github.com/...).** The file is being served as text/plain and as such being blocked
in Internet Explorer on Windows 7 for instance (because of the wrong MIME type). Bottom line: GitHub is not a CDN.

## Usage
```html
var instance = $('#skeleton').scheletrone({
                    url   : "index2.html",
                    debug		: {
                        latency: 3000
                    },
                    incache: true,
                    onComplete: function() {
                        console.info('plugin is loaded')
                        console.info('3 secs for the data');
                    }
            });
```