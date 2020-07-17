import * as types from "../constants/types";
import { BASE_URL } from "../config/global";
import {  AsyncStorage,} from "react-native";
import store from "../config/store";
import * as database from "../Database/allSchemas";
import Toast from "react-native-simple-toast";
import { Actions } from "react-native-router-flux";
import axios from "axios";
import { fetchapi } from '../config/function';

export const fetchingCommonRequest = () => ({
  type: types.FETCHING_REQUEST
});

export const fetchingCommonSuccess = () => ({
  type: types.FETCHING_SUCCESS
});

export const fetchingCommonFailure = errorMsg => ({
  type: types.FETCHING_FAILURE,
  payload: errorMsg
});

export const fetchingUploadRequest = () => ({
  type: types.FETCHING_UPLOAD_REQUEST
});

export const fetchingUploadSuccess = () => ({
  type: types.FETCHING_UPLOAD_SUCCESS
});

export const fetchingUploadFailure = errorMsg => ({
  type: types.FETCHING_UPLOAD_FAILURE,
  payload: errorMsg
});

export const connection = flag => ({
  type: types.CHANGE_CONNECTION,
  flag
});

export const cancel = () => ({
  type: types.CANCEL
});

export const UploadImage = (
  workOrderNumber ,
  IPLNO,
  Client_Result_Photo_Wo_ID ,
  Client_Result_Photo_FileName ,
  Client_Result_Photo_FilePath,
  Client_Result_Photo_IsActive ,
  Client_Result_Photo_Type ,
  Client_Result_Photo_Ch_ID,
  ReqType  ,
  ContentType  ,
  Image ,
  ImageLg ,
  ImageSm ,
  Clt_Result_Photo_GPSLongitude,
  Client_Result_Photo_GPSLatitude,
  Client_Result_Photo_DateTimeOriginal,
  Type ,
  Client_Result_Photo_StatusType ,
  Client_Result_Photo_Task_Bid_pkeyID ,
  data
) => {
  return async dispatch => {
    dispatch(fetchingCommonRequest());
    try {
      let state = store.getState();
      let { isConnected } = state.offline;

      if (isConnected) {
        const url = `https://us-central1-rare-lambda-245821.cloudfunctions.net/app/upload`;
        return axios({
            method:'post',
            url:url,
            headers: {
                'Content-Type': 'application/json',
            }, 
            responseType: 'json',
            data: JSON.stringify(data)
        }).then( response => {    console.log('image',response )
            if(response.data[0].Status == 1 )
            {
                Toast.show('Photo Uploaded Successfully');
            }
    }) .catch((error)=>{ console.log('Error',error) });
  }
      } catch (error) {
      dispatch(fetchingCommonFailure(error));
    }
  };
};


export const changeConnection = flag => {
  return async dispatch => {
    dispatch(connection(flag));
    let state = store.getState();
    if (!state.offline.uploading && flag) {
      dispatch(uploadIncidents());
      dispatch(uploadProfileData());
      dispatch(uploadInvoice());
      dispatch(uploadAllTask());   
    
    }

    // dispatch(uploadIncidents());

  };
};

