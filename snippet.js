function login(username, password) {
    // Verifica que los datos de inicio de sesión sean correctos
    if (username === 'Admin' && password === '123456') {
      // Si los datos son correctos, devuelva "Bienvenido a la aplicación"
      return 'Bienvenido a la aplicación';
    }
    else {
      // Si los datos no son correctos, devuelva "Usuario o contraseña incorrectos"
      return 'Usuario o contraseña incorrectos';
    }
  }