function Herosection({ midtext, smalltext,buttontext1, buttontext2 }) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-red-50 via-white to-red-50"></div>
      <div
        className="relative bg-no-repeat bg-cover bg-center min-h-125 flex items-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/abstract-healthcare-background-with-hexagons-watercolor_813661-10363.jpg')",
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6 leading-tight">
              {midtext}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              {smalltext}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="user/register"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-center border-2 border-red-100 hover:border-red-200"
              >
                {buttontext1}
              </a>
              <a
                href="learn-more"
                className="bg-linear-to-r from-red-500 to-red-600 text-white px-10 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:from-red-600 hover:to-red-700 text-center"
              >
                {buttontext2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
