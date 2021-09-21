import { Injectable, UploadedFile } from '@nestjs/common';
import { createWriteStream, createReadStream } from 'fs';
import { ParseFile } from './parse-file.pipe';

@Injectable()
export class FilesService {
    async uploadFile(@UploadedFile(ParseFile) file: Express.Multer.File): Promise<boolean> {
        console.log(file);
        return new Promise(async (resolve, reject) => {
            const path = `./uploads/${file.originalname}`;
            const cws = createWriteStream(path);
            cws.write(file.buffer);
            cws.end();
            cws.on("finish", () => { resolve(true); }); 
            cws.on("error", reject); 
        });
    }
}
