import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Review } from 'types/review';
import { requestBackend } from 'util/requests';
import { toast } from 'react-toastify';
import './styles.css';

type Props = {
  onNewReview: () => void;
};

type UrlParams = {
  movieId: string;
};

const ReviewSubmit = ({ onNewReview }: Props) => {
  const { movieId } = useParams<UrlParams>();

  const { register, handleSubmit, reset } = useForm<Review>();
  const onSubmit = (formData: Review) => {
    formData = { ...formData, text: formData.text.trim() };
    if (formData.text.trim().length === 0) {
      toast.error('It is not allowed an empty review.');
      return;
    }
    if (formData.text.trim().length > 255) {
      toast.error('The maximum length for a review is 255 characters.');
      return;
    }
    formData.movieId = movieId;
    const params: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      withCredentials: true,
      data: formData,
    };
    requestBackend(params)
      .then(() => {
        reset({ text: '' });
        toast.success('Review saved.');
        onNewReview();
      })
      .catch((error) => toast.error('Unexpected error while saving review.'));
  };

  return (
    <form id="reviewForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="base-card submit-review-card">
        <textarea
          {...register('text')}
          placeholder="Write your review"
          className="form-control base-input"
          name="text"
        />
        <button className="btn btn-primary">Submit review</button>
      </div>
    </form>
  );
};

export default ReviewSubmit;
