function authenticationMiddleware() {
    return function (req, res, next) {
        if (req.session) {
            console.log("hey")
            return next();
        } else {
            console.log("beforeaa")
            return next();
        }
    }
}

module.exports = authenticationMiddleware;

