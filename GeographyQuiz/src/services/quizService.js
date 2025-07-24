const baseUrl = "http://localhost:2000";

export async function createQuiz(questions) {
  try {
    const response = await fetch(`${baseUrl}/quiz-create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(questions),
      credentials: "include",
    });

    const result = await response.json(); 

    if (!response.ok) {
      const error = new Error(
        result.message || result.error || "Quiz creation failed" 
      );
      error.status = response.status;
      error.data = result;
      throw error;
    }

    return result;
  } catch (error) {
    console.error("Error creating quiz:", error.message);
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
    const response = await fetch(
      `${baseUrl}/quiz-create/get-one?quizId=${quizId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch quiz", error);
    throw error;
  }
}

export async function editQuiz(editedQuiz) {
  try {
    const response = await fetch(`${baseUrl}/quiz-create/edit`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedQuiz),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    console.log("we did it client side");
    return await response.json();
  } catch (error) {
    console.error("Error editing quiz on client side:", error);
    throw error;
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
