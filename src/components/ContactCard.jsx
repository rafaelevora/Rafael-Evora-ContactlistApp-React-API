import useGlobalReducer from "../hooks/useGlobalReducer"
import UpdateButton from "../components/UpdateButton.jsx"

export default function ContactCard({name, address, email, phone}) {
    console.log("in component "+name)
    return (
        <div>
            <h1>{name}</h1>
            <div>
                <p>Address: {address}</p>
                <p>Phone number: {phone}</p>
                <p>Email: {email}</p>
            </div>
        </div>
    )
}