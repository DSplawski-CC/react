import { FormProvider } from '../../../shared/form/FormProvider.tsx';
import { Field } from '../../../shared/form/Field.tsx';

export interface AddReviewData {
  rating: number;
  title: string;
  content: string;
  author: string;
  email: string;
}

export interface AddReviewProps {
  onSubmit: (data: Readonly<AddReviewData>) => void;
}

export default function AddReview({ onSubmit }: AddReviewProps) {
  function handleSubmit(data: Readonly<AddReviewData>) {
    const review: AddReviewData = {
      ...data,
      rating: Number(data.rating),
    }

    onSubmit(review);
  }
  return (
    <div>
      <h2>Add Review</h2>
      <FormProvider<AddReviewData>
        initialValues={{ title: '', content: '', rating: 0, author: '', email: '' }}
        onSubmit={handleSubmit}
      >
        <Field<AddReviewData> name={'rating'} label="rating" type="number" />
        <Field name={'title'} label="title" type="text" />
        <Field name={'content'} label="content" type="textarea" />
        <Field name={'author'} label="author" type="text" />
        <Field name={'email'} label="email" type="email" />
      </FormProvider>
    </div>
  );
}