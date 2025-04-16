import './home.css'


export default function Home() {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) =>{
            console.log(entry)
            if(entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        })
    })

    const hiddenElements = document.querySelectorAll(".hidden")
    hiddenElements.forEach((element) => observer.observe(element))



    return (
        
      <div className="home-container">
        <div className="home-section">
          <h1 className="">Welcome to Our Website</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
  
        <section className="hidden">
          <div className="home-section">
            <h2 className="">Feature One</h2>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          </section>
          <section className="hidden">
          <div className="home-section">
            <h2 className="">Feature Two</h2>
            <p className="">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          </section>
          <section className="hidden">
          <div className="home-section">
            <h2 className="">Feature Three</h2>
            <p className="">Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
          </section>
       
      </div>
    );
  }