import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/ReservationForm.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ReservationForm({ camperId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: null, // date formatını Date objesi olarak tutacağız
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Reservation submitted", camperId, formData);
    toast.success("Reservation successful!");

    setFormData({
      name: "",
      email: "",
      date: null,
      comment: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <ToastContainer className={styles.toast} autoClose={3000} />
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Book your campervan now</h2>
        <p className={styles.description}>Stay connected! We are always ready to help you.</p>

        <div className={styles.inputContainer}>
          <label className={styles.label}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
              placeholder="Name*"
            />
          </label>

          <label className={styles.label}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
              placeholder="Email*"
            />
          </label>

          <label className={styles.label}>
            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              placeholderText="Booking date*"
              className={styles.input}
              dateFormat="dd/MM/yyyy"
              required
              minDate={new Date()} // geçmiş tarih seçilemesin
            />
          </label>

          <label className={styles.label}>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              className={styles.inputComment}
              rows={4}
              placeholder="Comment"
            />
          </label>
        </div>

        <button type="submit" className={styles.button}>
          Send
        </button>
      </div>
    </form>
  );
}

export default ReservationForm;
