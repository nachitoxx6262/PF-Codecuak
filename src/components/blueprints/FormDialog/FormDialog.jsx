import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { editPost } from '../../../axiosFunctions';

export default function FormDialog({post}) {

  const [open, setOpen] = React.useState(true);
  const [form, setForm] = React.useState(post.content)

  const handleClose = () => {
    setOpen(false);
  };

  const handlerChange = (event) => {
    const value = event.target.value;
    setForm(value)
  }

  const handlerSubmit = () => {
    editPost(form)
    setOpen(false)
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edite su publicacion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={form}
            onChange={handlerChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handlerSubmit}>Editar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}