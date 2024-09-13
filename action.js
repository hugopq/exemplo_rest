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
}

function getAllTasks()
{
    //ex3
}

function getCompletedTasks()
{
    //ex4
}

function getAlbumCount()
{
    //ex5
}

function getFirstAlbumPicture()
{
    //ex6
}

function getAlbumData()
{
    //ex7
}