export const uploadIncidents = () => {
  return async dispatch => {
    dispatch(fetchingUploadRequest());
    try {
      database
        .queryAllLists()
        .then(res => {    console.log('poo',res)
        if(res != null){
          let incidents = res[0];
          console.log('incidents',incidents),
            Object.keys(incidents).forEach(item => {  console.log('cbnhc',item)
            var boolflag = 0;
            if (incidents[item].Client_Result_Photo_IsActive)
                {
                   boolflag = 1
                }
            
            let data = {
                // id: incidents[item].id,
                workOrderNumber: incidents[item].workOrderNumber,
                IPLNO: incidents[item].IPLNO,
                Client_Result_Photo_Wo_ID:  incidents[item].Client_Result_Photo_Wo_ID,
                Client_Result_Photo_FileName: incidents[item].Client_Result_Photo_FileName,
                Client_Result_Photo_FilePath: incidents[item].Client_Result_Photo_FilePath,
                Client_Result_Photo_IsActive:boolflag,
                Client_Result_Photo_Type:  incidents[item].Client_Result_Photo_Type,
                Client_Result_Photo_Ch_ID:  incidents[item].Client_Result_Photo_Ch_ID,
                ReqType:  incidents[item].ReqType,
                ContentType:incidents[item].ContentType,
                Image : incidents[item].Image,
                ImageLg : incidents[item].ImageLg,
                ImageSm : incidents[item].ImageSm,
                Client_Result_Photo_GPSLongitude:incidents[item].Client_Result_Photo_GPSLongitude,
                Client_Result_Photo_GPSLatitude:incidents[item].Client_Result_Photo_GPSLatitude,
                Client_Result_Photo_DateTimeOriginal:incidents[item].Client_Result_Photo_DateTimeOriginal,
                Type : incidents[item].Type,
                Client_Result_Photo_StatusType :   incidents[item].Client_Result_Photo_StatusType,
                Client_Result_Photo_Task_Bid_pkeyID : incidents[item].Client_Result_Photo_Task_Bid_pkeyID
              }

              const url = `https://us-central1-rare-lambda-245821.cloudfunctions.net/app/upload`;
              return axios({
                  method:'post',
                  url:url,
                  headers: {
                      'Content-Type': 'application/json',
                  }, 
                  responseType: 'json',
                  data: JSON.stringify(data)
              }).then( response => {    console.log('offlineimage',response )

              if (response.data != "" && response.data != undefined) {
                    database
                      .deleteincidents(incidents[item].id)
                      .catch(error => console.log(error));
                  }
                }).catch(error => {
                  console.log(error);
                  dispatch(fetchingUploadFailure(error));
                });
            });
          }
        }).catch(error => console.log(error));
      
    } catch (error) {
      dispatch(fetchingUploadFailure(error));
    }
  };
};


export const  uploadInvoice = () => {
  const data = [];
  return async dispatch => {
    dispatch(fetchingUploadRequest());
    await AsyncStorage.getItem('access_token', (err, access_token) => {

    try {
      console.log('fetchingUploadRequest called')
      database
        .queryAllInsterInvoice()
        .then(res => {  console.log('invoice',res)
        if(res != null){
          let invoice = res[0];
          // console.log('invoicedata',invoice),
            Object.keys(invoice).forEach(item => {  
            var boolflag = 0;
            // console.log('njx',invoice[item].Inv_Con_Ch_TaskId)
            if (invoice[item].Inv_Con_pkeyId)
                {
                   boolflag = 1
                }
                Invdata={ 
                  Inv_Con_Ch_pkeyId: 0,
                  Inv_Con_Ch_TaskId: invoice[item].Inv_Con_Ch_TaskId,
                  Inv_Con_Ch_Uom_Id: 0,
                  Inv_Con_Ch_Qty: invoice[item].Inv_Con_Ch_Qty,
                  Inv_Con_Ch_Price: invoice[item].Inv_Con_Ch_Price,
                  Inv_Con_Ch_Total: invoice[item].Inv_Con_Ch_Total,
                  Inv_Con_Ch_Adj_Price: 0,
                  Inv_Con_Ch_Adj_Total: 0,
                  Inv_Con_Ch_Comment: "",
                  Inv_Con_Ch_IsActive: true,
                  Inv_Con_Ch_IsDelete: false,
                  Inv_Con_Ch_InvoiceId: 0,
                  Inv_Con_Ch_Client_ID: 0,
                  Inv_Con_Ch_Flate_fee: invoice[item].Inv_Con_Ch_Flate_fee,
                  Inv_Con_Ch_Discount: 0,
                  Inv_Con_Ch_Temp_Total:0
              }
              data.push(Invdata)

      fetchapi({
        url:'WOCTASK/ClientResultContractorInvoice',
            Inv_Con_pkeyId :0,
            Inv_Con_Invoice_Id  :0,
            Inv_Con_TaskId  : invoice[item].Inv_Con_Ch_TaskId,
            Inv_Con_Wo_ID  :invoice[item].Inv_Con_Wo_ID,
            Inv_Con_Uom_Id  :0,
            Inv_Con_Sub_Total :0,
            Inv_Con_ContDiscount : 1,
            Inv_Con_ContTotal :1,
            Inv_Con_Short_Note :'',
            Inv_Con_Inv_Followup  :0,
            Inv_Con_Inv_Comment  :"",
            Inv_Con_Ref_ID :0,
            Inv_Con_Followup_Com  :0,
            Inv_Con_Invoce_Num :0,
            Inv_Con_Inv_Date :"",
            Inv_Con_Status  :0,
            Inv_Con_DiscountAmount  :0,
            Inv_Con_IsActive  :1,
            Inv_Con_IsDelete  :0,
            UserID  :0,
            Type  :1,
            Inv_Con_Auto_Invoice  :0,
            Invoice_Contractor_ChildDTO : data,
            access_token
        }) .then( response => {    console.log('AddInvoice',response)
              if (response.data != "" && response.data != undefined) {
                    database
                      .deleteInvoicebyID(invoice[item].Inv_Con_pkeyId)
                      // console.log('id',invoice[item].Inv_Con_pkeyId)
                      // .catch(error => console.log(error));  
                  }
                }).catch(error => {
                  console.log(error);
                  dispatch(fetchingUploadFailure(error));
                });
            })
          }
        }).catch(error => console.log(error));
    } catch (error) {
      dispatch(fetchingUploadFailure(error));
    }
  })
  };
};

