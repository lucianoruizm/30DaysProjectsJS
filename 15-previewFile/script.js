const input = 
document.querySelector('#file-upload')
input.addEventListener('change', function (e) {
    console.log(input.files)
    const reader = new FileReader()
    reader.onload = function () {
        // const lines = reader.result.split('\n').map(function (line) {
        //     return line.split(',')
        // })
        // console.log(lines);
        const img = new Image()
        img.src = reader.result
        let fileContainer = document.getElementById('file-preview-container')
        fileContainer.appendChild(img)
    }
    // reader.readAsText(input.files[0])
    reader.readAsDataURL(input.files[0])
}, false)