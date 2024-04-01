import React from 'react'
import { TextField, TextareaAutosize, Grid, Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';


const Contact = () => {
  return (
    <div className="py-12">
      <div className="w-full text-center mb-12">
        <p className="text-5xl font-bold ">Contact</p>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4.4}>
          <div className="flex flex-col gap-8">
            <a href="mailto:hengtaingmeng@gmail.com">
              <StyledContactItem
                title="Email"
                detail="hengtaingmeng@gmail.com"
                src="/envelope.svg"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/taingmeng-heng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledContactItem
                title="Linkedin"
                detail="www.linkedin.com/in/taingmeng-heng"
                src="/linkedin-alt.svg"
              />
            </a>
            <a href="tel:+85586336333">
              <StyledContactItem
                title="Phone Number"
                detail="+855 86 336 333"
                src="/phone.svg"
              />
            </a>
            <a
              href="https://t.me/TaingmengHeng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledContactItem
                title="Telegram"
                detail="https://t.me/TaingmengHeng"
                src="/telegram-alt.svg"
              />
            </a>
            <StyledContactItem
              title="Location"
              detail="Phnom Penh, Cambodia"
              src="/location-point.svg"
            />
          </div>
        </Grid>
        <Grid container item xs={12} lg={7.6} spacing={2}>
          <Grid item xs={12} lg={5}>
            <StyledTextInput
              placeholder="The Best Recruiter"
              label="Name"
              id="name-input"
            />
          </Grid>
          <Grid item xs={12} lg={7}>
            <StyledTextInput
              placeholder="most.awesome.recruiter@example.com"
              label="Email"
              id="email-input"
            />
          </Grid>
          <Grid item xs={12} lg={12}>
            <StyledTextInput
              placeholder="You're Hired! Prepare for Greatness"
              label="Subject"
              id="subject-input"
            />
          </Grid>
          <Grid item xs={12} lg={12}>
            <div className=" border-2 border-purple rounded-lg px-3 pt-1.5 pb-2 shadow-md hover:shadow-purple/70">
              <p className="font-semibold mb-1">Description:</p>
              <textarea
                placeholder="We are thrilled to offer you the Web Developer position at..."
                className="myCustomInput"
                rows={8}
                maxLength={10}
              />
            </div>
            <div className="flex w-full items-center justify-center">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "purple.main",
                  height: "40px",
                  gap: "6px",
                  mt: "16px",
                  "&:hover": {
                    backgroundColor: "#3a0f5e",
                  },
                }}
              >
                <p>Send Message</p>
                <SendIcon fontSize="small" />
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;

const StyledTextInput = ({value, onChange, label, id, placeholder}) => {
  return(
    <div className=" border-2 border-purple rounded-lg px-3 pt-1.5 pb-2 shadow-md hover:shadow-purple/70">
      <p className='font-semibold mb-1'>{label}:</p>
      <input 
        className='myCustomInput'
        placeholder={placeholder}
        id={id}
      />
    </div>
  )
}

const StyledContactItem = ({src, title, detail}) => {
  return (
    <div className="flex items-center gap-4">
      <img src={src} alt={src} width="35px" />
      <div>
        <p className="text-xl font-medium">{title}</p>
        <p className="text-gray-light">{detail}</p>
      </div>
    </div>
  );
};
 