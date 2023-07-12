const helloMiddleware = (req, res, next) =>{
    console.log('hello i am middle ware');
    next();
};

const getDate = (req, res, next)=>{
    req.requestTime = new Date();
    req.user = 'response from db for findByPk'
    next();
}

const pirate  = (req, res, next) =>{
    res.send('ive taken over the responsne!!')
}

module.exports = {
    helloMiddleware,
    pirate,
    getDate,

};

