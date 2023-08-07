/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NextFunction, Request, Response } from 'express'
import dairyData from './diaries.json'
import { DiaryEntry } from '../types'

export const getDairies = async (_req: Request, res: Response, _next: NextFunction) => {
  const dairies: DiaryEntry[] = dairyData as DiaryEntry[]
  return res.status(200).json({
    message: 'get all dairies',
    data: dairies
  })
}

export const addDairies = async (_req: Request, res: Response, _next: NextFunction) => {
  return res.status(200).json({
    message: 'get all dairies'
  })
}
