# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#For deploy en githut - npm run deploy

Funcionamiento del Search:
cada vez que el usuario escribe algo en el input de búsqueda, se llama a handleSearchChange y se actualiza el estado de búsqueda llamando a la función onSearch proporcionada por la prop onSearch. Esto permite que el componente padre (ItemListContainer) actualice su propio estado con el nuevo término de búsqueda y, a su vez, pase ese término de búsqueda al componente Item para filtrar los productos mostrados.