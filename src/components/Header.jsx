import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DescriptionIcon from "@mui/icons-material/Description";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LoginForm from "./LoginForm";

function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <header>
      <div className="header">
        <h1>
          <DescriptionIcon />
          Take Notes
        </h1>
        <Fab variant="extended" size="medium" onClick={handleLogin}>
          <NavigationIcon sx={{ mr: 1 }} />
          Log-In
        </Fab>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <LockOpenIcon />
                  Login
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <LoginForm />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
