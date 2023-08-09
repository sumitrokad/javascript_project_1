// div id="joke" class="joke">Awesome Joke is loading</div>
//         <button id="jokebtn" class="btn">Next joke</button>

// PROMISES - there are two output of promises when we fetch promise by fetch() method then it will be give output or not!
// Promises means to give us the data of Api, it can fullfilled or reject your Request
// 90% we consumed the output or we create it
// fetch method will fullfilled or reject the promises

const jokes = document.querySelector('#joke');
const jokebtn = document.querySelector('#jokebtn');

// const generatejokes = () => {

//     const setHeader = {
//         headers :{
//             Accept : "application/json"    // here we setbheader as application/Json because it was in HTml format
//         }
//     }


//     fetch('https://icanhazdadjoke.com', setHeader)  //  postman will give you this link in the html format data but we need dsta in JSon format so we need  to go in header section just change the "application/html" to the "appllication/json"
//     .then((res)=>res.json())    // here we want program in Json format       // if data is success and if we get it then it will returned in res.
//     .then((data) =>{
//         jokes.innerHTML = data.joke;    // here we get data that we get from response in the nname data
//      }).catch((error)=>{
//         console.log(error);          // if we don't get that data then it will return an error
//     })
// }




// Async Await method is better than fetch method
const generatejokes = async() => {

    try{
    const setHeader = {
        headers :{
            Accept : "application/json"    // here we setbheader as application/Json because it was in HTml format
        }
    }


    const res = await fetch('https://icanhazdadjoke.com',setHeader);    // here if we got that data in response
    const data = await res.json();                                    // after getting that data we convert that into json
    jokes.innerHTML = data.joke;                                     // and then put data in innerHTML
    }catch(err){
        console.log(`the error is ${err}`);
    }
}

jokebtn.addEventListener('click',generatejokes);
generatejokes();           // we call it one more time because when anyone visit site he can get joke

