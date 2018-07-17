/**
 * Created by tianw on 2018/5/30.
 */
import axios from 'vue-axios'

/**
 * 登录
 */
export const login = axios.post('address + dmin/Login/LG', {
                                     data
                               }).then(function (response) {
                                 console.log(response);
                               }).catch(function (error) {
                                 console.log(error);
                               });
