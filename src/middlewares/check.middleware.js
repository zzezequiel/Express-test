function checkParam (req, res, next) {
    const {id} = req.params

    id && console.log(`id is ${id}`)
    next()
}
module.exports = {checkParam}