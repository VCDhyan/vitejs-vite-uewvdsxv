import React from "react";

const DestinationCard = ({ destination }) => {
  return (
    <div style={styles.card}>
      <img src={destination.image} alt={destination.name} style={styles.image} />
      <h2 style={styles.title}>{destination.name}</h2>
      <p style={styles.location}>{destination.location}</p>
      <p style={styles.description}>{destination.description}</p>
      <p style={styles.price}>{destination.price}</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    padding: "15px",
    textAlign: "center",
    width: "250px",
    margin: "auto"
  },
  image: { width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" },
  title: { fontSize: "1.5rem", margin: "10px 0" },
  location: { fontSize: "1rem", color: "gray" },
  description: { fontSize: "0.9rem", margin: "10px 0" },
  price: { fontSize: "1.2rem", fontWeight: "bold", color: "#27ae60" }
};

export default DestinationCard;