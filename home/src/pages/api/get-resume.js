import stream from 'stream';
import { promisify } from 'util';
import {GetObjectCommand, S3Client} from '@aws-sdk/client-s3';

const endpoint = process.env.SPACES_ENDPOINT
const accessKeyId = process.env.SPACES_ACCESS_KEY
const secretAccessKey = process.env.SPACES_SECRET_KEY
const region = 'us-east-1'
console.log(`Creds: ${endpoint}`)
console.log(`Creds: ${accessKeyId}`)
console.log(`Creds: ${secretAccessKey}`)
console.log(`Creds: ${region}`)

const s3 = new S3Client ({
    forcePathStyle: false,
    region,
    credentials: {
        accessKeyId,
        secretAccessKey,
    },
    endpoint,
})
const Bucket = process.env.RESUME_BUCKET
const Key = process.env.RESUME_OBJECT_KEY
const pipeline = promisify(stream.pipeline)

const handler = async (req, res) => {
    const getObjectCommand = new GetObjectCommand({ Bucket, Key})
    try {
        const response = await s3.send(getObjectCommand)
        // Handle an error while streaming the response body
        response.Body.once('error', err => {
            console.error(`S3 error: ${err.Body}`)
            reject(err)
        })

        res.setHeader('Content-Type', 'application/pdf')
        res.setHeader('Content-Disposition', 'attachment; filename=Mark_Moore_-2023.pdf')

        await pipeline(response.Body, res)
    } catch (err) {
        console.error(`Unexpected Response: ${err}`)
        res.status(400).json({message: 'Bad Request'})
        //new Error(`Unexpected response: ${JSON.stringify(err, null, 2)}`)
    }
}

export default handler;