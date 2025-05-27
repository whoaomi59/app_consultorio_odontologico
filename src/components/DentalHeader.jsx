import { useNavigate } from "../utils/navigation";

const DentalHeader = () => {
  const { currentView, navigateTo } = useNavigate();

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <h1 className="text-xl font-bold">SmileCare Center</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          {/* <button
            onClick={() => navigateTo("home")}
            className={`hover:text-blue-200 ${
              currentView === "agenda" ? "font-bold border-b-2" : ""
            }`}
          >
            home
          </button> */}
          <button
            onClick={() => navigateTo("agenda")}
            className={`hover:text-blue-200 ${
              currentView === "agenda" ? "font-bold border-b-2" : ""
            }`}
          >
            Agenda
          </button>
          <button
            onClick={() => navigateTo("pacientes")}
            className={`hover:text-blue-200 ${
              currentView === "pacientes" ? "font-bold border-b-2" : ""
            }`}
          >
            Pacientes
          </button>
          <button
            onClick={() => navigateTo("tratamientos")}
            className={`hover:text-blue-200 ${
              currentView === "tratamientos" ? "font-bold border-b-2" : ""
            }`}
          >
            Tratamientos
          </button>
          <button
            onClick={() => navigateTo("finanzas")}
            className={`hover:text-blue-200 ${
              currentView === "finanzas" ? "font-bold border-b-2" : ""
            }`}
          >
            Finanzas
          </button>
        </nav>
        <button
          onClick={() => navigateTo("login")}
          className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition"
        >
          {/*  {currentView === "admin" ? "Cerrar Sesión" : "Iniciar Sesión"} */}
          Cerrar Sesión
        </button>
      </div>
    </header>
  );
};

export default DentalHeader;
