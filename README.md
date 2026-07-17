# PrevenProfe CMS

Esta versión incorpora una web pública y un panel de administración en `/admin/` basado en Decap CMS.

## Importante
El panel necesita que el proyecto esté conectado a un repositorio GitHub. No funciona con un despliegue manual aislado porque las publicaciones deben guardarse en algún lugar permanente.

## Preparación
1. Crea en GitHub un repositorio llamado `prevenprofe`.
2. Sube todo el contenido de esta carpeta a ese repositorio.
3. En `admin/config.yml`, sustituye `TU_USUARIO_GITHUB/prevenprofe` por tu usuario y repositorio.
4. Conecta ese repositorio a Netlify mediante “Importar un repositorio Git”.
5. Sustituye `TU-SITIO` por el subdominio real de Netlify.
6. Configura la autenticación GitHub/OAuth para Decap CMS siguiendo la documentación oficial.
7. Entra en `https://tu-sitio.netlify.app/admin/`.

## Contenidos editables
- Recursos docentes
- Vídeos, pódcast, artículos y noticias
- Proyectos
- Subida de archivos a `/uploads`

## Nota técnica
Netlify ha marcado Git Gateway como obsoleto. Por eso esta plantilla utiliza el backend directo de GitHub.
