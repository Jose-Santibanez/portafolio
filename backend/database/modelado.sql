--\c postgres;
-- DROP DATABASE portafolioWeb;


--CREATE DATABASE portafolioWeb;



--CREATE SCHEMA IF NOT EXISTS portfolio AUTHORIZATION portafolio_user;
--SET search_path TO portfolio;

-- SET CLIENT_ENCODING TO 'UTF8';
CREATE DATABASE portafolio;

\c portafolio

CREATE TABLE usuarios (  -- no se almacenan password aqui
    id SERIAL PRIMARY KEY,
    email VARCHAR(150) UNIQUE NOT NULL, -- Identificador logico
    activo BOOLEAN NOT NULL DEFAULT TRUE, 
    fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE perfil_usuarios(
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    primer_nombre VARCHAR(100) ,
    segundo_nombre VARCHAR(100),
    titulo_profesional VARCHAR(150),
    descripcion TEXT,
    telefono VARCHAR(50),
    ubicacion VARCHAR(100),
    foto_perfil TEXT,
     CONSTRAINT fk_usuario
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE credenciales(
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    password_hash text,
    fecha_login TIMESTAMP,
    fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT fk_credenciales_usuarios FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE ON UPDATE CASCADE
    );

-- indices
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_profiles_user_id ON profiles(user_id);
CREATE INDEX idx_credentials_user_id ON credentials(user_id);

CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE NOT NULL,
    descripcion TEXT
);
CREATE TABLE proyectos (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    categoria_id INT,
    titulo VARCHAR(150) NOT NULL,
    descripcion TEXT,
    url_demo VARCHAR(255),
    url_github VARCHAR(255),
    imagen_destacada VARCHAR(255),
    fecha_publicacion DATE,
    tecnologias TEXT[],
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_usuario
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_categoria
        FOREIGN KEY (categoria_id) REFERENCES categorias(id)
        ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT unique_proyecto_usuario UNIQUE (usuario_id, titulo) 
    );
    
CREATE TABLE habilidades (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE NOT NULL,
    nivel VARCHAR(50) CHECK (nivel IN ('Básico', 'Intermedio', 'Avanzado')),
    tipo VARCHAR(50) -- Ej: Lenguaje, Framework, Herramienta
);
CREATE TABLE usuarios_habilidades (
    usuario_id INT NOT NULL,
    habilidad_id INT NOT NULL,
    PRIMARY KEY (usuario_id, habilidad_id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (habilidad_id) REFERENCES habilidades(id)
        ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE experiencias (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    cargo VARCHAR(100) NOT NULL,
    empresa VARCHAR(150),
    descripcion TEXT,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE,
    ubicacion VARCHAR(100),
    CONSTRAINT fk_usuario_experiencia
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE educaciones (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    institucion VARCHAR(150) NOT NULL,
    titulo VARCHAR(150),
    fecha_inicio DATE,
    fecha_fin DATE,
    descripcion TEXT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE redes_sociales (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    plataforma VARCHAR(100) NOT NULL, -- Ej: GitHub, LinkedIn, Instagram
    url VARCHAR(255) NOT NULL,
    icono VARCHAR(100),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE contactos (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha_recibo TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON DELETE CASCADE ON UPDATE CASCADE
);