const express=require('express');
const bodyParser=require('body-parser');
const sequelize=require('sequelize');
const db=require('./server')
const user=require('./user')
const wallet=require('./wallet')
const app=express();
const cors=require('cors');

const corsOptions={
    origin: ["http://localhost:8080","http://localhost:8081","http://localhost:8082"]
}

app.use(cors(corsOptions));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080" );
     //res.header("Access-Control-Allow-Origin", "http://localhost:8081" );
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     res.header("Access-Control-Allow-Credentials","true");
     res.header("Access-Control-Request-Method", "GET, POST, DELETE, PUT, OPTIONS");
     res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
     next();
   }); 


app.use(bodyParser.json());


app.post("/login",(req,res)=>{
    var Email=req.body.email;
    var Password=req.body.password;

    user.count({
        where:{Email,Password}
    })

    .then(data=>{
        console.log(data)
        if(data==1){
            res.status(200).send("success");
        }else{
            res.status(402).send("invalid username or password");
        }
    }).catch((error)=>{
        res.status(500).send("something went wrong with backend");
    })
}) 


app.post("/deposit", (req, res) => {
    var amount = req.body.amount;
    var UID=1;

    wallet.count({
        where: { UID }
    })
        .then(data => {
            console.log(data)
            if (data == 1) {
                wallet.findOne({
                    where: { UID }
                }).then(data => {
                    var bank=+data.Amount;
                    var total=bank+amount;
                    wallet.update(
                        { Amount: total }, { where: { UID } }
                    )

                    res.status(200).send("Amount Deposit Succesfully")
                })
            } else {
                res.status(402).send("Wallet Doesn't found");
            }
        }).catch((error) => {
            res.status(500).send("something went wrong with backend");
        })
}) 


app.post("/balance", (req, res) => {
    
    var UID = 1;

    wallet.findOne({
        where: { UID }
    }).then(data => {
                   

                    res.status(200).send({data})
            
           
        }).catch((error) => {
            res.status(500).send("something went wrong with backend");
        })
}) 


app.post("/withdraw",(req,res)=>{
    const amount=req.body.amount;
    const UID=1;
  
    wallet.count({where:{UID}})
    .then(count=>{
      if(count==1){
        return wallet.findOne({where:{UID}})
      }
      else{
        throw new Error("Wallet not found")
      }
    })
    .then(walletData=>{
      const bank=+walletData.Amount;
      if(bank>amount){
        const total=bank-amount;
        return wallet.update({Amount:total},{where:{UID}})
        .then(()=>{
          res.status(200).send("Amount withdrawn successfully");
        });
      }else{
        throw new Error("Not enough balance");
      }
    })
    .catch(error=>{
      if(error.message==="Wallet not found"){
        res.status(404).send("wallet not found")
      }
      else if(error.message==="Not enough balance"){
        res.status(402).send("Not enough balance")
      }
      else{
        res.status(500).send("Something wrong with backend")
      }
    })
  })

app.post("/transfer", (req, res) => {
    var amount = req.body.amount;
    var Email = req.body.email;
    var UID=1;   

    user.findOne({
        where: { Email }
    })
        .then(data => {
            console.log(data);
            var SID = data.id;
            
            wallet.findOne({ where: { UID:SID } })
                .then(count => {
                   if(count){               


                       wallet.findOne({ where: { UID } })
                           .then(response => {
                               if (response) {
                                var balance= response.Amount;
                                if(balance>amount) {

                                    var total=+balance-amount;

                                    wallet.update(
                                        { Amount: total }, { where: { UID } }
                                    )

                                    var ftotal=+count.Amount + amount;

                                    wallet.update(
                                        { Amount: ftotal }, { where: { UID:SID } }
                                    )

                                    res.status(200).send("Logic Works");


                               }else{
                                    throw new Error("Not Enough Amount");
                               } 
                               
                            
                            }else {
                                   throw new Error("Wallet Not Found");
                               }
                           })
                        
                    } else {
                        throw new Error("Friend Bank Account Not Found");
                    }
                })

})

   
 
}) 

db.sync();

app.listen(5000,()=>{
    console.log("port is running at 5000"); 
})