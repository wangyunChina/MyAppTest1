const requestSuccessStatus=200;
const apiTokenInvalid=401;
const loginAgain=201;//重复登录
//const baseUrl="http://localhost";
const staticFilePath="http://epie.natapp1.cc";
const baseUrl="/apis";
const apiLogin="/userservice/user/api/v1/login";
const apiRegister="/userservice/user/api/v1/register";
const apiSMSSendCode="/userservice/user/api/open/v1/SMS/send"
const apiUploadFile="fileservice/file/api/open/v1/upload_file";
const apiFileRead="/fileservice/file/api/open/v1/file/"
const apiNextWords="/english/study/api/v1/next-words";
const apiStudyWord="/english/study/api/v1/study";
const apiWordChart="/english/english/lineChart";
const apiWordDetail="/english/study/api/v1/third/translate"
var isLogin=false
var userSite={
	cid:"",
	mobile:"",
	apiToken:"",
	expireTime:"",
	nickName:"",
	avatar:""
}
var header={
	apiToken:"",
	cid:"",
	"Access-Control-Allow-Origin":"*",
	"Access-Control-Allow-Methods":"POST, GET, PUT, OPTIONS, DELETE"
	}
const request = function(options) {
     try {
		console.log(header)
         options.header = header
     } catch (err) {
      console.log(err)
    }
	options.fail=(response)=>{
		console.log(response)
		uni.showToast({
			title:"网络异常",
			duration:500,
			image:"../../static/netWorkError.png"
		})
		return ;
	}
    // 这里对response进行处理，
    // 401表示登录状态过期，需重新登录
	options.complete = (response) => {

		if(response.statusCode==500||response.statusCode==404){
			uni.showToast({
				title:"网络异常",
				duration:500,
				image:"../../static/netWorkError.png"
			})
				return;
		}
		if (response.statusCode == 401) {
			uni.navigateTo({
			   url: '/pages/login/login' 
			});
			return;
		}
	}
	
    return uni.request(options);
  }


export default {
	staticFilePath,
	requestSuccessStatus,
	apiTokenInvalid,
	apiLogin,
	apiRegister,
	apiUploadFile,
	apiFileRead,
	apiNextWords,
	apiStudyWord,
	apiWordDetail,
	apiWordChart,
	baseUrl,
	userSite,
	isLogin,
	loginAgain,
	apiSMSSendCode,
	request,
	header,
	baserRequest:{
			data:{},
			request:function(url,data,method,func){
				let that=this;
				uni.request({
				url:baseUrl+url,
				method:method,
				data:data,
				header:header,
				complete:func
				})
				}
	}
	}
