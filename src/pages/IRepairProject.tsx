import { Container, Row, Col, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/About.css";

const IRepairProject = () => {
  const features = {
    homepage: [
      "Sección hero con llamada a la acción convincente",
      "Resumen de servicios con precios",
      "Indicadores de confianza e información de la empresa",
      "Diseño responsivo con UI moderno"
    ],
    booking: [
      "Flujo de reserva de múltiples pasos",
      "Selección de servicios (Teléfonos, Laptop, Tableta, Consola de juegos, etc.)",
      "Selección de fecha y hora",
      "Recolección de información del cliente",
      "Sistema de confirmación por correo"
    ],
    ecommerce: [
      "Catálogo de productos con filtrado y búsqueda",
      "Exposición de electrónicos reacondicionados",
      "Indicadores de condición del producto",
      "Funcionalidad de carrito de compras",
      "Integración de pagos Stripe"
    ],
    auth: [
      "Registro e inicio de sesión de usuarios",
      "Hash seguro de contraseñas",
      "Gestión de sesiones con NextAuth.js",
      "Control de acceso basado en roles"
    ],
    payments: [
      "Integración Stripe para pagos seguros",
      "Soporte para ATH Móvil (pagos móviles de Puerto Rico)",
      "Gestión de intenciones de pago",
      "Seguimiento de transacciones"
    ]
  };

  const techStack = [
    { category: "Framework", items: ["Next.js 15 con App Router"], color: "#000" },
    { category: "Estilos", items: ["Tailwind CSS"], color: "#06b6d4" },
    { category: "Base de Datos", items: ["SQLite con Prisma ORM"], color: "#2d3748" },
    { category: "Autenticación", items: ["NextAuth.js"], color: "#00c4a7" },
    { category: "Pagos", items: ["API de Stripe"], color: "#635bff" },
    { category: "UI Components", items: ["Iconos Lucide React"], color: "#f59e0b" },
    { category: "Lenguaje", items: ["TypeScript completo"], color: "#3178c6" }
  ];

  const projectStructure = [
    {
      folder: "app/",
      description: "Estructura principal de la aplicación",
      subfolders: [
        "api/ - Endpoints de la API",
        "auth/ - Páginas de autenticación", 
        "booking/ - Sistema de citas",
        "services/ - Información de servicios",
        "shop/ - Tienda e-commerce"
      ]
    },
    {
      folder: "lib/",
      description: "Configuraciones y utilidades",
      subfolders: ["stripe.ts - Configuración de Stripe"]
    },
    {
      folder: "prisma/",
      description: "Esquema de base de datos",
      subfolders: ["schema.prisma - Definición de modelos"]
    }
  ];

  const databaseSchema = [
    "Users: Cuentas de clientes y administradores",
    "Services: Servicios de reparación disponibles", 
    "Bookings: Citas de clientes",
    "Products: Artículos en venta",
    "Orders: Transacciones de compra",
    "OrderItems: Artículos individuales en órdenes"
  ];

  const apiEndpoints = [
    {
      category: "Authentication",
      endpoints: [
        "POST /api/auth/register - Registro de usuarios",
        "POST /api/auth/[...nextauth] - Endpoints de NextAuth.js"
      ]
    },
    {
      category: "Bookings", 
      endpoints: [
        "POST /api/bookings - Crear nueva cita",
        "GET /api/bookings - Obtener citas del usuario"
      ]
    },
    {
      category: "Products",
      endpoints: [
        "GET /api/products - Obtener todos los productos",
        "POST /api/products - Crear nuevo producto"
      ]
    },
    {
      category: "Payments",
      endpoints: [
        "POST /api/stripe/payment-intent - Crear intención de pago",
        "GET /api/stripe/payment-intent - Obtener estado del pago"
      ]
    }
  ];

  const setupSteps = [
    { command: "npm install", description: "Instalar dependencias" },
    { command: "npx prisma generate", description: "Generar cliente Prisma" },
    { command: "npx prisma db push", description: "Configurar la base de datos" },
    { command: "npm run dev", description: "Iniciar servidor de desarrollo" }
  ];

  return (
    <div style={{ backgroundColor: "#0a0f2c", color: "white", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section className="py-5" style={{
        background: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(19,26,51,0.6))",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center"
      }}>
        <Container>
          <div className="text-center" data-aos="fade-up">
            <div className="mb-4">
              <Link to="/about" className="text-light text-decoration-none">
                <i className="bi bi-arrow-left me-2"></i>Back to Portfolio
              </Link>
            </div>
            
            <div className="mb-4">
              <span style={{ fontSize: "4rem" }}>🔧</span>
            </div>
            
            <Badge bg="primary" className="px-4 py-2 mb-3">
              <i className="bi bi-tools me-2"></i>REPARACIÓN DE ELECTRÓNICOS
            </Badge>
            
            <h1 style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: "400",
              textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
              marginBottom: "2rem"
            }}>
              <span style={{ color: "#6366f1" }}>iRepair</span>
            </h1>
            
            <p className="lead mb-4" style={{
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              maxWidth: "800px",
              margin: "0 auto 2rem",
              color: "#ccc"
            }}>
              Una aplicación web completa para un negocio de reparación de electrónicos que incluye 
              sistema de citas, venta de productos y gestión de clientes para Puerto Rico.
            </p>
            
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button
                variant="primary"
                href="https://irepairbyzewo.netlify.app"
                target="_blank"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-globe me-2"></i>
                Ver Aplicación
              </Button>
              <Button
                variant="outline-light"
                href="https://github.com/senkZEWOnef/iRepair"
                target="_blank"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-github me-2"></i>
                Ver Código
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Overview */}
      <section className="py-5" style={{ background: "rgba(14,19,55,0.5)" }}>
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#6366f1"
          }} data-aos="fade-up">
            Características Principales
          </h2>
          
          <Row className="g-4">
            <Col lg={6}>
              <Card className="h-100 border-0" style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(99,102,241,0.3)"
              }} data-aos="fade-up" data-aos-delay="100">
                <Card.Body className="p-4">
                  <h4 style={{ color: "#6366f1" }} className="mb-3">
                    <i className="bi bi-house me-2"></i>Página de Inicio
                  </h4>
                  <ul className="list-unstyled">
                    {features.homepage.map((feature, index) => (
                      <li key={index} className="mb-2 text-light">
                        <i className="bi bi-check-circle-fill me-2" style={{ color: "#6366f1" }}></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6}>
              <Card className="h-100 border-0" style={{
                background: "linear-gradient(135deg, rgba(34,197,94,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(34,197,94,0.3)"
              }} data-aos="fade-up" data-aos-delay="200">
                <Card.Body className="p-4">
                  <h4 className="text-success mb-3">
                    <i className="bi bi-calendar-check me-2"></i>Sistema de Citas
                  </h4>
                  <ul className="list-unstyled">
                    {features.booking.map((feature, index) => (
                      <li key={index} className="mb-2 text-light">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Row className="g-4 mt-2">
            <Col lg={4}>
              <Card className="h-100 border-0" style={{
                background: "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(245,158,11,0.3)"
              }} data-aos="fade-up" data-aos-delay="300">
                <Card.Body className="p-4">
                  <h4 className="text-warning mb-3">
                    <i className="bi bi-shop me-2"></i>Tienda E-commerce
                  </h4>
                  <ul className="list-unstyled">
                    {features.ecommerce.map((feature, index) => (
                      <li key={index} className="mb-2 text-light">
                        <i className="bi bi-check-circle-fill text-warning me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4}>
              <Card className="h-100 border-0" style={{
                background: "linear-gradient(135deg, rgba(239,68,68,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(239,68,68,0.3)"
              }} data-aos="fade-up" data-aos-delay="400">
                <Card.Body className="p-4">
                  <h4 className="text-danger mb-3">
                    <i className="bi bi-shield-lock me-2"></i>Autenticación
                  </h4>
                  <ul className="list-unstyled">
                    {features.auth.map((feature, index) => (
                      <li key={index} className="mb-2 text-light">
                        <i className="bi bi-check-circle-fill text-danger me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4}>
              <Card className="h-100 border-0" style={{
                background: "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(139,92,246,0.3)"
              }} data-aos="fade-up" data-aos-delay="500">
                <Card.Body className="p-4">
                  <h4 style={{ color: "#8b5cf6" }} className="mb-3">
                    <i className="bi bi-credit-card me-2"></i>Procesamiento de Pagos
                  </h4>
                  <ul className="list-unstyled">
                    {features.payments.map((feature, index) => (
                      <li key={index} className="mb-2 text-light">
                        <i className="bi bi-check-circle-fill me-2" style={{ color: "#8b5cf6" }}></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Tech Stack */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#ffd700"
          }} data-aos="fade-up">
            Stack Tecnológico
          </h2>
          
          <Row className="g-4">
            {techStack.map((tech, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 border-0 text-center" style={{
                  background: "linear-gradient(135deg, rgba(19,26,51,0.9), rgba(14,19,55,0.8))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,215,0,0.2)"
                }} data-aos="fade-up" data-aos-delay={index * 100}>
                  <Card.Body className="p-4">
                    <h5 className="text-warning mb-3">{tech.category}</h5>
                    {tech.items.map((item, itemIndex) => (
                      <Badge 
                        key={itemIndex} 
                        style={{ backgroundColor: tech.color, color: "white" }}
                        className="me-2 mb-2 px-3 py-2"
                      >
                        {item}
                      </Badge>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Setup Instructions */}
      <section className="py-5" style={{ background: "rgba(14,19,55,0.5)" }}>
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#22c55e"
          }} data-aos="fade-up">
            Comenzando
          </h2>
          
          <Row className="g-4">
            <Col lg={6}>
              <Card className="h-100 border-0" style={{
                background: "linear-gradient(135deg, rgba(34,197,94,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(34,197,94,0.3)"
              }} data-aos="fade-up" data-aos-delay="100">
                <Card.Body className="p-4">
                  <h4 className="text-success mb-4">
                    <i className="bi bi-list-check me-2"></i>Prerrequisitos
                  </h4>
                  <ul className="list-unstyled">
                    <li className="mb-2 text-light">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Node.js 18+
                    </li>
                    <li className="mb-2 text-light">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      npm o yarn
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6}>
              <Card className="h-100 border-0" style={{
                background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(59,130,246,0.3)"
              }} data-aos="fade-up" data-aos-delay="200">
                <Card.Body className="p-4">
                  <h4 className="text-primary mb-4">
                    <i className="bi bi-gear me-2"></i>Instalación
                  </h4>
                  {setupSteps.map((step, index) => (
                    <div key={index} className="mb-3">
                      <div className="p-3 rounded" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <code className="text-light">{step.command}</code>
                      </div>
                      <small className="text-muted">{step.description}</small>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Database Schema */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#8b5cf6"
          }} data-aos="fade-up">
            Esquema de Base de Datos
          </h2>
          
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0" style={{
                background: "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(139,92,246,0.3)"
              }} data-aos="fade-up">
                <Card.Body className="p-5">
                  <p className="text-light mb-4">La aplicación usa Prisma con SQLite para gestión de datos:</p>
                  <Row className="g-3">
                    {databaseSchema.map((schema, index) => (
                      <Col md={6} key={index}>
                        <div className="d-flex align-items-center mb-2">
                          <i className="bi bi-database-fill me-3" style={{ color: "#8b5cf6" }}></i>
                          <span className="text-light">{schema}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* API Endpoints */}
      <section className="py-5" style={{ background: "rgba(14,19,55,0.5)" }}>
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#f59e0b"
          }} data-aos="fade-up">
            API Endpoints
          </h2>
          
          <Row className="g-4">
            {apiEndpoints.map((api, index) => (
              <Col lg={6} key={index}>
                <Card className="h-100 border-0" style={{
                  background: "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(14,19,55,0.8))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(245,158,11,0.3)"
                }} data-aos="fade-up" data-aos-delay={index * 100}>
                  <Card.Body className="p-4">
                    <h5 className="text-warning mb-3">{api.category}</h5>
                    <ul className="list-unstyled">
                      {api.endpoints.map((endpoint, endpointIndex) => (
                        <li key={endpointIndex} className="mb-2">
                          <code className="text-light" style={{ backgroundColor: "rgba(0,0,0,0.3)", padding: "4px 8px", borderRadius: "4px" }}>
                            {endpoint}
                          </code>
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Payment Integration */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5" style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2.5rem",
            color: "#ef4444"
          }} data-aos="fade-up">
            Integración de Pagos
          </h2>
          
          <Row className="g-4">
            <Col lg={6}>
              <Card className="h-100 border-0" style={{
                background: "linear-gradient(135deg, rgba(239,68,68,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(239,68,68,0.3)"
              }} data-aos="fade-up" data-aos-delay="100">
                <Card.Body className="p-4 text-center">
                  <div className="mb-3">
                    <i className="bi bi-stripe" style={{ fontSize: "3rem", color: "#635bff" }}></i>
                  </div>
                  <h4 className="text-danger mb-3">Stripe</h4>
                  <p className="text-light">
                    La aplicación está configurada para trabajar con Stripe para pagos internacionales. 
                    Actualiza las claves de Stripe en tus variables de entorno.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6}>
              <Card className="h-100 border-0" style={{
                background: "linear-gradient(135deg, rgba(16,185,129,0.1), rgba(14,19,55,0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(16,185,129,0.3)"
              }} data-aos="fade-up" data-aos-delay="200">
                <Card.Body className="p-4 text-center">
                  <div className="mb-3">
                    <i className="bi bi-phone" style={{ fontSize: "3rem", color: "#10b981" }}></i>
                  </div>
                  <h4 className="text-success mb-3">ATH Móvil</h4>
                  <p className="text-light">
                    Para clientes de Puerto Rico, la integración de ATH Móvil está preparada. 
                    Necesitarás registrarte con ATH Móvil y obtener credenciales de API.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{
        background: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(10,15,44,0.9))"
      }}>
        <Container>
          <div className="text-center" data-aos="fade-up">
            <h2 className="mb-4" style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "2.5rem"
            }}>
              ¿Necesitas una Aplicación Completa para tu Negocio de Reparaciones?
            </h2>
            <p className="lead mb-4 text-light">
              Experimenta la funcionalidad completa con sistema de citas, e-commerce y gestión de clientes
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button
                variant="primary"
                href="https://irepairbyzewo.netlify.app"
                target="_blank"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-tools me-2"></i>
                Ver Aplicación
              </Button>
              <Button
                variant="outline-light"
                href="/engineer#contact"
                className="px-5 py-3"
                size="lg"
              >
                <i className="bi bi-chat-dots me-2"></i>
                Discutir Tu Proyecto
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default IRepairProject;