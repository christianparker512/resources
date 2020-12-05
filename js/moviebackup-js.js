//Working On Cards JS
$(document).ready(function() {
    const url = 'https://nine-shared-text.glitch.me/movies';
    let allMovies = [];
    let title = $("#title");
    let minutes = $("minutes");
    let review = $("review");
    let rating = $("#rating");
    let genre = $("#genre");
    //======INITIAL GET==========//
    fetch(baseURL)
        .then(response => response.json())
        .then(response => {
            $("#after").css("display", "flex");
            $("#load").fadeOut(300);
            allMovies = response;
            showMovies(allMovies);
            canRemove();
            canEdit();
        });

    //======RECALL THE MOVIES WITH THE EDITED VERSION OF ALL MOVIES ARRAY=======//
    function recallGet() {
        fetch(baseURL)
            .then(response => response.json())
            .then(response => {
                $("#after").css("display", "flex");
                $("#load").fadeOut(300);
                allMovies = response;
                console.log(allMovies);
                canRemove();
                canEdit();
            });
    }


//     //========POST===============//
    const newMovie = (movie) => fetch(`${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    })
        .then(res => res.json())
        .then(data => {
            $(".movieSection").innerHTML += render(data);
            return data;
        })
        .catch(console.error);

// //============= PUT==EDIT==============//


    const editMovie = movie => fetch(`${url}/${movie.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie)
    })
        .then(res => res.json())
        .then(data => {
            console.log(`Success: edited ${JSON.stringify(data)}`);
        })
        .catch(console.error);


// //===================DELETE==============//
    const deleteMovie = (id) => fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()
    ).then(() => {
        recallGet();
        console.log(allMovies);
        console.log(`Success, deleted movie ${id}`);
    }).catch(error => console.log(error));



//=============OTHER FUNCTIONS=================//

    function showMovies(arr){
        for(let i = 0; i < arr.length; i++){
            $(".movieSection")[0].insertAdjacentHTML("afterbegin", render(arr[i]));
        }
    }



    function createMovie(i1, i2, i3){
        let newMovie = {
            title: i1,
            rating: i2,
            genre: i3,
        }
        return newMovie
    }

    function render(data){
        return `<div class="movieCard">
         <span id="forDelete">${data.id}</span>
         <h1 class="titleOnPoster">${data.title}</h1>
         <img src="${data.poster}" class="poster" alt="posterMissing">
         <p>${data.minutes} minutes</p>
         <p>Year Released: ${data.year}</p>
         <p>Rated: ${data.rating}</p>
         <p>Review: ${data.review} out of ten</p>
         <p>Genre: ${data.genre}</p>
         <p>Year: ${data.year}</p>
         <button class="Trailer"><a href="${data.trailer}" target="_blank">Click Here for Trailer</button>
         <button class="Edit">Edit</button>
         <button class="delete">Remove</button>
         </div>`;
    }



    $("#submit").on("click", function (){
        newMovie(createMovie(title.val(), rating.val(), genre.val())).then(data => {
            $(".movieSection")[0].insertAdjacentHTML("afterbegin", render(data));
        });
        $(this).parent().css("display", "none");
        $("#displayForm").css("display", "flex");
    });


    function canRemove() {
        $("body").on("click", ".delete", function () {
            deleteMovie($(this).parent().children().first()[0].innerText).then();
            $(this).parent().remove();
        });
    }


    function canEdit() {
        $("body").on("click", ".Edit", function () {
            let newId = $(this).parent().children().first()[0].innerText;
            let card = $(this);
            let newMovieObj = {};
            $("#changeMovie").on("click",function(){
                let newTitle = $("#changeTitle").val();
                let newGenre = $("#changeGenre").val();
                let newRating = $("#changeRating").val();
                newMovieObj = {
                    title: newTitle,
                    genre: newGenre,
                    rating: newRating,
                    id: newId
                }
                editMovie(newMovieObj);
                card.parent().html(render(newMovieObj));
                $("#edit").css("display", "none");
            });
            $("#closeEdit").on("click", function (){
                $("#edit").css("display", "none");
            });
            $("#edit").css("display", "flex");

        });
    }


    $("#displayForm").on("click", function (){
        $("#formSection").css("display", "flex");
        $(this).css("display", "none");
    });




    var moviesSection = document.querySelector(".movieSection")
    moviesSection.removeChild(moviesSection.children[2])
});







