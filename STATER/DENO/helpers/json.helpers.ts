import { VideoRequest, UdemyRequest } from "../models/request.ts";
import {
  VIDEO_REQUESTS_DATA_PATH,
  UDEMY_REQUESTS_DATA_PATH,
} from "../configs/data.config.ts";
import {
  errorLog,
  successLog,
} from "https://deno.land/x/colorlog/mod.ts";

export const readVideoRequests = async (): Promise<VideoRequest[]> => {
  try {
    successLog(`Reading data from: ${VIDEO_REQUESTS_DATA_PATH}`);
    const videoRequestStr = await Deno.readTextFile(VIDEO_REQUESTS_DATA_PATH);
    return JSON.parse(videoRequestStr);
  } catch (error) {
    errorLog(`An error occured: ${error.message}`);
    throw new Error(error.message);
  }
};

export const writeVideoRequest = async (data: VideoRequest[]) => {
  try {
    const videoRequestStr = JSON.stringify(data);
    await Deno.writeTextFile(VIDEO_REQUESTS_DATA_PATH, videoRequestStr);
    successLog(`Wrote data to: ${VIDEO_REQUESTS_DATA_PATH} successfully`);
  } catch (error) {
    errorLog(`An error occured: ${error.message}`);
    throw new Error(error.message);
  }
};

export const readUdemyRequests = async (): Promise<UdemyRequest[]> => {
  try {
    successLog(`Reading data from: ${UDEMY_REQUESTS_DATA_PATH}`);
    const videoRequestStr = await Deno.readTextFile(UDEMY_REQUESTS_DATA_PATH);
    return JSON.parse(videoRequestStr);
  } catch (error) {
    errorLog(`An error occured: ${error.message}`);
    throw new Error(error.message);
  }
};

export const writeUdemyRequest = async (data: UdemyRequest[]) => {
  try {
    const videoRequestStr = JSON.stringify(data);
    await Deno.writeTextFile(UDEMY_REQUESTS_DATA_PATH, videoRequestStr);
    successLog(`Wrote data to: ${UDEMY_REQUESTS_DATA_PATH} successfully`);
  } catch (error) {
    errorLog(`An error occured: ${error.message}`);
    throw new Error(error.message);
  }
};
