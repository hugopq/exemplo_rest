function getAllPosts()
{
    //ex1
    let url = 'https://jsonplaceholder.typicode.com/posts';
    let con = document.getElementsByClassName('console')[0];
    fetch(url)
        .then(function(response){
            return response.json();            
        })
        .then(function(myJson){
            let jsonText = JSON.stringify(myJson);
            let myP = document.createElement('p');
            myP.innerText = jsonText;            
           con.insertBefore(myP, con.firstChild);
        });
}

function getPostData()
{
    //ex2
    let txt_id = document.getElementById('txt_post_id');
    if(txt_id.value == "")
    {
        alert('introduza o id');
        return;
    }
    let url = 'https://jsonplaceholder.typicode.com/posts/' + txt_id.value;
    let con = document.getElementsByClassName('console')[0];
    fetch(url)
        .then(function(response){
            return response.json();            
        })
        .then(function(myJson){
            let jsonText = JSON.stringify(myJson);
            let myP = document.createElement('p');
            myP.innerText = jsonText;            
           con.insertBefore(myP, con.firstChild);
        });
}

function getAllTasks()
{
    //ex3
    let url = 'https://jsonplaceholder.typicode.com/todos';
    let con = document.getElementsByClassName('console')[0];
    fetch(url)
        .then(function(response){
            return response.json();            
        })
        .then(function(myJson){
            let jsonText = JSON.stringify(myJson);
            let myP = document.createElement('p');
            myP.innerText = jsonText;            
           con.insertBefore(myP, con.firstChild);
        });
}

function getCompletedTasks()
{
    //ex4
    let url = 'https://jsonplaceholder.typicode.com/todos?completed=true';
    let con = document.getElementsByClassName('console')[0];
    fetch(url)
        .then(function(response){
            return response.json();            
        })
        .then(function(myJson){
            let jsonText = JSON.stringify(myJson);
            let myP = document.createElement('p');
            myP.innerText = jsonText;            
           con.insertBefore(myP, con.firstChild);
        });
}

function getAlbumCount()
{
    //ex5
    let url = 'https://jsonplaceholder.typicode.com/albums';
    let con = document.getElementsByClassName('console')[0];
    fetch(url)
        .then(function(response){
            return response.json();            
        })
        .then(function(myJson){
            let nr = myJson.length;
            let myP = document.createElement('p');
            myP.innerText = "existem " + nr + " albuns";            
           con.insertBefore(myP, con.firstChild);
        });
}

function getFirstAlbumPicture()
{
    //ex6
}

function getAlbumData()
{
    //ex7
}


