const xhr=new XMLHttpRequest()
xhr.open('GET','https://api.github.com/users/octocat/repos',true)
xhr.onload= function(){
    if(xhr.status>=200 && xhr.status<300){
        console.log(xhr.responseText);
    }
    else{
        console.log('error');
    }
}
xhr.send()