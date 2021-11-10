const socket = io();

socket.on("message_back", (data) => {
  console.log(data);
  render(data);


 
});
 socket.emit("message_client", "Gracias por la conexion soy el cliente");


 const render = (data) => {
    let html = data.map((x) => {
      return ` 
          <tr> <td>${x.producto}</td> <td>${x.precio}</td> <td></td></tr>
      `;
    }).join(" ");
  
    document.querySelector("#caja").innerHTML = html;
  };

  const addInfo = () => {
    let dataObj = {
      producto: document.querySelector("#pr").value,
      precio: document.querySelector("#precio").value,
    
    };
  
    socket.emit("dataMsn", dataObj);
    document.querySelector("#msn").value = "";
    return false;
  };