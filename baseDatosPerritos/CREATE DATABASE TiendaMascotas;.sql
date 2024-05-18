CREATE DATABASE TiendaMascotas;





CREATE TABLE raza(
    id SERIAL PRIMARY KEY NOT NULL,
    nombre VARCHAR(50) NOT NULL   
);


CREATE TABLE configuraciones(
    id SERIAL PRIMARY KEY NOT NULL,
    numero_whatsapp INT NOT NULL,
    numero_telefono INT NOT NULL,
    CONSTRAINT fk_mascotas  
        FOREIGN KEY(idmascotas_id) 
        REFERENCES mascotas(id)

);


CREATE TABLE mascotas(
    id SERIAL PRIMARY KEY NOT NULL,
    id_raza INT NOT NULL, 
    name VARCHAR(200) NOT NULL,
    description varchar(300),
    stock VARCHAR(50),
    imagen VARCHAR(1000) NOT NULL,
    precio INT NOT NULL,
    descuento INT NOT NULL,
    status varchar(15) NOT NUll,
    CONSTRAINT fk_raza 
        FOREIGN KEY(id_raza) 
            REFERENCES raza(id)
);


CREATE TABLE caracteristicas(
    id SERIAL PRIMARY KEY NOT NULL,
    id_mascotas INT NOT NULL,
    peso VARCHAR(50) NOT NULL,
    estatura_promedio VARCHAR(50),
    vida VARCHAR(50) NOT NULL,
    actividad_fisica VARCHAR(50),
    clima_recomendado VARCHAR(50),
    caracter VARCHAR(50) NOT NULL,   
    CONSTRAINT fk_mascotas
    FOREIGN KEY(id_mascotas) 
        REFERENCES mascotas(id)
    

);






























create DATABASE TiendaDino;

create table Tienda(
    id serial primary key not null,
    name varchar(100) not null,
    status varchar(50) not null,
    dateRegister datetime not null

);

create table Juguetes(
    id serial primary key not null,
    name varchar(100) not null,
    image varchar(50) not null,
    description varchar (300),
    precio int not null,
    descuento int null,
    stock int not null,
    telefono int null,
    whtssap int null,
    status varchar(10) not null,
    dateRegister datetime not null,
    idTienda int not null,
    CONSTRAINT fk_Tienda 
       FOREIGN KEY( idTienda) 
       REFERENCES Tienda(id)  

);
create table JuguetesDetalle(
    id serial primary key not null, 
    idJuguetes int not null,
    alto int,
    ancho int,
    profundidad varchar(20),
    color varchar(20),
    material varchar(20),
    peso int,
    sonidos int,
    edad_minima_recomendada int not null,
    CONSTRAINT fk_Juguetes
       FOREIGN KEY( idJuguetes) 
       REFERENCES Juguetes(id)
    
);
