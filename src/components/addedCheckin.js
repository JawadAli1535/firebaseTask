// import { Box, Typography, Modal } from '@mui/material';
// import React, { useEffect, useState } from 'react';

// import barIcon from '../../public/assets/icons/Bars.png';
// import profileImg from '../../public/assets/images/Avatar2.png';
// import Image from 'next/image';

// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../firebase';

// const AddedCheckin = () => {
//   const [data1, setData1] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [selectedData, setSelectedData] = useState(null);

//   const handleOpen = (data) => {
//     setSelectedData(data);
//     setOpen(true);
//   };

//   const handleClose = () => setOpen(false);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       const querySnapshot = await getDocs(collection(db, 'projects'));
//       const data = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setData1(data);
//     };

//     fetchProjects();
//   }, [data1]);

//   return (
//     <div>
//       <Modal open={open} onClose={handleClose}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 600,
//             bgcolor: 'background.paper',
//             boxShadow: 24,
//             p: 4,
//             borderRadius: 2,
//           }}
//         >
//           {selectedData && (
//             <>
//               <Box
//                 style={{ height: '100%' }}
//                 display={'flex'}
//                 alignItems={'center'}
//                 gap={3}
//               >
//                 <div>
//                   <Typography variant="h6" component="h2">
//                     {selectedData.title}
//                   </Typography>

//                   <Typography mt={2}>Date: 12th Nov, 2022</Typography>
//                   <Typography mt={1}>Owner: John Doe</Typography>
//                 </div>
//                 <Image
//                   width={271}
//                   height={160}
//                   src={selectedData.imageUrl}
//                   style={{ borderRadius: '15px' }}
//                   alt="Checkin Image"
//                 />
//               </Box>

//               <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
//                 <button
//                   onClick={handleClose}
//                   style={{
//                     fontSize: '16px',
//                     border: '1px solid lightgray',
//                     background: '#fff',
//                     borderRadius: '50px',
//                     padding: '7px 14px',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   style={{
//                     fontSize: '16px',
//                     background: '#7B5AFF',
//                     border: 'none',
//                     outline: 'none',
//                     color: 'white',
//                     borderRadius: '50px',
//                     padding: '7px 14px',
//                     cursor: 'pointer',
//                   }}
//                   onClick={handleClose}
//                 >
//                   Ok
//                 </button>
//               </Box>
//             </>
//           )}
//         </Box>
//       </Modal>

//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: { xs: 'column', sm: 'row' },
//           justifyContent: 'space-between',
//           alignItems: 'center',
//         }}
//       >
//         <Typography
//           sx={{
//             fontFamily: 'Roboto Flex',
//             fontSize: '30px',
//             fontWeight: 500,
//             lineHeight: '35.16px',
//             textAlign: 'left',
//           }}
//         >
//           Added CheckIns
//         </Typography>
//         <Image src={barIcon} alt="barIcon" />
//       </Box>

//       <Box
//         mt={3}
//         sx={{
//           display: 'flex',
//           gap: 3,
//           flexDirection: { xs: 'column', sm: 'row' },
//           flexWrap: 'wrap',
//           alignItems: 'center',
//         }}
//       >
//         {data1.length > 0
//           ? data1.map((data, ind) => (
//               <div
//                 key={ind}
//                 style={{
//                   width: '313px',
//                   padding: '24px 21px',
//                   boxShadow: '14px 17px 40px 0px #00000021',
//                   borderRadius: '20px',
//                   position: 'relative',
//                   cursor: 'pointer',
//                 }}
//                 onClick={() => handleOpen(data)}
//               >
//                 <button
//                   style={{
//                     position: 'absolute',
//                     right: '30px',
//                     top: '40px',
//                     fontSize: '16px',
//                     background: '#7B5AFF',
//                     border: 'none',
//                     outline: 'none',
//                     color: 'white',
//                     borderRadius: '50px',
//                     padding: '7px 14px',
//                   }}
//                 >
//                   Checked In
//                 </button>
//                 <Image
//                   width={271}
//                   height={160}
//                   src={data.imageUrl}
//                   style={{ borderRadius: '15px' }}
//                   alt="Checkin Image"
//                 />
//                 <Typography
//                   variant="h4"
//                   mt={1}
//                   sx={{
//                     fontFamily: 'Roboto Flex',
//                     fontSize: '20px',
//                     fontWeight: 500,
//                     lineHeight: '23.44px',
//                     textAlign: 'left',
//                   }}
//                 >
//                   CheckIn Name {data.title}
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     fontFamily: 'Roboto Flex',
//                     fontSize: '16px',
//                     fontWeight: 400,
//                     lineHeight: '18.75px',
//                     textAlign: 'left',
//                     color: '#718096',
//                   }}
//                   mt={0.5}
//                 >
//                   12th Nov, 2022
//                 </Typography>

