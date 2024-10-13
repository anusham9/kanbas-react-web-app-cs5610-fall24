import AddingAndRemovingToFromArrays from './AddingAndRemovingToFromArrays';
import ArrayIndexAndLength from './ArrayIndexAndLength';
import ArrowFunctions from './ArrowFunctions';
import BooleanVariables from './BooleanVariables';
import ConditionalOutputIfElse from './ConditionalOutputIfElse';
import ConditionalOutputInline from './ConditionalOutputInline';
import FilterFunction from './FilterFunction';
import FindFunction from './FindFunction';
import ForLoops from './ForLoops';
import House from './House';
import ImpliedReturns from './ImpliedReturns';
import LegacyFunctions from './LegacyFunctions';
import MapFunction from './MapFunction';
import SimpleArrays from './SimpleArrays';
import TemplateLiterals from './TemplateLiteratals';
import TernaryOperator from './TernaryOperator';
import VariableTypes from './VariableTypes';
import VariablesAndConstants from './VariablesAndConstants';
import JsonStringify from './JsonStringify';
import TodoList from './todos/TodoList';
import Spreading from './Spreading';
import DestructingImports from './DestructringImports';
import Destructing from './Destructring';
import Classes from './Classes';
import Styles from './Styles';
import Add from './Add';
import Square from './Square';
import Highlight from './Highlight';
import PathParameters from './PathParameters';

export default function Lab3() {
  console.log('Hello World!');
  return (
    <div id="wd-lab3">
      <h3>Lab 3</h3>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <TernaryOperator />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
      <LegacyFunctions />
      <ArrowFunctions />
      <ImpliedReturns />
      <TemplateLiterals />
      <SimpleArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FilterFunction />
      <House />
      <JsonStringify />
      <TodoList />
      <Spreading />
      <Destructing />
      <DestructingImports />
      <Classes />
      <Styles />
      <Add a={2} b={3} />
      <h2>Square of 4</h2>
      <Square>4</Square>
      <br />
      <h2>Square of 8</h2>
      <Square>8</Square>
      <hr />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </Highlight>
      <br />
      <PathParameters />
      <br />
      <br />
      <br />
    </div>
  );
}
