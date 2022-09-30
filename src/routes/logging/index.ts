import { Router } from 'express';
import logger from '../../utils/logger';

const router = Router();

router.post("/", (req, res) => {
    const { level, label, error } = req.body
    logger.info(error, { level: level || "APP", label: label ||  "PRODUCTION" });
    res.status(200).json({ status: "success" });
});

const loggingRouter = router;
export { loggingRouter };