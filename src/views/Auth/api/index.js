import axios from 'axios';
export default {
    login(params) {
        return axios.post('/api/rendering/user/userLogin', params);
    },
    /**
 * 用户信息获取
 */
    queryUser(params) {
        return axios.post('/api/rendering/user/queryUser');
    },
}