// create style here
const styles = {
  form: {
    margin: "20px 30%",
  },
  formGroup: {
    marginBottom: "19px",
  },
  formLabel: {
    marginBottom: "6px",
    display: "block",
  },
  formInput: {
    width: "100%",
    padding: "10px",
    color: "grey",
    backgroundColor: "#fff",
    fontSize: "12px",
    border: "1px solid #ced4da",
    borderRadius: "3px",
  },
};

// create Form component
function Form() {
  return (
    // code inside div
    <div>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.formLabel} htmlFor="" id="">
            Username
          </label>
          <input style={styles.formInput} type="text" name="" id="userName" placeholder="masukan user name" />
        </div>
      </form>
    </div>
  );
}

export default Form;
