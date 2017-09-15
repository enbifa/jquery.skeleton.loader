
/*
 *  jQuery screen skeleton - scheletrone - v0.0.1
 *  A jQuery plugin to make a skeleton loading of your html elements.
 *
 *  Copyright (c) 2017 - Vincenzo Bifano
 */


;(function ( $, window, document ) {
'use strict';

    var Name = 'scheletrone',
        
        dataPlugin = 'plugin_' + Name,

        // default options, used for instantion, if not explicitly set
             = {
			url         : '',
            ajaxData    : {},
            debug        : {
                log: false,
                latency: 0
            },
            incache : false,
            onComplete     : function() {
                console.info('default onComplete() event');
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
             
             //if (this.options.debug.log)
             // console.log(message);
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
            var _this = this.element;
            _logger(this);
            // iterate all children in element to make a skeleton
            
            if (this.options.incache)
            {
                _logger(this.getCache());
                   // this.element.innerHTML(this.getCache());
                   // var div = document.createElement('div');
                    this.element.innerHTML = this.getCache();
                   // return;
            }

            $( _this ).find('*').each(function( index ) {
               // $( this ).contents();
               

                $( this )
                .contents()
                    .filter(function() {
                        
                        return this.nodeType === 3;
                    })
                    
                    .wrap( "<div></div>" )
                    .end()
                   /* .filter( "a" )
                    .unwrap()
                    .wrap( "<a></a>" )*/;
            });

             $( _this ).find('*').each(function( index ) {
                    var skeletizza = true;
                    //search for children
                    _logger(skeletizza);
                    if($( this ).children().length == 0)
                    {
                                if($( this ).is("BR"))
                                {
                                    skeletizza = false;
                                }

                                if($( this ).is("IMG"))
                                {
                                    _logger("IMG");
                                    var width = $( this ).clientWidth;
                                    var height = $( this ).clientHeight;

                                    $( this ).replaceWith("<div class='pending-el' style='width:"+this.width+"px;height:"+this.height+"px;'></div>")
                                
                                    skeletizza = false;
                                }

                                if (skeletizza)
                                {
                                    _logger("_makeitSkeleton -->>" +  this);
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
        
        //     this.logger(this.options.url);
            if (this.options.debug.latency > 0)
            {
                //obj.logger(this.options.debug.latency > 0);
                setTimeout(function(){
                  //  obj.logger(obj.options.url);
                            $.ajax({
                                url: obj.options.url,
                                dataType: "html",
                                data: obj.options.ajaxData,
                                success: function(data) {
                                    //logger(this);
                                    _logger("obj.element " + obj.element);
                                        $( obj.element ).html('').append((data));
                                        if (obj.options.incache)
                                        {
                                            _logger('setcache');
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
                                    //logger(this);
                                    _logger(obj);
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
            //_logger(result_data);
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