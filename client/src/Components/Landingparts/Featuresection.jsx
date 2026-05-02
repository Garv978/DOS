import Flashcard from "./Flashcard";

function Featuresection({ question, answer }) {
  return (
    <>
      <section className="py-20 bg-linear-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-6">
              {question}
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
              {answer}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Flashcard
              value="SMS-Based Reporting"
              description="Designed with and for local health workers. Training and support included."
            />
            <Flashcard
              value="Real-Time Alerts"
              description="Instant notifications to health authorities when potential outbreaks are detected."
            />
            <Flashcard
              value="Open Source"
              description="Transparent, customizable, and free to use. Community-driven improvements."
            />
            <Flashcard
              value="Community Focused"
              description="Designed with and for local health workers. Training and support included."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Featuresection;
