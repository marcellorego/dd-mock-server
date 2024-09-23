
module.exports = (req, res, next) => {
    if (req.originalUrl.includes("trace")) {
        console.log("request", req.originalUrl, req.body)
    }
    next()
    if (req.originalUrl.includes("trace")) {
        console.log("response", res.statusCode, res.body)
    }
}