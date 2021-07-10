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

function delete_Media(id) {
  if (!db) return;

  let tx = db.transaction("Gallary", "readwrite");
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
    media_container.classList.add("lightbox");
    let downnload_URL = "";
    if (cursor) {
      if (media_Data.type == "image") {
        downnload_URL = media_Data.mediaData;
        media_container.innerHTML = `
        <div class="row">
    <div class="col-lg-6">
    <img 
      src="${media_Data.mediaData}"
      alt="Lightbox image 2"
      class=" shadow-1-strong rounded"
    />
    </div>
    <div class ="btn">
    <button type="button" class="btn btn-primary btn-lg">Download</button>
    <button type="button" data-id="${media_Data.mID}" class="btn btn-secondary btn-lg " ">Remove</button>
  </div>
  </div>
    `;
      } else {
        let URL = window.URL.createObjectURL(media_Data.mediaData);
        downnload_URL = URL;
        media_container.innerHTML = `<div class="row"> 
        <div class="col-lg-6">
        <video
          src="${URL}"
          alt="Lightbox image 2"
          class=" shadow-1-strong rounded" autoplay loop  muted
        ></video>
        </div>
        <div class="btn">
        <button type="button" class="btn btn-primary btn-lg">Download</button>
        <button type="button" data-id="${media_Data.mID}" class="btn btn-secondary btn-lg " ">Remove</button>
        </div>
        
      </div>`;
      }

      let download = media_container.querySelector(".btn.btn-primary.btn-lg");
      download.addEventListener("click", function () {
        let a = document.createElement("a");
        a.href = downnload_URL;
        if (media_Data.type == "image") {
          a.download = "img.jpg";
        } else {
          a.download = "video.mp4";
        }

        a.click();
        a.remove();
      });

      let remove_btn = media_container.querySelector(
        ".btn.btn-secondary.btn-lg"
      );
      remove_btn.addEventListener("click", function (e) {
        let data_id = e.currentTarget.getAttribute("data-id");
        delete_Media(data_id);

        e.currentTarget.parentElement.parentElement.remove(); //to remove from UI
        location.reload();
      });

      console.log(media_container);
      body.append(media_container);

      cursor.continue();
    }
  });
}
