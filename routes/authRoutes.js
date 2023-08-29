import express from 'express';

const router = express.Router();

import { forgotPasswordController, getAllOrdersController, getOrdersController, loginController, orderStatusController, registerController, testController, updateProfileController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

router.post('/register', registerController);

router.post('/login', loginController);

router.get('/test', requireSignIn, isAdmin, testController);

router.post('/forgot-password', forgotPasswordController);

router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});

router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
})

router.put("/profile", requireSignIn, updateProfileController);

router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
    "/order-status/:orderId",
    requireSignIn,
    isAdmin,
    orderStatusController
);

export default router;