import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import "../../src/styles/globals.css";
import "../../src/styles/index.css";
import "../../src/styles/loader.css";
import "../../src/styles/module/banner.module.css";
import "../../src/styles/module/common.module.css";
import "../../src/styles/module/headernotify.module.css";

export default function ContactModal({ openContact, setCloseContact }) {
  const handleClose = () => {
    setCloseContact(false);
  };
  return (
    <Dialog open={openContact} onClose={handleClose}>
      <DialogTitle>
        <span style={{ color: "cornflowerblue" }}>Contact Us</span>
      </DialogTitle>
      <DialogContent>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "",
            flexDirection: "column",
          }}
        >
          <MailOutlineIcon style={{ color: "#1b4c6d", marginBottom: "5px" }} />
          <span>
            <a href="mailto:contact@ripplestacks.com">
              contact@ripplestacks.com
            </a>
          </span>
          <WhatsAppIcon style={{ color: "#62ac47", marginBottom: "5px" }} />
          <span>
            RIPPLESTACKS Connect <a href="tel:+916353528830">+91 6353528830</a>
          </span>
          <WhatsAppIcon style={{ color: "#62ac47", marginBottom: "5px" }} />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          <span style={{ color: "cornflowerblue" }}>Cancel</span>
        </Button>
      </DialogActions>
    </Dialog>
  );
}
