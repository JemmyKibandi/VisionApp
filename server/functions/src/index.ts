import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

export const getUsers = onRequest(async (_req, res) => {
    try {
        const snapshot = await db.collection("users").get();
        let users: { id: string; }[] = [];

        snapshot.forEach(doc => {
            users.push({ id: doc.id, ...doc.data() });
        });

        if (users.length === 0) {
            logger.info("No users found.");
            res.json(null);
            return;
        }

        logger.info("Fetched users:", { count: users.length });
        res.json(users);
    } catch (error) {
        logger.error("Error fetching users:", { error });
        res.status(500).send("Internal Server Error");
    }
});
