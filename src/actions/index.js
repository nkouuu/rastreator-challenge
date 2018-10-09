import {GET_NEW,GET_NEWS} from './types';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/'

export const getNews = () => {
    let news = async () => await axios.get(`${url}`)
    return {type:GET_NEWS,payload:news()}
}

export const getNew = (id) => {
    let news = async () => await axios.get(`${url}${id}`)
    return {type:GET_NEW,payload:news()}
}