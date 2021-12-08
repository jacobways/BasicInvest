const router = async () => {
  const routes = [
      { path: "/", view: () => console.log("Viewing Home") },
      { path: "/korean", view: () => console.log("Viewing Korean") },
      { path: "/usa", view: () => console.log("Viewing USA") },
      { path: "/global", view: () => console.log("Viewing Global") },
  ];
}