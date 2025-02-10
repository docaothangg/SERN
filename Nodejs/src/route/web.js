//mỗi khi truy cập vào đường link của 1 website thì sẽ chạy vào file này đầu tiên 
const express = require("express")
const homeController = require("../controllers/homeController")


let router = express.Router();

let initWebRouter = (app) => {
    //1 server = 1 ứng dụng (app), ta truyền ứng dụng vào app
    //vd viết 1 hàm định nghĩa trang abc với phương thức get 
    router.get("/abc", (req, res) => {
        return res.send("Hello Word")
    })
    router.get("/", homeController.getHomePage)


    return app.use("/", router)
}

module.exports = initWebRouter;