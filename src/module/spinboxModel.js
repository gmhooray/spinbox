nts.spinbox.model.SpinboxModel = jindo.$Class({

    $init: function () {
        this._nCurrentValue = 200;
        this._nMaxValue = 300;
        this._nMinValue = 100;
    },

    _convertToNumber: function (sValue) {
        var nConvertedValue = sValue;

        if (typeof sValue === "string") {
            nConvertedValue = parseInt(sValue.replace(/[^[0-9]+/g, ''), 10);
        }
        return nConvertedValue;
    },


    _validate: function (sValue) {
        var nPrevValue = this._convertToNumber(sValue);


        if (nPrevValue >= this._nMaxValue) {  //over 300
            return this._nMaxValue;

        } else if (nPrevValue <= this._nMinValue) { //under 100
            return this._nMinValue;

        } else {
            return nPrevValue;
        }
    },

    setValue : function(sValue){
        this._nCurrentValue = this._validate(sValue);
    },

    increaseByOne : function(){
        this.setValue( this._nCurrentValue + 1 );
    },

    decreaseByOne : function(){
        this.setValue( this._nCurrentValue - 1 );
    },

    getValue : function(){
        return this._nCurrentValue;
    }
});