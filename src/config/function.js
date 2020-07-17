import axios from 'axios';

export function fetchapi(data){
    var authorization = data.access_token !== undefined ? data.access_token : ``;
    return axios({
        method:'post',
        // url:'https://api.ipreservationlive.com/api/' +data.url,
        url:'https://testapi.ipreservationlive.com/api/' +data.url,
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+ authorization
        }, 
        responseType: 'json',
        data: JSON.stringify(data)
        })
    }


export const DEFAULT_DATA = {
    COUNTRY_DATA: {
        Task_pkeyID : "0",
        Inst_Task_pkeyId : null,
        Task_Name : "Choose one",
        Task_Contractor_UnitPrice : "0",
        Task_Client_UnitPrice : "0",
        Type : 0
    }
}

