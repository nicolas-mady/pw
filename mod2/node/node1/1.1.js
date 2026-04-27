const http = require('http');
const fs = require('fs/promises');
const path = require('path');

const PORT = 5678;

async function main() {

    const dir_name = process.argv[2];
    const dir_content = await fs.readdir(dir_name);
    // console.log(dir_content);

    // function readDirectory(dir) {
    //     let content;
    //     let stk = [dir];
    //     while (stk.length > 0) {
    //         const currentDir = stk.pop();
    //         const files = fs.readdirSync(currentDir);
    //         content = content ? content.concat(files) : files;
    //         for (const file of files) {
    //             const filePath = path.join(currentDir, file);
    //             if (fs.statSync(filePath).isDirectory()) {
    //                 stk.push(filePath);
    //             }
    //         }
    //     }
    //     return content;
    // }

    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(dir_content.join('\n'));
    });

    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });

}

if (require.main === module) {
    main();
}
