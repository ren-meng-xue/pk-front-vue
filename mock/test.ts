// test.ts
import fs from 'fs'
import path from 'path'
import { MockMethod, MockConfig } from 'vite-plugin-mock'
export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: 'vben'
        }
      }
    }
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben'
      }
    }
  },
  {
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      const imagePath = path.join(__dirname, 'demo.png')
      fs.readFile(imagePath, (err, data) => {
        if (err) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'text/plain')
          res.end('Error:Unable to read image file.')
        } else {
          //设置内容类型为image/jpeg
          res.setHeader('Content-Type', 'image/jpeg')
          res.end(data) //将图片文件的二进制数据发送给客户端
        }
      })
    }
  }
] as MockMethod[]
