var users=[
    {email:"anarfarzaliyev@gmail.com",password:"12345"},
    {email:"anarfarzaliyev9@gmail.com",password:"12345"}
]

var tweets=[
    {email:"anarfarzaliyev@gmail.com",tweet:"Star Wars"},
    {email:"anarfarzaliyev9@gmail.com",tweet:"The Mandalorian"}
]

prompt("email:")
prompt("password:")
function sign(){
    if((email=="anarfarzaliyev@gmail.com"&&  password=="12345")
    ||(email=="anarfarzaliyev9@gmail.com"&&  password=="12345")){
        console.log(tweets)
    }
    else{
        console.log("incorrect data")
    }
}