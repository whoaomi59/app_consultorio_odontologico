const DentalHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Sonrisas saludables, vidas felices</h2>
          <p className="text-lg text-gray-600 mb-6">
            En DentalCare Pro combinamos tecnología de punta con un trato humano para cuidar de tu salud bucal.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Conoce nuestros servicios
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              Video consulta
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
              <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-white flex items-center justify-center">
                <svg className="w-32 h-32 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalHero;