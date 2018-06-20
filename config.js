module.exports={
    PORT:process.env.PORT || 5000,
    URI:process.env.MONGODB_URI || "mongodb://admin:123456@localhost/testdb?authSource=admin",
    SECRET_TOKEN:process.env.SECRET_TOKEN || 'nacho1234'

};