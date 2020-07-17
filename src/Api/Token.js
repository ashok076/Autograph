import axios from 'axios';


//base Function for all the api 

export  function fetchapi(data) {
    console.log('data api',data)
    console.log('http://lyfeapi.ikaart.org/' + data.url)
    // debugger
    return axios(
        {
            method: 'post',
            url: 'http://lyfeapi.ikaart.org/' + data.url,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            responseType: 'json',
            data: JSON.stringify(data)
            // data: data
           
        }
    )
}