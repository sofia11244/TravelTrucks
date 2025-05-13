import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ReservationForm.module.css";

function ReservationForm({ camperId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Reservation submitted", camperId, formData);
    toast.success("Reservation successful!");

    setFormData({
      name: "",
      email: "",
      date: "",
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
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => formData.date === "" && (e.target.type = "text")}
              className={styles.input}
              placeholder="Booking date*"
              required
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