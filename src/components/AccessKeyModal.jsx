import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import { useState } from 'react';
import { useContext } from 'react';
import { MyAuthContext } from '../context/AuthContext';

export const AccessKeymodal = ({ open, onClose, onSuccess }) => {
    const [key, setKey] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); // ÚJ
    const { verifyKey } = useContext(MyAuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true); // Gomb letiltása indításkor
        
        try {
            const result = await verifyKey(key);
            if (result) {
                setKey(""); // Mező ürítése
                onClose();
                onSuccess();
            } else {
                alert("Hibás kód vagy szerver hiba!");
            }
        } finally {
            setIsSubmitting(false); // Gomb visszakapcsolása
        }
    }
  
  return (
    <React.Fragment>
      <Modal open={open} onClose={onClose}>
        <ModalDialog>
          <DialogTitle>Titkos mikkentyű :+3333333333</DialogTitle>
          <DialogContent>Add meg a kulcsod a művelet folytatásához :+33333333333</DialogContent>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Kults</FormLabel>
                <Input autoFocus required type="password" value={key} onChange={(e)=>setKey(e.target.value)}/>
              </FormControl>
              <Button type="submit" loading={isSubmitting}>
            {isSubmitting ? "Ellenőrzés..." : "Submit"}
        </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}