'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
    return !text || text.trim() === '';
}

export async function shareMeal(prevState, formData) {
    const meal = {
        creator: formData.get('creator'),
        creator_email: formData.get('creator_email'),
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
    };

    if (!meal.image || typeof meal.image === 'string' || meal.image.size === 0) {
        return {
            message: 'Please pick an image.',
            values: meal,
        };
    }

    if (
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions)
    ) {
        return {
            message: 'Invalid input!',
            values: meal,
        }
    }

    await saveMeal(meal);
    revalidatePath('/meals');
    redirect('/meals')
}
