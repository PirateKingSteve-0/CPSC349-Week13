var minioClient = new MinIO.Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: 'JZRU08WDYPN090YQJ86D',
    secretKey: '32Zjh7SK3vLIoIfL74MjupKU3VBQqNCpBfA5g+Fz'
});

function uploadFile(){
    var caption = document.getElementById("name");
    var file = document.getElementById("file");
    console.log(caption);
    console.log(file);
    minioClient.putObject('images', caption, file, function(err, etag){
        return console.log(err, etag);
    })
}