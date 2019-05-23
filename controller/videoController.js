import {videos} from "../db"

export const home = (req, res) => {
    res.render("home", {pageTitle:"Home", videos});
};

export const search  = (req, res) => {
    console.log(req.query);
    const {
        query : {term : searchingBy}
    } = req;
    //const searchingBy = req.query.term; 와 같음
    res.render("search", {search:"Search", searchingBy, videos});
}

export const upload  = (req, res) => res.render("upload", {upload:"Upload"});
export const videoDetail  = (req, res) => res.render("videoDetail", {videoDetail:"Video Detail"});
export const editVideo  = (req, res) => res.render("editVideo", {editVideo:"Edit Video"});
export const deleteVideo  = (req, res) => res.render("deleteVideo", {deleteVideo:"Delete Video"});