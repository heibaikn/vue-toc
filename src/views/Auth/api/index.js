import axios from 'axios';
export default {
    login(params){
        return axios.post('/api/usermodules/login', params);
    }
}