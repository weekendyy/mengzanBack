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
            .then((res)=>{
              if(res.status === 200){
                cb(res.data)
              }else{
                console.log('访问出错了')
              }
            })
            .catch(err => {
                console.log(err);
            })
    },
}