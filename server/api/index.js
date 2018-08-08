var router = require('express').Router();

// api router will mount other routers
// for all our resources. Each resource directory
// has a resourceRoutes.js file with the router ready to go,
// require them and mount them to their respective routes below

router.use('/users', require('./usersRoute'));
router.use('/categories', require('./categoriesRoute'));
router.use('/posts', require('./postsRoute'));

module.exports = router;
