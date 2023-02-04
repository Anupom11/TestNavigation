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

    function removeFavorite(id) {
        setFavMeal((currentMeal)=> 
            currentMeal.filter((mealID)=> mealID != id)
        );
    }

    const value= {
        ids: favMeal,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    };

    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
}

export default FavoritesContextProvider;

