import consts from './consts';

let nextTodoId = 0;
export const addBar = title => {
    console.log(title);
    return {
        type: consts.ADD_BAR,
        id: nextTodoId++,
        title
    };
};
