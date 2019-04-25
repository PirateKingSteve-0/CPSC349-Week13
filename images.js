fetch('http://localhost:3000/images')
    .then(function(response) {
        return response.json();
    })
    .then(function(images) {
        for(let i = 0; i < images.length; i++){
            $("ol").append(`<li><img src="${images[i]['src']}"></img><br>${images[i]['caption']}<br></li>`);
        }
    })


// var stream = minioClient.listObjects('images', '', true);
// stream.on('data', function(obj) {
//     $("body").append(obj['name']);
// })