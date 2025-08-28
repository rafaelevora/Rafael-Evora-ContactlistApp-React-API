export const initialStore=()=>{
  return [{
      name:"",
      address:"",
      phone:"",
      email:"",
  }]
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_contact':

      const { name, address, email, phone } = action.payload

      return (
        [
        ...store,
          {
            name: name,
            address: address,
            phone: phone,
            email: email,
          }
        ]
      );

    case "update_address":
      return {

      };
      default:
        throw Error('Unknown action');
  }    
}
