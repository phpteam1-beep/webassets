
/*--------------------class.cookie--------------------*/
/*--------------------class.cookie--------------------*/
class CookieCls {
    constructor() {
        this.cookiedays = 24 * 60 * 60 * 1000;
        //alert(cookiedays);
    }

    set(cname, cvalue) {
        "use strict";
        const exdays = 7;
        const d = new Date();
        d.setTime(d.getTime() + (exdays * this.cookiedays));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    set(cname, cvalue, exdays) {
        "use strict";
        const d = new Date();
        d.setTime(d.getTime() + (exdays * this.cookiedays));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }


    get(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
}

var COOKIE_OBJ = new CookieCls();


/*--------------------class.cookie--------------------*/
/*--------------------class.cookie--------------------*/
/*--------------------class.displayx--------------------*/
/*--------------------class.displayx--------------------*/
class DisplayXCls {
    constructor() {
        this.manageRetina();

        $(document).ready(() => {
            this.handleImages();
        });
        this.isRatinaDisplay = COOKIE_OBJ.get("isRatinaDisplay");
    }

    manageRetina(){
        if (!this.isRatinaDisplay) {
            // If the cookie is not set, detect it and set the cookie immediately
            this.isRatinaDisplay = this.isRetinaDisplay() ? "true" : "false";
            COOKIE_OBJ.set("isRatinaDisplay", this.isRatinaDisplay);  // Set the cookie immediately
        }

    }

    isRetinaDisplay(){
        if (window.matchMedia) {
            var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
            return (mq && mq.matches || (window.devicePixelRatio > 1));
        }
    }

    handleImages() {
        const images = document.querySelectorAll('img');

        images.forEach((img) => {
            const retinaSrc = img.getAttribute('data-retina-src');
            if (this.isRatinaDisplay == "true" && retinaSrc != '' && retinaSrc != null) {
                //console.log(retinaSrc);
                // For Retina displays, use the higher resolution image
                img.src = retinaSrc;
                //console.log(img.src);
            } /*else {
                // Reset to the original image if not Retina
                const originalSrc = img.src; // Remove any query params from the current src
               	img.src = originalSrc;
            }*/
        });

    }
}
var isRatinaDisplay = false; // default value

let DISPLAY_OBJ = new DisplayXCls();
isRatinaDisplay = DISPLAY_OBJ.isRetinaDisplay();
/*--------------------class.displayx--------------------*/
/*--------------------class.displayx--------------------*/

/*--------------------getDataFromApi--------------------*/
/*--------------------getDataFromApi--------------------*/
function getDataFromApi(data, responseHandler, requestDataType, requestType)
{
    if(requestType != ''){
        requestType = "POST";
    }
    var urlParams = new URLSearchParams(data);
    var async_request_param = urlParams.get('async_request');
    var async_request = true;
    if(async_request_param)
    {
        async_request = async_request_param;
    }
    $.ajax({
        type: requestType,
        url: WEBSERVICE_API_FILE_NAME,
        data: data,
        async: async_request,
        headers: {'Authorization': 'Bearer ' + SOrToKnDoE()},
        success: function (response) {
            return responseHandler(response);
        },
        error: function (xhr,status,error) {
            return "";
        }
    });
}

function UploadDataToServer(data, responseHandler)
{
    $.ajax({
        type: 'POST',
        url: WEBSERVICE_API_FILE_NAME,
        data: data,
        dataType: 'json',
        contentType: false,
        processData: false,
        headers: {'Authorization': 'Bearer ' + SOrToKnDoE()},
        success: function (response) {
            return responseHandler(response);
        },
        error: function (xhr,status,error) {
            return "";
        }
    });
}


function getDataFromAjaxCall(data, responseHandler)
{
    var ajaxOptions = {};
    ajaxOptions.type = 'POST';
    if(data.hasOwnProperty('REQUEST_TYPE')) {
        ajaxOptions.type = data.REQUEST_TYPE;
    }
    ajaxOptions.url = data.URL;
    ajaxOptions.data = data.AJAX_DATA;
    if(data.hasOwnProperty('REQUEST_DATA_TYPE')) {
        ajaxOptions.dataType = data.REQUEST_DATA_TYPE;
    }
    if(data.hasOwnProperty('REQUEST_ASYNC')) {
        ajaxOptions.async = data.REQUEST_ASYNC;
    }
    if(data.hasOwnProperty('REQUEST_CACHE')) {
        ajaxOptions.cache = data.REQUEST_CACHE;
    }
    if(data.hasOwnProperty('REQUEST_CONTENT_TYPE')) {
        ajaxOptions.contentType = data.REQUEST_CONTENT_TYPE;
    }
    if(data.hasOwnProperty('REQUEST_PROCESS_DATA')) {
        ajaxOptions.processData = data.REQUEST_PROCESS_DATA;
    }

    if(ajaxOptions.type == "POST") {
        ajaxOptions.headers = {'Authorization': 'Bearer ' + SOrToKnDoE()}
    }


    ajaxOptions.success = function (response) {
        var result = {
            'action': "1",
            'result': response
        };

        return responseHandler(result);
    };

    ajaxOptions.error = function (xhr,status,error) {
        var result = {
            'action': "0",
            'result': error
        };
        return responseHandler(result);
    };

    setTimeout(function() {
        var ajaxRequest = $.ajax(ajaxOptions);
        return ajaxRequest;
    }, 500);
}

$(document).ready(function() {
    AOT6KSNzku();
});

var t0k, w1TsT0KbLx;

function SOrToKnDoE() {
    w1TsT0KbLx = JSON.parse(GetSysCookie('amifnctgk3hhsec'));

    t0k = w1TsT0KbLx[0];
    w1TsT0KbLx.shift();

    return t0k;
}

function mO4u1yc3dx(request) {
    request.setRequestHeader('Authorization', 'Bearer ' + SOrToKnDoE());
}

function ShpSq6fAm7(form) {
    $('[name="_csrf_tok"]').remove();
    $('<input>').attr({
        type: 'hidden',
        name: '_csrf_tok',
        value: SOrToKnDoE()
    }).appendTo(form);
}

function AOT6KSNzku() {
    if($("form").length > 0) {
        $("form").each(function() {
            $(this).on('submit', function() {
                $('<input>').attr({
                    type: 'hidden',
                    name: '_csrf_tok',
                    value: SOrToKnDoE()
                }).appendTo(this);
            });
        });
    }
}
function SetSysCookie(cname, cvalue, exdays) {

    console.log("hellooo setsyscookie");
    return false;
    "use strict";
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function GetSysCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
/*--------------------getDataFromApi--------------------*/
/*--------------------getDataFromApi--------------------*/


/*--------------------common--------------------*/
/*--------------------common--------------------*/


/*------------------our service menu-----------------*/
var url = $(location).prop('href');
var HASH_TYPE = url.substring(url.lastIndexOf('#') + 1);
var URL_STRING = url.substring(url.lastIndexOf('/') + 1);
/*------------------our service menu-----------------*/
function ChangeUrlV2(title, url) {
    if (typeof (history.pushState) != "undefined") {
        var obj = { Title: title, Url: url };
        history.pushState(obj, obj.Title, obj.Url);
    } else {
        alert("Browser does not support HTML5.");
    }
}

$(document).ready(function () {
    /*-----------------------------------------------------
     // country code auto width Adjust JS
 --------------------------------------------------------*/
    function EmptyValue() {
        if ($('div').hasClass('countryPhoneSelectChoice')) {
            if ($('.contact_number').val()) {
                var $contact_number = $('.contact_number');
                $contact_number.addClass('phoneinput');
            } else {
                $('.contact_number').removeClass('phoneinput');
            }
        }
    }

    EmptyValue();
    setInterval(() => {
        $('.form-group').each(function () {
            var $countryPhoneSelectWrapper = $(this).find('.countryPhoneSelectWrapper');
            var $phoneinput = $(this).find('.phoneinput');
            var $emailinput = $(this).find('.emailinput');
            var $hotelhide = $(this).find('.hotelhide');
            var $html = $('html');
            var countrycodeWidth = $(this).find('.countryPhoneSelectChoice').innerWidth();
            if (countrycodeWidth > 110) {
                $countryPhoneSelectWrapper.css('width', `${countrycodeWidth + 10}px`);
                var countryPhoneSelectWrapperWidth = $countryPhoneSelectWrapper.innerWidth();
                $phoneinput.css('paddingLeft', `${countryPhoneSelectWrapperWidth + 8}px`);
                if ($countryPhoneSelectWrapper.is(':hidden')) {
                    $emailinput.css({
                        paddingLeft: '16px', paddingRight: '16px'
                    });
                }
                if ($html.attr('dir') === 'rtl') {
                    $phoneinput.css({
                        paddingRight: `${countryPhoneSelectWrapperWidth + 20}px`, paddingLeft: '16px'
                    });
                }
            } else {
                $countryPhoneSelectWrapper.css('width', '110px'); // Corrected to use string value
                $phoneinput.css('padding', ''); // Reset padding
                $emailinput.css('padding', ''); // Reset padding
                $hotelhide.css('padding', ''); // Reset padding
            }
            EmptyValue();
        });
    }, 10);
    if ($("form[name='contactform'] .form-group").length > 0) {
        $("form[name='contactform'] .form-group").each(function (index) {
            $this = $(this).find('input');
            //console.log($this.val());
            if ($this.val() != "") {
                $this.closest('.form-group').addClass('floating');
            } else {
                $this.closest('.form-group').removeClass('floating');
            }
            if ($('input[name="vCode"]').length > 0 && $('input[name="vPhone"]').val().length > 0) {
                $this.closest('.form-group.phone-column').addClass('floating');
            } else {
                $this.closest('.form-group.phone-column').removeClass('floating');
            }
        })
    }


    /*------------------News letter-----------------*/


    //frmnewsletterActionset();
    function frmnewsletterActionset(){
        if ($("#frmnewsletter").length > 0)
        {
            var fromNewsLetterAction = $('form#frmnewsletter').attr('action');
            if(fromNewsLetterAction == ''){
                $('form#frmnewsletter').attr('action',tsite_url_base+'news_letter_action.php');
            }
        }
    }
    setTimeout (frmnewsletterActionset(), 2000);

    /*------------------News letter-----------------*/

    /*------------------language selection-----------------*/


    function change_lang_call() {
        change_lang_v2($("#lang_select").val());
    }

    function change_lang_v2(lang) {
        changelanguagecode_v2(lang , function (){
            if (window.location.protocol === "http:") {
                var httpReferer = window.location.href;
                window.location.href = 'common.php?lang=' + lang + '&HTTP_REFERER=' + encodeURIComponent(httpReferer);
            } else {
                window.location.href = 'common.php?lang=' + lang;
            }
        });


    }
    function changelanguagecode_v2(lang,callback){

        var ajaxData = {
            'URL': tsite_url_base+'ajax_fpass_action.php',
            'AJAX_DATA': {
                action: 'changeLangCode',
                langcode: lang
            },
            'REQUEST_DATA_TYPE': 'json'
        };
        getDataFromAjaxCall(ajaxData, function (response) {
            callback();
        });
    }

    $("#lang_select").removeAttr("onchange");
    $("#lang_select").change(change_lang_call);
    /*------------------language selection-----------------*/

    /*------------------our service menu-----------------*/
    $('.has-level-menu > a').click(function() {


        if(HASH_TYPE != "our-service") {
            ChangeUrlV2('ourServiceMenu', URL_STRING + "#our-service");
        }
    });

    $('.dropdown-content > div > h3 > span').click(function() {

        var url1 = $(location).prop('href');
        url1 = url1.replace('#our-service','');
        var URL_STRING1 = url1.substring(url1.lastIndexOf('/') + 1);
        ChangeUrlV2('ourServiceMenu', URL_STRING1);

        HASH_TYPE = url1.substring(url.lastIndexOf('#') + 1);
        URL_STRING = url1.substring(url.lastIndexOf('/') + 1);
    });
    /*------------------our service menu-----------------*/


});

/*------------------our service menu-----------------*/
jQuery(window).on("load", function () {
    if(HASH_TYPE === "our-service"){
        $('.has-level-menu > a').trigger('click');
    }
});
/*------------------our service menu-----------------*/

/*--------------------common--------------------*/
/*--------------------common--------------------*/



/*--------------------resizeimageplace--------------------*/
/*--------------------resizeimageplace--------------------*/

/*------------------Resize Image Place-----------------*/
//backGroundPlace = image,Grey,White,invisible
//AllowImageSpace = Yes,No
function updateDivBackgrounds(className, attrName, width, height, place, backGroundPlace, AllowImageSpace, IsResize, options = {}) {
    if(options.width != undefined) {
        width = options.width;
    }

    if(options.height != undefined) {
        height = options.height;
    }

    var resizeWidth = width * 1.25;
    var resizeHeight = height * 1.25;


    console.log("======");
    console.log(isRatinaDisplay);
    console.log("======");

    if (isRatinaDisplay === true) {
        resizeWidth = width * 2;
        resizeHeight = height * 2;
    }
    let resizeUrl = `${tsite_url_base}resizeImg.php?w=${resizeWidth}&h=${resizeHeight}&src=`;
    if (IsResize == "No") {
        resizeUrl = '';
    }
    $(`.${className}`).each(function () {
        /*-----------------------------------*/
        if (place === "backGroundImage") {
            const imageUrl = resizeUrl + $(this).attr(attrName);
            const img = new Image();
            img.src = imageUrl;
            const self = $(this);
            $(img).on('load', function () {
                self.removeClass('shine');
                self.css("background-image", `url(${imageUrl})`);
            });
        } else if (place === "imageSrc") {
            if ($(this).find('video.resize_video').length > 0) {
                $(this).find('video.resize_video').css("width", width);
                $(this).find('video.resize_video').css("height", height);
                $(this).removeClass('shine');
            } else {
                const $image = $(this).find('img.resizeImageWithJs');
                const imageUrl = resizeUrl + $image.attr(attrName);
                $image.attr('src', imageUrl);
                const self = $(this);
                $image.on('load', function () {
                    self.removeClass('shine');
                    let loaderResizeImageElement = self.find('.loaderResizeImage');
                    loaderResizeImageElement.remove();
                    let pElement = self.parent().closest('.shine');
                    if (pElement.length == 1) {
                        pElement.removeClass('shine');
                    }
                    $image.removeClass('imageVisibilityHidden');
                }).on('error', function () {
                    /*-----------------------------------*/
                    if (AllowImageSpace == "Yes") {
                        $image.css("width", width);
                        $image.css("height", height);
                    } else {
                        $image.css("width", 0);
                        $image.css("height", 0);
                    }
                    /*-----------------------------------*/
                    $image.removeClass('imageVisibilityHidden');
                    /*-----------------------------------*/
                    if (backGroundPlace === "image") {
                        $image.attr("src", `${tsite_url_base}assets/img/custome-store/food-menu-order-list.png`);
                    } else if (backGroundPlace === "Grey") {
                        self.css("background-color", "#f1f1f1");
                        $image.addClass('imageVisibilityHidden');
                    } else if (backGroundPlace === "White") {
                        self.css("background-color", "#fbfbfb");
                        $image.addClass('imageVisibilityHidden');
                    } else if (backGroundPlace === "invisible") {
                        $image.addClass('imageVisibilityHidden');
                    }
                    /*-----------------------------------*/
                });
            }
        }
        /*-----------------------------------*/
    }).promise().done(function () {
    });
}

function resizeImage(className, attrName, place, backGroundPlace = 'Grey', AllowImageSpace = 'Yes', WaitForArea = "No", options = {}) {
    var intervalId = setInterval(function () {

        if(document.querySelector("." + className)) {

            var width = document.querySelector("." + className).offsetWidth;
            var height = document.querySelector("." + className).getBoundingClientRect().height;

            console.log(className , width, height );
            if ((width < 20 || height < 15) && WaitForArea === "No") {
                updateDivBackgrounds(className, attrName, width, height, place, backGroundPlace, AllowImageSpace, 'No', options);
                clearInterval(intervalId);
            } else if (width > 20 && height > 15) {

                updateDivBackgrounds(className, attrName, width, height, place, backGroundPlace, AllowImageSpace, 'Yes', options);
                clearInterval(intervalId);
            }

        }

    }, 1000);
}

/*------------------Resize Image Place-----------------*/

/*------------------Number Format-----------------*/
class NumberFormatter {
    constructor(thousandsSep = ',', decPoint = '.', decimals = 2, maxlength = '15', eReverseSymbolEnable = 'No') {
        this.thousandsSep = thousandsSep;
        this.decPoint = decPoint;
        this.decimals = decimals;
        this.valueAddElement = '';
        this.maxlength = maxlength;
        this.eReverseSymbolEnable = eReverseSymbolEnable;
    }

    /* initializeNumberFormatting_old(inputSelector)
     {

         /!*------------------element create-----------------*!/
         var id = $(inputSelector).attr('id');
         var name = $(inputSelector).attr('name');
         var maxlength = $(inputSelector).attr('maxlength');


         $(inputSelector).attr('maxlength', this.maxlength);

         $('#'.id);
         $(inputSelector).attr('id', id + '_HNumber');
         $(inputSelector).attr('name', name + '_HNumber');

         this.valueAddElement = $('<input>').attr({
             type: 'hidden',
             id: id,
             name: name,
             value: ''
         });
         $(inputSelector).after(this.valueAddElement);
         /!*------------------element create-----------------*!/


         this.numberFormat(inputSelector)

         $(inputSelector).on('input', (event) => {
             this.handleInputEvent($(event.target));
         }).on('keydown', (event) => {
             if(event.key === '.'){
                 event.preventDefault();
             }
             $(inputSelector).attr('pre-val', $(inputSelector).val());
         });
     }*/
    initializeNumberFormatting(inputSelector) {

        // Loop through each element matching the inputSelector
        $(inputSelector).each((index, element) => {
            let $element = $(element); // Wrap the element with jQuery
            /*------------------element create-----------------*/
            var id = $element.attr('id');
            var name = $element.attr('name');
            var maxlength = $element.attr('maxlength');
            var hNumber = $element.attr('hNumber');
            if (hNumber && hNumber === "on") {
            } else {
                // Set the maxlength from the object if exists
                $element.attr('maxlength', this.maxlength);
                // Update the id and name attributes
                $element.attr('id', id + '_HNumber');
                $element.attr('name', name + '_HNumber');
                $element.attr('hNumber', 'on');
                // Create a hidden input element with the original id and name
                let hiddenElement = $('<input>').attr({
                    type: 'hidden',
                    id: id,
                    name: name,
                    value: ''
                });
                $element.data('hiddenElement', hiddenElement);
                // Insert the hidden element after the current element
                $element.after(hiddenElement);
                /*------------------element create-----------------*/
                // Apply number formatting to the current element
                this.numberFormat($element);
                // Set up event listeners for input and keydown events
                $element.on('input', (event) => {

                    this.handleInputEvent($element);
                }).on('keydown', (event) => {


                    if (
                        event.key.match(/^[0-9.,]$/) ||
                        event.key === "Backspace" ||
                        event.key === "ArrowLeft" ||
                        event.key === "ArrowRight"
                    ) {
                    } else {
                        event.preventDefault();
                    }
                    let checkDecimalAddedc = this.checkDecimalAdded($element.val());
                    if (checkDecimalAddedc >= 1 && (event.key === ',' || event.key === '.')) {
                        event.preventDefault();
                    }
                    if (this.decPoint === ',' && checkDecimalAddedc === 0)
                    {
                        if (event.key === '.' || event.keyCode === 190 || event.keyCode === 110) {
                            event.preventDefault();
                            let currentVal = $element.val();
                            let cursorPos = $element[0].selectionStart;
                            $element.val(currentVal.slice(0, cursorPos) + ',' + currentVal.slice(cursorPos));
                            this.setCursorPosition($element, cursorPos + 1);
                        }
                    }
                    $element.attr('pre-val', $element.val()); // Store previous value in a custom attribute
                });
            }
        });
    }

    numberFormatonly(number) {
        let initVal = number;
        if (typeof initVal !== 'string') {
            initVal = String(initVal);
        }

        let decimalValue = initVal.split('.')[1] || '';

        return this.format(initVal, decimalValue, 1);
    }

    SymbolPosition(Symbol, number, reverse) {
        if (this.eReverseSymbolEnable == "Yes") {
            return number + ' ' + Symbol;
        } else {
            return Symbol + ' ' + number;
        }
    }

    numberFormat(inputSelector) {
        $(inputSelector).each((index, element) => {
            let $input = $(element);
            let $hiddenElement = $input.data('hiddenElement');
            let initVal = $input.val();


            if (typeof initVal !== 'string') {
                initVal = String(initVal);
            }
            let decimalValue = initVal.split('.')[1] || '';

            $input.val(this.format(initVal, decimalValue, 1));
            $hiddenElement.val(initVal);
        });
    }

    format(number, decimalValue = '', rowValue = 0) {
        let numberorg = number;

        let checkDecimalAddedc = this.checkDecimalAdded(numberorg);
        if (this.thousandsSep === '.' && rowValue === 0) {
            number = number.replace(/\./g, '#').replace(/,/g, '.').replace(/#/g, ',');
        }
        if (this.decPoint === ',' && rowValue === 0) {
            number = number.replace(/,/g, '.');
        }

        let n = !isFinite(number) ? 0 : +number,
            prec = !isFinite(+this.decimals) ? '' : Math.abs(this.decimals),
            sep = this.thousandsSep,
            dec = this.decPoint,
            s = '',
            toFixedFix = function (n, prec) {
                return n.toFixed(prec);
            };
        s = (prec ? toFixedFix(n, prec) : '' + n).split('.');

        if(s[1] <= 0) {

            delete(s[1]);
        }
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if (s[0] === 0) {
            return '';
        }
        let showDecimals = numberorg.includes(dec);
        if (showDecimals && numberorg.split(dec).length > 1 && numberorg.split(dec)[1] == 0) {
            s[1] = decimalValue.slice(0, prec);
            if ($.trim(s[1])) {
                return s.join(dec);
            } else {
                let d = '';
                if (checkDecimalAddedc > 0) {
                    d = this.decPoint;
                }
                return s[0] + d;
            }
        } else if (showDecimals) {
            s[1] = decimalValue.slice(0, prec);
            if ($.trim(s[1])) {
                return s.join(dec);
            } else {
                let d = '';
                if (checkDecimalAddedc > 0) {
                    d = this.decPoint;
                }
                return s[0] + d;
            }
        } else if (s[0] === 0) {
            return 0;
        } else {
            if ($.trim(s[1])) {
                return s.join(dec);
            } else {
                let d = '';
                if (checkDecimalAddedc > 0) {
                    d = this.decPoint;
                }
                return s[0] + d;
            }
        }
    }

    handleInputEvent($input) {
        let $hiddenElement = $input.data('hiddenElement');
        const cursorPosition = $input[0].selectionStart;
        let formattedValue = $input.val();
        const oldFormattedValue = formattedValue;
        let oldRawValue = oldFormattedValue.replace(new RegExp(`[${this.thousandsSep}]`, 'g'), '');
        let oldRawValue2 = oldRawValue.replace(new RegExp(`[${this.decPoint}]`, 'g'), '.');
        let oldRawValue111 = oldFormattedValue;
        const OLDshowDecimals = oldRawValue.includes(this.decPoint);
        let OLDdecimalValue = '';
        if (OLDshowDecimals) {
            OLDdecimalValue = oldRawValue.split(this.decPoint)[1];
        }
        let oldFormatedValue = this.format(oldRawValue, OLDdecimalValue);
        oldRawValue = oldFormatedValue.replace(new RegExp(`[${this.thousandsSep}]`, 'g'), '');
        oldRawValue = oldRawValue.replace(/^0+/, '');
        oldFormatedValue = this.format(oldRawValue, OLDdecimalValue);
        let cursorPositionBeforeText = $input.attr('pre-val').slice(0, cursorPosition);
        let oldCount = this.totalPointCommas(cursorPositionBeforeText);
        if (oldCount < 1) {
            oldCount = 0;
        }
        // let rawValue = formattedValue.replace(new RegExp(`[${this.thousandsSep}]`, 'g'), '');
        let rawValue = formattedValue.replace(new RegExp(`[${this.thousandsSep}]`, 'g'), '');
        if (cursorPosition == 0) {
            if (this.thousandsSep === '.') {
                rawValue = rawValue.replace(/\./g, '#').replace(/,/g, '.').replace(/#/g, ',');
            }
            if (rawValue <= 0) {
                rawValue = '';
            }
        }
        if (rawValue == 0) {
            rawValue = '';
        }
        $input.data('raw-value', rawValue);
        $input.attr('raw-value', rawValue);
        $hiddenElement.val(oldRawValue2);
        const showDecimals = rawValue.includes(this.decPoint);
        let decimalValue = '';
        if (showDecimals) {
            decimalValue = rawValue.split(this.decPoint)[1];
        }
        let newFormattedValue = this.format(rawValue, decimalValue);
        if (rawValue == 0) {
            newFormattedValue = '';
        }
        $input.val(newFormattedValue);
        $hiddenElement.attr('formatted-value', newFormattedValue);
        /*------------------cursor position-----------------*/
        const oldLength = oldRawValue111.length;
        const prvvalueLength = $input.attr('pre-val').length;
        const newLength = newFormattedValue.length;
        // console.log('prvvalueLength : ' + prvvalueLength);
        // console.log('newLength :' + newLength);
        let inputval = $input.val();
        cursorPositionBeforeText = inputval.slice(0, cursorPosition);
        let NewCount = this.totalPointCommas(cursorPositionBeforeText);
        //let NewCount = this.totalPointCommas(inputval);
        NewCount = this.totalPointCommas(inputval);
        oldCount = this.totalPointCommas($input.attr('pre-val'));
        let cPlus = 0;
        if (NewCount >= oldCount) {
            cPlus = (NewCount - oldCount);
        } else {
            cPlus = NewCount;
        }
        //  console.log('cPlus1 :' + cPlus);
        if (cPlus < 0) {
            cPlus = 0;
        }
        // console.log('cursorPosition : ' + cursorPosition);
        // console.log('cPlus :' + cPlus);
        let tCursorPosition = cursorPosition + cPlus;
        //   console.log('tCursorPosition : ' + tCursorPosition);
        if (prvvalueLength > newLength) {
            let NewCount = this.totalPointCommas(inputval);
            let oldCount = this.totalPointCommas($input.attr('pre-val'));
            tCursorPosition = cursorPosition;
            if (NewCount < oldCount) {
                tCursorPosition -= (prvvalueLength - newLength);
                tCursorPosition += (oldCount - NewCount);
            }
        }
        if (tCursorPosition < 0) {
            tCursorPosition = 0;
        }
        this.setCursorPosition($input, tCursorPosition);
        /*------------------cursor position-----------------*/
    }

    setCursorPosition($input, position) {
        $input[0].setSelectionRange(position, position);
    }

    totalPointCommas(number) {
        if (this.thousandsSep == ',') {
            //console.log('number : ' + number);
            var commas = number.match(/,/g);
            //  console.log('commas : ' + commas);
        } else {
            //  console.log('number : ' + number);
            var commas = number.match(/\./g);
            // console.log('commas : ' + commas);
        }
        var commaCount = commas ? commas.length : 0;
        /* var periods = number.match(/\./g);
         var periodCount = periods ? periods.length : 0;*/
        return commaCount;
    }

    checkDecimalAdded(number) {
        if (this.decPoint == ',') {
            var commas = number.match(/,/g);
        } else {
            var commas = number.match(/\./g);
        }
        var commaCount = commas ? commas.length : 0;
        return commaCount;
    }
}

/*------------------Number Format-----------------*/
/*--------------------resizeimageplace--------------------*/
/*--------------------resizeimageplace--------------------*/
