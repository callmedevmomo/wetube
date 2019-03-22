export const join = (req,res) => 
res.render("join",{    pageTitle: "Join"});
export const login = (req,res) => 
res.render("login",{    pageTitle: "Log In"});
export const logout = (req,res) => 
res.render("logout",{    pageTitle: "Logout"});
export const userDetail=(req,res)=>
res.render("userDETAIL",{    pageTitle: "User Detail"});
export const editProfile=(req,res)=>
res.render("editPROFILE",{    pageTitle: "Edit Profile"});
export const changePassword=(req,res)=>
res.render("changePassword",{    pageTitle: "Change Password"});