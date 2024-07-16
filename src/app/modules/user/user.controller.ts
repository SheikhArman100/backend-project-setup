import { Request, Response } from "express";
import logger from "../../../utils/logger";
import UsersInfo from "./user.model";

/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export const createUser = async(req: Request, res: Response) => {
  try {

    const { firstName,lastName, email, password,phoneNumber,image, } = req.body;
    
    if (!firstName||!lastName || !email || !password || !phoneNumber ||!image) {
        return res.status(400).json({
          message: "Invalid or incomplete user data",
        });
      }
      const newUser = new UsersInfo({
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        image
      });
      await newUser.save()
      return res.status(201).json({
        message: "New account is created successfully",
      });

  } catch (error:any) {
    logger.error(error);
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
