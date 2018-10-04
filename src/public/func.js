import axios from "axios";
import qs from 'qs'

export default {
    ajaxGet (api, cb) {
        axios.get(api)
            .then(cb)
            .catch(err => {
                console.log(err);
            })
    },
    ajaxPost (api, post, cb) {
        let query = qs.stringify(post)
        axios.post(api, query,{
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(cb)
            .catch(err => {
                console.log(err);
            })
    },
}