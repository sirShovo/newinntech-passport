/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response } from "express";
import dairyData from "./diaries.json";
import { DiaryEntry, DiaryEntryNonCommets } from "../typings";

export const getDairies = async (_req: Request, res: Response) => {
  const dairies: DiaryEntry[] = dairyData as DiaryEntry[];
  return res.status(200).json({
    message: "get all dairies",
    data: dairies,
  });
};

export const getDairiesWithoutComments = async (
  _req: Request,
  res: Response
) => {
  const dairies: DiaryEntryNonCommets[] = (dairyData as DiaryEntry[]).map(
    ({ id, date, weather, visibility }) => {
      return { id, date, weather, visibility };
    }
  );
  return res.status(200).json({
    message: "get all dairies without commets",
    data: dairies,
  });
};

export const addDairy = async (_req: Request, res: Response) => {
  return res.status(200).json({
    message: "get all dairies",
  });
};
