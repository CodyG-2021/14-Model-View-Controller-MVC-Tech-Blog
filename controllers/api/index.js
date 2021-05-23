const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const dashboardRoutes = require('./dashBoardRoutes');

router.use('/users', userRoutes);
// router.use('/dashboard', dashboardRoutes);

module.exports = router;

