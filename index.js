var hotel = require ('./hotel');
var http = require ('http')



function displayLikeNum () {
    console.log (this.name + "'s likes : " + this.likeNum);
    this.addToLog("likeNum = " + this.likeNum + "\n");
}

function checkNegative () {
    if (this.likeNum < 0) {
        console.log ("Cant have negative like number ! (" 
                        +this.likeNum +") setting to 0");
        this.like();
        this.addToLog ("Tried to make likeNum negative."
                        +"fixed with like.\n")
    }
}

function addToLog (entry) {
 this.log += entry;
}
var myHotel = new hotel("Sheraton");

myHotel.on ("likeNumChanged", displayLikeNum );
myHotel.on ("likeNumChanged", checkNegative );

console.log ("\nHello. Testing functions ...\n");

myHotel.like ();
myHotel.unlike ();
myHotel.unlike();
myHotel.like();
 console.log (myHotel.log);

 console.log ("\nTesting Went OK. continuing to creating server...")

http.createServer (function(req,res) {
    res.writeHead(200);
    res.write ("<h1>Hello</h1>" 
                + myHotel.name+ "'s like number : "
                 + myHotel.likeNum

                 +"<br><br>" +myHotel.log
                 );
    
    res.end();
    
}).listen(8080);


console.log ("listening on 8080...");