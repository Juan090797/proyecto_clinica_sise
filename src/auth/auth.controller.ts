import { Request, Response } from 'express';
import * as loginService from './auth.service';
import { ResponseModel } from '../shared/responseModel';
import { STATUS_BAD_REQUEST, STATUS_UNAUTHORIZED } from '../shared/constants';
import { loginSchema } from '../schemas/loginSchema';



export const loginAuth = async (req: Request, res: Response): Promise<any>=> {
    console.log('authController::loginAuth');
    const { error }: any = loginSchema.validate(req.body);
    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }
    const { username, password } = req.body;
    try {
        const token = await loginService.loginAuth(username, password);
        res.json(ResponseModel.success({ token }));
    } catch (error: any) {
        res.status(STATUS_UNAUTHORIZED).json(ResponseModel.error(error.message));
    }
};
