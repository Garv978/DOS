function Flashcard({ value, description }) {
  return (
    <>
      <div className="bg-white p-10 rounded-2xl card-hover border-2 border-red-100 hover:border-red-200 shadow-lg">
        <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <h3 className="font-bold text-2xl gradient-text mb-4">{value}</h3>
        <p className="text-gray-600 text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </>
  );
}

export default Flashcard;
