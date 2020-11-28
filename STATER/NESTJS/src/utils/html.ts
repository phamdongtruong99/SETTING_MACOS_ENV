import ejs from 'ejs'
import { S3Adapter } from './S3'
import fetch from 'node-fetch'

const renderHtml = async (templateName, options): Promise<string> => {
  const S3 = new S3Adapter()
  const file = await S3.getObjectFile(`email-template/${templateName}.ejs`)
  const textFile = await fetch(file)
    .then(response => response.text())
    .then(text => {
      return text
    })
  return ejs.render(textFile, options)
}
export default renderHtml

export const renderHtmlFromText = async (textFile, options) => {
  return ejs.render(textFile, options)
}
