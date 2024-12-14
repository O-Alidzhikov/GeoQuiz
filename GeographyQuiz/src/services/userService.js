const baseUrl = "http://127.0.0.1:5173/users";
const token = localStorage.getItem("accessToken")

export async function login(email, password) {
    const loginData = { email, password };
    
    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  }
  
  export async function register(email, password) {
    const registerData = { email, password };
    
    try {
      const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerData)
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error registering:', error);
      throw error;
    }
  }
  


  export async function logout() {
    const token = localStorage.getItem("accessToken");
    
    try {
      const response = await fetch(`${baseUrl}/logout`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': token
        }
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${response.status} ${response.statusText} - ${errorData.message}`);
      }
      
      return {};
    } catch (error) {
      console.error('Error logging out:', error);
      throw error;
    }
  }
  