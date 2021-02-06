const requestSuccessStatus=200;
const apiTokenInvalid=401;
const loginAgain=201;//重复登录
//const baseUrl="http://localhost";
const staticFilePath="http://xbimk8.natappfree.cc";
const baseUrl="/apis";
const apiLogin="/userservice/user/api/v1/login";
const apiRegister="/userservice/user/api/v1/register";
const apiSMSSendCode="/userservice/user/api/open/v1/SMS/send"
const apiUploadFile="fileservice/file/api/open/v1/upload_file";
const apiFileRead="/fileservice/file/api/open/v1/file/"
var isLogin=false
var userSite={
	cid:"",
	mobile:"",
	apiToken:"",
	expireTime:"",
	nickName:"",
	avatar:""
}
const request = function(options) {
     try {

         options.header = this.header
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
var header={
	apiToken:"",
	cid:"",
	"Access-Control-Allow-Origin":"*",
	"Access-Control-Allow-Methods":"POST, GET, PUT, OPTIONS, DELETE"
	}

export default {
	staticFilePath,
	requestSuccessStatus,
	apiTokenInvalid,
	apiLogin,
	apiRegister,
	apiUploadFile,
	apiFileRead,
	baseUrl,
	userSite,
	isLogin,
	loginAgain,
	apiSMSSendCode,
	request,
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
	},
	setHeader:function(user){
		this.apiToken="Bearer "+user.apiToken
		this.cid=user.cid
	}
	}
