/** returns a randomly selected item from array of items */

const choice = (items) => {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
};


/** removes the first matching item from items, 
 * If not found, return undefined.
*/

const remove = (items, item) => {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)]
        };
    };
};

export {choice, remove}