export const uploadProfileData = () => {
  return async dispatch => {
    dispatch(fetchingUploadRequest());
    await AsyncStorage.getItem('access_token', (err, access_token) => {

    try {
      let data ={};
      // Toast.show('offline profile method')
      database
        .queryAllProfileData()
        .then(res => {   
          if(res != null){
            // Toast.show('offline profile inside')
          let incidents = res[0];
          console.log('incidents',incidents),
            Object.keys(incidents).forEach(item => {  
            var boolflag = 0;
            if (incidents[item].User_Base64 == null) {

              // Toast.show('offline profile inside  wihtout 64111')
              // Toast.show(  incidents[item].User_pkeyID)
            
                  fetchapi({
                    url: 'Mobile/UpdateProfile',
                    User_pkeyID:  incidents[item].User_pkeyID,
                    User_FirstName: incidents[item].User_FirstName,
                    User_LastName: incidents[item].User_LastName,
                    User_LoginName: incidents[item].User_LoginName,
                    User_Password: incidents[item].User_Password,
                    User_CellNumber: incidents[item].User_CellNumber,
                    User_CompanyName: incidents[item].User_CompanyName,
                    User_ImagePath: incidents[item].User_ImagePath,
                    User_Address: incidents[item].User_Address,
                    User_City: incidents[item].User_City,
                    User_Zip: incidents[item].User_Zip,
                    User_State_strval: incidents[item].User_Zip,
                    User_Email: incidents[item].User_Email,
                    Type: 8,
                      access_token
                  }).then(response => {     console.log('Update', response)
                  
                  debugger;
                    if (response.data[0] != '') {
                      this.setState({
                        loading: false,
                      })
                      Toast.show('Profile updated Successfully');
                      

                    }
                  })
                // })
            }
            else 
            {
              // Toast.show('offline profile inside  wiht 64')
              // Toast.show(  incidents[item].User_pkeyID.toString())
              var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1)
              var filenameval;
              filenameval = incidents[item].User_FirstName + '_' + seq + '.png'
          data = {
                IPLNO: 'User_Profile',
                Client_Result_Photo_StatusType: 1,
                Client_Result_Photo_FileName: filenameval,
                Client_Result_Photo_ImagePath: incidents[item].Client_Result_Photo_ImagePath,
                Client_Result_Photo_IsActive: 1,
                Client_Result_Photo_Type: 1,
                ReqType: 2, // 1 for Desktop 2 for Mobile
                ContentType: 3,  // 1 for Image 2 for Doc
                User_Base64: incidents[item].User_Base64,
                ImageLg: '',
                ImageSm: '',
                User_pkeyID: incidents[item].User_pkeyID,
                User_FirstName: incidents[item].User_FirstName,
                User_LastName: incidents[item].User_LastName,
                User_LoginName: incidents[item].User_LoginName,
                User_Password: incidents[item].User_Password,
                User_CellNumber: incidents[item].User_CellNumber,
                User_CompanyName: incidents[item].User_CompanyName,
                User_Address: incidents[item].User_Address,
                User_City: incidents[item].User_City,
                User_Zip: incidents[item].User_Zip,
                User_State_strval: incidents[item].User_State_strval,
                User_Email: incidents[item].User_Email,
                Type: 8,

              }
              const url = `https://us-central1-rare-lambda-245821.cloudfunctions.net/app/upload`;
              return axios({
                  method:'post',
                  url:url,
                  headers: {
                      'Content-Type': 'application/json',
                  }, 
                  responseType: 'json',
                  data: JSON.stringify(data)
              }).then( response => {    console.log('offlineimage',response )

              // if (response.data != "" && response.data != undefined) {
              //       database
              //         .deleteincidents(incidents[item].id)
              //         .catch(error => console.log(error));
              //     }
                }).catch(error => {
                  console.log(error);
                  dispatch(fetchingUploadFailure(error));
                });
              }
            });
          }
        }).catch(error => console.log(error));
    } catch (error) {
      dispatch(fetchingUploadFailure(error));
    }
  })
  };
};


