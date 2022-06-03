import * as api from '../api/index';
import * as types from '../constants/actionTypes';

//action creatores

export const getPosts = () => async (dispatch) =>{
    try{
        const { data } = await api.fetchPosts();
        //const action = {type: 'FETCH_ALL', payload: data};
        //dispatch(action);
        dispatch({type: types.FETCH_ALL, payload: data});
    } catch(error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try{
        const { data } = await api.createPost(post);
        dispatch({type: types.CREATE, payload: data});
    } catch(error){
        console.log(error)
    }  
}

export const updatePost = (currentId, post) => async (dispatch) => {
    try{
        const { data } = await api.updatePost(currentId, post);
        dispatch({type: types.UPDATE, payload: data});
    }
    catch (error)
    {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try{
        await api.deletePost(id);
        dispatch({ type: types.DELETE, payload: id});
    }
    catch (error) {
        console.log(error);
    }
}

export const likePost = (currentId) => async (dispatch) => {
    try{
        const { data } = await api.likePost(currentId);
        dispatch({type: types.LIKE, payload: data});
    }//LIKE const is not necessary because is same as UPDATE,
    catch (error)//it can be changed to UPDATE here and also in reducers
    {
        console.log(error)
    }
}
