const Presentation = ({ datas }) => {
  return (
    <section className="container">
      <div>
        <h1>{datas.header.title}</h1>
        <>
          {datas.header.headerTags.lines.map((line) => {
            return (
              <>
                {line.spans.map((span) => {
                  return <p> {span.text ? span.text : null}</p>;
                })}
              </>
            );
          })}
          {datas.header.headerInfoRows.map((element) => {
            return (
              <>
                {element.lines.map((line) => {
                  return (
                    <>
                      {line.spans.map((span) => {
                        return <p> {span.text ? span.text : null}</p>;
                      })}
                    </>
                  );
                })}
              </>
            );
          })}
        </>

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
