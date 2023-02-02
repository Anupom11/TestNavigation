import { createContext, useState } from "react";

export const FavoriteContext = createContext({
    ids:[],
    addFavorite:(id)=> { },
    removeFavorite:(id)=> { }
});

function FavoritesContextProvider({children}) {
    const [favMeal, setFavMeal] = useState('');

    function addFavorite(id) {
        setFavMeal((currentMeal)=> [...currentMeal, id]);
    }

    const value= {
        ids: favMeal,
        addFavorite: addFavorite,
    };

    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
}

export default FavoritesContextProvider;

