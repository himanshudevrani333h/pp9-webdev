let db;
let body = document.querySelector("body");
// let body = document.querySelector("body");
let req = indexedDB.open("GallaryDB", 1);
req.addEventListener("success", function () {
  db = req.result;
});

req.addEventListener("upgradeneeded", function () {
  let accessToDB = req.result;
  accessToDB.createObjectStore("Gallary", { keyPath: "mID" });
});

req.addEventListener("error", function () {
  console.log("error occured");
});

function addMedia(mediaData, type) {
  if (!db) return;
  let obj = { mID: Date.now(), mediaData, type };
  let tx = db.transaction("Gallary", "readwrite");
  let requiredObj = tx.objectStore("Gallary");
  requiredObj.add(obj);
}

function delete_Media(id){
  if(!db) return;

  let tx = db.transaction("Gallary","readwrite");
  let data_to_be_deleted = tx.objectStore("Gallary");

  data_to_be_deleted.delete(Number(id));

}

function viewMedias() {
  if (!db) return;

  let ts = db.transaction("Gallary", "readonly");
  let requiredObjStore = ts.objectStore("Gallary");

  let curserReq = requiredObjStore.openCursor();


  curserReq.addEventListener("success", function () {
    let cursor = curserReq.result;

    let media_Data = cursor.value;

    let media_container = document.createElement("div");
    media_container.classList.add("media-container");
    let downnload_URL = "";
    if (cursor) {
      if(media_Data.type == "image") {
        downnload_URL = media_Data.mediaData;
        media_container.innerHTML = `<div class="media">
        <img src="${media_Data.mediaData}" >
    </div>
    <button class="download" style="background-color:blue;color:white;">Downoad</button>
    <button class="delete"data-id="${media_Data.mID}" style="background-color:red;color:white;">Remove</button>`;
      } else {
        let URL = window.URL.createObjectURL(media_Data.mediaData);
        downnload_URL= URL;
        media_container.innerHTML = `<div class="media">
            <video src="${URL}" autoplay loop  muted></video>
        </div>
        <button class="download"style="background-color:blue;color:white;">Download</button>
        <button class="delete" data-id="${media_Data.mID}" style="background-color:red;color:white;">Remove</button>`;
      }
     
      let download = media_container.querySelector(".download")
      download.addEventListener("click",function(){
        let a = document.createElement("a");
        a.href = downnload_URL;
        if( media_Data.type == "image"){
          a.download= "img.jpg"
        }else{
          a.download = "video.mp4"
        }

        a.click();
        a.remove();

      })

      let remove_btn = media_container.querySelector(".delete")
      remove_btn.addEventListener("click",function(e){
       let data_id = e.currentTarget.getAttribute("data-id");
       delete_Media(data_id);

       e.currentTarget.parentElement.remove();        //to remove from UI
      })

      console.log(media_container);
      body.append(media_container);

      cursor.continue();
    }
  });
}
