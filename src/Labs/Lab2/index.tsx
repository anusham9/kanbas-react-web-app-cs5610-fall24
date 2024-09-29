import BootstrapForms from './BootstrapForms';
import BootstrapGrids from './BootstrapGrids';
import BootstrapLists from './BootstrapLists';
import BootstrapNavigation from './BootstrapNavigation';
import BootstrapNavigatino from './BootstrapNavigation';
import BootstrapTables from './BootstrapTables';
import Dimensions from './Dimensions';
import Flex from './Flex';
import Float from './Float';
import GridLayout from './GridLayout';
import Position from './Positions';
import ScreenSizeLabel from './ScreenSizeLabel';
import Zindex from './Zindex';
import './index.css';
export default function Lab2() {
  return (
    <div id="wd-lab2" className="container">
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
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here's another paragraph using a different ID and a different look and
          feel
        </p>
      </div>
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph's red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
            </p>
          </div>
        </div>
      </div>
      <h1
        style={{
          backgroundColor: 'yellow',
        }}
      >
        Block vs inline elements
      </h1>
      <p
        style={{
          padding: '10px',
          backgroundColor: 'blue',
          color: 'white',
        }}
      >
        Headings ... width
      </p>
      Normal text renders inline
      <br />
      <br />
      <span
        style={{
          backgroundColor: 'red',
          color: 'white',
          borderStyle: 'solid',
          borderWidth: '10px',
          borderColor: 'green',
          paddingLeft: '10px',
          paddingTop: '10px',
        }}
      >
        Span elements
      </span>
      <span
        style={{
          backgroundColor: 'red',
          color: 'white',
          border: 'solid 10px green',
          paddingLeft: '10px',
          paddingTop: '10px',
        }}
      >
        render inline
      </span>
      with the rest of the content
      <p className="border-fat border-red border-solid">
        {' '}
        Solid fat red border
      </p>
      <p className="border-thin border-blue border-dashed">
        Dashed thin blue border
      </p>
      <p
        className="wd-rounded-corners-bottom 
     wd-border-thin wd-border-blue wd-border-solid 
     wd-padding-fat"
      >
        Rounded corners at the bottom
      </p>
      <p
        className="wd-rounded-corners-all-around 
     wd-border-thin wd-border-blue wd-border-solid 
     wd-padding-fat"
      >
        Rounded corners all around
      </p>
      <p
        className="wd-rounded-corners-inline 
     wd-border-thin wd-border-blue wd-border-solid 
     wd-padding-fat"
      >
        Different rounded corners
      </p>
      <Dimensions />
      <Position />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <BootstrapGrids />
      <ScreenSizeLabel />
      <BootstrapTables />
      <BootstrapLists />
      <BootstrapForms />
      <BootstrapNavigation />
    </div>
  );
}
