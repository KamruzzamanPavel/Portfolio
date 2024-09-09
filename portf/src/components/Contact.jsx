const Contact = () => {
  return (
    <section id="contacts" className="my-12">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        You can reach me via email at:{" "}
        <a
          href="mailto:example@email.com"
          className="text-blue-500 dark:text-yellow-500"
        >
          example@email.com
        </a>
      </p>
    </section>
  );
};

export default Contact;
