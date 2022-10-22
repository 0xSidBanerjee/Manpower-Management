import { NextFunction, Request, Response } from "express";

export const authCheck = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.headers?.authorization?.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Access denied. No token provided",
      });
    }
    const bearerHeader = req.headers.authorization;
    const token = bearerHeader.split(" ")[1];
    // const currentUser: DecodedIdToken = await verifyToken(token);
    // if (!currentUser) {
    //   return res.status(401).json({
    //     message: "Access denied. Invalid token",
    //   });
    // }
    // req.body.currentUser = currentUser;
    // req.body.uid = currentUser.uid;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Access denied. Invalid token",
    });
  }
};