//                 <div
//                   style={{
//                     marginTop: '10px',
//                     display: 'flex',
//                     gap: '10px',
//                     justifyContent: 'start',
//                     alignItems: 'center',
//                   }}
//                 >
//                   <Image src={profileImg} alt="Profile Image" />
//                   <Typography
//                     sx={{
//                       fontFamily: 'Roboto Flex',
//                       fontSize: '16px',
//                       fontWeight: 500,
//                       lineHeight: '18.75px',
//                       textAlign: 'left',
//                     }}
//                   >
//                     Owner: John Doe
//                   </Typography>
//                 </div>
//               </div>
//             ))
//           : 'Loading...'}
//       </Box>
//     </div>
//   );
// };

// export default AddedCheckin;

import { Box, Typography, Modal, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';

import barIcon from '../../public/assets/icons/Bars.png';
import profileImg from '../../public/assets/images/Avatar2.png';
import Image from 'next/image';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const AddedCheckin = () => {
  const [data1, setData1] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [error, setError] = useState(''); // State for error

  const handleOpen = (data) => {
    setSelectedData(data);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'projects'));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData1(data);
      } catch (error) {
        // Handle quota exceeded or any other errors
        if (error.code === 'resource-exhausted') {
          setError('Firebase quota exceeded. Please try again later.');
        } else {
          setError('An error occurred while fetching data.');
        }
      }
    };

    fetchProjects();
  }, [data1]);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          {selectedData && (
            <>
              <Box
                style={{ height: '100%' }}
                display={'flex'}
                alignItems={'center'}
                gap={3}
              >
                <div>
                  <Typography variant="h6" component="h2">
                    {selectedData.title}
                  </Typography>

                  <Typography mt={2}>Date: 12th Nov, 2022</Typography>
                  <Typography mt={1}>Owner: John Doe</Typography>
                </div>
                <Image
                  width={271}
                  height={160}
                  src={selectedData.imageUrl}
                  style={{ borderRadius: '15px' }}
                  alt="Checkin Image"
                />
              </Box>

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
                  onClick={handleClose}
                >
                  Ok
                </button>
              </Box>
            </>
          )}
        </Box>
      </Modal>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Roboto Flex',
            fontSize: '30px',
            fontWeight: 500,
            lineHeight: '35.16px',
            textAlign: 'left',
          }}
        >
          Added CheckIns
        </Typography>
        <Image src={barIcon} alt="barIcon" />
      </Box>

      {/* Show error message if there's any */}
      {error && (
        <Typography
          sx={{
            color: 'red',
            fontFamily: 'Roboto Flex',
            fontSize: '18px',
            mt: 2,
          }}
        >
          {error}
        </Typography>
      )}

      <Box
        mt={3}
        sx={{
          display: 'flex',
          gap: 3,
          flexDirection: { xs: 'column', sm: 'row' },
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        {data1.length > 0 ? (
          data1.map((data, ind) => (
            <div
              key={ind}
              style={{
                width: '313px',
                padding: '24px 21px',
                boxShadow: '14px 17px 40px 0px #00000021',
                borderRadius: '20px',
                position: 'relative',
                cursor: 'pointer',
              }}
              onClick={() => handleOpen(data)}
            >
              <button
                style={{
                  position: 'absolute',
                  right: '30px',
                  top: '40px',
                  fontSize: '16px',
                  background: '#7B5AFF',
                  border: 'none',
                  outline: 'none',
                  color: 'white',
                  borderRadius: '50px',
                  padding: '7px 14px',
                }}
              >
                Checked In
              </button>
              <Image
                width={271}
                height={160}
                src={data.imageUrl}
                style={{ borderRadius: '15px' }}
                alt="Checkin Image"
              />
              <Typography
                variant="h4"
                mt={1}
                sx={{
                  fontFamily: 'Roboto Flex',
                  fontSize: '20px',
                  fontWeight: 500,
                  lineHeight: '23.44px',
                  textAlign: 'left',
                }}
              >
                CheckIn Name {data.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Roboto Flex',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '18.75px',
                  textAlign: 'left',
                  color: '#718096',
                }}
                mt={0.5}
              >
                12th Nov, 2022
              </Typography>

              <div
                style={{
                  marginTop: '10px',
                  display: 'flex',
                  gap: '10px',
                  justifyContent: 'start',
                  alignItems: 'center',
                }}
              >
                <Image src={profileImg} alt="Profile Image" />
                <Typography
                  sx={{
                    fontFamily: 'Roboto Flex',
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '18.75px',
                    textAlign: 'left',
                  }}
                >
                  Owner: John Doe
                </Typography>
              </div>
            </div>
          ))
        ) : (
          <>
            <LinearProgress style={{ width: '100%' }} color={'secondary'} />
            <LinearProgress style={{ width: '100%' }} color="success" />
            <LinearProgress style={{ width: '100%' }} color="inherit" />
          </>
        )}
      </Box>
    </div>
  );
};

export default AddedCheckin;
