const Presentation = ({ datas }) => {
  return (
    <section className="container">
      <div>
        <h1>{datas.name}</h1>
        <p>{datas.description}</p>
      </div>
      <div>
        <img
          className="presentation-img"
          src={datas.picture}
          alt="photo d'un brunch"
        />
      </div>
    </section>
  );
};

export default Presentation;
