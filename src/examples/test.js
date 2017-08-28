/*引入Vue框架*/
import Vue from 'vue'
/*引入资源请求插件*/
import VueResource from 'vue-resource'
import data from '../mocks/mock';
/*使用VueResource插件*/
Vue.use(VueResource);

Vue.http.get("http://g.cn").then(
   (successData) => {console.log(successData.body);},
   (fileData) => {console.log(fileData);}

);