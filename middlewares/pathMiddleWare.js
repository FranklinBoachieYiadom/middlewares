const pathMiddleware = (req, res, next) =>{
    console.log("Path middleware Statarted");
    next ();
    console.log("Path middleware ended");
};

module.exports={
    pathMiddleware,
};