import SimulationCanvas from "@/features/simulation/renderer/SimulationCanvas";
function LandingPage() {
    return (
      <main>
        <h1>AI Learning Lab</h1>
  
        <p>
          Learn by experimenting instead of memorizing.
        </p>
  
        <button>
          Upload Question
        </button>
        <SimulationCanvas />
      </main>
      
    );
  }
  
  export default LandingPage;