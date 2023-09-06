class NewsController {
    index(req, res, next) {
        res.render('news');
    }

    show(req, res) {}
}

export default new NewsController();
