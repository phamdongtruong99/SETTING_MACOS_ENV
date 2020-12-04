import request from '@/utils/request';

interface SignedResponse {
  uploadUrl: string;
  url: string;
}

export const uploadPhoto = async (req, name: string): Promise<void> => {
  try {
    const signUrlResponse: SignedResponse = await request.post(`/signedUrlS3`, {
      key: name,
      type: req.file.type,
    });
    await fetch(signUrlResponse.uploadUrl, {
      method: 'PUT',
      body: req.file,
      headers: {
        'Content-Type': req.file.type,
      },
    });
    req.onSuccess(signUrlResponse.url, req.file);
  } catch (error) {
    req.onError(error);
  }
};
