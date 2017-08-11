<?php
header('Content-Type:text/json;charset=utf-8');

$username=$_GET['username'];
$password=$_GET['password'];

$jsonString=file_get_contents('../json/user.json');


$arr=json_decode($jsonString);
foreach ($arr as $item){
    if($item->username == $username&&$item->password==$password){
        echo json_encode(array('content'=>'登陆成功'));
       
    }else{
        echo json_encode(array('content'=>'登陆失败'));
    }
}

?>