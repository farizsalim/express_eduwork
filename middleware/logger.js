const log = (req,res,next) => {
    console.log(`Akses ${req.originalUrl} berhasil ${new Date().toLocaleDateString()}`);
    next();
}

module.exports = log;