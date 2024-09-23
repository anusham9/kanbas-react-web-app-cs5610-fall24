import './index.css';
export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it's very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam
        veritatis necessitatibus consequatur quae nesciunt nobis neque porro
        facilis aperiam corrupti velit cupiditate odit sed maxime ipsa, suscipit
        tenetur incidunt.
      </p>
      <div id="wd-css-colors">
        <h2>Colors</h2>
        <h3 className="wd-fg-color-blue">Foreground color</h3>
        <p className="wd-fg-color-red">
          The text in this paragraph is red but
          <span className="wd-fg-color-green">this text is green</span>
        </p>
        <div id="wd-css-background-colors">
          <h3 className="wd-bg-color-blue wd-fg-color-white">
            Background color
          </h3>
          <p className="wd-bg-color-red wd-fg-color-black">
            This background of this paragraph is red but
            <span
              className="wd-bg-color-green
                     wd-fg-color-white"
            >
              the background of this text is green and the foreground white
            </span>
          </p>
        </div>
      </div>
      <h1>Block vs inline elements</h1>
      <p>Headings and paragraphs are block elements. Width is parent's width</p>
      Normal text renders inline
      <br />
      <br />
      <span>Span elements</span>
      <span>render inline</span> with the
    </div>
  );
}
