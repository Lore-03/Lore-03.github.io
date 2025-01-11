-- Insertar compañías
INSERT INTO companies (name, nit, phone, address, email) VALUES
('TechCorp', '900123456-7', '601234567', 'Calle 123 #45-67', 'contact@techcorp.com'),
('DevSolutions', '901234567-8', '601234568', 'Carrera 89 #12-34', 'info@devsolutions.com'),
('InnovateTech', '902345678-9', '601234569', 'Avenida 56 #78-90', 'hello@innovatetech.com');

-- Insertar proyectos
INSERT INTO projects (company_id, name, description) VALUES
(1, 'E-commerce Platform', 'Plataforma de comercio electrónico'),
(2, 'CRM System', 'Sistema de gestión de clientes'),
(2, 'Task Manager', 'Aplicación de gestión de tareas');

-- Insertar historias de usuario para cada proyecto
INSERT INTO user_stories (project_id, title, description) VALUES
-- Para E-commerce Platform
(1, 'Carrito de Compras', 'Implementar funcionalidad de carrito de compras'),
(1, 'Catálogo de Productos', 'Mostrar listado de productos disponibles'),
(1, 'Proceso de Pago', 'Implementar checkout y procesamiento de pagos'),
-- Para CRM System
(2, 'Gestión de Contactos', 'CRUD de contactos y clientes'),
(2, 'Pipeline de Ventas', 'Seguimiento de oportunidades de venta'),
(2, 'Dashboard de Métricas', 'Visualización de KPIs principales'),
-- Para Task Manager
(3, 'Creación de Tareas', 'Permitir crear y asignar tareas'),
(3, 'Calendario', 'Vista de calendario de tareas'),
(3, 'Notificaciones', 'Sistema de notificaciones de tareas');

-- Insertar tickets de ejemplo con diferentes estados
INSERT INTO tickets (user_story_id, title, description, status) VALUES
(1, 'Crear interfaz del carrito', 'Diseñar e implementar UI del carrito', 'EN_PROCESO'),
(1, 'Implementar lógica de agregar productos', 'Desarrollar funcionalidad de agregar items', 'EN_PROCESO'),
(1, 'Persistencia del carrito', 'Guardar estado del carrito en base de datos', 'FINALIZADO'),
(1, 'Validaciones de stock', 'Implementar validaciones de inventario', 'FINALIZADO'),
(2, 'Diseño de catálogo', 'Crear layout del catálogo', 'EN_PROCESO'),
(2, 'Filtros de búsqueda', 'Implementar filtros de productos', 'EN_PROCESO'),
(2, 'Ordenamiento de productos', 'Agregar opciones de ordenamiento', 'FINALIZADO'),
(2, 'Paginación', 'Implementar paginación del catálogo', 'FINALIZADO');