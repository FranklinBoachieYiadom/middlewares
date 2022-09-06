const globalMiddleware = (req, res, next) =>{
    console.log("Global middleware Statarted");
    next ();
    console.log("Global middleware ended");
};

module.exports={
    globalMiddleware,
};