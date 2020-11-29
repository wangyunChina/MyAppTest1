const requestSuccessStatus=200;
const apiTokenInvalid=401;
const loginAgain=201;//重复登录
//const baseUrl="http://localhost";
const baseUrl="http://192.168.1.106";
const apiLogin="/userservice/user/api/v1/login";
const apiRegister="/userservice/user/api/v1/register";
const apiUploadFile="fileservice/file/api/v1/upload_file";
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
var header={
	apiToken:"",
	cid:"",
	"Access-Control-Allow-Origin":"*",
	"Access-Control-Allow-Methods":"POST, GET, PUT, OPTIONS, DELETE"
	}

export default {
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
