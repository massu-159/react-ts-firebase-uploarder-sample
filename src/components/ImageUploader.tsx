import { Button, CircularProgress } from "@mui/material";
import React, { ChangeEvent, useState } from 'react'
import ImageLogo from "../assets/image.svg";
import './ImageUploader.css';
import storage from '../firebase';
import { ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';

const ImageUploader = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isUploaded, setIsUploaded] = useState<boolean>(false);

  const [progress, setProgress] = useState<number>(0);

  const OnFileUploadToFirebase = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("click");
    const file = (e.target.files as FileList)[0];
    const storageRef = ref(storage, "image/" + file.name);
    // uploadBytes(storageRef, file).then((snapshot) => {
    //   console.log("Uploaded a blob or file!");
    // });
    const uploadImage = uploadBytesResumable(storageRef, file);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress);
        setLoading(true);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setLoading(false);
        setIsUploaded(true);
        setProgress(0);
      }
    )
  };

  return (
    <>
      {loading ? (
        <>
          <h2>{Math.floor(progress)}%</h2>
          <CircularProgress value={progress} />
        </>
      ) : (
        <>
          {isUploaded ? (
            <h2>アップロードが完了しました。</h2>
          ) : (
            <div className='outerBox'>
              <div className='title'>
                <h2>画像アップローダー</h2>
                <p>画像ファイル(png, jpeg, jpg)</p>
              </div>
              <div className='imageUplodeBox'>
                <div className='imageLogoAndText'>
                  <img src={ImageLogo} alt='imagelogo' />
                  <p>ここにドラッグ＆ドロップしてね</p>
                </div>
                <input
                  className='imageUploadInput'
                  multiple
                  name='imageURL'
                  type='file'
                  accept='.png, .jpg, .jpeg'
                  onChange={OnFileUploadToFirebase}
                />
              </div>
              <p>または</p>
              <Button variant='contained'>
                ファイルを選択
                <input
                  className='imageUploadInput'
                  type='file'
                  accept='.png, .jpg, .jpeg'
                  onChange={OnFileUploadToFirebase}
                />
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default ImageUploader