'use strict'
let dropArea = document.getElementById('drop-area');


let filesData = [];

// отмена умолчаний и всплытия
const preventsDefault = e => {
    e.preventDefault();
    e.stopPropagation();
};
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eName => {
    dropArea.addEventListener(eName, preventsDefault, false);
});
//  подсветка при пролете над drop-area
const highlight = e => dropArea.classList.add('highlight');
const unhighlight = e => dropArea.classList.remove('highlight');
['dragenter', 'dragover'].forEach(eName => {
    dropArea.addEventListener(eName, highlight, false);
});
['dragleave', 'drop'].forEach(eName => {
    dropArea.addEventListener(eName, unhighlight, false);
});
// прогресс загрузки
const progressBar = document.getElementById('progress-bar');
let filesDone = 0,
    filesToDo = 0;
const initializeProgress = (numfiles) => {
    progressBar.value = 0
    filesDone = 0
    filesToDo = numfiles
}
const progressDone = () => {
    filesDone++
    progressBar.value = filesDone / filesToDo * 100
    console.log('progressBar.value: ', progressBar.value);

}
// грузим на сервер

const uploadFiles = file => {
    // console.log('file: ', file);

    let url = 'server.php'
    let formData = new FormData();
    formData.append('file', file);

    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(progressDone) // => { /* Готово. Информируем пользователя */ })
        .catch(() => { /* Ошибка. Информируем пользователя */ })
}
// превью в поле загрузки
const previewFile = file => {
    const {name, size, type} = file;
    if (file.type.startsWith('image/')) {
        let reader = new FileReader()
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            let img = document.createElement('img')
            img.src = URL.createObjectURL(file)
            filesData.push({'name': name, 'url': img.src, 'size': size, 'type': type})
            document.getElementById('gallery').appendChild(img)
        }
    }
}

//  получаем файл
const handleFiles = files => {
    initializeProgress(files.lenght);
    [...files].forEach(file => {
        uploadFiles(file);
        previewFile(file);
    });
}
// сброс по drag&drop
const dropFiles = e => {
    const filesList = e.dataTransfer.files;
    handleFiles(filesList);
}
dropArea.addEventListener('drop', dropFiles, false);