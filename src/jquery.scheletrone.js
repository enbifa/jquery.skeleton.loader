
/*
 *  jQuery screen skeleton - scheletrone - v0.0.1
 *  A jQuery plugin to make a skeleton loading of your html elements.
 *
 *  Copyright (c) 2017 - Vincenzo Bifano
 */


;(function ( $, window, document ) {
'use strict';
    var debugLog = false;
    var Name = 'scheletrone',
        
        dataPlugin = 'plugin_' + Name,

            // default options, used for instantion, if not explicitly set
            defaults = {
			url         : '',
            ajaxData    : {},
            debug        : {
                log: false,
                latency: 0
            },
            removeIframe: false,
            backgroundImage: true,
            replaceImageWith: '',
            incache : false,
            onComplete     : function() {
                _logger('default onComplete() event');
            }
		};


    /**
     *  jQuery screen skeleton - scheletrone
     *
     *  @alias scheletrone
     *  @constructor
     *
     *  @author   Vincenzo Bifano
     *
     *  @requires jquery.js
     *
     *  @param   {Object}        [options]                 - a set of options, to override the defaults
     *  @param   {Function}      [options.onComplete]      - the event is triggered after plugin is complete
     *
     *  @example 
     // minimal setup
        var instance = $('#element').square();

     // customized setup
        var instance = $('#skeleton').skeleton({
                url   : "index2.html",
                debug		: {
                    latency: 3000
                },
                incache: false,
                onComplete	: function() { _logger('plugin complete!'); }
           });

     */

    var Scheletrone  = function(element, options) {

        // This is the plugin's constructor
        // It is instantiated for each matched DOM element
        // The huge comment block above is JSDoc syntax, for generated documentation
        // The name of the constructor is used ONLY internally
        // As a general best-practise, constructors should be Capitalized

        // store the element element
        this.element = $(element);

        // override default options
        // create a new object, with all default settings, overridden only by the init options
        this.options = $.extend( {}, defaults, options );
        debugLog = this.options.debug.log;

        //element to skeletrize
        this.element    = element;
	    this.$container = $( element );


        //this.init();
        this.init();



    };
    /////////////////////////////////////
    //         Private methods         //
    /////////////////////////////////////
    /**
     *  Make the skeleton of a passed element 
     *
     *  @param   {Object}  objToSkeletrize  the element
     */
    var _makeitSkeleton = function (objToSkeletrize) {

                objToSkeletrize.addClass("pending_el ");

    }
    /**
     *  Make a text log 
     *
     *  @param   {string}  message text to log
     */
    var _logger = function (message) {
             
             if (debugLog)
               console.log(message);
    }


    var _replaceBackgroundImage = function (replaceImageWith,element)
    {
        
        var bgimage_url = $( element ).css('background-image');
        
        // ^ Either "none" or url("...urlhere..")
        bgimage_url = /^url\((['"]?)(.*)\1\)$/.exec(bgimage_url);
        bgimage_url = bgimage_url ? bgimage_url[2] : ""; // If matched, retrieve url, otherwise ""
        
        var bg_url = $( element ).css('background');
      
        // ^ Either "none" or url("...urlhere..")
        bg_url = /^url\((['"]?)(.*)\1\)$/.exec(bg_url);
        bg_url = bg_url ? bg_url[2] : ""; // If matched, retrieve url, otherwise ""
            

        console.log(this);
        if ((bgimage_url != '') || (bg_url != '') ) {
          
            $( element ).replaceWith("<div class='pending_el "+replaceImageWith+"' style='width:"+$( element ).width()+"px;height:"+$( element ).height()+"px;'></div>")
        
        }
    }

    var _getAllStyles = function (elem) {
        if (!elem) return []; // Element does not exist, empty list.
        var win = document.defaultView || window, style, styleNode = [];
        if (win.getComputedStyle) { /* Modern browsers */
            
            style = win.getComputedStyle(elem, '');
            for (var i=0; i<style.length; i++) {
                styleNode.push( style[i] + ':' + style.getPropertyValue(style[i]) );
                //               ^name ^           ^ value ^
            }
        } else if (elem.currentStyle) { /* IE */
            style = elem.currentStyle;
            for (var name in style) {
                styleNode.push( name + ':' + style[name] );
            }
        } else { /* Ancient browser..*/
            style = elem.style;
            for (var i=0; i<style.length; i++) {
                styleNode.push( style[i] + ':' + style[style[i]] );
            }
        }
        return styleNode;
    }



    /**
     *  Delete node without data attribute
     *
     *  @param   {Object}  objToSkeletrize  the element
     *  @return  {Object}
     */

    var _retrieveOnlyToCache = function(data)
    {
        _logger("_retrieveOnlyToCache");
        _logger(data);
        var div = document.createElement('div');
        div.innerHTML = data;
        $( div ).children().each(function( index ) {
             _logger('a');
             _logger($(this).data("scheletrone") );
            if ( $(this).data("scheletrone") ) 
            {

            }
            else
            {
                 $( this ).remove();
            }
         });
         _logger(div.innerHTML);
         return div.innerHTML;
    }


    ////////////////////////////////////
    //         Public methods         //
    ////////////////////////////////////
    Scheletrone.prototype = {

        /**
         *  Initializes the scheletrone.
         *  This is automatically called when the plugin is called.
         *
         *  @private
         */
        init: function () {
            var _this  = this.element;
            var __this = this;

            _logger(this);
            // iterate all children in element to make a skeleton
            
            if(this.options.removeIframe)
                jQuery('html').find('iframe').remove();


            if (this.options.incache)
            {
                _logger(this.getCache());
                 
                    this.element.innerHTML = this.getCache();
                   
            }

            

            $( _this ).find('*').each(function( index ) {
              
               

                $( this )
                .contents()
                    .filter(function() {
                        
                        return this.nodeType === 3;
                    })
                    .each(function(  ) {
                        
                        if(this.nodeValue.trim() != '')
                        {
                            _logger(this,"-- " + this.nodeValue.trim() + '--');
                            var color = $( this ).parent().css( {"background-color" : "#ccc"} );
                            _logger(this,color);
                            return this
                        }
                        else
                        {
                            this.remove();
                        }
                            
                    })
                    .wrap( "<div class='nodeType3' ></div>" )
                    .end()
                   
            });

             $( _this ).find('*').each(function( index ) {
                    var skeletizza = true;
                    //search for children
 
                    if (!__this.options.backgroundImage)
                         _replaceBackgroundImage(__this.options.replaceImageWith,this);

                    $( this ).css('color', '#ccc');

                    
                    
                    if($( this ).children().length == 0)
                    {
                                
                                if($( this ).is("BR"))
                                {
                                    skeletizza = false;
                                }

                                if($( this ).is("IMG"))
                                {
                                   
                                    var width = this.width;
                                    var height = this.height;
                                    var tempThis = this;
                                    var replaced = "<div class='pending_el " + __this.options.replaceImageWith + " ' style='width:"+width+"px;height:"+height+"px;)'></div>"
                                    $( this ).replaceWith(replaced);
                          
                                   
                                 
                                    skeletizza = false;
                                }

                                if (skeletizza)
                                {
                                    
                                    _makeitSkeleton($( this ));
                                
                                }
                    }
             });

            
            
     



            if (this.options.url != '')
            {
                _logger('prova');
                this.retrieveData();
            }
            // trigger onComplete callback
            if (this.options.onComplete && typeof(this.options.onComplete) == "function")
                this.options.onComplete();
        },
        retrieveData: function () {
        var obj = this;
        
       
            if (this.options.debug.latency > 0)
            {
              
                setTimeout(function(){
                 
                            $.ajax({
                                url: obj.options.url,
                                dataType: "html",
                                data: obj.options.ajaxData,
                                success: function(data) {
                                    
                                    _logger(obj.options.debug.log,"obj.element " + obj.element);
                                        $( obj.element ).html('').append((data));
                                        if (obj.options.incache)
                                        {
                                            _logger(obj.options.debug.log,'setcache');
                                            var cacheData = _retrieveOnlyToCache(data);
                                            obj.setCache(cacheData);
                                        }
                                }
                            });
                    }, obj.options.debug.latency);
                }
                else{
                    $.ajax({
                                url: obj.options.url,
                                dataType: "html",
                                data: obj.options.ajaxData,
                                success: function(data) {
                                  
                                    _logger(obj.options.debug.log,obj);
                                        obj.element.html('').append((data));
                                }
                            });
                }

        },
        /**
         *  Store the asynchronus data in localstorage
         *
         *  @example this.setCache(data);
         */
        setCache : function ( result_data ) {
            // Cache data
           
            if ( window.localStorage ) {
                window.localStorage.setItem( "div-skeleton:" ,  result_data  );
            }
        },
        /**
         *  Retrieve stored scheletrone in localstorage
         *
         *  @example this.getCache();
         */
        getCache : function() {

            if ( window.localStorage ) {
                
                return window.localStorage.getItem( "div-skeleton:");
            }
            else {
                return false;
            }
        },
        
    };
   //////////////////////////////////////////////////
    //         Plugin wrapper                       //
    //////////////////////////////////////////////////


    // A plugin wrapper around the constructor, preventing against multiple instantiations
    $.fn[Name] = function ( options ) {
        var instance;

        // If the first parameter is an object (options), or was omitted,
        // call Plugin.init()
        if ( typeof options === 'undefined' || typeof options === 'object' ) {
            return this.each(function () {
                // prevent multiple instantiations
                if ( !$.data(this, dataPlugin )) {
                    $.data(
                        this, 
                        dataPlugin, 
                        new Scheletrone( this, options )
                    );
                }

                instance = $(this).data( dataPlugin );

                if ( typeof instance['init'] === 'function' ) {
                    instance.init();
                }
            });

        // checks that the requested public method exists
        } else if ( typeof options === 'string' ) {
            var methodName = arguments[0],
                args = Array.prototype.slice.call(arguments, 1),
                returnVal;

            this.each(function() {
                var instance = $(this).data( dataPlugin );

                // Check that the element has a plugin instance, and that
                // the requested public method exists.
                if ( $.data(this, dataPlugin) && typeof $.data(this, dataPlugin)[methodName] === 'function' ) {
                    // Call the method of the Plugin instance, and Pass it
                    // the supplied arguments.
                    returnVal = $.data(this, dataPlugin)[methodName].apply(instance, args);
                } else {
                    console.info('Method ' + options + ' does not exist on jQuery.' + Name);
                }
            });

            if ( typeof returnVal !== 'undefined' ){
                // If the method returned a value, return the value
                return returnVal;
            } else {
                // Otherwise, returning 'this' preserves chainability
                return this;
            }
        } else {
            console.info('Method ' + options + ' does not exist on jQuery.' + Name);
        }
    };
})( jQuery, window, document );