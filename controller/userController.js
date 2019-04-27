export const join = (req, res) => res.render("join", {join : "Join"});
export const login = (req, res) => res.render("login", {login : "Login"});
//export const login = (req, res) => res.render("login", {potato : 12345});
export const logout = (req, res) => res.render("logout", {logout : "Logout"});
export const userDetail = (req, res) => res.render("userDetail", {userDetail : "UserDetail"});
export const editProfile = (req, res) => res.render("editProfile", {editProfile : "Edit Profile"});
export const changePassword = (req, res) => res.render("changePassword", {changePassword : "Change Password"});