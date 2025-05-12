import { useState } from 'react';

const gigs = [
  {
    id: 1,
    title: "I will design a college event poster",
    price: 299,
    student: "Priya Mehta",
    category: "Graphic Design",
    description: "Eye-catching poster design for your campus fest or event. Delivered in 2 days."
  },
  {
    id: 2,
    title: "I will edit your Instagram reels",
    price: 499,
    student: "Aman Joshi",
    category: "Video Editing",
    description: "High-quality editing for reels and short-form videos with trending effects."
  }
];

export default function App() {
  const [selectedGig, setSelectedGig] = useState(null);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Stulancer Demo</h1>
      {!selectedGig ? (
        <div>
          <h2>Available Gigs</h2>
          <ul>
            {gigs.map((gig) => (
              <li key={gig.id} style={{ marginBottom: '1rem', cursor: 'pointer' }} onClick={() => setSelectedGig(gig)}>
                <strong>{gig.title}</strong> - Rs.{gig.price}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <button onClick={() => setSelectedGig(null)}>&larr; Back</button>
          <h2>{selectedGig.title}</h2>
          <p><strong>By:</strong> {selectedGig.student}</p>
          <p><strong>Category:</strong> {selectedGig.category}</p>
          <p><strong>Description:</strong> {selectedGig.description}</p>
          <p><strong>Price:</strong> Rs.{selectedGig.price}</p>
          <button style={{ marginTop: '1rem' }}>Order Now</button>
        </div>
      )}
    </div>
  );
}
