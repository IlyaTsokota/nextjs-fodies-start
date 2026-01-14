'use client';

import ImagePicker from '@/components/meals/image-picker';
import classes from './page.module.scss';
import { shareMeal } from '@/lib/action';
import MealsFormSubmit from '@/components/meals/meals-form-submit';
import { useActionState } from 'react';

export default function ShareMealPage() {
  const [{ message, values }, formAction, isPending] = useActionState(shareMeal, { message: null, values: { creator: '', creator_email: '',title: '' ,summary: '' ,instructions: '', image: '' } });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction} noValidate>
          <div className={classes.row}>
            <p>
              <label htmlFor="creator">Your name</label>
              <input type="text" id="creator" name="creator" defaultValue={values.creator} />
            </p>
            <p>
              <label htmlFor="creator_email">Your email</label>
              <input type="email" id="creator_email" name="creator_email" defaultValue={values.creator_email} />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={values.title} />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" defaultValue={values.summary} />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              defaultValue={values.instructions}
              id="instructions"
              name="instructions"
              rows="10"
            ></textarea>
          </p>
          <ImagePicker label='Choose file' name='image' />
          {message && <p>{message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit pending={isPending} />
          </p>
        </form>
      </main>
    </>
  );
}
