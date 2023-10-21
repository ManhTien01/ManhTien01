// types.ts

import { Request, Response } from 'express';

export interface CustomRequest extends Request {
  headers: {
    authorization?: string;
  };
}

export type CustomResponse = Response;
