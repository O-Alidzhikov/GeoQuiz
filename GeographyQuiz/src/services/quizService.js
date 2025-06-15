const baseUrl = "http://localhost:2000";

export async function createQuiz(questions) {
  try {
    const response = await fetch(`${baseUrl}/quiz-create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(questions),
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    console.log("we did it client side");
    return await response.json();
  } catch {
    console.error("Error creating quiz in:", error);
    throw error;
  }
}

export async function getQuizzes() {
  try {
    const response = await fetch(`${baseUrl}/quiz-create`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch quizzes:", error);
    throw error;
  }
}

export async function getQuiz(quizId) {
  try {
    const response = await fetch(`${baseUrl}/quiz-create/get-one?quizId=${quizId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result
  } catch (error) {
    console.error("Failed to fetch quiz", error);
  }
}

export async function deleteQuiz(quizId) {
  try {
    const response = await fetch(`${baseUrl}/quiz-create`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: quizId }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to delete quiz", error);
    throw error;
  }
}
