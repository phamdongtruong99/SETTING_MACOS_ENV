import Compressor from 'compressorjs';

export function compress(file: any): Promise<Blob> {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: 0.2,
      success(result) {
        resolve(result as Blob);
      },
    });
  });
}
