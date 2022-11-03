import { createContext } from 'react';

const FavoriteContext = createContext({
	favKey: [],
	totalFav: 0,
	addFavorite: (fav) => {},
	removeFavorite: (fav) => {},
	isInFavorite: (fav) => {},
});
export function FavContextProvider(props) {
	const [userFavorite, setUserFavorite] = useState([]);

	function addFavoriteHandler(newFav) {
		setUserFavorite((oldFav) => {
			return oldFav.concat(newFav);
		});
	}

	function removeFavoriteHandler(favID) {
		setUserFavorite((oldFav) => {
			return oldFav.filter((fav) => fav.id !== favID);
		});
	}

	function isInFavoriteHandler(favID) {
		return userFavorite.some((fav) => fav.id === favID);
	}

	const context = {
		userFavorite: userFavorite,
		totalFav: userFavorite.length,
		addFavorite: addFavoriteHandler,
		removeFavorite: removeFavoriteHandler,
		isInFavorite: isInFavoriteHandler,
	};

	return (
		<FavoriteContext.Provider value={context}>
			{props.children}
		</FavoriteContext.Provider>
	);
}

export default FavoriteContext;
