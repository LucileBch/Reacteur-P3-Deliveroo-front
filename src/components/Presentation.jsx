const Presentation = ({ datas }) => {
  return (
    <section className="container">
      <div>
        <h1>{datas.header.title}</h1>
        <>
          {datas.header.headerTags.lines.map((line) => {
            return (
              <div key={line.key}>
                {line.spans.map((span) => {
                  return <p key={span.key}> {span.text ? span.text : null}</p>;
                })}
              </div>
            );
          })}

          {datas.header.headerInfoRows.map((element) => {
            return (
              <div key={element.key}>
                {element.lines.map((line) => {
                  return (
                    <div key={line.key}>
                      {line.spans.map((span) => {
                        return (
                          <p key={span.key}> {span.text ? span.text : null}</p>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
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
