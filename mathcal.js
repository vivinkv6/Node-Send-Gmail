//Send Mail using Node js

//Here we use nodemailer module to send email from our system

//important points

//1) install nodemailer module from npm
     //command :  npm install nodemailer

//2)If you want send mail from your gmail account then use must turn on less secure app in your google account 
     //https://www.google.com/settings/security/lesssecureapps   
     
     
//   Lets code !

//import nodemailer module
var nodemailer = require('nodemailer');

var sender = nodemailer.createTransport({
    service : 'gmail',
    auth:{
        user : "Enter your gmail id",
        pass : "Enter your google account password"
    }
});

//entire details of email such as from,to,subject,body.

var emailDetails = {
    from : 'sender@gmail.com',
    to : 'receiver@gmail.com', // to:'receiver@gmail.com','receiver2@gmail.com','receiver3@gmail.com',etc.
    subject : 'enter the Subject',
    html : '<h1>Enter body content</h1>' //You can write any type of data such as text,html.
};

//sendMail take two parameters 1)emailDetails 2)callback function
sender.sendMail(emailDetails,(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Mail send successfully'+data.response) //data.response-> optional
    }
});