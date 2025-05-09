import { useState } from "react"
import { toast } from "react-toastify"
import styles from "./ReservationForm.module.css"

function ReservationForm({ camperId, price }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Ideally, send this data to a backend API or store
    console.log("Reservation submitted for camper:", camperId, formData)

    toast.success("Reservation successful!")

    setFormData({ name: "", email: "", date: "" })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Make a Reservation</h2>

      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </label>

      <label className={styles.label}>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </label>

      <label className={styles.label}>
        Reservation Date
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </label>

      <button type="submit" className={styles.button}>
        Book Now – ${price}/day
      </button>
    </form>
  )
}

export default ReservationForm
