import React, { useState } from 'react';
import {
  Box,
  Typography,
  Modal,
  TextField,
  Button,
  CircularProgress,
} from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../../firebase';

import breadcrmbbgImg from '../../public/assets/images/breadcrmbbg.png';
import inboxIcon from '../../public/assets/icons/Inbox.png';
import Image from 'next/image';

const BreadCrumb = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setImageFile(null);
    setUploadedImageUrl(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        setImageFile(acceptedFiles[0]);
      }
    },
    accept: 'image/*',
  });

  const handleAddProject = async () => {
    try {
      if (!imageFile || !title) {
        alert('Please provide both a title and image');
        return;
      }

      setIsLoading(true);

      const storageRef = ref(storage, `images/${imageFile.name}`);
      const snapshot = await uploadBytes(storageRef, imageFile);
      const imageUrl = await getDownloadURL(snapshot.ref);

      await addDoc(collection(db, 'projects'), {
        title,
        imageUrl,
      });

      setUploadedImageUrl(imageUrl);
      alert('Project added successfully!');

      setIsLoading(false);

      //   setTimeout(() => {
      //     <div
      //       style={{
      //         position: 'absoute',
      //         top: '0',
      //         left: '45%',
      //         color: 'lightgreen',
      //         zIndex: 99999,
      //       }}
      //     >
      //       Checkin added successfully!
      //     </div>;
      //   }, 5000);
    } catch (error) {
      console.error('Error adding project: ', error);
      alert('Failed to add project');
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        margin: '25px 0',
        width: '100%',
        backgroundImage: `linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 85.12%), url(${breadcrmbbgImg.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        objectFit: 'contain',
        borderRadius: '15px',
        height: '280px',
        boxShadow: '14px 17px 40px 0px #00000021',
      }}
    >
      <Box pl={8} pt={8}>
        <Typography
          sx={{
            fontFamily: 'Roboto Flex',
            fontSize: '36px',
            fontWeight: 600,
            lineHeight: '42.19px',
            textAlign: 'left',
            color: 'white',
          }}
        >
          Hi! 👋 James Doe
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Roboto Flex',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '18.75px',
            textAlign: 'left',
            color: 'white',
            marginTop: 1,
          }}
        >
          Lorem ipsus dolor sit amen, something important to say here
        </Typography>
        <button
          style={{
            marginTop: '38px',
            height: '54px',
            width: '166px',
            fontSize: '16px',
            background: '#7B5AFF',
            border: 'none',
            outline: 'none',
            color: 'white',
            borderRadius: '50px',
            padding: '6.4px 15px',
            cursor: 'pointer',
          }}
          onClick={handleOpen}
        >
          Add Check In
        </button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography id="modal-title" variant="h6" component="h2">
              Add New Check In
            </Typography>
            <p style={{ cursor: 'pointer' }} onClick={handleClose}>
              X
            </p>
          </div>
          <div style={{ margin: '15px 0' }}>
            <label> Title</label>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label> Upload Image</label>
            <Box
              {...getRootProps()}
              mt={2}
              sx={{
                border: '2px dashed lightgray',
                height: '170px',
                borderRadius: '4px',
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                textAlign: 'center',
                backgroundColor: isDragActive ? '#f0f0f0' : 'inherit',
              }}
            >
              <Image
                style={{ marginBottom: '5px' }}
                src={inboxIcon}
                alt="inboxIcon"
              />
              <input {...getInputProps()} />
              {isDragActive ? (
                <Typography>Drop the files here...</Typography>
              ) : imageFile ? (
                <Typography>{imageFile.name}</Typography>
              ) : (
                <div>
                  <Typography>
                    Click or drag file to this area to upload
                  </Typography>
                  <p
                    style={{
                      marginTop: '5px',
                      color: 'lightgray',
                      padding: '0 20px',
                    }}
                  >
                    Support for a single or bulk upload. Strictly prohibit from
                    uploading company data or other band files
                  </p>
                </div>
              )}
            </Box>
          </div>

          {isLoading ? (
            <Box display="flex" justifyContent="center" mt={2}>
              <CircularProgress />
            </Box>
          ) : uploadedImageUrl ? (
            <>
              <Typography mt={2} style={{ color: 'green' }}>
                Title uploaded successfully: {title}
              </Typography>
              <Typography mt={2} style={{ color: 'green' }}>
                Image uploaded successfully: {uploadedImageUrl}
              </Typography>
            </>
          ) : null}

          <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
            <button
              onClick={handleClose}
              style={{
                fontSize: '16px',
                border: '1px solid lightgray',
                background: '#fff',
                borderRadius: '50px',
                padding: '7px 14px',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              style={{
                fontSize: '16px',
                background: '#7B5AFF',
                border: 'none',
                outline: 'none',
                color: 'white',
                borderRadius: '50px',
                padding: '7px 14px',
                cursor: 'pointer',
              }}
              onClick={handleAddProject}
            >
              Next
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default BreadCrumb;
