<?php

$conn=new mysqli('localhost','root','','user');
$username=$_POST['username'];
$lastname=$_POST['password'];
$email=$_POST['email'];
$password=$_POST['password'];

$sql=$conn->query("insert into form (username,lastname,email,password) values('$username','$lastname','$email','$password')");

if($sql){
    echo "Register Success";
}

?>