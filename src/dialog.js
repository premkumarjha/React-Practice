// import * as React from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";

// export default function ResponsiveDialog(props) {
//   const { open, setOpen } = props;
//   //const [open, setOpen] = React.useState(false);
//   const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   // const handlebackdrop =(event,reason)=>{
//   //   if (disableBackdropClick && reason === "backdropClick") {
//   //       return false;
//   //     }

//   //     if (disableEscapeKeyDown && reason === "escapeKeyDown") {
//   //       return false;
//   //     }

//   //     if (typeof onClose === "function") {
//   //       onClose();
//   //     }
//   // }
//   console.log("open", open);
//   return (
//     <div>
//       {/* <Button variant="outlined" onClick={handleClickOpen}>
//         Open responsive dialog
//       </Button> */}
//       <Dialog
//         fullScreen={fullScreen}
//         open={open}
//         onClose={()=>null}
//         aria-labelledby="responsive-dialog-title"
//         onBackdropClick={handleClose}
//         static 
//         data-keyboard="false"
//       >
//         <DialogTitle id="responsive-dialog-title">
//           {"Use Google's location service?"}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             {/* Let Google help apps determine location. This means sending anonymous
//             location data to Google, even when no apps are running. */}
//             {props.children}
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button autoFocus onClick={handleClose}>
//             Disagree
//           </Button>
//           <Button onClick={handleClose} autoFocus>
//             Agree
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
