import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function UpdateButton({})
{
    const {store, dispatch} = useGlobalReducer()

    return (
        <>
        <input type="text" placeholder="new name" id="nameInput"/>
        <input type="text" placeholder="new address" id="addressInput"/>
        <input type="text" placeholder="new email" id="emailInput"/>
        <button onClick={() => {dispatch({type:"add_contact",
                                            payload: {
        name:document.getElementById("nameInput").value,

        address:document.getElementById("addressInput").value,
                                                        email:
        document.getElementById("emailInput").value
                                            
}                                                               })}}> 
New Contact 
</button>          
            </> 
    )
}