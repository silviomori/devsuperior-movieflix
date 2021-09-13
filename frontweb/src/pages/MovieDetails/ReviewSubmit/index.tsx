import './styles.css';

const ReviewSubmit = () => {
  return <div className="base-card submit-review-card">
      <textarea placeholder="Write your review" className="form-control base-input" />
      <button className="btn btn-primary">Submit review</button>
  </div>;
};

export default ReviewSubmit;
