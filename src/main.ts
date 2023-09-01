'use strict';

// Put variables in global scope to make them available to the browser console.
const video = document.querySelector('video')!;
const canvas = document.querySelector('canvas')!;
canvas.width = 480;
canvas.height = 360;
const text = document.getElementById('text')!;
const button = document.querySelector('button')!;
button.onclick = function() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d')!.drawImage(video, 0, 0, canvas.width, canvas.height);
};

const constraints = {
  audio: false,
  video: true
};

function handleSuccess(stream: MediaStream) {
    text.innerHTML = 'foo'
  video.srcObject = stream;
}

function handleError(error: any) {
    text.innerHTML = `navigator.MediaDevices.getUserMedia error: ${error.message} + ${error.name}`;
    console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}

navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);