/*Working on Cards CSS*/
/** {*/
/*    box-sizing: border-box;*/
/*    margin: 0;*/
/*    padding: 0;*/
/*}*/
/*#after{*/
/*    display: none;*/
/*    height: 100vh;*/
/*    width: 100vw;*/
/*    justify-content: center;*/
/*    flex-direction: column;*/
/*    align-items: center;*/
/*}*/
/*body{*/
/*    background: rgb(251,251,255);*/
/*    background: radial-gradient(circle, rgba(251,251,255,1) 14%, rgba(12,12,12,1) 93%);*/
/*}*/
/*#formSection{*/
/*    width: fit-content;*/
/*    height: 15vh;*/
/*    display: none;*/
/*    flex-direction: column;*/
/*    justify-content: center;*/
/*    align-items: center;*/
/*    background-color: rgba(251,251,255,.7);*/
/*    color: #FBFBFF;*/
/*}*/
/*.movieSection{*/
/*    width: 80vw;*/
/*    height: 80vh;*/
/*    display: flex;*/
/*    justify-content: space-evenly;*/
/*    align-items: center;*/
/*    flex-wrap: wrap;*/
/*    overflow: scroll;*/
/*    overflow-x: hidden;*/
/*}*/
/*.movieCard{*/
/*    display: flex;*/
/*    flex-direction: column;*/
/*    justify-content: space-around;*/
/*    max-height: 400px;*/
/*    max-width: 300px;*/
/*    align-items: center;*/
/*    color: #000000;*/
/*    background-color: #89d8d3;*/
/*    background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);*/
/*    border: 6px solid #020202;*/
/*    border-radius: 5px;*/
/*    margin: 5%;*/
/*    font-family: 'Texturina', serif;*/
/*}*/
/*.poster{*/
/*    width: 25%;*/
/*    height: 40%;*/
/*    margin: 0 auto;*/
/*}*/
/*.titleOnPoster{*/
/*    text-align: center;*/
/*}*/
/*.delete{*/
/*}*/
/*button {*/
/*    border: 3px solid;*/
/*    border-radius: 30px;*/
/*    color: #0a0a0a;*/
/*    background-color: #fafcfb;*/
/*    font-size: 1em;*/
/*}*/
/*button:hover{*/
/*    border: 3px solid #1ef8d8;*/
/*    border-radius: 30px;*/
/*    color: #fbfcfb;*/
/*    background-color: #eabb13;*/
/*    font-family: 'Texturina', serif;*/
/*}*/
/*label{*/
/*    display: flex;*/
/*    flex-direction: column;*/
/*    align-items: center;*/
/*}*/
/*.editInput{*/
/*}*/
/*#closeEdit{*/
/*    align-self: flex-end;*/
/*    width: 10%;*/
/*    height: 7%;*/
/*    margin-top: -5%;*/
/*}*/
/*.Edit{*/
/*}*/
/*#edit{*/
/*    position: absolute;*/
/*    top: 20vh;*/
/*    left: 15vw;*/
/*    height: 60vh;*/
/*    width: 70vw;*/
/*    display: none;*/
/*    flex-direction: column;*/
/*    justify-content: space-around;*/
/*    align-items: center;*/
/*    border: 3px solid #000000;*/
/*    opacity: 0.8;*/
/*}*/
/*#forDelete{*/
/*    display: none;*/
/*}*/
/*#load{*/
/*    display: flex;*/
/*    justify-content: center;*/
/*    align-items: center;*/
/*    width: 100vw;*/
/*    height: 100vh;*/
/*    !*background-image: url("../img/movieReelBackground.jpg");*!*/
/*    !*!*background-size: cover;*!*!*/
/*    !*!*background-repeat: no-repeat;*!*!*/
/*}*/
/*@media screen and (min-width: 992px){*/
/*    .movieCard{*/
/*        width: calc(100%/2.5);*/
/*        margin: 2% 3%;*/
/*        height: 90%;*/
/*    }*/
/*    #edit{*/
/*        top: 28vh;*/
/*        left: 34vw;*/
/*        height: 50vh;*/
/*        width: 33vw;*/
/*    }*/
/*}*/