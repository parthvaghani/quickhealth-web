import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

import "../../src/styles/module/banner.module.css";
import "../../src/styles/module/common.module.css";
import "../../src/styles/module/headernotify.module.css";

export default function InquiryModal({ open, setClose }) {
  const handleClose = () => {
    setClose(false);
  };

  const [state, setState] = useState({
    name: "",
    email: "",
    contactNo: "",
    category: "",
    spec: "",
    country: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {}, []);
  return (
    <Dialog open={open} onClose={handleClose} style={{ zIndex: "10000000000" }}>
      <DialogTitle>
        <span style={{ color: "cornflowerblue" }}>
          Get Quote on Fabrics | Ready-Made Garments
        </span>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <span style={{ fontSize: "15px" }}>
            Please Spend Some Time And Mention Your Requirements.
          </span>
        </DialogContentText>
        <TextField
          margin="dense"
          id="name"
          onChange={handleChange}
          label="Your Name"
          name="name"
          value={state.name}
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          margin="dense"
          id="email"
          name="email"
          label="Email Address"
          value={state.email}
          type="email"
          onChange={handleChange}
          fullWidth
          variant="standard"
        />
        <TextField
          margin="dense"
          id="contactNo"
          name="contactNo"
          onChange={handleChange}
          value={state.contactNo}
          label="Contact No"
          type="number"
          fullWidth
          variant="standard"
        />
        <TextField
          margin="dense"
          id="country"
          name="country"
          onChange={handleChange}
          value={state.country}
          label="Country Name"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          margin="dense"
          id="spec"
          value={state.spec}
          name="spec"
          label="Describe Your Requirements"
          type="text"
          onChange={handleChange}
          fullWidth
          placeholder="Describe Briefly."
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          <span style={{ color: "cornflowerblue" }}>Cancel</span>
        </Button>
        <Button
          onClick={() => {
            firebase
              .firestore()
              .collection("Inquiry")
              .add({
                email: state.email,
                date: new Date().toLocaleString(),
                name: state.name,
                contactNo: state.contactNo,
                category: state.category,
                country: state.country,
                spec: state.spec,
              })
              .then((res) => {
                handleClose();
              });
          }}
        >
          <span style={{ color: "cornflowerblue" }}>SEND</span>
        </Button>
      </DialogActions>
    </Dialog>
  );
}
