import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", {join : "Join"});
}
export const postJoin = (req, res) => {
    console.log(req.body);

    //ECMAScript6 이용
    const {
        body : {name, email, password, password2}
    } = req;
    if(password !== password2) {
        res.status(400);
        res.render("join", {join : "Join"});
    }else {
        //To do : Registar User
        //To do : Log user in
        res.redirect(routes.home);
    }
}
export const login = (req, res) => res.render("login", {login : "Login"});
//export const login = (req, res) => res.render("login", {potato : 12345});
export const logout = (req, res) => res.render("logout", {logout : "Logout"});
export const userDetail = (req, res) => res.render("userDetail", {userDetail : "UserDetail"});
export const editProfile = (req, res) => res.render("editProfile", {editProfile : "Edit Profile"});
export const changePassword = (req, res) => res.render("changePassword", {changePassword : "Change Password"});