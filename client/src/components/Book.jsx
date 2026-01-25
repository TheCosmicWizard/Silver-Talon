function Book() {
  return (
    <div>
      <h2>Book a Table</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Date:
          <input type="date" name="date" required />
        </label>
        <br />
        <label>
          Time:
          <input type="time" name="time" required />
        </label>
        <br />
        <label>
          Number of Guests:
          <input type="number" name="guests" min="1" required />
        </label>
        <br />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}
export default Book;
