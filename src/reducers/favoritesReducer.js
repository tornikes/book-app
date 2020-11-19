export default function favoritesReducer(state = [], action = {}) {
    switch(action.type) {
        case 'TOGGLE_FAVORITE': {
            const id = action.data.id;
            if(state.includes(id)) return state.filter(fav => fav !== id);
            else return [...state, id];
        };
        default: return state;
    }
}

export function toggleFavorite(id) {
    return {
        type: 'TOGGLE_FAVORITE',
        data: { id }
    };
}