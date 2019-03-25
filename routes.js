// url작성 하는 장소
//어디에서든지 여기에 있는 url을 가져다 쓸 수 있도록
// ex. /user/1 == 나에게 1번 user를 주는 것 / express가 :id라는게 변하는 값인걸 인지함
//ex. /videos/1/eidt

//Global url
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//User
const USERS = "/users";
const USER_DETAIL = "/:id"; 
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//Video
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

//router 생성
const routes = {
    home : HOME,
    join : JOIN,
    login : LOGIN,
    logout : LOGOUT,
    search : SEARCH,
    users : USERS,
    userDetail : USER_DETAIL,
    editProfile : EDIT_PROFILE,
    changePassword : CHANGE_PASSWORD,
    videos : VIDEOS,
    upload : UPLOAD,
    videoDetail : VIDEO_DETAIL,
    editVideo : EDIT_VIDEO,
    deleteVideo : DELETE_VIDEO
};

export default routes;