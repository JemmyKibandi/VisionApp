import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

export const getUsersCount = onRequest(async (_req, res) => {
    try {
        const snapshot = await db.collection("users").get();
        const userCount = snapshot.size; // Get the number of users

        logger.info("User count:", { count: userCount });
        res.json({ count: userCount }); // Return just the count
    } catch (error) {
        logger.error("Error fetching user count:", { error });
        res.status(500).send("Internal Server Error");
    }
});
