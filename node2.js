

var myname="Taro";
exports.myname=myname;

function greeting(something){

	console.log(exports.myname+": Hello,"+something+'!');
};

exports.greeting=greeting;

greeting('World');