"use client"

function NewsletterForm() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el formulario, como enviar los datos a una API
  };

  return (
    <form onSubmit={handleFormSubmit} className="bg-[#f9f9f9] rounded-2xl w-80 h-[175px] flex flex-col justify-center items-center gap-4 px-6">
      <p className="text-blackHtas font-medium">
        ¡Suscríbete y recibe las novedades!
      </p>
      <input
        type="text"
        name="emailNewsletter"
        placeholder="Ingresa tu e-mail aquí"
        className="w-full p-1 px-4 border border-gray-400 rounded placeholder-gray-400 text-blackHtas focus:border-violetHtas focus:outline-none "
      />
      <button
        type="submit" // Cambia el tipo del botón a "submit"
        className="w-full h-8 bg-violetHtas rounded font-semibold text-sm shadow-gray-400 shadow-md"
      >
        SUSCRÍBETE
      </button>
    </form>
  );
}

export default NewsletterForm;
