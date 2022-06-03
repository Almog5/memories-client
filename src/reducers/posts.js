export default (posts = [], action) => {
    switch(action.type){ // all this happens after the server does whet he does,
                         // this affect only on client side - UI
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':// add new post to all posts
            return [...posts, action.payload];
        case 'UPDATE'://go over all posts and change by id the post that updated
        case 'LIKE':
            return posts.map(post => post._id === action.payload._id ? action.payload : post);
        case 'DELETE':
            return posts.filter(p => p._id != action.payload);
        default: 
            return {
                ...posts
        };
    }
}