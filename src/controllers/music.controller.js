const allAlbums = async (req, res, next) =>{
    try {
        res.status(200).send({data:'get all albums'})
    } catch (error) {
        res.status(500).send({status: 'FALSE'})
    }
}
const createAlbum = async (req, res, next) =>{
    const body = req.body
    try {
        res.status(201).send({status:'OK', msg:'simulation'})
        next()
    } catch (error) {
        res.status(501).send({status:'FALSE'})
        next()
    }
    next()
}
const deleteAlbum = async (req, res, next) => {
    const {id} = req.params
    try {
        res.status(200).send({status: 'OK',msg: `deleted album ${id}`})
    } catch (error) {
        res.status(500).send({status: 'FALSE'})
    }
}
module.exports = {allAlbums, createAlbum, deleteAlbum}