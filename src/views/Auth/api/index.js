import axios from 'axios';
export default {
    login(params){
        return axios.post('/api/rendering/user/userLogin', params);
    }
}