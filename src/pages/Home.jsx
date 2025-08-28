import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactCard from "../components/ContactCard.jsx";
import UpdateButton from "../components/UpdateButton.jsx";


export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			{
					store.map((cont, i) => {
						return <ContactCard name={cont.name} address={cont.address} phone={cont.phone} email={cont.email} key={i}></ContactCard>
					}
				)
			}
			<UpdateButton></UpdateButton>
		</div>
	);
}; 