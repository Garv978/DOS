function HospitalCtA({ text1,text2,buttontext1, buttontext2 }) {
  return (
    <>
      <div className="py-20 bg-linear-to-r from-red-600 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {text1}
          </h2>
          <p className="text-red-100 text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
            {text2}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="hospital/register"
              className="bg-white text-red-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {buttontext1}
            </a>
            <a
              href="hospital/login"
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              {buttontext2}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HospitalCtA;
