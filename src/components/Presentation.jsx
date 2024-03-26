const Presentation = ({ datas }) => {
  return (
    <section className="container">
      <div>
        <h1>{datas.header.title}</h1>
        <p>{datas.meta.metatags.description}</p>
      </div>
      <div>
        <img
          className="presentation-img"
          src={datas.header.image.url}
          alt={datas.header.image.altText}
        />
      </div>
    </section>
  );
};

export default Presentation;
