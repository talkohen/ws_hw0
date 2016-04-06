var events = require ('events');
var util = require ('util');

util.inherits (hotel, events.EventEmitter);

function hotel (name) {

    this.name = name ;
    this.likeNum =0;
    this.log = "\n"+this.name +"'s History Log : \n";
    events.EventEmitter.call (this);

}

hotel.prototype.like = function () {
    this.likeNum += 1;
    this.emit ("likeNumChanged");
}

hotel.prototype.unlike = function () {
    this.likeNum-=1;
    this.emit ("likeNumChanged");
}

hotel.prototype.addToLog = function (entry) {
     this.log += "<br>"+entry;
}


module.exports = hotel;
