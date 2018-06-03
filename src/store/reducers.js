import consts from './consts';

const bars = (state = [], action) => {
    switch (action.type) {
        case consts.ADD_BAR:
            console.log(action);
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title
                }
            ];
        default:
            return state;
    }
};

export default bars;
