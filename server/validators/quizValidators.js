export function validateQuestions(questions) {
  const errors = [];

  questions.forEach((q, index) => {
   
    const options = [q.optionA, q.optionB, q.optionC, q.optionD];
    if (!options.includes(q.answer)) {
      errors.push(`Question ${index + 1}: Answer "${q.answer}" doesn't match any option!`);
    }

    const uniqueOptions = new Set(options.map(opt => opt.toLowerCase()));
    if (uniqueOptions.size < 4) {
      errors.push(`Question ${index + 1}: Duplicate options found!`);
    }
  });

  if (errors.length > 0) {
    throw new Error(errors.join(" | ")); 
  }
}