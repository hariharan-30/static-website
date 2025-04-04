import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import {
  Snackbar,
  Alert,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phoneNumber: Yup.string()
    .matches(/^\d+$/, "Only numbers are allowed")
    .required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  note: Yup.string().required("Note is required"),
});

const Contact = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formRef = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: "",
    severity: "success",
  });

  const onSubmit = (data) => {
    setLoading(true);
    emailjs
      .sendForm(
        "service_w9xtjlp",
        "template_ourlm0q",
        formRef.current,
        "rkc1lyUNZC0JkvJCj"
      )
      .then(
        () => {
          setSnackbar({
            open: true,
            message: "✅ Message sent successfully!",
            severity: "success",
          });
          reset();
        },
        (error) => {
          setSnackbar({
            open: true,
            message: "❌ Failed to send message: " + error.text,
            severity: "error",
          });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-6 md:p-10">
      <h1 className="font-sans text-4xl font-bold text-[#143f4b] pt-8 pb-8 text-left md:pl-10 lg:pl-10">
        CONTACT US
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        <div className="md:p-10">
          <form
            ref={formRef}
            className="w-full md:w-[340px] space-y-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Name"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )}
            />
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Phone Number"
                  fullWidth
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  type="email"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              name="note"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Note"
                  fullWidth
                  multiline
                  rows={4}
                  error={!!errors.note}
                  helperText={errors.note?.message}
                />
              )}
            />

            <div className="text-center md:text-left">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                disabled={loading}
                startIcon={
                  loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null
                }
              >
                {loading ? "Sending..." : "SEND"}
              </Button>
            </div>
          </form>
        </div>

        <div className="w-full h-80 mt-8 md:h-[430px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.9907383671953!2d77.73580577449583!3d8.692428294167685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b040ddb22236947%3A0xf651948893b827fc!2seFloz%20IT%20Services!5e0!3m2!1sen!2sin!4v1741248723694!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