export const  uploadAllTask = () => {
  return async dispatch => {
    dispatch(fetchingUploadRequest());
    await AsyncStorage.getItem('access_token', (err, access_token) => {

    try {
      // console.log('fetchingUploadRequest called')
      database
        .queryAllInsterTask()
        .then(res => {  
          if(res != null){

          let ADdTask = res[0];
          // console.log('invoicedata',invoice),
            Object.keys(ADdTask).forEach(item => {  
            var boolflag = 0;
            // console.log('njx',ADdTask[item])
            if (ADdTask[item].Inv_Con_pkeyId)
                {
                   boolflag = 1
                }
                fetchapi({
                  url:'Mobile/PostInstructionmobile',
                  Instr_pkeyId:ADdTask[item].Instr_pkeyId,
                  Instr_Task_Id:ADdTask[item].Instr_Task_Id, 
                  Instr_Task_pkeyId:ADdTask[item].Instr_Task_pkeyId,
                  Instr_WO_Id:ADdTask[item].Instr_WO_Id,
                  Instr_Task_Name:ADdTask[item].Instr_Task_Name,
                  Instr_Qty:parseInt(ADdTask[item].Instr_Qty),
                  Instr_Contractor_Price:ADdTask[item].Instr_Contractor_Price,
                  Instr_Contractor_Total:ADdTask[item].Instr_Contractor_Total,
                  Instr_Ch_pkeyId:ADdTask[item].Instr_Ch_pkeyId,
                  Inst_Ch_IsActive: ADdTask[item].Inst_Ch_IsActive,
                  Inst_Ch_Delete: ADdTask[item].Inst_Ch_Delete,
                  Type : ADdTask[item].Type,
                  access_token

          }) .then( response => {    
            // console.log('AddTask',response)

            if (response.data != "" && response.data != undefined) {
                    // database
                    //   .deleteInsertTaskbyID(invoice[item].Inv_Con_pkeyId)
                      // console.log('id',invoice[item].Inv_Con_pkeyId)
                      // .catch(error => console.log(error));  
                  }
                }).catch(error => {
                  console.log(error);
                  dispatch(fetchingUploadFailure(error));
                });
            })
          }
        }).catch(error => console.log(error));
    } catch (error) {
      dispatch(fetchingUploadFailure(error));
    }
  })
  };
};


export const addImage = (data, id) => {
  let newArr = [];
  Object.keys(data).forEach((item, index) => {
    if (item.pid === id) {
      let obj = {
        Client_Result_Photo_data: data[item].image,
        UPloadType: 1,
        Client_Result_Photo_FileName: "",
        Client_Result_Photo_FileSize: "",
        Client_Result_Photo_IsFirst: index
      };
      newArr.push(obj);
    }
  });

  return newArr;
};
