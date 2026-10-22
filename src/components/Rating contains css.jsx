const Rating = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Rate Your Experience</h2>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial",
    padding: "20px",
  },
  header: {
    color: "red",
  },
};

export default Rating;
