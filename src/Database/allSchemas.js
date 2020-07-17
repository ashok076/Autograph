import Realm from "realm";

export const Lyfe_Register_Details_Schema = "Lyfe_Register_Details_Master";
export const Lyfe_User_Details_Schema = "Lyfe_User_Details_Master";
export const Lyfe_User_Child_Details_Schema = "Lyfe_User_Child_Details_Master";
// export const Lyfe


export const Lyfe_User_Details_Master = {
  name: Lyfe_User_Details_Schema,
  primaryKey: "Um_PKeyId",
  properties: {
    Um_PKeyId: 'int',
    Um_Name: 'string?',
    Um_Email: 'string?',
    Um_Password: 'string?',
    Um_PhoneNumber: 'string?',
    Um_DOB: 'string?',
    Um_Picture: 'string?',
    Um_IsActive: 'bool?',
    Um_IsDelete: 'bool?',
    Type: 'int?',
    UserID: 'int?'

  }
}

export const Lyfe_User_Child_Details_Master = {
  name: Lyfe_User_Child_Details_Schema,
  primaryKey: "Uc_PKeyId",
  properties: {
    Uc_PKeyId: 'int',
    Um_PKeyID: 'int?',
    Uc_Name: 'string?',
    Uc_Email: 'string?',
    Uc_PhoneNumber: 'string?',
    Uc_IsActive: 'bool?',
    Uc_IsDelete: 'bool?',
    Type: 'string?',
    UserID: 'int?',

  }
}


export const Lyfe_Register_Details_Master = {
  name: Lyfe_Register_Details_Schema,
  primaryKey: "Id",
  properties: {
    Id: "int",
    FirstName: "string?",
    Email: 'string?',
    Contact: 'string?',
    Image_path:'string?',
  }
}


const databaseOptions = {
  path: "Lyfe.realm",
  schema: [Lyfe_Register_Details_Master, Lyfe_User_Details_Master, Lyfe_User_Child_Details_Master],
  schemaVersion: 5
};

// Insert Start



export const InsertLyfe_Register_Details_Schema = data =>
  new Promise((resolve, reject) => {
     console.log('Insert function callded',JSON.stringify(data));
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          realm.create(Lyfe_Register_Details_Schema, data);
          resolve();
        });
      })
      .catch(error => {
        // console.log('InsertError',error)
        reject(error)
        // console.log('Insert function callded error',error);
      }
      );
  });

  export const Updateyfe_Register_Details_Schema = data =>
  new Promise((resolve, reject) => {
     console.log('Insert function callded',JSON.stringify(data));
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          realm.create(Lyfe_Register_Details_Schema, data,"modified");
          resolve();
        });
      })
      .catch(error => {
        // console.log('InsertError',error)
        reject(error)
        // console.log('Insert function callded error',error);
      }
      );
  });

//User details 

export const InsertLyfe_User_Child_Details_Schema = data =>
  new Promise((resolve, reject) => {
     console.log('Insert function callded',JSON.stringify(data));
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          realm.create(Lyfe_User_Child_Details_Schema, data);
          resolve();
        });
      })
      .catch(error => {
        // console.log('InsertError',error)
        reject(error)
        // console.log('Insert function callded error',error);
      }
      );
  });
// export const InsertLyfe_User_Child_Details_Master = data =>
// new Promise((resolve, reject) => {
//   debugger
//   console.log('Insert function callded InsertLyfe_User_Child_Details_Master', JSON.stringify(data));
//   let obj = data
//   console.log('lvalue of data',obj)
//   Realm.open(databaseOptions)
//     .then(realm => {
//       realm.write(() => {
//         obj.forEach(obj => {
//           console.log('lvalue data',obj)
//           realm.create(Lyfe_User_Child_Details_Master, obj);
//         });
//       });
//       resolve();
//     })
//     .catch(error => {
//       console.log('error InsertLyfe_User_Child_Details_Master', error)
//       reject(error)
//     }
//     );
// });

//child details




// Insert query End

// Select query starts

export const queryLyfe_Register_Details_Schema = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        let Patient = realm.objects(Lyfe_Register_Details_Schema);
        let allGoback = Patient//.filtered('GB_work = true')

        resolve([
          JSON.parse(JSON.stringify(allGoback)),

        ]);
      })
      .catch(error => {
        reject(error);
      });
  });

//user details

export const queryLyfe_User_Details_Schema = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        let Patient = realm.objects(Lyfe_User_Details_Schema);
        let allGoback = Patient//.filtered('GB_work = true')

        resolve([
          JSON.parse(JSON.stringify(allGoback)),

        ]);
      })
      .catch(error => {
        reject(error);
      });
  });

//child details
export const queryLyfe_User_Child_Details_Schema = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        let Patient = realm.objects(Lyfe_User_Child_Details_Schema);
        let allGoback = Patient//.filtered('GB_work = true')

        resolve([
          JSON.parse(JSON.stringify(allGoback)),

        ]);
      })
      .catch(error => {
        reject(error);
      });
  });

// Select query ends



// Delete query starts
export const deleteLyfe_Register_Details_Schema = id =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {

          let PatientsMaster = realm.objects(Lyfe_Register_Details_Schema)//.filtered('Inv_Con_pkeyId = "' + id + '"');
          realm.delete(PatientsMaster);
        });
        resolve();
        console.log("deleteBaseDetails")
      })
      .catch(error => reject(error));
  });
//user details
export const deleteLyfe_User_Details_Schema = id =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {

          let PatientsMaster = realm.objects(Lyfe_User_Details_Schema)//.filtered('Inv_Con_pkeyId = "' + id + '"');
          realm.delete(PatientsMaster);
        });
        resolve();
        console.log("deleteBaseDetails")
      })
      .catch(error => reject(error));
  });

//child details
export const deleteLyfe_User_Child_Details_Schema = id =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {

          let PatientsMaster = realm.objects(Lyfe_User_Child_Details_Schema)//.filtered('Inv_Con_pkeyId = "' + id + '"');
          realm.delete(PatientsMaster);
        });
        resolve();
        console.log("deleteBaseDetails")
      })
      .catch(error => reject(error));
  });

//Delete query end



export default new Realm(databaseOptions);
