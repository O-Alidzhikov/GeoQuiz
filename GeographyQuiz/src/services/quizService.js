const baseUrl = "http://localhost:2000";

export async function createQuiz(questions) {
    try{
         const response = await fetch(`${baseUrl}/quiz-create` , {
         method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(questions),
        credentials: 'include', 
    })
    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      console.log("we did it client side")
    return await response.json()
    } catch{
        console.error('Error creating quiz in:', error);
      throw error;
    }
    



    
}