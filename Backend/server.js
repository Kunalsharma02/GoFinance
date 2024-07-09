const Sequelize=require('sequelize');
const sequelize=new Sequelize(
    'bank',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(()=>{
    console.log('connection has been established');
}).catch((error)=>{
    console.log('unable to connect to database: ',error);
})

module.exports=sequelize