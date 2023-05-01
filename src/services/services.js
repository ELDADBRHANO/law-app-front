export const fetchServices = async () => {
  return await fetch("https://law-server.onrender.com/api/services")
    .then((res) => res.json())
    .then((res) => console.log(res));

};
