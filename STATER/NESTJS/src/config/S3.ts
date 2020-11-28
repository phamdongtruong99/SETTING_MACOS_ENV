import { S3 } from 'aws-sdk'
import { AmazonS3URI } from 'amazon-s3-uri'

export class S3Adapter {
  bucket: string
  s3: S3
  constructor() {
    this.bucket = process.env.S3_BUCKET || ''
    this.s3 = new S3({
      params: { Bucket: this.bucket }
    })
  }

  async deleteFile(key) {
    return await this.s3
      .deleteObject({
        Bucket: this.bucket,
        Key: key
      })
      .promise()
  }

  async deleteFileFromUrl(url: string) {
    const { key } = AmazonS3URI(url)
    return await this.s3
      .deleteObject({
        Bucket: this.bucket,
        Key: key
      })
      .promise()
  }

  getObjectFile(key: string): Promise<string> {
    const s3Params = {
      Bucket: this.bucket,
      Key: key,
      Expires: 5 * 60 //time to expire in seconds (5 minutes)
    }
    try {
      return new Promise((resolve, reject) => {
        this.s3.getSignedUrl('getObject', s3Params, (err, url) => {
          if (err) {
            reject(err)
          } else {
            resolve(url)
          }
        })
      })
    } catch (err) {
      console.log('s3 getObject failed')
      throw new Error(err)
    }
  }

  getSignedUrl(key: string, type: string): Promise<string> {
    const s3Params = {
      Bucket: this.bucket,
      Key: key,
      ACL: 'public-read',
      ContentType: type,
      Expires: 5 * 60 //time to expire in seconds (15 minutes)
    }
    try {
      return new Promise((resolve, reject) => {
        this.s3.getSignedUrl('putObject', s3Params, (err, url) => {
          if (err) {
            reject(err)
          } else {
            resolve(url)
          }
        })
      })
    } catch (err) {
      console.log('s3 putObject failed')
      throw new Error(err)
    }
  }

  upload(buffer: any, key: string, type: string): Promise<string> {
    const s3Params = {
      Key: key,
      Body: buffer,
      Bucket: this.bucket,
      ContentEncoding: 'base64',
      ContentType: type
    }
    try {
      return new Promise((resolve, reject) => {
        this.s3.upload(s3Params, (err, data) => {
          if (err) {
            reject(err)
          } else {
            resolve(data)
          }
        })
      })
    } catch (err) {
      console.error('s3 upload failed')
      throw new Error(err)
    }
  }
}
