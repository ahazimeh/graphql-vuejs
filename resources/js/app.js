
import './bootstrap';// require('./bootstrap');
import VueRouter from 'vue-router';
import Vue from 'vue';// window.Vue = require('vue').default;
import PostList from './PostList';
import Post from './Post';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
import TopicPostList from "./TopicPostList";
import AuthorPostList from "./AuthorPostList";
window.Vue = Vue;
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component:PostList
    },
    {
        path: '/post/:id',
        name: 'post',
        component:Post
    },
    {
        path:'/topic/:slug',
        name:'topic',
        component:TopicPostList
    },
    {
        path:'/authors/:id',
        name:'author',
        component:AuthorPostList
    }
];
Vue.use(VueApollo);
const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://127.0.0.1:8000/graphql'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

const router = new VueRouter({
    mode: 'history',
    routes:routes
})

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
const app = new Vue({
    el: '#app',
    apolloProvider,
    router:router
});
