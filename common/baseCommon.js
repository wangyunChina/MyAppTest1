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
	"Access-Control-Allow-Methods":"POST, GET, PUT, OPTIONS, DELETE",
	setHeader:function(user){
		this.apiToken=user.apiToken
		this.cid=user.cid
	}
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
	header,
	isLogin,
	loginAgain
}