import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Review } from 'types/review';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props = {
  callback: Function;
};

type UrlParams = {
  movieId: string;
};

const ReviewSubmit = ({ callback }: Props) => {
  const { movieId } = useParams<UrlParams>();

  const { register, handleSubmit, reset } = useForm<Review>();
  const onSubmit = (formData: Review) => {
    formData.movieId = movieId;
    const params: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      withCredentials: true,
      data: formData,
    };
    requestBackend(params)
      .then((response) => {
        reset({text: ''})
        callback(true);
      })
      .catch((error) => console.log('error: ', error))
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
