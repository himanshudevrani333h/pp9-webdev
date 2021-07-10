let video = document.querySelector("video");
let record = document.querySelector("#record");
let recordDiv = record.querySelector("div");
let capture = document.querySelector("#capture");
let captureDiv = capture.querySelector("div");
let mediaRecorder;
let isRecording = false;
let chunks = [];
let appliedfilter;
let scale_ = document.querySelector(".scale");
let zoom_in = scale_.querySelector(".zoom-in")
let zoom_out = scale_.querySelector(".zoom-out")
let reset = document.querySelector(".reset")
// let body = document.querySelector("body")
let filters = document.querySelectorAll(".f")
let camera_container= document.querySelector(".camera-container") 
let currentzoom =1;
let maxzoom =3;
let minzoom =1;
let gallary = document.querySelector("#gallary")

gallary.addEventListener("click",function(){
  location.assign("gallary.html");
})
reset.addEventListener("click",function(){
  currentzoom =1;
  video.style.transform = `scale(${currentzoom})`;
})

zoom_in.addEventListener("click",function(e){
  if(currentzoom< maxzoom){
    currentzoom = currentzoom + 0.1;
  }

  video.style.transform = `scale(${currentzoom})`;
})

zoom_out.addEventListener("click",function(e){
  if(currentzoom>minzoom){
    currentzoom = currentzoom - 0.1;
  }

  video.style.transform = `scale(${currentzoom})`;
})
for( let i = 0; i<filters.length; i++){   
    filters[i].addEventListener("click", function(e){
     remove_f();
    appliedfilter = e.currentTarget.style.backgroundColor;
    let div = document.createElement("div")
    div.style.backgroundColor = appliedfilter;
    div.classList.add("filter-div")
    camera_container.append(div);
    });
}


record.addEventListener("click", function (e) {
  if (isRecording) {
    body.append(scale_)
    mediaRecorder.stop();
    isRecording = false;
    recordDiv.classList.remove("record-anim");
  } else {
    appliedfilter="";
    remove_f();
    currentzoom=1;
    video.style.transform = `scale(${currentzoom})`
    scale_.remove()
    mediaRecorder.start();
    isRecording = true;
    recordDiv.classList.add("record-anim");
  }
});

capture.addEventListener("click", function () {
  captureDiv.classList.add("capture-anim");
  setTimeout(function () {
    captureDiv.classList.remove("capture-anim");
  }, 1000);

  let canvas = document.createElement("canvas");
  canvas.height = video.videoHeight;
  canvas.width = video.videoWidth;
  let tool = canvas.getContext("2d");
  
  tool.translate(canvas.width /2 ,canvas.height /2)
  
  tool.scale(currentzoom,currentzoom)

  tool.translate(-canvas.width /2 , -canvas.height/2)

  tool.drawImage(video,0,0);

  if(appliedfilter){
     tool.fillStyle = appliedfilter
     tool.fillRect(0,0,canvas.width,canvas.height)
  }


  let link = canvas.toDataURL();
   addMedia(link,"image")
  // let a = document.createElement("a");
  // a.href = link;
  // a.download = "img.jpg";
  // a.click();
  // a.remove();

});

navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then(function (mediaStream) {
    video.srcObject = mediaStream;
    // let options = { mimeType: "video/webm" };
    mediaRecorder = new MediaRecorder(mediaStream);

    mediaRecorder.addEventListener("dataavailable", function (e) {
      chunks.push(e.data);
      // console.log(chunks);
    });

    mediaRecorder.addEventListener("stop", function (e) {
      let blob = new Blob(chunks, { type: "video/mp4" });
      // console.log(chunks);
      chunks = [];
       addMedia(blob,"video")
      // let url = window.URL.createObjectURL(blob);
      // let a = document.createElement("a");
      // a.href = url;
      // a.download = "file.webm";
      // a.click();
      // a.remove();

    });
  });


  function remove_f(){
      let filter = document.querySelector(".filter-div")
      if(filter) filter.remove();
  }