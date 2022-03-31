import axios from 'axios';

export default {
    getRecipes: function () {
        return axios.get('/api/recipes');
    },

    saveRecipe: function (savedRecipes) {
        return axios.post('/api/recipes', savedRecipes);
    },

    deleteRecipe: function (id) {
        return axios.delete('/api/recipes/' + id);
    },

    createUser: function (user) {
        return axios.post("/api/user/signup", user);
    },

    signIn: function (user) {
        return axios.post("/api/user/signin", user);
    },

    checkLoggedIn: function () {
        return axios.get('/api/user/check');
    },

    logOut: function () {
        return axios.post('/api/user/logout');
    }
};