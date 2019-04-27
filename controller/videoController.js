export const home = (req, res) => res.render("home", {pageTitle:"Home"});
export const search  = (req, res) => res.render("search", {search:"Search"});
export const upload  = (req, res) => res.render("upload", {upload:"Upload"});
export const videoDetail  = (req, res) => res.render("videoDetail", {videoDetail:"Video Detail"});
export const editVideo  = (req, res) => res.render("editVideo", {editVideo:"Edit Video"});
export const deleteVideo  = (req, res) => res.render("deleteVideo", {deleteVideo:"Delete Video"});