import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Kivo</div>

      <ul className="navbar-menu">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicios">Agenda</a></li>
        <li><a href="#contacto">Todo List</a></li>
      </ul>

      <div className="navbar-icons">
        <button aria-label="Configuración" className="icon-btn">⚙️</button>
        <button aria-label="Perfil" className="icon-btn">👤</button>
      </div>
    </nav>
  );
}

export default Navbar;
