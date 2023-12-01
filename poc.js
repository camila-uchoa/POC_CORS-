var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
 if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
 alert(xhr.responseText);
 }
}
xhr.open('GET', 'http://targetapp/api/v1/user', true); 
xhr.withCredentials = true; 
xhr.send(null);
