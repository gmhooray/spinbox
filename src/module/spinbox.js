/**
 * @author    Park ji man
 * @version   0.0.1
 * @desc      Spinbox module by jindo library
 */

nts.spinbox.Spinbox = jindo.$Class({

    $init: function (sWrapperId) {
        this._assignElement(sWrapperId);
        this._attachEvents();
        this._oModel = new nts.spinbox.model.SpinboxModel();
    },

    _assignElement: function (sWrapperId) {
        this._welSpinboxWrapper = jindo.$(sWrapperId);
        this._welInput = jindo.$Element(this._welSpinboxWrapper.querySelector("._spinbox-input"));
        this._welIncreaseBtn = jindo.$Element(this._welSpinboxWrapper.querySelector("._spinbox-increaseBtn"));
        this._welDecreaseBtn = jindo.$Element(this._welSpinboxWrapper.querySelector("._spinbox-decreaseBtn"));
    },

    _increase: function () {
        this._oModel.increaseByOne();
        this._welInput.attr("value", this._oModel.getValue());
    },

    _decrease: function () {
        this._oModel.decreaseByOne();
        this._welInput.attr("value", this._oModel.getValue());
    },

    _startIncreaseInterval: function () {
        this._increase();
        this._timeout = setTimeout(jindo.$Fn(function () {
            this._interval = setInterval(jindo.$Fn(this._increase, this).bind(), 100);
        }, this).bind(), 500);
    },

    _startDecreaseInterval: function () {
        this._decrease();
        this._timeout = setTimeout(jindo.$Fn(function () {
            this._interval = setInterval(jindo.$Fn(this._decrease, this).bind(), 100);
        }, this).bind(), 500);
    },

    _clearInterval: function () {
        clearInterval(this._interval);
        clearTimeout(this._timeout);
    },

    _attachEvents: function () {
        this._welIncreaseBtn.attach({   //when onclink "IncreaseButton" : Event
            "mousedown": jindo.$Fn(this._startIncreaseInterval, this).bind(),
            "mouseup": jindo.$Fn(this._clearInterval, this).bind() });

        this._welDecreaseBtn.attach({   //when onclink "DecreaseButton" : Event
            "mousedown": jindo.$Fn(this._startDecreaseInterval, this).bind(),
            "mouseup": jindo.$Fn(this._clearInterval, this).bind() });

//        this._welInput.attach({    //when focusOut from input box : Event
//            "focusout": jindo.$Fn(function(){
//                this._oModel.setValue(this._welInput.attr("value"));
//                this._welInput.attr("value", this._oModel.getValue());
//            }, this).bind() });
    }
});